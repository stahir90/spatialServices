import express from "express";
import * as turf from "@turf/turf";

const app = express();
const port = 3001;

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.get("/buffer", (req, res) => {
  const point = turf.point([-98.5795, 39.8283]);
  const buffer = turf.buffer(point, 5, { units: "kilometers" });

  res.json(buffer);
});

app.listen(port, () => {
  console.log("server is running");
});
