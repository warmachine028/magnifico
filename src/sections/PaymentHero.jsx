import { BsInfoCircleFill } from 'react-icons/bs'
import { FaGlobeAmericas, FaPhoneAlt, FaRegEnvelope, FaUser } from 'react-icons/fa'
import { IoIosArrowDown } from 'react-icons/io'

const PaymentHero = () => {
	return (
		<section id="paymenthero" className="my-8">
			<h1 className="text-6xl font-extrabold">Confirm & pay</h1>
			<div className="my-16 flex justify-between rounded-2xl p-5 ring-1 ring-gray-300">
				<h6 className="text-gray-600">
					<strong className="font-semibold text-black">Free cancellation</strong>
					<br />
					Tickets can be cancelled by 13th December, 2022.
				</h6>
				<BsInfoCircleFill color="gray" className="cursor-pointer" />
			</div>
			<h6 className="mt-10 text-3xl font-medium">Enter your details</h6>
			<p className="py-5 text-xl font-light text-gray-700">We'll be sending your tickets to the details below. Booking for a friend? Add their details.</p>
			<form className="pt-8">
				<div className="relative w-full">
					<div className="pointer-events-none absolute inset-y-0 start-0 flex items-center ps-3.5">
						<FaUser color="gray" />
					</div>
					<input type="text" className="m-0 h-14 w-full appearance-none rounded-2xl px-4 ps-10 text-gray-400 ring-1 ring-gray-300" placeholder="Full name" autoComplete="name" required />
				</div>
				<div className="flex flex-row gap-4 pt-4">
					<div className="relative w-1/2">
						<div className="pointer-events-none absolute inset-y-0 start-0 flex items-center ps-3.5">
							<FaGlobeAmericas color="gray" />
						</div>
						<div className="pointer-events-none absolute inset-y-0 end-0 flex items-center pe-3.5">
							<IoIosArrowDown color="gray" />
						</div>
						<select type="text" id="input-group-1" className="h-14 w-full appearance-none rounded-2xl px-4 ps-10 text-gray-400 ring-1 ring-gray-300" autoComplete="country" defaultValue="Country code" required>
							<option disabled>Country code</option>
						</select>
					</div>
					<div className="relative w-1/2">
						<div className="pointer-events-none absolute inset-y-0 start-0 flex items-center ps-3.5">
							<FaPhoneAlt color="gray" />
						</div>
						<input type="text" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" inputMode="numeric" className="m-0 h-14 w-full appearance-none rounded-2xl px-4 ps-10 text-gray-400 ring-1 ring-gray-300" placeholder="Phone number" autoComplete="tel" required />
					</div>
				</div>
				<div className="flex flex-row gap-4 py-4">
					<div className="relative w-1/2">
						<div className="pointer-events-none absolute inset-y-0 start-0 flex items-center ps-3.5">
							<FaRegEnvelope color="gray" />
						</div>
						<input type="email" className="h-14 w-full rounded-2xl px-4 ps-10 text-gray-400 ring-1 ring-gray-300" placeholder="Email" autoComplete="email" required />
					</div>
					<div className="relative w-1/2">
						<div className="pointer-events-none absolute inset-y-0 start-0 flex items-center ps-3.5">
							<FaRegEnvelope color="gray" />
						</div>
						<input type="email" className="h-14 w-full rounded-2xl px-4 ps-10 text-gray-400 ring-1 ring-gray-300" placeholder="Confirm email" autoComplete="email" required />
					</div>
				</div>
			</form>
		</section>
	)
}

export default PaymentHero
