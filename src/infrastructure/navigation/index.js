import { NavigationContainer } from "@react-navigation/native"
import React, { useContext } from "react"
import { Text, View } from "react-native"
import { AuthenticationContext } from "../../services/authentication/AuthenticationContext"
import { AccountNavigator } from "./AccountNavigator"
import { AppNavigator } from "./appNavigator"

export const Navigation = () => {
	const { isAuthenticated } = useContext(AuthenticationContext)
	return <NavigationContainer>{isAuthenticated ? <AppNavigator /> : <AccountNavigator />}</NavigationContainer>
}
