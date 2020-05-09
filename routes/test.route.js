import express from "express";
import UserService from "../services/user.service.js";
import FileService from "../services/file.service.js";

const router = express.Router();

router.get("/", async (req, res, next) => {
  try {
    const fileContent = await FileService.getUsers(0, 8);

    const userService = new UserService();

    fileContent.forEach((line) => {
      const entity = UserService.fromCSVtoEntity(line);

      userService.create(entity);
    });

    return res.send(200);
  } catch (e) {
    next(e);
  }
});

export default router;