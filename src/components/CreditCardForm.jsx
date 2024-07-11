import { DinersClub, MasterCard, Visa } from '../assets'
import { PiInfoBold, PiPiggyBankFill } from 'react-icons/pi'
import { MdLock } from 'react-icons/md'
import { IoMdCard } from 'react-icons/io'
import { Link } from 'react-router-dom'
import { CiCalendarDate } from 'react-icons/ci'
import { LuCalendarX } from 'react-icons/lu'
import { TbNumber123 } from 'react-icons/tb'
import { FaUser } from 'react-icons/fa'

const CreditCardForm = () => {
	return (
		<form>
			<div className="flex items-center gap-4">
				<label className="my-6 flex h-6 w-12 cursor-pointer items-center justify-center rounded-md ring-1 ring-gray-400 transition-colors has-[:checked]:bg-blue-200 has-[:checked]:ring-black">
					<input type="radio" name="selecdcard" className="peer sr-only" />
					<img src={Visa} className="transition-colors peer-checked:bg-blue-200" alt="Visa" />
				</label>
				<label className="my-6 flex h-6 w-12 cursor-pointer items-center justify-center rounded-md ring-1 ring-gray-400 transition-colors has-[:checked]:bg-blue-200 has-[:checked]:ring-black">
					<input type="radio" name="selecdcard" className="peer sr-only" />
					<img src={MasterCard} className="transition-colors peer-checked:bg-blue-200" alt="MasterCard" />
				</label>
				<label className="my-6 flex h-6 w-12 cursor-pointer items-center justify-center rounded-md ring-1 ring-gray-400 transition-colors has-[:checked]:bg-blue-200 has-[:checked]:ring-black">
					<input type="radio" name="selecdcard" className="peer sr-only" />
					<img src={DinersClub} className="transition-colors peer-checked:bg-blue-200" alt="DinersClub" />
				</label>
			</div>
			<div>
				<div className="flex flex-col gap-4 pt-4">
					<div className="flex flex-col gap-4 pt-4 sm:flex-row">
						<div className="relative w-full sm:w-1/2">
							<div className="pointer-events-none absolute inset-y-0 start-0 flex items-center ps-3.5">
								<FaUser className="size-5 text-gray-600" />
							</div>
							<input className="h-14 w-full rounded-2xl px-4 ps-10 text-gray-400 ring-1 ring-gray-400" placeholder="Name on card" required autoComplete="cc-name" type="text" />
						</div>
						<div className="relative w-full sm:w-1/2">
							<div className="pointer-events-none absolute inset-y-0 start-0 flex items-center ps-3.5">
								<IoMdCard className="size-5 text-gray-600" />
							</div>
							<input type="numeric" className="h-14 w-full rounded-2xl px-4 ps-10 text-gray-400 ring-1 ring-gray-400" placeholder="Card Number" autoComplete="cc-number" required />
						</div>
					</div>
					<div className="flex flex-col gap-4 sm:flex-row sm:pt-4">
						<div className="relative w-full sm:w-1/2">
							<div className="pointer-events-none absolute inset-y-0 start-0 flex items-center ps-3.5">
								<LuCalendarX className="size-5 text-gray-600" />
							</div>
							<input className="h-14 w-full rounded-2xl px-4 ps-10 text-gray-400 ring-1 ring-gray-400" placeholder="Expiry date" type="text" required autoComplete="cc-exp" />
						</div>
						<div className="relative w-full sm:w-1/2">
							<div className="pointer-events-none absolute inset-y-0 start-0 flex items-center ps-3.5">
								<TbNumber123 className="size-5 text-gray-600" />
							</div>
							<input className="h-14 w-full rounded-2xl px-4 ps-10 text-gray-400 ring-1 ring-gray-400" autoComplete="cc-csc" placeholder="CVV/CVC" required type="text" />
						</div>
					</div>
				</div>
				<hr className="my-8" />
				<div className="flex flex-col-reverse gap-3 sm:flex-row sm:items-center sm:justify-between">
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
					<div className="relative">
						<PiInfoBold className="peer size-5 cursor-pointer text-gray-500" />
						<span className="absolute bottom-3 m-2 w-48 scale-0 rounded-md bg-gray-100 p-2 text-xs font-medium text-gray-600 shadow-md transition-all duration-100 peer-hover:scale-100">The amount you will be required to pay for a product or service will be calculated and billed in the currency of the United Arab Emirates</span>
					</div>
				</div>
				<p className="text-sm text-gray-500 sm:text-lg">
					By clicking “confirm & pay”, you agree to{' '}
					<Link to="#" className="text-blue-700 underline decoration-blue-600">
						Ticket’s general terms and conditions
					</Link>{' '}
					and{' '}
					<Link to="#" className="text-blue-700 underline decoration-blue-600">
						cancellation policy
					</Link>
					.
				</p>

				<div className="mt-4 flex justify-center sm:justify-start">
					<button type="submit" className="my-6 flex w-full items-center justify-center gap-2 rounded-2xl bg-blue-600 px-10 py-4 text-lg font-semibold text-white shadow-md sm:flex sm:w-max">
						<MdLock />
						Confirm & pay
					</button>
				</div>
			</div>
		</form>
	)
}

export default CreditCardForm
