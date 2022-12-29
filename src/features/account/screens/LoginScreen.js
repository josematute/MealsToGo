import React, { useContext, useState } from "react"
import { Spacer } from "../../../components/spacer/SpacerComponent"
import { Text } from "../../../components/typography/TextComponent"
import { AuthenticationContext } from "../../../services/authentication/AuthenticationContext"
import { AccountBackground, AccountContainer, AccountCover, AuthButton, AuthInput, ErrorContainer, Title } from "../components/AccountStyles"

export const LoginScreen = ({ navigation }) => {
	const [email, setEmail] = useState("")
	const [password, setPassword] = useState("")
	const { onLogin, error } = useContext(AuthenticationContext)
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
						secure
						onChangeText={(p) => setPassword(p)}
					/>
				</Spacer>
				{error && (
					<ErrorContainer size="large">
						<Text variant="error">{error}</Text>
					</ErrorContainer>
				)}
				<Spacer size="large">
					<AuthButton icon="lock-open-outline" mode="contained" onPress={() => onLogin(email, password)}>
						Login
					</AuthButton>
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
