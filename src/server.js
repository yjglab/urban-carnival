import express from "express";
const app = express();

const handleHome = (req, res) => {
  return res.send("root");
};
const handleLogin = (req, res) => {
  return res.send("login");
};
app.get("/", handleHome);
app.get("/login", handleLogin);
const handleListening = () => {
  console.log("===Listening OK");
};
app.listen(8080, handleListening);
