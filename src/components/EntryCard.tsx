import React from "react";
import { Card, CardContent, Typography } from "@material-ui/core";

type EntryCardProps = {
  manufacturer: string;
  model: string;
  year: number;
  price: number;
  type: string;
  rarity: string;
};

export default function EntryCard({
  manufacturer,
  model,
  year,
  price,
  type,
  rarity,
}: EntryCardProps) {
  return (
    <Card variant="outlined">
      <CardContent style={{ display: "flex", flexDirection: "row" }}>
        <div style={{ display: "flex", alignItems: "center" }}>
          <i
            style={{
              color: "rgba(0, 0, 0, 0.54)",
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
              {price} $
            </Typography>
          </div>
          <div style={{ display: "flex", flexDirection: "row" }}>
            <Typography color="textSecondary" style={{ flex: 1 }}>
              {type}
            </Typography>
            <Typography color="textSecondary">{rarity}</Typography>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
