import {motion} from 'framer-motion'

const Home = () => {
	return (
		<section className='home'>
			<div className='home__container'>
				<motion.h2
					initial={{
						opacity: 0,
						y: -10,
					}}
					animate={{opacity: 1, y: 0}}
					transition={{duration: 0.6, delay: 0.2}}
					className='home__title'
				>
					Ваш комфорт - <br /> наша забота{' '}
				</motion.h2>
				<motion.h3
					initial={{
						opacity: 0,
						y: 10,
					}}
					animate={{opacity: 1, y: 0}}
					transition={{duration: 0.6, delay: 0.6}}
					className='home__subtitle'
				>
					Мы стремимся создать незабываемые впечатления <br /> и обеспечить вас
					всем необходимым для полного <br /> расслабления и уюта.
				</motion.h3>
			</div>
		</section>
	)
}

export default Home
