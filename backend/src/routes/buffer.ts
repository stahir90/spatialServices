import express from "express";
import * as turf from "@turf/turf";

const bufferRouter = express.Router();

bufferRouter.get("/buffer", (req, res) => {
  const point = turf.point([-98.5795, 39.8283]);
  const buffer = turf.buffer(point, 5, { units: "kilometers" });

  res.json(buffer);
});

export default bufferRouter;
