import 'swiper/css'
import 'swiper/css/effect-fade'
import 'swiper/css/pagination'
import {EffectFade, Pagination} from 'swiper/modules'
import {Swiper, SwiperSlide} from 'swiper/react'
import SliderImg from './miniApps/SliderImg'

interface HomeProps {
	slidesData: {id: number; content: React.ReactNode}[]
}

const Home: React.FC<HomeProps> = ({slidesData}) => {
	const pagination = {
		clickable: true,
	}

	return (
		<section className='home relative'>
			<Swiper
				pagination={pagination}
				effect={'fade'}
				modules={[Pagination, EffectFade]}
				className='mySwiper relative'
			>
				{slidesData.map((slide) => (
					<SwiperSlide key={slide.id} className='home__slide'>
						<SliderImg id={slide.id} />
						{slide.content}
					</SwiperSlide>
				))}
				<div className='home__wrapper'></div>

				<div className='swiper__container'>
					<div className='swiper-pagination'></div>
				</div>
			</Swiper>
		</section>
	)
}

export default Home
