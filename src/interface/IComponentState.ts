import { IVehicle } from "./IVehicle";

export interface IComponentState {
	loaded: Boolean,
	data: Array<IVehicle>,
	fullData: Array<IVehicle>
}