import { Link } from 'react-router-dom'

const Footer = () => {
	const footerLinks = ['Terms', 'Privacy', 'Support', 'About']
	return (
		<footer className="mx-auto px-4 py-12 font-roboto dark:bg-slate-900 sm:px-48 sm:py-28">
			<div className="flex flex-col justify-between sm:flex-row">
				<div className="flex flex-col items-start sm:flex-row sm:items-center sm:gap-2">
					<strong className="py-2 text-xl dark:text-white">
						<Link to="/">magnifico</Link>
					</strong>
					<h6 className="text-gray-800 dark:text-gray-400">@ 2023. All rights reserved.</h6>
				</div>
				<div className="my-6 flex justify-between dark:text-gray-400 sm:gap-5">
					{footerLinks.map((footerLink, i) => (
						<Link to="#" key={i}>
							{footerLink}
						</Link>
					))}
					<Link className="hidden dark:text-gray-400 sm:block" to="#">
						Resources
					</Link>
					<Link to="#">Contact</Link>
				</div>
			</div>
		</footer>
	)
}

export default Footer
