import React from "react"
import { FlatList, View } from "react-native"
import { Searchbar } from "react-native-paper"
import { SafeAreaProvider } from "react-native-safe-area-context"
import styled from "styled-components"
import { Spacer } from "../../../components/spacer/SpacerComponent"
import RestaurantInfoCard from "../components/RestaurantInfoCard"
import { SafeArea } from "../../../components/utility/SafeAreaComponent"

const SearchContainer = styled(View)`
	padding: ${(props) => props.theme.space[3]};
`

const RestaurantList = styled(FlatList).attrs({
	contentContainerStyle: {
		padding: 16
	}
})``

function RestaurantsScreen() {
	return (
		<SafeAreaProvider>
			<SafeArea>
				<SearchContainer>
					<Searchbar />
				</SearchContainer>
				<RestaurantList
					data={[{ name: 1 }, { name: 2 }, { name: 3 }, { name: 4 }, { name: 5 }, { name: 6 }, { name: 7 }, { name: 8 }]}
					renderItem={() => (
						<Spacer position="bottom" size="large">
							<RestaurantInfoCard />
						</Spacer>
					)}
					keyExtractor={(item) => item.name}
				/>
			</SafeArea>
		</SafeAreaProvider>
	)
}

export default RestaurantsScreen
