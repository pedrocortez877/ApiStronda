import UserService from '../Services/UserService.js';

class LoginController {
  async login(req, res) {
    const data = req.body;

    const token = await UserService.login(data);

    if (!token) {
      return res.unauthorized({
        message: 'Acesso não autorizado',
      });
    }

    return res.ok({
      token,
    });
  }
}

export default new LoginController();
