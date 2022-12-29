import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { FavouritesScreen } from "../../features/settings/screens/FavouritesScreen"
import { SettingsScreen } from "../../features/settings/screens/SettingsScreen"

const SettingsStack = createNativeStackNavigator()

export const SettingsNavigator = ({ route, navigation }) => {
	return (
		<SettingsStack.Navigator
			headerTitle="Settings"
			screenOptions={{
				presentation: "card"
			}}>
			<SettingsStack.Screen
				options={{
					header: () => null
				}}
				name="SettingsScreen"
				component={SettingsScreen}
			/>
			<SettingsStack.Screen name="Favourites" component={FavouritesScreen} />
		</SettingsStack.Navigator>
	)
}
