import { useState } from 'react'
import { AppRouter, Footer, Navbar } from './components'
import { IoSunnySharp } from 'react-icons/io5'
import { FaMoon } from 'react-icons/fa'
import { BrowserRouter } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'

const Magnifico = () => {
	const [darkMode, setDarkMode] = useState(false)

	const toggleDarkMode = () => setDarkMode((darkMode) => !darkMode)
	return (
		<div className={`${darkMode && 'dark'}`}>
			<Navbar />
			<AppRouter />
			<button
				onClick={toggleDarkMode}
				className="fixed bottom-9 end-5 z-50 float-start flex size-10 items-center justify-center rounded-full bg-neutral-900 text-white sm:bottom-20 sm:end-20 sm:h-14 sm:w-14 dark:bg-white dark:text-black"
			>
				{darkMode ? <IoSunnySharp /> : <FaMoon />}
			</button>
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
