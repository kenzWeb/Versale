/* eslint-disable prefer-const */
import * as DG from '2gis-maps'

import {useEffect} from 'react'

export const Map = () => {
	useEffect(() => {
		try {
			let map = DG.map('map-container', {
				center: [50.920181422641996, 128.46340298652652],
				zoom: 13,
			})

			DG.marker([50.920181422641996, 128.46340298652652])
				.addTo(map)
				.bindPopoup('Open!')
			return () => map && map.remove()
		} catch (error) {
			console.error('Error initializing the map:', error)
		}
	}, [])

	return <div id='map-container'></div>
}
