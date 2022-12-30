import AsyncStorage from "@react-native-async-storage/async-storage"
import { Camera, CameraType } from "expo-camera"
import React, { useContext, useEffect, useRef, useState } from "react"
import { Text, TouchableOpacity, View } from "react-native"
import styled from "styled-components"
import { AuthenticationContext } from "../../../services/authentication/AuthenticationContext"

const ProfileCamera = styled(Camera)`
	width: 100%;
	height: 100%;
`

export const CameraScreen = ({ navigation }) => {
	const cameraRef = useRef()
	const [type, setType] = useState(CameraType.front)
	const [permission, requestPermission] = Camera.useCameraPermissions()
	const { user } = useContext(AuthenticationContext)

	// function toggleCameraType() {
	// 	setType((current) => (current === CameraType.back ? CameraType.front : CameraType.back))
	// }

	const snap = async () => {
		if (cameraRef) {
			const photo = await cameraRef.current.takePictureAsync()
			AsyncStorage.setItem(`${user.uid}-photo`, photo.uri)
			navigation.goBack()
		}
	}

	useEffect(() => {
		if (!permission) requestPermission()
	}, [])

	if (!permission) {
		return <View />
	}

	if (!permission.granted) {
		return <Text>No access to camera</Text>
	}

	return (
		<TouchableOpacity onPress={snap}>
			<ProfileCamera ref={(camera) => (cameraRef.current = camera)} type={type} ratio={"16:9"} />
		</TouchableOpacity>
	)
}

/* <TouchableOpacity onPress={toggleCameraType}>
				<Text>Flip Camera</Text>
			</TouchableOpacity> */
