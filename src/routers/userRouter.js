import express from "express";
import { edit, remove } from "../controllers/videoController";
const userRouter = express.Router();

userRouter.get("/edit", edit);
userRouter.get("/delete", remove);
export default userRouter;
