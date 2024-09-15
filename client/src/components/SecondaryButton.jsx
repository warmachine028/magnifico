import { FaArrowRight } from 'react-icons/fa'
import { cn } from '../lib'
const colors = { white: '#ffffff', blue: '#2563eb' }

const SecondaryButton = ({ color, arrow, children }) => {
	const iconColor = colors[color]
	const textColor = color === 'white' && 'text-white'
	return (
		<button className="mr-4 flex items-center gap-2">
			<p className={cn('text-[#2563eb]', textColor)}>{children}</p>
			{arrow && <FaArrowRight color={iconColor} />}
		</button>
	)
}

export default SecondaryButton
