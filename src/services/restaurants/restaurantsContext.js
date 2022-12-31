import { createContext, useContext, useEffect, useState } from "react"
import { LocationContext } from "../location/locationContext"
import { restaurantsRequest, restaurantsTransform } from "./restaurantsService"

export const RestaurantsContext = createContext()

export const RestaurantsContextProvider = ({ children }) => {
	const [restaurants, setRestaurants] = useState([])
	const [isLoading, setIsLoading] = useState(false)
	const [error, setError] = useState(null)
	const { location } = useContext(LocationContext)

	const retrieveRestaurants = (loc) => {
		setIsLoading(true)
		setRestaurants([])

		setTimeout(() => {
			restaurantsRequest(loc)
				.then(restaurantsTransform)
				.then((results) => {
					setError(null)
					setIsLoading(false)
					setRestaurants(results)
				})
				.catch((err) => {
					setRestaurants([])
					setIsLoading(false)
					setError(err)
				})
		}, 1000)
	}

	useEffect(() => {
		if (location) {
			const locationString = `${location.lat},${location.lng}`
			retrieveRestaurants(locationString)
		}
	}, [location])

	return <RestaurantsContext.Provider value={{ restaurants: restaurants, isLoading, error }}>{children}</RestaurantsContext.Provider>
}
