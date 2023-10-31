import express from "express";
import { create, get, login } from "../controller/user";
import { checkAuth } from "../auth/auth";

const userRouter = express.Router();

userRouter.post("/create", create);
userRouter.get("/login", login);
userRouter.get("/get", checkAuth, get);
userRouter.put("/update");
userRouter.put("/delete");

export default userRouter;
