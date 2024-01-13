import {motion} from 'framer-motion'

export default function GalleryButtons() {
	return (
		<>
			<motion.div whileHover={{opacity: 0.6}} className='gallery_prev gallery-nav'>
				<img src='img/icons/rooms/arrow.svg' alt='galleryButton' />
			</motion.div>
			<motion.div whileHover={{opacity: 0.6}} className='gallery_next gallery-nav'>
				<img src='img/icons/rooms/arrow.svg' alt='galleryButton' />
			</motion.div>
		</>
	)
}
