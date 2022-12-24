import React from "react"
import { SafeAreaView, StatusBar, StyleSheet, Text, View } from "react-native"
import { Searchbar } from "react-native-paper"
import { SafeAreaProvider } from "react-native-safe-area-context"
import RestaurantInfo from "../components/RestaurantInfo"

function RestaurantsScreen() {
	return (
		<SafeAreaProvider>
			<SafeAreaView style={styles.container}>
				<View style={styles.search}>
					<Searchbar />
				</View>
				<View style={styles.list}>
					<RestaurantInfo />
				</View>
			</SafeAreaView>
		</SafeAreaProvider>
	)
}

const styles = StyleSheet.create({
	container: { flex: 1, marginTop: StatusBar.currentHeight },
	search: { padding: 16 },
	list: { flex: 1, padding: 16, backgroundColor: "blue" }
})

export default RestaurantsScreen
