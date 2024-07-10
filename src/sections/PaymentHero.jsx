import { BsInfoCircleFill } from 'react-icons/bs'
import { FaGlobeAmericas, FaPhoneAlt, FaRegEnvelope, FaUser } from 'react-icons/fa'
import { IoIosArrowDown } from 'react-icons/io'

const PaymentHero = () => {
	return (
		<section id="paymenthero" className=" my-8">
			<h1 className="text-6xl font-extrabold">Confirm & pay</h1>
			<div className="ring-1 ring-gray-300 my-16 p-5 rounded-2xl flex justify-between">
				<h6 className="text-gray-600">
					<strong className="font-semibold text-black">Free cancellation</strong>
					<br />
					Tickets can be cancelled by 13th December, 2022.
				</h6>
				<BsInfoCircleFill color="gray" className="cursor-pointer" />
			</div>
			<h6 className="mt-10 text-3xl font-medium">Enter your details</h6>
			<p className="py-5 font-light text-xl text-gray-700">We'll be sending your tickets to the details below. Booking for a friend? Add their details.</p>
			<form className="pt-8">
				<div className="relative w-full">
					<div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
						<FaUser color="gray" />
					</div>
					<input type="text" className="w-full ps-10 text-gray-400  ring-1 ring-gray-300 rounded-2xl px-4 h-14 m-0 appearance-none" placeholder="Full name" autoComplete="name" required />
				</div>
				<div className="flex flex-row pt-4 gap-4">
					<div className="relative w-1/2">
						<div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
							<FaGlobeAmericas color="gray" />
						</div>
						<div className="absolute inset-y-0 end-0 flex items-center pe-3.5 pointer-events-none">
							<IoIosArrowDown color="gray" />
						</div>
						<select type="text" id="input-group-1" className="w-full appearance-none ps-10 text-gray-400  ring-1 ring-gray-300 rounded-2xl px-4 h-14" autoComplete="country" defaultValue="Country code" required>
							<option disabled>Country code</option>
						</select>
					</div>
					<div className="relative w-1/2">
						<div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
							<FaPhoneAlt color="gray" />
						</div>
						<input type="text" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" inputMode="numeric" className="w-full ps-10 text-gray-400  ring-1 ring-gray-300 rounded-2xl px-4 h-14 m-0 appearance-none" placeholder="Phone number" autoComplete="tel" required />
					</div>
				</div>
				<div className="flex flex-row py-4 gap-4">
					<div className="relative w-1/2">
						<div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
							<FaRegEnvelope color="gray" />
						</div>
						<input type="email" className="w-full ps-10 text-gray-400  ring-1 ring-gray-300 rounded-2xl px-4 h-14" placeholder="Email" autoComplete="email" required />
					</div>
					<div className="relative w-1/2">
						<div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
							<FaRegEnvelope color="gray" />
						</div>
						<input type="email" className="w-full ps-10 text-gray-400  ring-1 ring-gray-300 rounded-2xl px-4 h-14" placeholder="Confirm email" autoComplete="email" required />
					</div>
				</div>
			</form>
		</section>
	)
}

export default PaymentHero
