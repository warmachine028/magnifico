import { useState } from 'react'
import { AppRouter, Footer, Navbar } from './components'
import { IoSunnySharp } from 'react-icons/io5'
import { FaMoon } from 'react-icons/fa'
import { BrowserRouter } from 'react-router-dom'

const App = () => {
	const [darkMode, setDarkMode] = useState(false)

	const toggleDarkMode = () => {
		setDarkMode((darkMode) => !darkMode)
	}
	return (
		<BrowserRouter basename="magnifico">
		<div className={`${darkMode && 'dark'}`}>
			<Navbar />
			<AppRouter />
			<button onClick={toggleDarkMode} className="fixed bottom-9 end-5 z-50 float-start flex h-10 w-10 items-center justify-center rounded-full bg-neutral-900 text-white sm:bottom-40 sm:end-20 sm:h-14 sm:w-14 dark:bg-white dark:text-black">
				{darkMode ? <IoSunnySharp /> : <FaMoon />}
			</button>
			<Footer />
		</div>
		</BrowserRouter>
	)
}

export default App
