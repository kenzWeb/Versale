import {EffectFade, Pagination} from 'swiper/modules'
import {Swiper, SwiperSlide} from 'swiper/react'

export default function Cafe() {
	const pagination = {
		clickable: true,
		el: '.about-pagination',
	}
	return (
		<section className='cafe'>
			<div className='about__container'>
				<div className='about__wrapper'>
					<div className='about__left'>
						<h2 className='cafe__title title text-[#fff]'>Кафе</h2>
						<h3 className='cafe__subtitle '>
							Мы предлагаем уютное проживание и первоклассное обслуживание в
							самом сердце прекрасного города Белогорск. Наша гостиница идеально
							подходит как для отдыха, так и для деловых поездок, и мы гордимся
							предоставлением высококачественного сервиса для всех наших гостей.
						</h3>
						<div className='about__buttons'>
							<button className='btn_prime'>Меню</button>
						</div>
					</div>
					<div className='about__right'>
						<Swiper
							slidesPerView={1}
							pagination={pagination}
							effect='fade'
							modules={[Pagination, EffectFade]}
							className='mySwiper'
						>
							<SwiperSlide className='about__swiper-slide'>
								<img className='about__img' src='img/about/1.jpg' alt='' />
							</SwiperSlide>
							<SwiperSlide className='about__swiper-slide'>
								<img className='about__img' src='img/about/2.jpg' alt='' />
							</SwiperSlide>
							<SwiperSlide className='about__swiper-slide'>
								<img className='about__img' src='img/about/3.jpg' alt='' />
							</SwiperSlide>
							<SwiperSlide className='about__swiper-slide'>
								<img className='about__img' src='img/about/4.jpg' alt='' />
							</SwiperSlide>
							<div className='about-pagination white'></div>
						</Swiper>
					</div>
				</div>
			</div>
		</section>
	)
}
