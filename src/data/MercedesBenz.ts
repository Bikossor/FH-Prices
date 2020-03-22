import { IVehicle } from '../interface/IVehicle';
import { ForzaEditionBoost } from '../enum/ForzaEditionBoost';

export const MercedesBenz: Array<IVehicle> = [
    {
        key: 'MercedesBenz-0',
        manufacturer: 'Mercedes-Benz',
        model: 'AMG CLK GTR',
        year: 1998,
        price: 2000000
    },
    {
        key: 'MercedesBenz-1',
        manufacturer: 'Mercedes-Benz',
        model: 'SL 65 AMG Black Series',
        year: 2009,
        price: 210000
    },
    {
        key: 'MercedesBenz-2',
        manufacturer: 'Mercedes-Benz',
        model: 'SL 65 AMG Black Series',
        year: 2009,
        price: 460000,
        forzaEdition: true,
        forzaEditionBoost: ForzaEditionBoost.DriftSkills
    },
];
