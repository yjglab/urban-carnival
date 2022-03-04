import express from "express";
const app = express();

const handleHome = (req, res) => {
  return res.send("root");
};
const handleLogin = (req, res) => {
  return res.send("login");
};
const logger = (req, res, next) => {
  console.log(`${req.url}`);
  next();
};
app.use(logger);
app.get("/", handleHome);
app.get("/login", handleLogin);

const handleListening = () => {
  console.log("===Listening OK");
};
app.listen(8080, handleListening);
