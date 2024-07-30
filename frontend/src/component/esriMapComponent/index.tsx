import React from "react";
import {
  ArcgisMap,
  ArcgisSearch,
  ArcgisLegend,
} from "@arcgis/map-components-react";
import "./index.css";

const EsriMapComponent: React.FC = () => {
  return (
    <ArcgisMap
      itemId="d5dda743788a4b0688fe48f43ae7beb9"
      center={[-98.5795, 39.8283]} // Longitude, Latitude for the geographical center of the contiguous United States
      zoom={4} // Adjust zoom level as needed
      onArcgisViewReadyChange={(event: any) => {
        console.log("MapView ready", event);
      }}
    >
      <ArcgisSearch position="top-right"></ArcgisSearch>
      <ArcgisLegend position="bottom-left"></ArcgisLegend>
    </ArcgisMap>
  );
};

export default EsriMapComponent;
