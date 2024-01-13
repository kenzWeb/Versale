/* eslint-disable prefer-const */
import DG from '2gis-maps'

import {useEffect} from 'react'

export const Map = () => {
	useEffect(() => {
		let map = DG.map('map-container', {
			center: [50.920181422641996, 128.46340298652652],
			zoom: 13,
		})

		DG.marker([50.920181422641996, 128.46340298652652])
			.addTo(map)
			.bindPopup(
				'Адрес: Амурская обл., г. Белогорск, ул. 1-ая Вокзальная 13 Телефон: +7 (914) 040-40-15',
			)
		return () => map && map.remove()
	}, [])

	return <div id='map-container'></div>
}
