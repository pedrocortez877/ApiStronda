import pkg from 'jsonwebtoken';

import UserRepository from '../Repositories/UserRepository.js';

const { sign } = pkg;

class UserService {
  async login(data) {
    const user = await UserRepository.getUser(data);

    if (!user) {
      return false;
    }

    const token = sign({}, process.env.JWT_SECRET, {});

    return token;
  }
}

export default new UserService();
