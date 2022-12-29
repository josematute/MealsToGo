import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import React from "react"
import { Ionicons } from "@expo/vector-icons"
import { RestaurantsNavigator } from "./restaurantsNavigator"
import { MapScreen } from "../../features/map/screens/MapScreen"
import { FavouritesContextProvider } from "../../services/favourites/FavouritesContext"
import { LocationContextProvider } from "../../services/location/locationContext"
import { RestaurantsContextProvider } from "../../services/restaurants/restaurantsContext"
import { SettingsScreen } from "../../features/settings/screens/SettingsScreen"
import { SettingsNavigator } from "./SettingsNavigator"

const Tab = createBottomTabNavigator()

const TAB_ICON = {
	Restaurants: "md-restaurant",
	Map: "md-map",
	Settings: "md-settings"
}

const createScreenOptions = ({ route }) => {
	const iconName = TAB_ICON[route.name]
	return {
		tabBarIcon: ({ size, color }) => <Ionicons name={iconName} size={size} color={color} />,
		tabBarActiveTintColor: "tomato",
		tabBarInactiveTintColor: "gray",
		tabBarStyle: [
			{
				"display": "flex"
			},
			null
		],
		headerShown: false
	}
}

export const AppNavigator = () => (
	<FavouritesContextProvider>
		<LocationContextProvider>
			<RestaurantsContextProvider>
				<Tab.Navigator screenOptions={createScreenOptions}>
					<Tab.Screen name="Restaurants" component={RestaurantsNavigator} />
					<Tab.Screen name="Map" component={MapScreen} />
					<Tab.Screen name="Settings" component={SettingsNavigator} />
				</Tab.Navigator>
			</RestaurantsContextProvider>
		</LocationContextProvider>
	</FavouritesContextProvider>
)
