import express from 'express';
import userService from '../service/user-service';

class UserController {
  async registration(req: express.Request, res: express.Response, next: express.NextFunction) {
    try {
      const { email, password } = req.body;
      const userData = await userService.registration(email, password);
      res.cookie('refreshToken', userData.refreshToken, {
        maxAge: 30 * 24 * 60 * 1000,
        httpOnly: true,
      });
      return res.json(userData);
    } catch (e) {
      console.log(e);
    }
  }

  async login(req: express.Request, res: express.Response, next: express.NextFunction) {
    try {
    } catch (e) {}
  }

  async logout(req: express.Request, res: express.Response, next: express.NextFunction) {
    try {
    } catch (e) {}
  }

  async refresh(req: express.Request, res: express.Response, next: express.NextFunction) {
    try {
    } catch (e) {}
  }

  async activate(req: express.Request, res: express.Response, next: express.NextFunction) {
    try {
    } catch (e) {}
  }

  async getUser(req: express.Request, res: express.Response, next: express.NextFunction) {
    try {
      res.send(['123', '456']);
    } catch (e) {}
  }
}

export default new UserController();
