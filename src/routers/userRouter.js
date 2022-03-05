import express from "express";
const userRouter = express.Router();
const handleEdit = (req, res) => {
  return res.send("Edit User");
};
const handleDelete = (req, res) => {
  return res.send("Del User");
};
userRouter.get("/edit", handleEdit);
userRouter.get("/delete", handleDelete);
export default userRouter;
