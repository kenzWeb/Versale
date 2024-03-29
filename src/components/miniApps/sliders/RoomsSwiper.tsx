import {useEffect, useState} from 'react'
import 'swiper/css'
import 'swiper/css/navigation'
import {Autoplay, EffectFade, Navigation, Pagination} from 'swiper/modules'
import {Swiper, SwiperSlide} from 'swiper/react'
import roomData from '../../../data/roomData.json'
import {RoomItem} from '../../types/IRoomItem'
import RoomsSwiperProps from '../../types/IRooms'
import RoomsButtons from '../RoomsButtons'

const pagination = {
	clickable: true,
	el: '.about-pagination',
}

const navigation = {
	prevEl: '.prev',
	nextEl: '.next',
}

export const RoomsSwiper: React.FC<RoomsSwiperProps> = ({
	onRoomsImgChange,
	setGalleryOpen,
}) => {
	const [selectedIconIndex, setSelectedIconIndex] = useState<number | null>(
		null,
	)

	const roomsGalleryButton = (item: RoomItem) => {
		onRoomsImgChange(item.img)
		setGalleryOpen(true)
	}

	useEffect(() => {
		const handleMouseOver = (index: number) => () => {
			const iconTitle = document.querySelectorAll('.rooms__icon-title')[
				index
			] as HTMLElement

			if (selectedIconIndex !== null) {
				const prevIconTitle = document.querySelectorAll('.rooms__icon-title')[
					selectedIconIndex
				] as HTMLElement
				prevIconTitle.classList.add('hiddens')
			}

			iconTitle.classList.remove('hiddens')
			setSelectedIconIndex(index)
		}

		const handleMouseOut = () => {
			if (selectedIconIndex !== null) {
				const iconTitle = document.querySelectorAll('.rooms__icon-title')[
					selectedIconIndex
				] as HTMLElement
				iconTitle.classList.add('hiddens')
			}
		}

		const iconImgs = document.querySelectorAll('.rooms__icon-img')

		if (iconImgs.length > 0) {
			iconImgs.forEach((iconImg, index) => {
				iconImg.addEventListener('mouseover', handleMouseOver(index))
				iconImg.addEventListener('mouseout', handleMouseOut)

				iconImg.addEventListener('click', handleMouseOver(index))
				iconImg.addEventListener('touchend', handleMouseOut)
			})
		}

		return () => {
			iconImgs.forEach((iconImg, index) => {
				iconImg.removeEventListener('mouseover', handleMouseOver(index))
				iconImg.removeEventListener('mouseout', handleMouseOut)

				iconImg.addEventListener('click', handleMouseOver(index))
				iconImg.addEventListener('touchend', handleMouseOut)
			})
		}
	}, [selectedIconIndex])

	return (
		<Swiper
			slidesPerView={1}
			spaceBetween={300}
			navigation={navigation}
			modules={[Pagination, EffectFade, Navigation]}
			slideClass='rooms__swiper-slide'
			className='rooms__swiper'
		>
			{roomData.map((item, index) => (
				<SwiperSlide className='rooms__swiper-slide' key={index}>
					<Swiper
						slidesPerView={1}
						pagination={pagination}
						effect='fade'
						autoplay={{
							delay: 5000,
							disableOnInteraction: false,
						}}
						modules={[Autoplay, Pagination, EffectFade]}
						className='rooms__content-left'
						slideClass='rooms__content-slide'
						wrapperClass='rooms__content-left'
					>
						{item.img.map((img, i) => (
							<SwiperSlide className='rooms__content-slide' key={i}>
								<div className='rooms__content-slide_img'>
									<img
										src={img}
										alt='roomsImg'
										className='rooms__content-img'
										onClick={() => roomsGalleryButton(item)}
									/>
								</div>
							</SwiperSlide>
						))}
						<div className='about-pagination rooms-pagination'></div>
					</Swiper>
					<div className='rooms__content-right'>
						<div>
							<h2 className='rooms__title'>{item.title}</h2>
							<h3 className='rooms__subtitle'>{item.subtitle}</h3>
						</div>
						<div className='rooms__socials'>
							<div className='rooms__socials-social'>
								{index === 2 ? (
									<div className='rooms__icon'>
										<h2 className='rooms__icon-title hiddens'>
											2 односпальных кровати
										</h2>
										<img
											className='rooms__icon-img'
											src='img/icons/rooms/5.svg'
											alt='roomsIcons'
										/>
									</div>
								) : (
									<div className='rooms__icon'>
										<h2 className='rooms__icon-title hiddens'>
											1 двуспальная кровать
										</h2>
										<img
											className='rooms__icon-img'
											src='img/icons/rooms/1.svg'
											alt='roomsIcons'
										/>
									</div>
								)}
								<div className='rooms__icon'>
									<h2 className='rooms__icon-title hiddens'>до 2-х человек</h2>
									<img
										className='rooms__icon-img'
										src='img/icons/rooms/2.svg'
										alt='roomsIcons'
									/>
								</div>
								<div className='rooms__icon'>
									<h2 className='rooms__icon-title hiddens'>
										Туалетные принадлежности - полотенце
									</h2>
									<img
										className='rooms__icon-img'
										src='img/icons/rooms/4.svg'
										alt='roomsIcons'
									/>
								</div>
								<div className='rooms__icon'>
									<h2 className='rooms__icon-title hiddens'>Сеть - Wi-Fii</h2>
									<img
										className='rooms__icon-img'
										src='img/icons/rooms/3.svg'
										alt='roomsIcons'
									/>
								</div>
							</div>
							<h4 className='rooms__price'>От {item.price}</h4>
						</div>
					</div>
				</SwiperSlide>
			))}
			<RoomsButtons />
		</Swiper>
	)
}
