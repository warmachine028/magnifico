import { FaArrowRight } from 'react-icons/fa'

const colors = { white: '#ffffff', blue: '#2563eb' }

const SecondaryButton = ({ color, arrow, children }) => {
	const iconColor = colors[color]
	const textColor = `text-[${iconColor}]`
	return (
		<button className="mr-4 flex items-center gap-2">
			<p className={textColor}>{children}</p>
			{arrow && <FaArrowRight color={iconColor} />}
		</button>
	)
}

export default SecondaryButton
