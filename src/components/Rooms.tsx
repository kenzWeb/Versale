import {motion} from 'framer-motion'
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
			<motion.div
				initial={{y: -100, opacity: 0}}
				whileInView={{y: 0, opacity: 1}}
				transition={{duration: 0.3, delay: 0.4}}
				viewport={{ once: true }}
				className='rooms__container'
			>
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
									<img src='img/icons/rooms/icons.svg' alt='' />
								<h4 className='rooms__price'>От {item.price}</h4>
								</div>
							</div>
						</SwiperSlide>
					))}
					<motion.div whileHover={{opacity: 0.6}} className='prev swiper-nav'>
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
					</motion.div>
					<motion.div whileHover={{opacity: 0.6}} className='next swiper-nav'>
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
					</motion.div>
					<div className='next'></div>
				</Swiper>
			</motion.div>
		</section>
	)
}
