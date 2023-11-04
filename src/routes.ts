import { Router } from "express";
import { CreateUserController } from "./controllers/addUserController";
import { ListUserController } from "./controllers/listUsersController";
import { DeleteUserController } from "./controllers/deleteUserController";
import { EditUserController } from "./controllers/editUserController";

const router = Router();

const createUser = new CreateUserController();
const listUsers = new ListUserController();
const deleteUser = new DeleteUserController();
const editUser = new EditUserController();

router.get("/", (req, res) => res.json("Bem vindo a API!"));
router.post("/user", createUser.handle);
router.get("/users", listUsers.handle);
router.delete("/user/:id", deleteUser.handle);
router.put("/user/:id", editUser.handle);

export default router;
