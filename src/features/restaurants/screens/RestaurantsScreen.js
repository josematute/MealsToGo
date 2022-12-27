import React, { useContext } from "react"
import { FlatList, View } from "react-native"
import { ActivityIndicator, Searchbar } from "react-native-paper"
import { SafeAreaProvider } from "react-native-safe-area-context"
import styled from "styled-components"
import { Spacer } from "../../../components/spacer/SpacerComponent"
import RestaurantInfoCard from "../components/RestaurantInfoCard"
import { SafeArea } from "../../../components/utility/SafeAreaComponent"
import { RestaurantsContext } from "../../../services/restaurants/restaurantsContext"
import { Search } from "../../../components/searchComponent"

const RestaurantList = styled(FlatList).attrs({
	contentContainerStyle: {
		padding: 16
	}
})``

const Loading = styled(ActivityIndicator)`
	margin-left: -25px;
`
const LoadingContainer = styled.View`
	position: absolute;
	top: 50%;
	left: 50%;
`

export const RestaurantsScreen = () => {
	const { isLoading, error, restaurants } = useContext(RestaurantsContext)

	return (
		<SafeAreaProvider>
			<SafeArea>
				{isLoading && (
					<LoadingContainer>
						<Loading size={50} animating={true} color={(props) => props.theme.colors.brand.primary} />
					</LoadingContainer>
				)}
				<Search />
				<RestaurantList
					data={restaurants}
					renderItem={({ item }) => {
						return (
							<Spacer position="bottom" size="large">
								<RestaurantInfoCard restaurant={item} />
							</Spacer>
						)
					}}
					keyExtractor={(item) => item.name}
				/>
			</SafeArea>
		</SafeAreaProvider>
	)
}

export default RestaurantsScreen
