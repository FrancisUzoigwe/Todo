import express from "express";
import { createTodo, viewAllTodo } from "../controller/todoController";
const router = express.Router();
router.route("/:userID/create").post(createTodo);
router.route("/all-todos").get(viewAllTodo);

export default router;
