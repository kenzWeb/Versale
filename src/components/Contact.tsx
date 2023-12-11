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
						Адрес: ул. Центральная, 15, Белогорск
					</h3>
					<h3 className='contact__subtitle'>Телефон: +7 (XXX) XXX-XXXX</h3>
					<h3 className='contact__subtitle'>
						Электронная почта: info@versale-hotel.com
					</h3>
				</div>
				<div className='contact__right'>
					<a href='/'>
						<img src='img/map/1.svg' alt='' />
					</a>
				</div>
			</div>
		</section>
	)
}
