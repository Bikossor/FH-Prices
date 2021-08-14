import { VehicleType } from "./types/VehicleType";

export const strVehicleType = (type: VehicleType) => {
  return [
    "Classic Muscle",
    "Classic Racers",
    "Classic Rally",
    "Classic Sports Cars",
    "Cult Cars",
    "Extreme Offroad",
    "Extreme Track Toys",
    "GT Cars",
    "Hot Hatch",
    "Hypercars",
    "Modern Muscle",
    "Modern Rally",
    "Modern Sports Cars",
    "Modern Super Cars",
    "Offroad",
    "Offroad Buggies",
    "Rally Monsters",
    "Rare Classics",
    "Retro Hot Hatch",
    "Retro Muscle",
    "Retro Rally",
    "Retro Saloons",
    "Retro Sports Cars",
    "Retro Super Cars",
    "Rods & Customs",
    "Sports Utility Heroes",
    "Super GT",
    "Super Hot Hatch",
    "Super Saloons",
    "Track Toys",
    "Trucks",
    "Vans & Utility",
    "Vintage Racers",
  ][type];
};

export const getRarityColor = (rarity: string) => {
  switch (rarity) {
    case "Common":
      return "common";
    case "Rare":
      return "rare";
    case "Epic":
      return "epic";
    case "Legendary":
      return "legendary";
    case "Forza Edition":
      return "forza-edition";
  }
};
