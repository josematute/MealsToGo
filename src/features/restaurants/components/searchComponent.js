import { useContext, useEffect, useState } from "react"
import { View } from "react-native"
import { Searchbar } from "react-native-paper"
import styled from "styled-components"
import { LocationContext } from "../../../services/location/locationContext"

const SearchContainer = styled(View)`
	padding: ${(props) => props.theme.space[3]};
`

export const Search = ({ isFavouriteToggled, onFavouriteToggle }) => {
	const { keyword, search } = useContext(LocationContext)
	const [searchKeyword, setSearchKeyword] = useState(keyword)

	useEffect(() => {
		setSearchKeyword(keyword)
	}, [keyword])

	return (
		<SearchContainer>
			<Searchbar
				icon={isFavouriteToggled ? "heart" : "heart-outline"}
				onIconPress={onFavouriteToggle}
				placeholder="Search for a location"
				value={searchKeyword}
				onSubmitEditing={() => {
					search(searchKeyword)
				}}
				onChangeText={(text) => {
					setSearchKeyword(text)
				}}
			/>
		</SearchContainer>
	)
}
