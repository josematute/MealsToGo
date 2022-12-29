import React, { useContext, useState } from "react"
import { ActivityIndicator } from "react-native-paper"
import { Spacer } from "../../../components/spacer/SpacerComponent"
import { Text } from "../../../components/typography/TextComponent"
import { AuthenticationContext } from "../../../services/authentication/AuthenticationContext"
import { AccountBackground, AccountContainer, AccountCover, AuthButton, AuthInput, ErrorContainer, Title } from "../components/AccountStyles"

export const RegisterScreen = ({ navigation }) => {
	const [email, setEmail] = useState("")
	const [password, setPassword] = useState("")
	const [repeatedPassword, setRepeatedPassword] = useState("")
	const { onRegister, error, isLoading } = useContext(AuthenticationContext)
	return (
		<AccountBackground>
			<AccountCover />
			<Title>Meals To Go</Title>
			<AccountContainer>
				<AuthInput
					label="E-mail"
					value={email}
					textContentType="emailAddress"
					keyboardType="email-address"
					autoCapitalize="none"
					onChangeText={(u) => setEmail(u)}
				/>
				<Spacer size="large">
					<AuthInput
						label="Password"
						value={password}
						textContentType="password"
						secureTextEntry
						autoCapitalize="none"
						onChangeText={(p) => setPassword(p)}
					/>
				</Spacer>
				<Spacer size="large">
					<AuthInput
						label="RepeatPassword"
						value={repeatedPassword}
						textContentType="password"
						secureTextEntry
						autoCapitalize="none"
						onChangeText={(p) => setRepeatedPassword(p)}
					/>
				</Spacer>
				{error && (
					<ErrorContainer size="large">
						<Text variant="error">{error}</Text>
					</ErrorContainer>
				)}
				<Spacer size="large">
					{!isLoading ? (
						<AuthButton icon="email" mode="contained" onPress={() => onRegister(email, password, repeatedPassword)}>
							Register
						</AuthButton>
					) : (
						<ActivityIndicator animating={true} size={50} />
					)}
				</Spacer>
			</AccountContainer>
			<Spacer size="large">
				<AuthButton mode="contained" onPress={() => navigation.goBack()}>
					Back
				</AuthButton>
			</Spacer>
		</AccountBackground>
	)
}
