import { StatusBar as ExpoStatusBar } from "expo-status-bar"
import { ThemeProvider } from "styled-components"
import { theme } from "./src/infrastructure/theme"
import { useFonts as useOswald, Oswald_400Regular } from "@expo-google-fonts/oswald"
import { useFonts as useLato, Lato_400Regular } from "@expo-google-fonts/lato"
import { RestaurantsContextProvider } from "./src/services/restaurants/restaurantsContext"
import { LocationContextProvider } from "./src/services/location/locationContext"

import { Navigation } from "./src/infrastructure/navigation"
import { FavouritesContextProvider } from "./src/services/favourites/FavouritesContext"

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
				<FavouritesContextProvider>
					<LocationContextProvider>
						<RestaurantsContextProvider>
							<Navigation />
						</RestaurantsContextProvider>
					</LocationContextProvider>
				</FavouritesContextProvider>
			</ThemeProvider>
			<ExpoStatusBar style="auto"></ExpoStatusBar>
		</>
	)
}
