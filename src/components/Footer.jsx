import { Link } from 'react-router-dom'

const Footer = () => {
	const footerLinks = ['Terms', 'Privacy', 'Support', 'About']
	return (
		<footer className="container px-4 sm:px-0 py-6 mx-auto sm:py-20">
			<div className=" flex flex-col sm:flex-row justify-between">
				<div className="flex flex-col sm:flex-row sm:gap-2 items-start sm:items-center">
					<strong className="py-2 text-xl">
						<Link to="/">magnifico</Link>
					</strong>
					<h6 className="text-gray-800">@ 2023. All rights reserved.</h6>
				</div>
				<div className="flex justify-between text-gray-600 my-6 sm:gap-5">
					{footerLinks.map((footerLink, i) => (
						<Link to="#" key={i}>
							{footerLink}
						</Link>
					))}
					<Link className="hidden sm:block" to="#">
						Resources
					</Link>
					<Link to="#">Contact</Link>
				</div>
			</div>
		</footer>
	)
}

export default Footer
