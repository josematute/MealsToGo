import React from "react"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import RestaurantsScreen from "../../features/restaurants/screens/RestaurantsScreen"
import { RestaurantDetailScreen } from "../../features/restaurants/screens/RestaurantDetailScreen"

const RestaurantStack = createNativeStackNavigator()

export const RestaurantsNavigator = () => {
	return (
		<RestaurantStack.Navigator
			screenOptions={{
				headerShown: false,
				presentation: "modal"
			}}>
			<RestaurantStack.Screen name="Restaurant" component={RestaurantsScreen} />
			<RestaurantStack.Screen name="RestaurantDetail" component={RestaurantDetailScreen} />
		</RestaurantStack.Navigator>
	)
}
