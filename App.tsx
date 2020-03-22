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
					price: 43500
				},
				{
					key: '1',
					manufacturer: 'Abarth',
					model: '695 Biposto',
					price: 48000
				},
				{
					key: '2',
					manufacturer: 'Abarth',
					model: 'Fiat 131',
					price: 38000
				},
				{
					key: '3',
					manufacturer: 'Abarth',
					model: '595 esseesse',
					price: 35000
				},
				{
					key: '4',
					manufacturer: 'Acura',
					model: 'NSX',
					price: 170000
				},
				{
					key: '5',
					manufacturer: 'Acura',
					model: 'RSX Type-S',
					price: 25000
				},
				{
					key: '6',
					manufacturer: 'Acura',
					model: 'Integra Type-R',
					price: 25000
				},
				{
					key: '7',
					manufacturer: 'Alfa Romero',
					model: 'Giulia Quadrifoglio',
					price: 120000
				},
				{
					key: '8',
					manufacturer: 'Alfa Romero',
					model: 'Giulia Quadrifoglio',
					price: 370000,
					forzaEdition: true,
					forzaEditionBoost: ForzaEditionBoost.EventInfluence
				},
				{
					key: '9',
					manufacturer: 'Alfa Romero',
					model: '4C',
					price: 74000
				},
				{
					key: '10',
					manufacturer: 'Alfa Romero',
					model: '8C Competizione',
					price: 300000
				},
				{
					key: '11',
					manufacturer: 'Alfa Romero',
					model: '8C Competizione',
					price: 550000,
					forzaEdition: true,
					forzaEditionBoost: ForzaEditionBoost.Credits
				},
				{
					key: '12',
					manufacturer: 'Alfa Romero',
					model: '33 Stradale',
					price: 10000000
				},
				{
					key: '13',
					manufacturer: 'Alfa Romero',
					model: 'Giulia Sprint GTA Stradale',
					price: 300000
				},
				{
					key: '14',
					manufacturer: 'Alfa Romero',
					model: 'Giulia TZ2',
					price: 2500000
				},
				{
					key: '15',
					manufacturer: 'Alfa Romero',
					model: 'P3',
					price: 10000000
				},
				{
					key: '16',
					manufacturer: 'Alfa Romero',
					model: 'Stelvio Quadrifoglio',
					price: 80000
				},
				{
					key: '17',
					manufacturer: 'Alumi Craft',
					model: 'Class 10 Race Car',
					price: 100000
				},
				{
					key: '18',
					manufacturer: 'Alumi Craft',
					model: 'Class 10 Race Car',
					price: 350000,
					forzaEdition: true,
					forzaEditionBoost: ForzaEditionBoost.DestructionSkills
				},
				{
					key: '19',
					manufacturer: 'AMC',
					model: 'Gremlin X',
					price: 35000
				},
				{
					key: '20',
					manufacturer: 'AMC',
					model: 'Javelin AMX',
					price: 35000
				},
				{
					key: '21',
					manufacturer: 'AMC',
					model: 'Rebel "The Machine"',
					price: 250000
				},
				{
					key: '22',
					manufacturer: 'AMG Transport Dynamics',
					model: 'M12S Warthog CST',
					price: 850000
				},
				{
					key: '23',
					manufacturer: 'Apollo',
					model: 'Intensa Emozione',
					price: 1050000
				},
				{
					key: '24',
					manufacturer: 'Alpine',
					model: 'A110',
					price: 250000
				},
				{
					key: '25',
					manufacturer: 'Ariel',
					model: 'Nomad',
					price: 93000
				},
				{
					key: '26',
					manufacturer: 'Ariel',
					model: 'Atom 500 V8',
					price: 108000
				},
				{
					key: '1000',
					manufacturer: 'Mercedes-Benz',
					model: 'AMG CLK GTR',
					price: 2000000
				},
				{
					key: '1010',
					manufacturer: 'Mercedes-Benz',
					model: 'SL 65 AMG Black Series',
					price: 210000
				},
				{
					key: '1020',
					manufacturer: 'Mercedes-Benz',
					model: 'SL 65 AMG Black Series',
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