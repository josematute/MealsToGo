import { StatusBar as ExpoStatusBar } from "expo-status-bar"
import { ThemeProvider } from "styled-components"
import RestaurantsScreen from "./src/features/restaurants/screens/RestaurantsScreen"
import { theme } from "./src/infrastructure/theme"

import { useFonts as useOswald, Oswald_400Regular } from "@expo-google-fonts/oswald"
import { useFonts as useLato, Lato_400Regular } from "@expo-google-fonts/lato"

export default function App() {
	const [oswaldLoaded] = useOswald({
		Oswald_400Regular
	})
	const [latoLoaded] = useLato({
		Lato_400Regular
	})

	if (!oswaldLoaded || !latoLoaded) return null

	return (
		<>
			<ThemeProvider theme={theme}>
				<RestaurantsScreen />
				<ExpoStatusBar style="auto"></ExpoStatusBar>
			</ThemeProvider>
		</>
	)
}
