import About from './components/About.tsx'
import Cafe from './components/Cafe.tsx'
import Contact from './components/Contact.tsx'
import Footer from './components/Footer.tsx'
import Header from './components/Header.tsx'
import Home from './components/Home.tsx'
import {Rooms} from './components/Rooms.tsx'

function App() {
	return (
		<>
			<Header />
			<main>
				<Home />
				<About />
				<Rooms />
				<Cafe />
				<Contact />
			</main>
			<Footer />
		</>
	)
}

export default App
