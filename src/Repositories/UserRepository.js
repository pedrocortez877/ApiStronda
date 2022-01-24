import Users from '../Models/Users.js';

class UserRepository {
  async getUser(data) {
    const { User, KeyAccess } = data;
    const user = Users.findOne({
      where: {
        User,
        KeyAccess,
      },
    });

    return user;
  }
}

export default new UserRepository();
