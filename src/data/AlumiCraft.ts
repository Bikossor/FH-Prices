import { IVehicle } from '../interface/IVehicle';
import { ForzaEditionBoost } from '../enum/ForzaEditionBoost';

export const AlumiCraft: Array<IVehicle> = [
    {
        key: '17',
        manufacturer: 'Alumi Craft',
        model: 'Class 10 Race Car',
        year: 2015,
        price: 100000
    },
    {
        key: '18',
        manufacturer: 'Alumi Craft',
        model: 'Class 10 Race Car',
        year: 2015,
        price: 350000,
        forzaEdition: true,
        forzaEditionBoost: ForzaEditionBoost.DestructionSkills
    },
];
