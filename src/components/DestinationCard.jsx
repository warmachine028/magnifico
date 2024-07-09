import React from 'react'
import { Mountain } from '../assets'

const DestinationCard = () => {
	return (
		<aside className="flex flex-col border max-w-sm max-h-[750px] p-2 rounded-xl">
			<div className="flex flex-col p-1">
				<img className="w-96 h-48 rounded-lg" src={Mountain} alt="Mountain" />
			</div>
			<div className="p-2 font-['Open_Sans'] ">
				<h6 className="flex font-light text-gray-500">
					<box-icon name="star" type="solid" color="#ea3b3b"></box-icon>
					<span className="px-1 font-semibold text-black">4.9</span>
					(4.5k) . catagory
				</h6>
				<h6 className="font-semibold pt-2 pb-4">Amsterdam open boat canal cruise - Live Guiye - from Anne Frank Housef</h6>
				<div className="flex items-center gap-2">
					<box-icon name="receipt" type="solid" rotate="90"></box-icon>
					<h6 className="font-semibold">ticket type - variant</h6>
				</div>
				<div className="flex gap-2 pt-3">
					<box-icon name="calendar-alt" type="solid" flip="horizontal"></box-icon>
					<h6 className="font-semibold">date, month date</h6>
				</div>
				<p className="pl-8 font-light text-gray-500 text-sm">Duration: duration</p>
				<div className="flex gap-2 pt-3">
					<box-icon type="solid" name="time"></box-icon>
					<h6 className="font-semibold">time</h6>
				</div>
				<p className="text-sm font-light text-gray-500 pl-8">Opreating hours: time to time</p>
				<div className="flex gap-2 pt-3 pb-4">
					<box-icon type="solid" name="group"></box-icon>
					<h6 className="font-semibold">5 guests</h6>
				</div>
				<hr className="border-dashed" />
				<div className="flex gap-32 my-6">
					<h6 className="underline decoration-gray-400 text-gray-700">View payment summary</h6>
					<box-icon name="plus"></box-icon>
				</div>
				<hr />
				<div className="flex items-center justify-between">
					<h6 className="font-semibold py-4">Total payable</h6>
					<h6 className="font-semibold">$XXX</h6>
				</div>
				<div className="bg-green-200 w-40 rounded-xl flex items-center justify-center">
					<box-icon name="money" color="#15803d gap-2"></box-icon>
					<p className="text-green-700 text-sm p-1">You saved price</p>
				</div>
				<div className="flex items-center gap-2 py-4">
					<p className="text-gray-700 underline decoration-gray-400 text-sm">You will be charged in AFD</p>
					<box-icon name="info-circle" color="#374151"></box-icon>
				</div>
			</div>
		</aside>
	)
}

export default DestinationCard
