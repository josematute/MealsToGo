import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { NavigationContainer } from "@react-navigation/native"
import React, { useContext } from "react"
import { Ionicons } from "@expo/vector-icons"
import { SafeArea as SafeAreaComp } from "../../components/utility/SafeAreaComponent"
import { Button, Text } from "react-native"
import { RestaurantsNavigator } from "./restaurantsNavigator"
import { MapScreen } from "../../features/map/screens/MapScreen"
import { AuthenticationContext } from "../../services/authentication/AuthenticationContext"
import { FavouritesContextProvider } from "../../services/favourites/FavouritesContext"
import { LocationContextProvider } from "../../services/location/locationContext"
import { RestaurantsContextProvider } from "../../services/restaurants/restaurantsContext"

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

const Settings = () => {
	const { onLogout } = useContext(AuthenticationContext)
	return (
		<SafeAreaComp>
			<Text>Settings</Text>
			<Button title="logout" onPress={() => onLogout()} />
		</SafeAreaComp>
	)
}

export const AppNavigator = () => (
	<FavouritesContextProvider>
		<LocationContextProvider>
			<RestaurantsContextProvider>
				<Tab.Navigator screenOptions={createScreenOptions}>
					<Tab.Screen name="Restaurants" component={RestaurantsNavigator} />
					<Tab.Screen name="Map" component={MapScreen} />
					<Tab.Screen name="Settings" component={Settings} />
				</Tab.Navigator>
			</RestaurantsContextProvider>
		</LocationContextProvider>
	</FavouritesContextProvider>
)
