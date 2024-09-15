import { IoIosArrowDown } from 'react-icons/io'
import { RxCross1, RxHamburgerMenu } from 'react-icons/rx'
import { NavLink } from 'react-router-dom'


const DropDown = ({ links }) => {
	return (
		<label className="cursor-pointer lg:hidden">
			<input type="checkbox" className="peer sr-only" />
			<div className="group flex">
				<RxHamburgerMenu className="size-7 peer-checked:group-[]:hidden dark:text-white" />
				<RxCross1 className="hidden size-7 peer-checked:group-[]:block dark:text-white" />
				<ul className="absolute right-0 md:top-14 top-10 z-50 ml-14 hidden w-screen flex-col items-center justify-center bg-white text-xl font-medium tracking-wide shadow-xl transition-all duration-150 ease-in-out peer-checked:group-[]:flex dark:bg-slate-900 dark:text-white">
					{links.map((link) => (
						<li
							key={link}
							className="duration-50 flex h-14 w-full justify-center transition-colors ease-in-out hover:bg-gray-400 hover:text-white peer-checked:group-[]:flex"
						>
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
	)
}

export default DropDown
