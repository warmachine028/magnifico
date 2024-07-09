import React from 'react'
import { Mountain } from '../assets'

const DestinationCard = () => {
  return (
		<div className="flex flex-col border ">
			<div className="flex flex-col p-2">
				<img className="w-[352px] h-[198px] rounded-lg" src={Mountain} alt="" />
			</div>
			<div className="p-2 font-['Open_Sans'] ">
				<h6>
					<span>4.9</span>
					(4.5k) . catagory
				</h6>
				<h6>Amsterdam open boat canal cruise - Live Guiye - from Anne Frank Housef</h6>
				<h6>ticket type - variant</h6>
				<h6>date, month , date</h6>
				<p>Duration: duration</p>
				<h6>time</h6>
				<p>Opreating hours: time to time</p>
				<h6>5 guests</h6>
				<hr className="border-dashed" />
				<div className="flex gap-32 mt-5">
					<h6 className="underline">View payment summary</h6>
					<box-icon name="plus"></box-icon>
				</div>
				<div className="bg-green-300 w-1/2">
					<p className="pl-6">Your saved price</p>
				</div>
			</div>
		</div>
  )
}

export default DestinationCard