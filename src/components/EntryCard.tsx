import React from "react";
import { Card, CardContent, Typography } from "@material-ui/core";
import { VehicleType } from "../types/VehicleType";
import { getRarityColor, strVehicleType } from "../Utils";
import "./RarityColors.css";

type EntryCardProps = {
  manufacturer: string;
  model: string;
  year: number;
  price: number | null;
  type: VehicleType;
  rarity: string;
};

const currentFormatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  maximumFractionDigits: 0,
});

export default function EntryCard({
  manufacturer,
  model,
  year,
  price,
  type,
  rarity,
}: EntryCardProps) {
  return (
    <Card variant="outlined" style={{ margin: ".5rem 0", display: "flex", flexDirection: "row" }}>
      <CardContent style={{ display: "flex", flexDirection: "row", flex: 1 }}>
        <div style={{ display: "flex", alignItems: "center" }}>
          <i
            style={{
              marginRight: "1rem",
              fontSize: "1.2rem",
            }}
          >
            {year}
          </i>
        </div>
        <div style={{ flex: 1 }}>
          <div style={{ display: "flex", flexDirection: "row" }}>
            <Typography variant="h5" component="h2" style={{ flex: 1 }}>
              {manufacturer} {model}
            </Typography>
            <Typography variant="h5" component="h2">
              {price !== null ? currentFormatter.format(price) : "No price"}
            </Typography>
          </div>
          <div style={{ display: "flex", flexDirection: "row" }}>
            <Typography color="textSecondary" style={{ flex: 1 }}>
              {strVehicleType(type)}
            </Typography>
            <Typography color="textSecondary">{rarity}</Typography>
          </div>
        </div>
      </CardContent>
      <CardContent className={`rarity ${getRarityColor(rarity)}`}>

      </CardContent>
    </Card>
  );
}
