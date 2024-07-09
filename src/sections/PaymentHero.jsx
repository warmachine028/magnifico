import { BsInfoCircleFill } from 'react-icons/bs'
import { FaGlobeAmericas, FaPhoneAlt, FaRegEnvelope } from 'react-icons/fa'

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
				<BsInfoCircleFill color="gray" />
			</div>
			<h6 className="mt-10 text-3xl font-medium">Enter your details</h6>
			<p className="py-5 font-light text-xl text-gray-700">We'll be sending your tickets to the details below. Booking for a friend? Add their details.</p>
			<form className="pt-8">
				<input className="ring-1 ring-gray-300 rounded-2xl px-4 w-full h-14 placeholder:after:content-['*'] after:ml-0.5 after:text-red-500" placeholder="Full name" required type="text" />
				<div className="flex flex-row pt-4 gap-4">
					<div class="relative w-1/2">
						<div class="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
							<FaGlobeAmericas color="gray" />
						</div>
						<select type="text" id="input-group-1" className="w-full ps-10 text-gray-400  ring-1 ring-gray-300 rounded-2xl px-4 h-14" name="Country code" autoComplete required>
							<option disabled selected value="">
								Country code
							</option>
						</select>
					</div>
					<div class="relative w-1/2">
						<div class="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
							<FaPhoneAlt color="gray" />
						</div>
						<input type="number" className="w-full ps-10 text-gray-400  ring-1 ring-gray-300 rounded-2xl px-4 h-14" placeholder="Phone number" autoComplete required />
					</div>
				</div>
				<div className="flex flex-row py-4 gap-4">
					<div class="relative w-1/2">
						<div class="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
							<FaRegEnvelope color="gray" />
						</div>
						<input type="email" className="w-full ps-10 text-gray-400  ring-1 ring-gray-300 rounded-2xl px-4 h-14" placeholder="Email" autoComplete required />
					</div>
					<div class="relative w-1/2">
						<div class="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
							<FaRegEnvelope color="gray" />
						</div>
						<input type="email" className="w-full ps-10 text-gray-400  ring-1 ring-gray-300 rounded-2xl px-4 h-14" placeholder="Confirm email" autoComplete required />
					</div>
				</div>
			</form>
		</section>
	)
}

export default PaymentHero
