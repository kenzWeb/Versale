import React, {useState} from 'react'

import {Swiper, SwiperSlide} from 'swiper/react'

import 'swiper/css'
import 'swiper/css/free-mode'
import 'swiper/css/navigation'
import 'swiper/css/thumbs'

import IRoomsGallery from '../../types/IRoomsGallery'

import {FreeMode, Navigation, Thumbs} from 'swiper/modules'
import IGallery from '../../types/IGallery'
import GalleryButtons from '../GalleryButtons'

const navigation = {
	prevEl: '.gallery_prev',
	nextEl: '.gallery_next',
}

export const GallerySlider: React.FC<IRoomsGallery> = ({
	parentRoomsImg,
	galleryOpen,
	setGalleryOpen
}) => {
	const [thumbsSwiper, setThumbsSwiper] = useState<IGallery | null>(null)

	return (
		<>
			<div className={`rooms__gallery ${galleryOpen ? 'open' : ''}`}>
				<div className='rooms__gallery-wrapper'>
					<Swiper
						navigation={navigation}
						thumbs={{
							swiper:
								thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
						}}
						modules={[FreeMode, Navigation, Thumbs]}
						className='gallery__wrapper'
					>
						{parentRoomsImg &&
							parentRoomsImg.map((item: string) => (
								<SwiperSlide className='gallery__wrapper-slide' key={item}>
									<img src={item} />
								</SwiperSlide>
							))}
					</Swiper>
					<Swiper
						onSwiper={setThumbsSwiper}
						slidesPerView={5}
						breakpoints={{
							960: {
								spaceBetween:20
							}
							
						}}
						spaceBetween={5}
						freeMode={true}
						watchSlidesProgress={true}
						modules={[FreeMode, Navigation, Thumbs]}
						className='gallery__slider'
					>
						{parentRoomsImg &&
							parentRoomsImg.map((item: string) => (
								<SwiperSlide className='gallery__slider-slide' key={item}>
									<img src={item} />
								</SwiperSlide>
							))}
					</Swiper>
					<div className='gallery__close' onClick={() => setGalleryOpen(false)}>
						<img src='img/icons/rooms/close.svg' alt='closeButton' />
					</div>
					<GalleryButtons/>
				</div>
			</div>
		</>
	)
}
