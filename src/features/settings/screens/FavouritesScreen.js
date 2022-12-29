import React, { useContext } from "react"
import { Text, TouchableOpacity } from "react-native"
import styled from "styled-components"
import { Spacer } from "../../../components/spacer/SpacerComponent"
import { SafeArea } from "../../../components/utility/SafeAreaComponent"
import { FavouritesContext } from "../../../services/favourites/FavouritesContext"
import RestaurantInfoCard from "../../restaurants/components/RestaurantInfoCard"
import { RestaurantList } from "../components/RestaurantListStyles"

const NoFavouritesArea = styled(SafeArea)`
	align-items: center;
	justify-content: center;
`

export const FavouritesScreen = ({ navigation }) => {
	const { favourites } = useContext(FavouritesContext)
	return favourites.length ? (
		<SafeArea>
			<RestaurantList
				data={favourites}
				renderItem={({ item }) => {
					return (
						<TouchableOpacity
							onPress={() =>
								navigation.navigate("RestaurantDetail", {
									restaurant: item
								})
							}>
							<Spacer position="bottom" size="large">
								<RestaurantInfoCard restaurant={item} />
							</Spacer>
						</TouchableOpacity>
					)
				}}
				keyExtractor={(item) => item.name}
			/>
		</SafeArea>
	) : (
		<NoFavouritesArea>
			<Text center>No favourites yet</Text>
		</NoFavouritesArea>
	)
}
