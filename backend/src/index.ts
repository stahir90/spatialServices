import express from "express";
import bufferRouter from "./routes/buffer";

const app = express();
const port = 3001;

app.get("/", (req, res) => {
  res.send("Server is Live");
});

app.use("/api/", bufferRouter);

app.listen(port, () => {
  console.log("server is running");
});
