import Home from './Home'

export default function Main() {
	const slidesData = [
		{
			id: 1,
			content: (
				<div className='home__content'>
					<h2 className='home__title'>Ваш комфорт - <br/> наша забота </h2>
					<h3 className='home__subtitle'>
						Мы стремимся создать незабываемые впечатления и обеспечить вас всем
						необходимым для полного расслабления и уюта.
					</h3>
				</div>
			),
		},
		{
			id: 2,
			content: (
				<div className='home__content'>
					<h2 className='home__title'>Ваш комфорт - <br/> наша забота </h2>
					<h3 className='home__subtitle'>
						Мы стремимся создать незабываемые впечатления и обеспечить вас всем
						необходимым для полного расслабления и уюта.
					</h3>
				</div>
			),
		},
		{
			id: 3,
			content: (
				<div className='home__content'>
					<h2 className='home__title'>Ваш комфорт - <br/> наша забота </h2>
					<h3 className='home__subtitle'>
						Мы стремимся создать незабываемые впечатления и обеспечить вас всем
						необходимым для полного расслабления и уюта.
					</h3>
				</div>
			),
		},
		{
			id: 4,
			content: (
				<div className='home__content'>
					<h2 className='home__title'>Ваш комфорт - <br/> наша забота </h2>
					<h3 className='home__subtitle'>
						Мы стремимся создать незабываемые впечатления и обеспечить вас всем
						необходимым для полного расслабления и уюта.
					</h3>
				</div>
			),
		},
	]

	return (
		<main>
			<Home slidesData={slidesData} />
		</main>
	)
}
