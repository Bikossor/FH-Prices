import { IVehicle } from '../interface/IVehicle';
import { ForzaEditionBoost } from '../enum/ForzaEditionBoost';

export const Caterham: Array<IVehicle> = [
	{
		key: 'Caterham-0',
		manufacturer: 'Caterham',
		model: 'Superlight R500',
		year: 2013,
		price: 82000
	},
	{
		key: 'Caterham-1',
		manufacturer: 'Caterham',
		model: 'Superlight R500',
		year: 2013,
        price: 332000,
        forzaEdition: true,
        forzaEditionBoost: ForzaEditionBoost.DriftSkills
	},
];
