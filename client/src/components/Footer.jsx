import { Link } from 'react-router'

const Footer = () => {
	const footerLinks = ['Terms', 'Privacy', 'Support', 'About']
	return (
		<footer className="font-roboto px-4 py-12 sm:py-28 dark:bg-slate-900">
			<div className="mx-auto flex flex-col justify-between md:container md:flex-row">
				<div className="flex flex-col items-start sm:flex-row sm:items-center sm:gap-2">
					<strong className="py-2 text-xl dark:text-white">
						<Link to="/">magnifico</Link>
					</strong>
					<h6 className="text-gray-800 dark:text-gray-400">@ 2023. All rights reserved.</h6>
				</div>
				<div className="my-6 flex justify-between sm:gap-5 dark:text-gray-400">
					{footerLinks.map((footerLink, i) => (
						<Link to="#" key={i}>
							{footerLink}
						</Link>
					))}
					<Link className="hidden sm:block dark:text-gray-400" to="#">
						Resources
					</Link>
					<Link to="#">Contact</Link>
				</div>
			</div>
		</footer>
	)
}

export default Footer
