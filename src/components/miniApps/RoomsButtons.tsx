import {motion} from 'framer-motion'

export default function RoomsButtons() {
	return (
		<>
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
		</>
	)
}
