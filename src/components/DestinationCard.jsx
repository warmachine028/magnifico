import { PiPiggyBankFill, PiTicketFill } from 'react-icons/pi'
import { Mountain } from '../assets'
import { FaCalendar, FaPlus, FaStar } from 'react-icons/fa'
import { HiClock } from 'react-icons/hi'
import { FaUserGroup } from 'react-icons/fa6'
import { BsInfoCircleFill } from 'react-icons/bs'
import { Link } from 'react-router-dom'

const DestinationCard = () => {
	return (
		<aside className="flex max-h-[750px] max-w-sm flex-col rounded-xl border p-2">
			<div className="flex flex-col p-1">
				<img className="h-48 w-96 rounded-lg" src={Mountain} alt="Mountain" />
			</div>
			<div className="p-2">
				<h6 className="flex items-center font-light text-gray-500">
					<FaStar className="text-red-600" />
					<span className="px-1 font-semibold text-black">4.9</span>
					(4.5k) . category
				</h6>
				<h6 className="pb-4 pt-2 font-semibold">Amsterdam open boat canal cruise - Live Guiye - from Anne Frank Housef</h6>
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
					<Link to="#" className="text-gray-700 underline decoration-gray-400">
						View payment summary
					</Link>
					<FaPlus className="text-gray-700" />
				</div>
				<hr />
				<div className="flex items-center justify-between">
					<h6 className="py-4 font-semibold">Total payable</h6>
					<h6 className="font-semibold">$XXX</h6>
				</div>
				<div className="flex w-40 items-center justify-center rounded-xl bg-green-200">
					<PiPiggyBankFill className="text-green-600" />
					<p className="p-1 text-sm text-green-700">You saved price</p>
				</div>
				<div className="flex items-center gap-2 py-4">
					<p className="text-sm text-gray-700 underline decoration-gray-400">You will be charged in AED</p>
					<BsInfoCircleFill color="gray" className="cursor-pointer" />
				</div>
			</div>
		</aside>
	)
}

export default DestinationCard
