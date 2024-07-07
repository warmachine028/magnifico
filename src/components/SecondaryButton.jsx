const colors = { white: '#ffffff', blue: '#2563eb' }

const SecondaryButton = ({ color, arrow, children }) => {
	const iconColor = colors[color]
	const textColor = `text-[${iconColor}]`
	return (
		<button className="flex items-center mr-4 gap-2">
			<p className={textColor}>{children}</p>
			{arrow && <box-icon name="right-arrow-alt" color={iconColor} />}
		</button>
	)
}

export default SecondaryButton
