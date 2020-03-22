import { ForzaEditionBoost } from "enum/ForzaEditionBoost";

export interface IVehicle {
	key: string,
	manufacturer: string,
	model: string,
	price: number,
	forzaEdition?: Boolean,
	forzaEditionBoost?: ForzaEditionBoost
}