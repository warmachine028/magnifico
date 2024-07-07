import { Link } from "react-router-dom"

const Footer = () => {
	const footerLinks = ['Teams', 'Privacy', 'Support', 'About', 'Resources', 'Contact']
	return (
		<footer className="container px-2 mx-auto py-20">
			<div className="flex justify-between">
				<h6>
					<strong>magnifico</strong> @ 2023. All rights reserved.
				</h6>
				<div className="flex gap-10">
					{footerLinks.map((footerLink, i) => (
						<Link to="#" key={i}>{footerLink}</Link>
					))}
				</div>
			</div>
		</footer>
	)
}

export default Footer
