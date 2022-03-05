import express from "express";
const videoRouter = express.Router();
const handleWatch = (req, res) => {
  return res.send("Watch");
};
const handleEdit = (req, res) => {
  return res.send("Edit Video");
};

videoRouter.get("/watch", handleWatch);
videoRouter.get("/edit", handleEdit);

export default videoRouter;
