import {motion} from 'framer-motion'
import {useState} from 'react'
import 'swiper/css'
import 'swiper/css/navigation'
import {GallerySlider} from './miniApps/sliders/GallerySlider'
import {RoomsSwiper} from './miniApps/sliders/RoomsSwiper'

export const Rooms = () => {
	const [parentRoomsImg, setParentRoomsImg] = useState<null | Array<string>>(
		null,
	)

	const [galleryOpen, setGalleryOpen] = useState<boolean>(false)

	const handleRoomsImgChange = (img: null | Array<string>): void => {
		setParentRoomsImg(img)
	}

	return (
		<section className='rooms'>
			<motion.div
				initial={{y: -100, opacity: 0}}
				whileInView={{y: 0, opacity: 1}}
				transition={{duration: 0.3, delay: 0.4}}
				viewport={{once: true}}
				className='rooms__container'
			>
				<div className='rooms__header'>
					<h2 className='rooms__hedaer-title title'>Номера</h2>
				</div>
				<RoomsSwiper
					setGalleryOpen={setGalleryOpen}
					onRoomsImgChange={handleRoomsImgChange}
				/>
			</motion.div>
			<GallerySlider
				parentRoomsImg={parentRoomsImg}
				setGalleryOpen={setGalleryOpen}
				galleryOpen={galleryOpen}
			/>
		</section>
	)
}
