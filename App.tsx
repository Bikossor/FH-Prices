import React from 'react';
import { View, TextInput, Text, FlatList, ScrollView } from 'react-native';
import { IComponentProps, IComponentState } from 'interface';

import {
	Abarth, Acura, AlfaRomeo, AlumiCraft, AMC, AMGTransportDynamics, Apollo, Ariel, Ascari, AstonMartin, ATS, Audi, Austin, AustinHealey, AutoUnion,
	BAC, Bentley, BMW,
	MercedesBenz
} from './src/data';

export default class App extends React.Component<IComponentProps, IComponentState> {
	constructor(props: Readonly<IComponentProps>) {
		super(props);

		this.state = {
			loaded: false,
			data: [],
			fullData: [].concat(
				Abarth,
				Acura,
				AlfaRomeo,
				AlumiCraft,
				AMC,
				AMGTransportDynamics,
				Apollo,
				Ariel,
				Ascari,
				AstonMartin,
				ATS,
				Audi,
				Austin,
				AustinHealey,
				AutoUnion,
				BAC,
				Bentley,
				BMW,
				MercedesBenz
			)
		};
	}

	filterCars = (text: string) => {
		const filteredData = this.state.fullData.filter(vehicle => 
			vehicle.manufacturer.toLowerCase().includes(text.toLowerCase()) ||
			vehicle.model.toLowerCase().includes(text.toLowerCase())
		);

		const sortedFilteredData = filteredData.sort((a, b) =>
			b.price - a.price
		);

		this.setState({
			data: sortedFilteredData
		});
	}

	formatMoney = (price: number): string => {
		return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + " $";
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