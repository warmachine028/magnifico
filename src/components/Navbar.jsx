import { Link, NavLink } from 'react-router-dom'
import 'boxicons'
import SecondaryButton from './SecondaryButton'

const Navbar = () => {
	const navLinks = ['Products', 'Solutions', 'Services', 'Help Center']
	return (
		<nav className="sticky top-0 z-50 py-3 border-b h-20 flex items-center bg-white">
			<div className="container px-2 mx-auto relative text-sm">
				<div className="flex justify-between items-center">
					<div className="flex items-center flex-shrink-0">
						<span className="text-2xl font-bold ">
							<Link to="/">
							magnifico
							</Link>
						</span>
					</div>
					<ul className="hidden lg:flex ml-14 space-x-12 font-medium tracking-wide">
						{navLinks.map((link) => (
							<li className="flex items-center gap-2" key={link}>
								{link}
								<box-icon name="chevron-down"/>
							</li>
						))}
						<li className="flex items-center">
							<NavLink to="/payment">Pricing</NavLink>
						</li>
					</ul>
					<div className="flex justify-center gap-4 items-center">
						<SecondaryButton color="blue">
							Log In
						</SecondaryButton>
						<button className="bg-blue-600 py-2 px-5 rounded-md text-white flex items-center gap-2">
							Sign Up Free
							<box-icon name="right-arrow-alt" color="#ffffff"/>
						</button>
					</div>
				</div>
			</div>
		</nav>
	)
}

export default Navbar
