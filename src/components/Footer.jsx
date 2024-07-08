import { Link } from "react-router-dom"

const Footer = () => {
	const footerLinks = ['Terms', 'Privacy', 'Support', 'About', 'Resources', 'Contact']
	return (
		<footer className="container px-2 mx-auto sm:py-20">
			<div className="sm:flex justify-between hidden">
				<h6>
					<strong className="text-lg">magnifico</strong>
					<span className="text-gray-800"> @ 2023. All rights reserved.</span>
				</h6>
				<div className="flex gap-10 text-gray-800">
					{footerLinks.map((footerLink, i) => (
						<Link to="#" key={i}>
							{footerLink}
						</Link>
					))}
				</div>
			</div>
			<div className="flex flex-col sm:hidden ml-5">
				<strong className="mt-10 text-lg">magnifico</strong>
				<h6 className="mt-2 text-gray-800">@ 2023. All rights reserved.</h6>
				<div className="flex gap-5 text-gray-800 my-6">
					{footerLinks.map((footerLink, i) => (
						<Link to="#" key={i}>
							{footerLink}
						</Link>
					))}
				</div>
			</div>
		</footer>
	)
}

export default Footer
