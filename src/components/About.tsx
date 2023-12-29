import 'swiper/css'
import 'swiper/css/effect-fade'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import {EffectFade, Pagination} from 'swiper/modules'
import {Swiper, SwiperSlide} from 'swiper/react'

export default function About() {
	const pagination = {
		clickable: true,
		el: '.about-pagination',
	}

	return (
		<section className='about'>
			<div className='about__container'>
				<div className='about__wrapper'>
					<div className='about__left'>
						<h2 className='about__title title'>О нас</h2>
						<h3 className='about__subtitle'>
							Мы предлагаем уютное проживание и первоклассное обслуживание в
							самом сердце прекрасного города Белогорск. Наша гостиница идеально
							подходит как для отдыха, так и для деловых поездок, и мы гордимся
							предоставлением высококачественного сервиса для всех наших гостей.
						</h3>
						<div className='about__buttons'>
							<button className='btn_prime'>Контакты</button>
							<button className='btn_second'>Правила проживания</button>
						</div>
					</div>
					<div className='about__right'>
						<Swiper
							slidesPerView={1}
							pagination={pagination}
							effect='fade'
							modules={[Pagination, EffectFade]}
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
							<div className='about-pagination'></div>
						</Swiper>
					</div>
				</div>
			</div>
		</section>
	)
}
