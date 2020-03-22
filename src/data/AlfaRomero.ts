import { IVehicle } from '../interface/IVehicle';
import { ForzaEditionBoost } from '../enum/ForzaEditionBoost';

export const AlfaRomero: Array<IVehicle> = [
    {
        key: '7',
        manufacturer: 'Alfa Romero',
        model: 'Giulia Quadrifoglio',
        year: 2017,
        price: 120000
    },
    {
        key: '8',
        manufacturer: 'Alfa Romero',
        model: 'Giulia Quadrifoglio',
        year: 2016,
        price: 370000,
        forzaEdition: true,
        forzaEditionBoost: ForzaEditionBoost.EventInfluence
    },
    {
        key: '9',
        manufacturer: 'Alfa Romero',
        model: '4C',
        year: 2014,
        price: 74000
    },
    {
        key: '10',
        manufacturer: 'Alfa Romero',
        model: '8C Competizione',
        year: 2007,
        price: 300000
    },
    {
        key: '11',
        manufacturer: 'Alfa Romero',
        model: '8C Competizione',
        price: 550000,
        year: 2007,
        forzaEdition: true,
        forzaEditionBoost: ForzaEditionBoost.Credits
    },
    {
        key: '12',
        manufacturer: 'Alfa Romero',
        model: '33 Stradale',
        year: 1968,
        price: 10000000
    },
    {
        key: '13',
        manufacturer: 'Alfa Romero',
        model: 'Giulia Sprint GTA Stradale',
        year: 1965,
        price: 300000
    },
    {
        key: '14',
        manufacturer: 'Alfa Romero',
        model: 'Giulia TZ2',
        year: 1965,
        price: 2500000
    },
    {
        key: '15',
        manufacturer: 'Alfa Romero',
        model: 'P3',
        year: 1934,
        price: 10000000
    },
    {
        key: '16',
        manufacturer: 'Alfa Romero',
        model: 'Stelvio Quadrifoglio',
        year: 2018,
        price: 80000
    },
];