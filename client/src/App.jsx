import { useState } from 'react'
import { AppRouter, Footer, Navbar, ThemeFAB } from './components'
import { BrowserRouter } from 'react-router'
import { HelmetProvider } from 'react-helmet-async'

const Magnifico = () => {
	const [darkMode, setDarkMode] = useState(false)

	const toggleDarkMode = () => setDarkMode((darkMode) => !darkMode)
	return (
		<div className={`${darkMode && 'dark'}`}>
			<Navbar />
			<AppRouter />
			<ThemeFAB toggle={toggleDarkMode} isDarkMode={darkMode} />
			<Footer />
		</div>
	)
}

const App = () => {
	return (
		<HelmetProvider>
			<BrowserRouter basename="magnifico">
				<Magnifico />
			</BrowserRouter>
		</HelmetProvider>
	)
}

export default App
