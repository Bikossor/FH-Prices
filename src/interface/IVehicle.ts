import { ForzaEditionBoost } from "enum/ForzaEditionBoost";

export interface IVehicle {
	key: string,
	manufacturer: string,
	model: string,
	year: number,
	price: number,
	forzaEdition?: Boolean,
	forzaEditionBoost?: ForzaEditionBoost
}