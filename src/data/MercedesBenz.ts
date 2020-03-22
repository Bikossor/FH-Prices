import { IVehicle } from '../interface/IVehicle';
import { ForzaEditionBoost } from '../enum/ForzaEditionBoost';

export const MercedesBenz: Array<IVehicle> = [
    {
        key: '1000',
        manufacturer: 'Mercedes-Benz',
        model: 'AMG CLK GTR',
        year: 1998,
        price: 2000000
    },
    {
        key: '1010',
        manufacturer: 'Mercedes-Benz',
        model: 'SL 65 AMG Black Series',
        year: 2009,
        price: 210000
    },
    {
        key: '1020',
        manufacturer: 'Mercedes-Benz',
        model: 'SL 65 AMG Black Series',
        year: 2009,
        price: 460000,
        forzaEdition: true,
        forzaEditionBoost: ForzaEditionBoost.DriftSkills
    },
];
