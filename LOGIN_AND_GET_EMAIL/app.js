const express = require("express");
const app = express();
const dotenv = require("dotenv").config({ quiet: true });
const { dataBaseconnection } = require("./configurations/config");
const loginRouter = require("./Routers/LoginRouter");

// server port initlisation
const serverPort = process.env.serverPort || 8085;

app.use(express.urlencoded());
app.use(express.json())
// router middlerware
app.use("/auth", loginRouter);

// server listen
app.listen(serverPort, () => {
  console.log(
    `server is runing on the http://localhost:${process.env.serverPort}`,
  );
});
// data base connection
dataBaseconnection();
