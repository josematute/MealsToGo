import { StatusBar as ExpoStatusBar } from "expo-status-bar"
import { ThemeProvider } from "styled-components"
import { theme } from "./src/infrastructure/theme"
import { useFonts as useOswald, Oswald_400Regular } from "@expo-google-fonts/oswald"
import { useFonts as useLato, Lato_400Regular } from "@expo-google-fonts/lato"
import { RestaurantsContextProvider } from "./src/services/restaurants/restaurantsContext"
import { LocationContextProvider } from "./src/services/location/locationContext"
import { Navigation } from "./src/infrastructure/navigation"
import { FavouritesContextProvider } from "./src/services/favourites/FavouritesContext"
import { initializeApp } from "firebase/app"
import { getAuth, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth"
import { useEffect, useState } from "react"
import { AuthenticationContextProvider } from "./src/services/authentication/AuthenticationContext"

// Initialize Firebase
const firebaseConfig = {
	apiKey: "AIzaSyBmoSP4-9ENsLQ_SIy0qXfGu0_MfnMSFCg",
	authDomain: "mealstogo-2889e.firebaseapp.com",
	projectId: "mealstogo-2889e",
	storageBucket: "mealstogo-2889e.appspot.com",
	messagingSenderId: "167417290668",
	appId: "1:167417290668:web:7deeb4585992073682e409"
}

const app = initializeApp(firebaseConfig)

export default function App() {
	const [oswaldLoaded] = useOswald({
		Oswald_400Regular
	})
	const [latoLoaded] = useLato({
		Lato_400Regular
	})

	if (!oswaldLoaded || !latoLoaded) return null

	// if (!isAuthenticated) return null

	return (
		<>
			<ThemeProvider theme={theme}>
				<AuthenticationContextProvider>
					<FavouritesContextProvider>
						<LocationContextProvider>
							<RestaurantsContextProvider>
								<Navigation />
							</RestaurantsContextProvider>
						</LocationContextProvider>
					</FavouritesContextProvider>
				</AuthenticationContextProvider>
			</ThemeProvider>
			<ExpoStatusBar style="auto"></ExpoStatusBar>
		</>
	)
}
