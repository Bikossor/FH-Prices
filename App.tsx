import React from 'react';
import { View, TextInput, Text, FlatList, ScrollView, Button } from 'react-native';
import { IComponentProps } from 'interface/IComponentProps';
import { IComponentState } from 'interface/IComponentState';

import { Notifications } from 'expo';
import { ForzaEditionBoost } from './src/enum/ForzaEditionBoost';

export default class App extends React.Component<IComponentProps, IComponentState> {
	constructor(props: Readonly<IComponentProps>) {
		super(props);

		this.state = {
			loaded: false,
			data: [],
			fullData: [
				{
					key: '0',
					manufacturer: 'Abarth',
					model: '124 Spider',
					year: 2017,
					price: 43500
				},
				{
					key: '1',
					manufacturer: 'Abarth',
					model: '695 Biposto',
					year: 2016,
					price: 48000
				},
				{
					key: '2',
					manufacturer: 'Abarth',
					model: 'Fiat 131',
					year: 1980,
					price: 38000
				},
				{
					key: '3',
					manufacturer: 'Abarth',
					model: '595 esseesse',
					year: 1968,
					price: 35000
				},
				{
					key: '4',
					manufacturer: 'Acura',
					model: 'NSX',
					year: 2017,
					price: 170000
				},
				{
					key: '5',
					manufacturer: 'Acura',
					model: 'RSX Type-S',
					year: 2002,
					price: 25000
				},
				{
					key: '6',
					manufacturer: 'Acura',
					model: 'Integra Type-R',
					year: 2001,
					price: 25000
				},
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
				{
					key: '19',
					manufacturer: 'AMC',
					model: 'Gremlin X',
					year: 1973,
					price: 35000
				},
				{
					key: '20',
					manufacturer: 'AMC',
					model: 'Javelin AMX',
					year: 1971,
					price: 35000
				},
				{
					key: '21',
					manufacturer: 'AMC',
					model: 'Rebel "The Machine"',
					year: 1970,
					price: 250000
				},
				{
					key: '22',
					manufacturer: 'AMG Transport Dynamics',
					model: 'M12S Warthog CST',
					year: 2554,
					price: 850000
				},
				{
					key: '23',
					manufacturer: 'Apollo',
					model: 'Intensa Emozione',
					year: 2018,
					price: 1050000
				},
				{
					key: '24',
					manufacturer: 'Alpine',
					model: 'A110',
					year: 2017,
					price: 250000
				},
				{
					key: '25',
					manufacturer: 'Ariel',
					model: 'Nomad',
					year: 2016,
					price: 93000
				},
				{
					key: '26',
					manufacturer: 'Ariel',
					model: 'Atom 500 V8',
					year: 2013,
					price: 108000
				},
				{
					key: '27',
					manufacturer: 'Ascari',
					model: 'KZ1R',
					year: 2012,
					price: 240000
				},
				{
					key: '28',
					manufacturer: 'Aston Martin',
					model: 'DBS Superleggera',
					year: 2019,
					price: 250000
				},
				{
					key: '29',
					manufacturer: 'Aston Martin',
					model: 'Vantage',
					year: 2018,
					price: 430000
				},
				{
					key: '30',
					manufacturer: 'Aston Martin',
					model: 'DB11',
					year: 2017,
					price: 300000
				},
				{
					key: '31',
					manufacturer: 'Aston Martin',
					model: 'DB11 (Pre-Order Car)',
					year: 2017,
					price: 300000
				},
				{
					key: '32',
					manufacturer: 'Aston Martin',
					model: 'Vanquish Zagato Coupe',
					year: 2017,
					price: 250000
				},
				{
					key: '33',
					manufacturer: 'Aston Martin',
					model: 'Vulcan AMR Pro',
					year: 2017,
					price: 1500000
				},
				{
					key: '34',
					manufacturer: 'Aston Martin',
					model: 'Vantage GT12',
					year: 2016,
					price: 400000
				},
				{
					key: '35',
					manufacturer: 'Aston Martin',
					model: 'Vulcan',
					year: 2016,
					price: 1500000
				},
				{
					key: '36',
					manufacturer: 'Aston Martin',
					model: 'Vulcan',
					year: 2016,
					price: 1750000,
					forzaEdition: true,
					forzaEditionBoost: ForzaEditionBoost.CleanSkills
				},
				{
					key: '37',
					manufacturer: 'Aston Martin',
					model: 'V12 Vantage S',
					year: 2013,
					price: 240000
				},
				{
					key: '38',
					manufacturer: 'Aston Martin',
					model: 'Vanquish',
					year: 2012,
					price: 348000
				},
				{
					key: '39',
					manufacturer: 'Aston Martin',
					model: 'One-77',
					year: 2010,
					price: 1400000
				},
				{
					key: '40',
					manufacturer: 'Aston Martin',
					model: 'DB5',
					year: 1964,
					price: 800000
				},
				{
					key: '41',
					manufacturer: 'Aston Martin',
					model: 'DB4 GT Zagato',
					year: 1960,
					price: 500000
				},
				{
					key: '42',
					manufacturer: 'Aston Martin',
					model: 'DBR1',
					year: 1958,
					price: 10000000
				},
				{
					key: '43',
					manufacturer: 'ATS',
					model: 'GT',
					year: 2018,
					price: 250000
				},
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
			]
		};
	}

	filterCars = (text: string) => {
		var filteredData = this.state.fullData.filter(carItem => {
			return carItem.manufacturer.toLowerCase().includes(text.toLowerCase()) ||
				carItem.model.toLowerCase().includes(text.toLowerCase())
		}).sort((a, b) => {
			return b.price - a.price
		});

		this.setState({
			data: filteredData
		});
	}

	formatMoney = (price: number): string => {
		return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + " $";
	}

	openOptionModal = async () => {
		Notifications.presentLocalNotificationAsync({
			title: "Hallo Welt!",
			body: "Miau 🐱"
		});
	}

	render() {
		return (
			<View style={{ flex: 1, flexDirection: 'column' }}>
				<View style={{ width: '100%', height: 24, backgroundColor: '#000' }} />
				<View style={{ width: '100%', height: 64, backgroundColor: '#000', paddingHorizontal: 24, display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
					<TextInput
						style={{ height: 40, color: '#fff', borderColor: '#ccc', borderWidth: 1, paddingHorizontal: 16, borderRadius: 24, flex: 1 }}
						placeholder="Type here to search"
						onChangeText={this.filterCars}
						clearButtonMode="while-editing"
					/>
					<Button title="Options" onPress={this.openOptionModal} />
				</View>
				<ScrollView style={{ width: '100%', flex: 1 }}>
					<FlatList
						data={this.state.data}
						renderItem={({ item }) =>
							<View style={{ backgroundColor: item.forzaEdition ? "#ce93d8" : "#ccc", padding: 16, marginBottom: 8, display: 'flex', flexDirection: 'row' }}>
								<View style={{ display: 'flex', flexDirection: 'row', flex: 1 }}>
									<Text style={{ fontStyle: 'italic' }}>{item.year} </Text>
									<Text style={{ fontWeight: 'bold' }}>{item.manufacturer} </Text>
									<Text>{item.model} </Text>
									<Text>{item.forzaEdition ? "(FE)" : ""}</Text>
									<Text>{item.forzaEdition ? item.forzaEditionBoost : ""}</Text>
								</View>
								<View style={{ display: 'flex' }}>
									<Text>{this.formatMoney(item.price)}</Text>
								</View>
							</View>
						}
					/>
				</ScrollView>
			</View>
		);
	}
}