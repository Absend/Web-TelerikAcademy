function geolocation() {
	const getCoords = (data) => {
		const coords = {
			lat: data.coords.latitude,
			long: data.coords.longitude
		};
		
		return coords;
	}

	const showCoords = (selector, coords) => {
		selector.innerHTML = '<h3>Current position: </h3>Latitude: ' + coords.lat + '<br>Longitude: ' + coords.long;
	}

	const createMap = (selector, coords) => {
		return new google.maps.Map(selector, {
			center: { lat: coords.lat, lng: coords.long },
			zoom: 17
		});
	}

	const getPosition = (() => {
		return new Promise(function (resolve, reject) {
			if (navigator.geolocation) {
				navigator.geolocation.getCurrentPosition(resolve);
			} else {
				reject();
			}
		});
	})();

	return getPosition
		.then((data) => {
			const coords = getCoords(data);
			const selector = document.getElementById('info');

			showCoords(selector, coords);

			return coords
		})
		.then((coords) => {
			const selector = document.getElementById('map');

			return createMap(selector, coords);
		})
};
