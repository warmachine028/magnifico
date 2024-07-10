import { Link, NavLink } from 'react-router-dom'
import SecondaryButton from './SecondaryButton'
import { IoIosArrowDown } from 'react-icons/io'
import { FaArrowRight } from 'react-icons/fa'

const Navbar = () => {
	const navLinks = ['Products', 'Solutions', 'Services', 'Help Center']
	return (
		<nav className="sticky top-0 z-50 flex h-20 items-center border-b bg-white py-3 font-roboto">
			<div className="container relative mx-auto px-7 text-sm sm:px-2">
				<div className="flex items-center justify-between">
					<div className="flex flex-shrink-0 items-center">
						<span className="text-xl font-bold xs:text-2xl sm:text-4xl">
							<Link to="/">magnifico</Link>
						</span>
					</div>
					<ul className="ml-14 hidden space-x-12 font-medium tracking-wide lg:flex">
						{navLinks.map((link) => (
							<li key={link}>
								<button className="flex items-center gap-2">
									{link}
									<IoIosArrowDown />
								</button>
							</li>
						))}
						<li className="flex items-center">
							<NavLink to="/payment">Pricing</NavLink>
						</li>
					</ul>
					<div className="hidden items-center justify-center gap-4 sm:flex">
						<SecondaryButton color="blue">Log In</SecondaryButton>
						<button className="flex items-center gap-2 rounded-md bg-blue-600 px-5 py-2 text-white">
							Sign Up Free
							<FaArrowRight />
						</button>
					</div>
					<button className="sm:hidden">
						<box-icon style={{ width: '38px', height: 100 }} name="menu"></box-icon>
					</button>
				</div>
			</div>
		</nav>
	)
}

export default Navbar
