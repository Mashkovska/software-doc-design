import UserModel from "../models/airbnb_user.js";
import { generateRandId } from "../utils.js";

export default class UserService {
  static fromCSVtoEntity(csvUser) {
    const values = csvUser.split(",");

    return {
      first_name: values[0],
      last_name: values[1],
      email_address: values[2],
      user_password: values[3],
      phone_number: values[4],
    };
  }

  static loadFileAndUploadToDB(firstIndex, lastIndex) {
    FileService.getUsers(firstIndex, lastIndex).then((users) => {
      const userService = typedi.Container.get(UserService);

      users.forEach((a) => {
        const user = UserService.fromCSVtoEntity(a);
        userService.create(user);
      });
    });
  }

  async getAll() {
    const foundUsers = await UserModel.findAll({
      order: [["id", "DESC"]],
    });

    return foundUsers;
  }

  async create(user) {
    const newUser = {
      id: generateRandId(),
      ...user,
    };

    const userRecord = await UserModel.create(newUser);

    return userRecord;
  }

  async update(userId, newValues) {
    const updatedUser = await UserModel.update(newValues, {
      where: { id: userId },
    });

    return updatedUser;
  }

  async delete(userId) {
    await UserModel.destroy({
      where: { id: userId },
    });
  }
}
