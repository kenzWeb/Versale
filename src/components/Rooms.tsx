import 'swiper/css'
import 'swiper/css/navigation'
import {EffectFade, Navigation, Pagination} from 'swiper/modules'
import {Swiper, SwiperSlide} from 'swiper/react'
import roomData from '../data/roomData.json'

const pagination = {
	clickable: true,
	el: '.about-pagination',
}

export const Rooms = () => {
	const navigation = {
		prevEl: '.prev',
		nextEl: '.next',
	}

	return (
		<section className='rooms'>
			<div className='rooms__container'>
				<div className='rooms__header'>
					<h2 className='rooms__hedaer-title title'>Номера</h2>
				</div>
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
								modules={[Pagination, EffectFade]}
								className='rooms__content-left'
								slideClass='rooms__content-slide'
								wrapperClass='rooms__content-left'
							>
								{item.img.map((item, i) => (
									<SwiperSlide className='rooms__content-slide' key={i}>
										<div className='rooms__content-slide_img'>
											<img src={item} alt='' className='rooms__content-img' />
										</div>
									</SwiperSlide>
								))}
								<div className='about-pagination'></div>
							</Swiper>
							<div className='rooms__content-right'>
								<h2 className='rooms__title'>{item.title}</h2>
								<h3 className='rooms__subtitle'>{item.subtitle}</h3>
								<div className='rooms__socials'>
									<img src='img/icons/rooms/1.svg' alt='' />
									<img src='img/icons/rooms/2.svg' alt='' />
									<img src='img/icons/rooms/3.svg' alt='' />
									<img src='img/icons/rooms/4.svg' alt='' />
									<img src='img/icons/rooms/5.svg' alt='' />
									<img src='img/icons/rooms/6.svg' alt='' />
									<img src='img/icons/rooms/7.svg' alt='' />
								</div>
								<h4 className='rooms__price'>Цена: {item.price}</h4>
							</div>
						</SwiperSlide>
					))}
					<div className='prev swiper-nav'>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							width='46'
							height='12'
							viewBox='0 0 58 12'
							fill='none'
						>
							<path
								d='M0.666667 6C0.666667 8.94552 3.05448 11.3333 6 11.3333C8.94552 11.3333 11.3333 8.94552 11.3333 6C11.3333 3.05448 8.94552 0.666667 6 0.666667C3.05448 0.666667 0.666667 3.05448 0.666667 6ZM6 7L58 7V5L6 5V7Z'
								fill='#620318'
							/>
						</svg>
					</div>
					<div className='next swiper-nav'>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							width='46'
							height='12'
							viewBox='0 0 58 12'
							fill='none'
						>
							<path
								d='M0.666667 6C0.666667 8.94552 3.05448 11.3333 6 11.3333C8.94552 11.3333 11.3333 8.94552 11.3333 6C11.3333 3.05448 8.94552 0.666667 6 0.666667C3.05448 0.666667 0.666667 3.05448 0.666667 6ZM6 7L58 7V5L6 5V7Z'
								fill='#620318'
							/>
						</svg>
					</div>
					<div className='next'></div>
				</Swiper>
			</div>
		</section>
	)
}
