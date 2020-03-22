import { IVehicle } from '../interface/IVehicle';
import { ForzaEditionBoost } from '../enum/ForzaEditionBoost';

export const Bentley: Array<IVehicle> = [
    {
        key: 'Bentley-0',
        manufacturer: 'Bentley',
        model: 'Continental Supersports',
        year: 2017,
        price: 200000
    },
    {
        key: 'Bentley-1',
        manufacturer: 'Bentley',
        model: 'Bentayga',
        year: 2016,
        price: 180000
    },
    {
        key: 'Bentley-2',
        manufacturer: 'Bentley',
        model: 'Continental GT Speed',
        year: 2013,
        price: 242000
    },
    {
        key: 'Bentley-3',
        manufacturer: 'Bentley',
        model: 'Continental GT Speed',
        year: 2013,
        price: 492000,
        forzaEdition: true,
        forzaEditionBoost: ForzaEditionBoost.CleanSkills
    },
    {
        key: 'Bentley-4',
        manufacturer: 'Bentley',
        model: '4-1/2 Liter Supercharged',
        year: 1931,
        price: 10000000
    },
    {
        key: 'Bentley-5',
        manufacturer: 'Bentley',
        model: '8-Liter',
        year: 1931,
        price: 1500000
    },
];
