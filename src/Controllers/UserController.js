import UserService from '../Services/UserService';

class LoginController {
  async login(req, res) {
    const data = req.body;

    const token = await UserService.login(data);

    if (!token) {
      return res.status(401).json({
        message: 'Acesso não autorizado',
      });
    }

    return res.status(200).json({
      token,
    });
  }
}

export default new LoginController();
