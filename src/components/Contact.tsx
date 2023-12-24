export default function Contact() {
	return (
		<section className='contact'>
			<div className='contact__container'>
				<div className='contact__left'>
					<h2 className='contact__title title'>Контакты</h2>
					<h3 className='contact__subtitle'>
						Вы всегда можете связаться с нами, используя следующие контактные
						данные:
					</h3>
					<h3 className='contact__subtitle'>
						Адрес: Амурская обл., г. Белогорск, ул. 1-ая Вокзальная 13
					</h3>
					<h3 className='contact__subtitle'>Телефон: +7 (914) 040-40-15</h3>
					<h3 className='contact__subtitle'>
						Электронная почта: <span>info@versale-hotel.com</span>
					</h3>
					<h3 className='contact__subtitle'>
						Электронная почта бухгалтерии: ooo_magnolia_bel@mail.ru
					</h3>
				</div>
				<div className='contact__right'>
					<a href='/'>
						<img className='contact__img' src='img/map/1.svg' alt='' />
					</a>
				</div>
			</div>
		</section>
	)
}
