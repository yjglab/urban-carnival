import express from "express";
const app = express();
const handleListening = () => {
  console.log("===Listening OK");
};
app.listen(8080, handleListening);
