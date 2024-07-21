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
