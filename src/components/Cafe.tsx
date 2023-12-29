import { motion } from 'framer-motion'
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
				<motion.div
					initial={{y: -100, opacity: 0}}
					whileInView={{y: 0, opacity: 1}}
					transition={{duration: 0.3, delay: 0.4}}
					viewport={{ once: true }}
					className='about__wrapper'
				>
					<div className='about__left'>
						<h2 className='cafe__title title text-[#fff]'>Кафе</h2>
						<h3 className='cafe__subtitle '>
							Откройте для себя вкус наших блюд в уютном кафе "Versale". Наша
							кухня славится свежими ингредиентами и разнообразием блюд, чтобы
							удовлетворить самый изысканный вкус.
						</h3>
						<div className='cafe__description'>
							<li>Завтрак - 350 рублей </li>
							<li>Обед - 300 рублей </li>
							<li>Ужин - 390 рублей</li>
						</div>
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
								<img className='about__img' src='img/cafe/1.jpg' alt='' />
							</SwiperSlide>
							<SwiperSlide className='about__swiper-slide'>
								<img className='about__img' src='img/cafe/2.jpg' alt='' />
							</SwiperSlide>
							<SwiperSlide className='about__swiper-slide'>
								<img className='about__img' src='img/cafe/3.jpg' alt='' />
							</SwiperSlide>
							<SwiperSlide className='about__swiper-slide'>
								<img className='about__img' src='img/cafe/4.jpg' alt='' />
							</SwiperSlide>
							<div className='about-pagination white'></div>
						</Swiper>
					</div>
				</motion.div>
			</div>
		</section>
	)
}
