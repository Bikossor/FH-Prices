import { VehicleType } from "./VehicleType";

export type Vehicle = {
  Year: number;
  Manufacturer: string;
  Model: string;
  Type: VehicleType;
  Boost: string;
  Rarity: string;
  Price: number | null;
  Class: string;
  PI: number;
};
