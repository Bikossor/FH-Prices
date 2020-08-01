import React from 'react';
import { View, TextInput, Text, FlatList, ScrollView } from 'react-native';
import { IComponentProps, IComponentState } from 'interface';

import {
	Abarth, Acura, AlfaRomeo, Alpine, AlumiCraft, AMC, AMGTransportDynamics, Apollo, Ariel, Ascari, AstonMartin, ATS, Audi, Austin, AustinHealey, AutoUnion,
	BAC, Bentley, BMW, Bowler, Bugatti, Buick,
	Cadillac, CanAm, Caterham, Chevrolet,
	MercedesBenz
} from './src/data';
import { styleSheet } from './src/StyleSheet';

export default class App extends React.Component<IComponentProps, IComponentState> {
	constructor(props: Readonly<IComponentProps>) {
		super(props);

		this.state = {
			loaded: false,
			data: [],
			fullData: [
				...Abarth,
				...Acura,
				...AlfaRomeo,
				...Alpine,
				...AlumiCraft,
				...AMC,
				...AMGTransportDynamics,
				...Apollo,
				...Ariel,
				...Ascari,
				...AstonMartin,
				...ATS,
				...Audi,
				...Austin,
				...AustinHealey,
				...AutoUnion,
				...BAC,
				...Bentley,
				...BMW,
				...Bowler,
				...Bugatti,
				...Buick,
				...Cadillac,
				...CanAm,
				...Caterham,
				...Chevrolet,
				...MercedesBenz
      		]
		};
	}

	filterCars = (text: string) => {
		const filteredData = this.state.fullData.filter(vehicle => {
			const searchStringTemplate = `${vehicle.manufacturer.toLowerCase()} ${vehicle.model.toLowerCase()}`;
			return searchStringTemplate.includes(text.toLowerCase());
		});

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
			<View style={[styleSheet.mainContainer]}>
				<View style={[styleSheet.statusBar]} />
				<View style={[styleSheet.searchBar]}>
					<TextInput
						style={[styleSheet.searchInput]}
						placeholder="Type here to search"
						onChangeText={this.filterCars}
						clearButtonMode="while-editing"
					/>
				</View>
				<ScrollView style={[styleSheet.mainScrollView]}>
					<FlatList
						data={this.state.data}
						renderItem={({ item }) =>
							<View style={[styleSheet.flatListItem, { backgroundColor: item.forzaEdition ? "#ce93d8" : "#ccc" }]}>
								<View style={[styleSheet.listItemContainer]}>
									<Text style={[styleSheet.fontItalic]}>{item.year} </Text>
									<Text style={[styleSheet.fontBold]}>{item.manufacturer} </Text>
									<Text>{item.model} </Text>
									<Text>{item.forzaEdition ? "(FE)" : ""}</Text>
									<Text>{item.forzaEdition ? item.forzaEditionBoost : ""}</Text>
								</View>
								<View style={[styleSheet.flex]}>
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