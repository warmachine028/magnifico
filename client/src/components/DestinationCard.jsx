import { PiInfoBold, PiPiggyBankFill, PiTicketFill } from 'react-icons/pi'
import { Mountain } from '../assets'
import { FaCalendar, FaPlus, FaStar } from 'react-icons/fa'
import { HiClock } from 'react-icons/hi'
import { FaUserGroup } from 'react-icons/fa6'
import { Link } from 'react-router-dom'
import { IoIosArrowDropleftCircle, IoIosArrowDroprightCircle, IoMdTrophy } from 'react-icons/io'
const DestinationCard = () => {
	return (
		<aside className="flex max-h-[750px] w-full max-w-screen-sm flex-col rounded-xl border p-2 sm:max-w-sm">
			<div className="relative flex flex-col p-1">
				<div className="absolute left-4 top-3 flex items-center gap-1 rounded-md bg-white p-2 text-sm font-medium">
					<IoMdTrophy />
					Bestseller
				</div>
				<button className="absolute start-0 top-1/2 -translate-x-0.5 -translate-y-3 transform ps-3.5 text-white transition-all hover:scale-125 sm:block">
					<IoIosArrowDropleftCircle className="size-8" />
				</button>
				<button className="absolute end-0 top-1/2 -translate-x-0.5 -translate-y-3 pe-3.5 text-white transition-all hover:scale-125 sm:block">
					<IoIosArrowDroprightCircle className="size-8" />
				</button>
				<img className="h-48 w-full rounded-lg object-cover" src={Mountain} alt="Mountain" />
			</div>
			<div className="p-2 dark:text-white">
				<h6 className="flex items-center font-light text-gray-500">
					<FaStar className="text-red-600" />
					<span className="px-1 font-semibold text-black dark:text-white">4.9</span>
					(4.5k) . category
				</h6>
				<h6 className="pb-4 pt-2 font-semibold">
					Amsterdam open boat canal cruise - Live Guiye - from Anne Frank Housef
				</h6>
				<div className="flex items-center gap-2">
					<PiTicketFill />
					<h6 className="font-semibold">ticket type - variant</h6>
				</div>
				<div className="flex items-center gap-2 pt-3">
					<FaCalendar />
					<h6 className="font-semibold">date, month date</h6>
				</div>
				<p className="pl-6 text-sm font-light text-gray-500">Duration: duration</p>
				<div className="flex items-center gap-2 pt-3">
					<HiClock />
					<h6 className="font-semibold">time</h6>
				</div>
				<p className="pl-6 text-sm font-light text-gray-500">Opreating hours: time to time</p>
				<div className="flex items-center gap-2 pb-4 pt-3">
					<FaUserGroup />
					<h6 className="font-semibold">5 guests</h6>
				</div>
				<hr className="border-dashed" />
				<div className="my-6 flex items-center justify-between">
					<Link to="#" className="text-gray-700 underline decoration-gray-400 dark:text-gray-400">
						View payment summary
					</Link>
					<FaPlus className="cursor-pointer text-gray-700" />
				</div>
				<hr />
				<div className="flex items-center justify-between">
					<h6 className="py-4 font-semibold">Total payable</h6>
					<h6 className="font-semibold">$XXX</h6>
				</div>
				<div className="flex w-40 items-center justify-center rounded-xl bg-green-200 dark:bg-green-400">
					<PiPiggyBankFill className="text-green-600 dark:text-green-700" />
					<p className="p-1 text-sm text-green-700 dark:text-green-700">You saved price</p>
				</div>
				<div className="flex items-center gap-2 py-4">
					<Link to="#" className="text-sm text-gray-700 underline decoration-gray-400 dark:text-gray-400">
						You will be charged in AED
					</Link>
					<div className="group relative">
						<PiInfoBold className="size-5 cursor-pointer text-gray-500" />
						<span className="absolute bottom-3 m-2 w-52 min-w-10 scale-0 break-words rounded-md bg-gray-100 p-2 text-xs font-medium text-gray-600 shadow-md transition-all duration-100 group-hover:scale-100">
							The amount you will be required to pay for a product or service will be calculated and
							billed in the currency of the United Arab Emirates
						</span>
					</div>
				</div>
			</div>
		</aside>
	)
}

export default DestinationCard
