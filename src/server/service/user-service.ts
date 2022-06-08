import { User } from '../models/user-model';
import bcript from 'bcrypt';
import { v4 } from 'uuid';
import mailService from './mail-service';
import tokenService from './token-service';

class UserService {
  async registration(email: string, password: string) {
    const candidate = await User.findOne({ email });
    if (candidate) {
      throw new Error(`Пользователь с ${email} уже существует`);
    }
    const hashPassword = bcript.hash(password, 4);
    const activatedLink = v4();
    const user = await User.create({ email, hashPassword, activatedLink });
    await mailService.sendActivationMail(email, activatedLink);
    const tokens = await tokenService.generateTokens({
      email: user.email,
      id: user._id,
      activated: user.isActivated,
    });
    await tokenService.saveToken(user._id, tokens.refreshToken);

    return {
      ...tokens,
      user,
    };
  }
}

export default new UserService();
