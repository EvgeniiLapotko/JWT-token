import jwt from 'jsonwebtoken';
import { Token } from '../models/token-model';

class TokenService {
  async generateTokens(payload: any) {
    const accessToken = jwt.sign(payload, process.env.JWT_ACCESS_SECRET || 'secretKey', {
      expiresIn: '30m',
    });

    const refreshToken = jwt.sign(payload, process.env.JWT_REFRESH_SECRET || 'secretKeyRF', {
      expiresIn: '30d',
    });

    return { accessToken, refreshToken };
  }

  async saveToken(userId: string, refreshToken: string) {
    const existingToken = await Token.findOne({ user: userId });
    if (existingToken) {
      existingToken.refreshToken = refreshToken;
      return existingToken.save();
    }

    const token = await Token.create({ refreshToken, user: userId });
    return token;
  }
}

export default new TokenService();
