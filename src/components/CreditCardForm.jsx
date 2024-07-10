import { DinersClub, MasterCard, Visa } from '../assets'
import { PiPiggyBankFill } from 'react-icons/pi'
import { BsInfoCircleFill } from 'react-icons/bs'
import { MdLock } from 'react-icons/md'
import { IoMdCard } from 'react-icons/io'
import { Link } from 'react-router-dom'

const CreditCardForm = () => {
	return (
		<form className="">
			<div className="flex items-center gap-4">
				<div className="my-6 flex h-6 w-10 items-center justify-center rounded-md border">
					<img src={Visa} alt="Visa" />
				</div>
				<div className="flex h-6 w-10 items-center justify-center rounded-md border">
					<img src={MasterCard} alt="MasterCard" />
				</div>
				<div className="flex h-6 w-10 items-center justify-center rounded-md border">
					<img src={DinersClub} alt="DinersClub" />
				</div>
			</div>
			<div>
				<div className="flex flex-col gap-4 pt-4">
					<div className="flex flex-row gap-4 pt-4">
						<input className="h-14 w-1/2 rounded-2xl px-4 ring-1 ring-gray-400 after:ml-0.5 after:text-red-500 placeholder:after:content-['*']" placeholder="Name on card" required autoComplete="cc-name" type="text" />
						<div className="relative w-1/2">
							<div className="pointer-events-none absolute inset-y-0 start-0 flex items-center ps-3.5">
								<IoMdCard className="text-gray-600" />
							</div>
							<input type="email" className="h-14 w-full rounded-2xl px-4 ps-10 text-gray-400 ring-1 ring-gray-400" placeholder="Card Number" autoComplete="cc-number" required />
						</div>
					</div>
					<div className="flex flex-row gap-4 pt-4">
						<input className="h-14 w-1/2 rounded-2xl px-4 ring-1 ring-gray-400 after:ml-0.5 after:text-red-500 placeholder:after:content-['*']" placeholder="Expiry date" required autoComplete="cc-exp" type="text" />
						<input className="h-14 w-1/2 rounded-2xl px-4 ring-1 ring-gray-400 after:ml-0.5 after:text-red-500 placeholder:after:content-['*']" autoComplete="cc-csc" placeholder="CVV/CVC" required type="text" />
					</div>
				</div>
				<hr className="my-8" />
				<div className="flex items-center justify-between">
					<h6>Total Payable: $XXX</h6>
					<div className="flex w-40 items-center justify-center rounded-xl bg-green-600 text-white">
						<PiPiggyBankFill />
						<p className="p-1 text-sm">You saved price</p>
					</div>
				</div>
				<div className="flex items-center gap-2 py-4">
					<Link to="#" className="text-sm text-gray-700 underline decoration-gray-400">
						You will be charged in AED
					</Link>
					<BsInfoCircleFill color="gray" className="cursor-pointer" />
				</div>
				<p className="text-gray-500">
					By clicking “confirm & pay”, you agree to
					<Link to="#" className="text-blue-700 underline decoration-blue-600">
						Ticket’s general terms and conditions
					</Link>
					and
					<Link to="#" className="text-blue-700 underline decoration-blue-600">
						cancellation policy
					</Link>
					.
				</p>
				<button type="submit" className="my-6 flex items-center justify-center gap-2 rounded-lg bg-blue-600 pb-4 pl-11 pr-11 pt-4 text-lg font-semibold text-white shadow-md sm:pb-3 sm:pl-10 sm:pr-10 sm:pt-3">
					<MdLock />
					Confirm & Pay
				</button>
			</div>
		</form>
	)
}

export default CreditCardForm
