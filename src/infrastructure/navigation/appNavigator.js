import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { NavigationContainer } from "@react-navigation/native"
import React from "react"
import { Ionicons } from "@expo/vector-icons"
import { SafeArea as SafeAreaComp } from "../../components/utility/SafeAreaComponent"
import { Text } from "react-native"
import { RestaurantsNavigator } from "./restaurantsNavigator"
import { MapScreen } from "../../features/map/screens/MapScreen"

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

const Settings = () => (
	<SafeAreaComp>
		<Text>Settings</Text>
	</SafeAreaComp>
)

export const AppNavigator = () => (
	<NavigationContainer>
		<Tab.Navigator screenOptions={createScreenOptions}>
			<Tab.Screen name="Restaurants" component={RestaurantsNavigator} />
			<Tab.Screen name="Map" component={MapScreen} />
			<Tab.Screen name="Settings" component={Settings} />
		</Tab.Navigator>
	</NavigationContainer>
)
