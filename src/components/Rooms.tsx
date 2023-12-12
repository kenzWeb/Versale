import 'swiper/css/navigation'
import {Navigation, Pagination} from 'swiper/modules'
import {Swiper, SwiperSlide} from 'swiper/react'

export default function Rooms() {
	const pagination = {
		clickable: true,
		el: '.about-pagination',
	}

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
					spaceBetween={150}
					navigation={navigation}
					pagination={pagination}
					modules={[Pagination, Navigation]}
					className='rooms__content relative'
				>
					<SwiperSlide className='rooms__swiper-slide'>
						<div className='rooms__left'>
							<img src='img/bedroom/1.jpg' alt='' />
						</div>
						<div className='rooms__right'>
							<h2 className='rooms__title'>Президентский люкс</h2>
							<h3 className='rooms__subtitle'>
								Откройте дверь в утонченный комфорт в номере люксе. Интерьер,
								сочетающий в себе изысканность и теплоту, предлагает идеальное
								убежище вдали от городской суеты. Просторные номера, оформленные
								с использованием высококачественных материалов, включают в себя
								элегантную мебель и современные удобства.
							</h3>
						</div>
					</SwiperSlide>
					<SwiperSlide className='rooms__swiper-slide'>
						<div className='rooms__left'>
							<img src='img/bedroom/1.jpg' alt='' />
						</div>
						<div className='rooms__right'>
							<h2 className='rooms__title'>Президентский люкс</h2>
							<h3 className='rooms__subtitle'>
								Откройте дверь в утонченный комфорт в номере люксе. Интерьер,
								сочетающий в себе изысканность и теплоту, предлагает идеальное
								убежище вдали от городской суеты. Просторные номера, оформленные
								с использованием высококачественных материалов, включают в себя
								элегантную мебель и современные удобства.
							</h3>
						</div>
					</SwiperSlide>
					<SwiperSlide className='rooms__swiper-slide'>
						<div className='rooms__left'>
							<img src='img/bedroom/1.jpg' alt='' />
						</div>
						<div className='rooms__right'>
							<h2 className='rooms__title'>Президентский люкс</h2>
							<h3 className='rooms__subtitle'>
								Откройте дверь в утонченный комфорт в номере люксе. Интерьер,
								сочетающий в себе изысканность и теплоту, предлагает идеальное
								убежище вдали от городской суеты. Просторные номера, оформленные
								с использованием высококачественных материалов, включают в себя
								элегантную мебель и современные удобства.
							</h3>
						</div>
					</SwiperSlide>
					<SwiperSlide className='rooms__swiper-slide'>
						<div className='rooms__left'>
							<img src='img/bedroom/1.jpg' alt='' />
						</div>
						<div className='rooms__right'>
							<h2 className='rooms__title'>Президентский люкс</h2>
							<h3 className='rooms__subtitle'>
								Откройте дверь в утонченный комфорт в номере люксе. Интерьер,
								сочетающий в себе изысканность и теплоту, предлагает идеальное
								убежище вдали от городской суеты. Просторные номера, оформленные
								с использованием высококачественных материалов, включают в себя
								элегантную мебель и современные удобства.
							</h3>
						</div>
					</SwiperSlide>
					<div className='about-pagination rooms'></div>
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
				</Swiper>
			</div>
		</section>
	)
}
