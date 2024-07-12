import { Link, NavLink } from 'react-router-dom'
import SecondaryButton from './SecondaryButton'
import { IoIosArrowDown } from 'react-icons/io'
import { FaArrowRight } from 'react-icons/fa'
import { GiHamburgerMenu } from 'react-icons/gi'

const Navbar = () => {
	const navLinks = ['Products', 'Solutions', 'Services', 'Help Center']
	return (
		<nav className="sticky top-0 z-50 flex h-20 items-center border-b bg-white py-3 font-roboto dark:bg-slate-900">
			<div className="container relative mx-auto px-7 text-sm sm:px-2">
				<div className="flex items-center justify-between">
					<div className="flex flex-shrink-0 items-center">
						<span className="text-xl font-bold xs:text-2xl sm:text-4xl dark:text-white">
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
					<div className="hidden items-center justify-center gap-4 sm:flex">
						<SecondaryButton color="blue">Log In</SecondaryButton>
						<button className="flex items-center gap-2 rounded-md bg-blue-600 px-5 py-2 text-white">
							Sign Up Free
							<FaArrowRight />
						</button>
					</div>
					<label className="cursor-pointer sm:hidden">
						<input type="checkbox" className="peer sr-only" />
						<div className="group relative flex w-full">
							<GiHamburgerMenu className="size-7" />
							<ul className="absolute -right-10 top-10 z-50 ml-14 hidden w-screen flex-col items-center justify-center bg-white text-xl font-medium tracking-wide shadow-xl transition-all duration-150 ease-in-out peer-checked:group-[]:flex sm:space-x-12">
								{navLinks.map((link) => (
									<li key={link} className="duration-50 flex h-14 w-full justify-center transition-colors ease-in-out hover:bg-gray-400 hover:text-white peer-checked:group-[]:flex">
										<button className="flex items-center gap-2">
											{link}
											<IoIosArrowDown className="hidden sm:block" />
										</button>
									</li>
								))}
								<li className="duration-50 flex h-14 w-full items-center justify-center transition-colors ease-in-out hover:bg-gray-400 hover:text-white">
									<NavLink to="/payment">Pricing</NavLink>
								</li>
							</ul>
						</div>
					</label>
				</div>
			</div>
		</nav>
	)
}

export default Navbar
