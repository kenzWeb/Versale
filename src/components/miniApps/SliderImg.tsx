import React from 'react'

interface SliderImgProps {
	id: number
}

const SliderImg: React.FC<SliderImgProps> = ({id}) => {
	return (
		<div className='home__bg-wrapper'>
			<img
				className='home__bg'
				src={`img/bedroom/${id}.jpg`}
				alt={String(id)}
			/>
		</div>
	)
}

export default SliderImg
