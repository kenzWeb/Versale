import 'swiper/css/navigation'
import { Swiper, SwiperSlide } from 'swiper/react'
import roomData from '../data/roomData.json'

// const roomImg = {
// 	business: ''
// }

export const Rooms = () => {
	// const navigation = {
	// 	prevEl: '.prev',
	// 	nextEl: '.next',
	// }

	console.log(roomData);

	return (
		<section className='rooms'>
			<div className='rooms__container'>
				<div className='rooms__header'>
					<h2 className='rooms__hedaer-title title'>Номера</h2>
				</div>
				{roomData.map((item) => (
					<Swiper className='rooms__swiper'>
						<SwiperSlide className='rooms__swiper-slide'>
							<div className='rooms__content'>
								<div className='rooms__contant-left'>
									<img src={item.title} alt='' />
								</div>
							</div>
						</SwiperSlide>
					</Swiper>
				))}
			</div>
		</section>
	)
}
