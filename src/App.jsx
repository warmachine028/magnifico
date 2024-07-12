import { useState } from 'react'
import { AppRouter, Footer, Navbar } from './components'

const App = () => {
	const [darkMode, setDarkMode] = useState(false)
	const toggleDarkMode = () => {
		setDarkMode(!darkMode)
	}
	return (
		<>
			<main className={`${darkMode && 'dark'}`}>
				<div className="dark:bg-slate-900">
					<Navbar />
					<AppRouter />
					<button onClick={toggleDarkMode} className="absolute right-16 h-16 w-16 rounded-full bg-neutral-900 text-white ring-1 dark:bg-white dark:text-black">
						{darkMode ? 'Light' : 'Dark'}
					</button>
					<Footer />
				</div>
			</main>
		</>
	)
}

export default App
