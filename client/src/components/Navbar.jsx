import { Link, NavLink } from 'react-router'
import { IoIosArrowDown } from 'react-icons/io'
import { FaArrowRight } from 'react-icons/fa'
import SecondaryButton from './SecondaryButton'
import Dropdown from './Dropdown'

const Navbar = () => {
	const navLinks = ['Products', 'Solutions', 'Services', 'Help Center']
	return (
		<nav className="font-roboto sticky top-0 z-50 flex h-20 items-center border-b bg-white py-3 xl:px-8 dark:bg-slate-900">
			<div className="relative mx-auto w-full px-7 text-sm md:container sm:static sm:px-2">
				<div className="flex items-center justify-between">
					<div className="flex flex-shrink-0 items-center">
						<span className="xs:text-2xl text-xl font-bold lg:text-4xl dark:text-white">
							<Link to="/">magnifico</Link>
						</span>
					</div>
					<ul className="ml-14 hidden space-x-12 font-medium tracking-wide lg:flex dark:text-white">
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
					<div className="hidden items-center justify-center gap-4 lg:flex">
						<SecondaryButton color="blue">Log In</SecondaryButton>
						<button className="flex items-center gap-2 rounded-md bg-blue-600 px-5 py-2 text-white">
							Sign Up Free
							<FaArrowRight />
						</button>
					</div>
					<Dropdown links={navLinks} />
				</div>
			</div>
		</nav>
	)
}

export default Navbar
