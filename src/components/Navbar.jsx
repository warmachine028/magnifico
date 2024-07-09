import { Link, NavLink } from 'react-router-dom'
import 'boxicons'
import SecondaryButton from './SecondaryButton'

const Navbar = () => {
	const navLinks = ['Products', 'Solutions', 'Services', 'Help Center']
	return (
		<nav className="sticky top-0 z-50 py-3 border-b h-20 flex items-center font-['Roboto'] bg-white">
			<div className="container sm:px-2 mx-auto relative text-sm px-7">
				<div className="flex justify-between items-center">
					<div className="flex items-center flex-shrink-0">
						<span className="sm:text-4xl xs:text-2xl text-xl font-bold ">
							<Link to="/">magnifico</Link>
						</span>
					</div>
					<ul className="hidden lg:flex ml-14 space-x-12 font-medium tracking-wide">
						{navLinks.map((link) => (
							<li key={link}>
								<button className="flex items-center gap-2">
									{link}
									<box-icon name="chevron-down" />
								</button>
							</li>
						))}
						<li className="flex items-center">
							<NavLink to="/payment">Pricing</NavLink>
						</li>
					</ul>
					<div className="sm:flex justify-center gap-4 items-center hidden ">
						<SecondaryButton color="blue">Log In</SecondaryButton>
						<button className="bg-blue-600 py-2 px-5 rounded-md text-white flex items-center gap-2">
							Sign Up Free
							<box-icon name="right-arrow-alt" color="#ffffff" />
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
