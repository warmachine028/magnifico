import { useState } from 'react'
import { AppRouter, Footer, Navbar } from './components'
import { IoSunnySharp } from 'react-icons/io5'
import { FaMoon } from 'react-icons/fa'

const App = () => {
	const [darkMode, setDarkMode] = useState(false)

	const toggleDarkMode = () => {
		setDarkMode((darkMode) => !darkMode)
	}
	return (
		<div className={`${darkMode && 'dark'}`}>
			<Navbar />
			<AppRouter />
			<button onClick={toggleDarkMode} className="fixed bottom-40 end-20 z-50 float-start flex h-14 w-14 items-center justify-center rounded-full bg-neutral-900 text-white ring-1 dark:bg-white dark:text-black">
				{darkMode ? <IoSunnySharp /> : <FaMoon />}
			</button>
			<Footer />
		</div>
	)
}

export default App
