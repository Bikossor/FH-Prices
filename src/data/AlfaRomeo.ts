import { IVehicle } from '../interface/IVehicle';
import { ForzaEditionBoost } from '../enum/ForzaEditionBoost';

export const AlfaRomeo: Array<IVehicle> = [
    {
        key: 'AlfaRomeo-0',
        manufacturer: 'Alfa Romeo',
        model: 'Giulia Quadrifoglio',
        year: 2017,
        price: 120000
    },
    {
        key: 'AlfaRomeo-1',
        manufacturer: 'Alfa Romeo',
        model: 'Giulia Quadrifoglio',
        year: 2016,
        price: 370000,
        forzaEdition: true,
        forzaEditionBoost: ForzaEditionBoost.EventInfluence
    },
    {
        key: 'AlfaRomeo-2',
        manufacturer: 'Alfa Romeo',
        model: '4C',
        year: 2014,
        price: 74000
    },
    {
        key: 'AlfaRomeo-3',
        manufacturer: 'Alfa Romeo',
        model: '8C Competizione',
        year: 2007,
        price: 300000
    },
    {
        key: 'AlfaRomeo-4',
        manufacturer: 'Alfa Romeo',
        model: '8C Competizione',
        price: 550000,
        year: 2007,
        forzaEdition: true,
        forzaEditionBoost: ForzaEditionBoost.Credits
    },
    {
        key: 'AlfaRomeo-5',
        manufacturer: 'Alfa Romeo',
        model: '33 Stradale',
        year: 1968,
        price: 10000000
    },
    {
        key: 'AlfaRomeo-6',
        manufacturer: 'Alfa Romeo',
        model: 'Giulia Sprint GTA Stradale',
        year: 1965,
        price: 300000
    },
    {
        key: 'AlfaRomeo-7',
        manufacturer: 'Alfa Romeo',
        model: 'Giulia TZ2',
        year: 1965,
        price: 2500000
    },
    {
        key: 'AlfaRomeo-8',
        manufacturer: 'Alfa Romeo',
        model: 'P3',
        year: 1934,
        price: 10000000
    },
    {
        key: 'AlfaRomeo-9',
        manufacturer: 'Alfa Romeo',
        model: 'Stelvio Quadrifoglio',
        year: 2018,
        price: 80000
    },
];