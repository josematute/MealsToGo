import React, { useContext, useState } from "react"
import { FlatList, TouchableOpacity, View } from "react-native"
import { ActivityIndicator } from "react-native-paper"
import { SafeAreaProvider } from "react-native-safe-area-context"
import styled from "styled-components"
import { Spacer } from "../../../components/spacer/SpacerComponent"
import RestaurantInfoCard from "../components/RestaurantInfoCard"
import { SafeArea } from "../../../components/utility/SafeAreaComponent"
import { RestaurantsContext } from "../../../services/restaurants/restaurantsContext"
import { Search } from "../components/searchComponent"
import { FavouritesBar } from "../../../components/favourites/FavouritesBarComponent"
import { FavouritesContext } from "../../../services/favourites/FavouritesContext"
import { RestaurantList } from "../../settings/components/RestaurantListStyles"
import { FadeInView } from "../../../components/animations/FadeAnimation"
import { LocationContext } from "../../../services/location/locationContext"
import { Text } from "../../../components/typography/TextComponent"

const Loading = styled(ActivityIndicator)`
	margin-left: -25px;
`
const LoadingContainer = styled.View`
	position: absolute;
	top: 50%;
	left: 50%;
`

export const RestaurantsScreen = ({ navigation }) => {
	const { isLoading, restaurants, error } = useContext(RestaurantsContext)
	const { error: locationError } = useContext(LocationContext)
	const { favourites } = useContext(FavouritesContext)
	const [isToggled, setIsToggled] = useState(false)
	const hasError = !!error || !!locationError

	return (
		<SafeAreaProvider>
			<SafeArea>
				{isLoading && (
					<LoadingContainer>
						<Loading size={50} animating={true} color={(props) => props.theme.colors.brand.primary} />
					</LoadingContainer>
				)}
				<Search isFavouriteToggled={isToggled} onFavouriteToggle={() => setIsToggled(!isToggled)} />
				{isToggled && <FavouritesBar favourites={favourites} onNavigate={navigation.navigate} />}
				{hasError && (
					<Spacer position="left" size="large">
						<Text variant="error">Something went wrong retrieving the data.</Text>
					</Spacer>
				)}

				{!hasError && (
					<RestaurantList
						data={restaurants}
						renderItem={({ item }) => {
							return (
								<TouchableOpacity onPress={() => navigation.navigate("RestaurantDetail", { restaurant: item })}>
									<Spacer position="bottom" size="large">
										<FadeInView>
											<RestaurantInfoCard restaurant={item} />
										</FadeInView>
									</Spacer>
								</TouchableOpacity>
							)
						}}
						keyExtractor={(item) => item.name}
					/>
				)}
			</SafeArea>
		</SafeAreaProvider>
	)
}

export default RestaurantsScreen
