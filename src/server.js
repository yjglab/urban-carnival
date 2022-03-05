import express from "express";
import morgan from "morgan";
const app = express();
const logger = morgan("dev");
app.use(logger);
const globalRouter = express.Router();
const handleHome = (req, res) => {
  return res.send("Root. Home");
};
globalRouter.get("/", handleHome);

const userRouter = express.Router();
const handleEditUser = (req, res) => {
  return res.send("Edit User");
};
userRouter.get("/edit", handleEditUser);

const videoRouter = express.Router();
const handleWatchVideo = (req, res) => {
  return res.send("Watch");
};
videoRouter.get("/watch", handleWatchVideo);

app.use("/", globalRouter);
app.use("/user", userRouter);
app.use("/videos", videoRouter);

const handleListening = () => {
  console.log("===Listening OK");
};
app.listen(8080, handleListening);
