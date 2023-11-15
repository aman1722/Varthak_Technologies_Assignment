import connection from "./config/db";

const express = require("express");

const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.json());

app.listen(PORT, async () => {
  try {
    await connection;
    console.log("conneted to db!");
  } catch (error: any) {
    console.log("Unable to connect db!");
    console.log(error.message);
  }
  console.log(`Server is running on port ${PORT}`);
});
