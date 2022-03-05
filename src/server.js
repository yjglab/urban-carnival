import express from "express";
import morgan from "morgan";
const app = express();
const logger = morgan("dev");
const handleHome = (req, res) => {
  return res.send("root");
};
const handleLogin = (req, res) => {
  return res.send("login");
};
app.use(logger);
app.get("/", handleHome);
app.get("/login", handleLogin);

const handleListening = () => {
  console.log("===Listening OK");
};
app.listen(8080, handleListening);
