import { Platform } from "react-native"
const liveHost = "https://us-central1-mealstogo-2889e.cloudfunctions.net"
const localHost = "http://localhost:5001/mealstogo-2889e/us-central1"

export const isDevelopment = process.env.NODE_ENV === "development"
export const isAndroid = Platform.OS === "android"
export const isMock = false // only change this to use mock or not (for ios)
// only liveHost if want to check it locally with android:
// export const host = liveHost
// normal one:
export const host = !isDevelopment || isAndroid ? liveHost : localHost
