const { locations: locationsMock } = require("./GeocodeMock")
const functions = require("firebase-functions")

module.exports.geocodeRequest = (request, response, client) => {
	const { city, mock } = request.query
	if (mock === "true") {
		const locationMock = locationsMock[city.toLowerCase()]
		return response.json(locationMock)
	}
	client
		.geocode({
			params: { address: city, key: functions.config().google.key },
			timeout: 1000
		})
		.then((res) => {
			return response.json(res.data)
		})
		.catch((e) => {
			response.status(400)
			return response.send(e.response.data.error_message)
		})
}
