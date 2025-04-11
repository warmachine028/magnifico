import { FaMoon } from 'react-icons/fa'
import { IoSunnySharp } from 'react-icons/io5'

const ThemeFAB = ({ toggle, isDarkMode }) => {
	return (
		<button
			id="theme-toggle-switch"
			onClick={toggle}
			className="fixed bottom-9 end-5 z-50 float-start flex size-10 cursor-pointer items-center justify-center rounded-full bg-neutral-900 text-white sm:bottom-20 sm:end-20 sm:h-14 sm:w-14 dark:bg-white dark:text-black"
		>
			{isDarkMode ? <IoSunnySharp /> : <FaMoon />}
		</button>
	)
}

export default ThemeFAB
