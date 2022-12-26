import React from "react"
import { SafeAreaView, StatusBar, StyleSheet, Text, View } from "react-native"
import { Searchbar } from "react-native-paper"
import { SafeAreaProvider } from "react-native-safe-area-context"
import styled from "styled-components"
import RestaurantInfoCard from "../components/RestaurantInfoCard"

const SafeArea = styled(SafeAreaView)`
	flex: 1;
	${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px`};}
`

const SearchContainer = styled(View)`
	padding: ${(props) => props.theme.space[3]};
`

const RestaurantListContainer = styled(View)`
	flex: 1;
	padding: ${(props) => props.theme.space[3]};
	background-color: ${(props) => props.theme.colors.bg.primary};
`

function RestaurantsScreen() {
	return (
		<SafeAreaProvider>
			<SafeArea>
				<SearchContainer>
					<Searchbar />
				</SearchContainer>
				<RestaurantListContainer>
					<RestaurantInfoCard />
				</RestaurantListContainer>
			</SafeArea>
		</SafeAreaProvider>
	)
}

export default RestaurantsScreen
