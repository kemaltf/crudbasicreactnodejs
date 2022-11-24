// import express karena kita menggunakan express router
import express from "express";
// import controllernya
// yang didalam {method}
import { getUsers, getUserById, createUser, updateUser, deleteUser } from "../controller/UserController.js";
const router = express.Router();
// buat end point baru
router.get("/users", getUsers);
// tambah endpoint yg baru
router.get("/users/:id", getUserById);
// tambah endpoint yg baru
router.post("/users/", createUser);
// tambah endpoint yg baru
router.patch("/users/:id", updateUser);
// tambah endpoint yg baru
router.delete("/users/:id", deleteUser);
export default router;
