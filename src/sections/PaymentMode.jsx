import { IoMdCard } from 'react-icons/io'
import { DinersClub, MasterCard, Visa } from '../assets'
import { PiPiggyBankFill } from 'react-icons/pi'
import { BsInfoCircleFill } from 'react-icons/bs'
import { MdLock } from 'react-icons/md'
import { Link } from 'react-router-dom'
import { FaApple } from 'react-icons/fa'

const PaymentMode = () => {
	return (
		<section id="modeofpayment" className="pt-10">
			<h6 className="mt-10 text-3xl font-medium">Select your mode of payment</h6>
			<p className="py-5 font-light text-xl text-gray-700">Payments with Tickets are secure and encrypted.</p>
			<div className="border border-slate-500  rounded-lg py-5 px-7">
				<div className="flex items-center">
					<div className="flex gap-4 items-center">
						<div className="flex items-center justify-center w-10 h-8 border rounded-md">
							<IoMdCard className="text-gray-600" />
						</div>
						<h6 className="text-xl font-medium">Credit & debit card</h6>
					</div>
				</div>
				<div className="flex gap-4 items-center">
					<div className="border w-10 h-6 flex justify-center items-center rounded-md my-6">
						<img src={Visa} alt="Visa" />
					</div>
					<div className="border w-10 h-6 rounded-md flex justify-center items-center">
						<img src={MasterCard} alt="MasterCard" />
					</div>
					<div className="border w-10 h-6 flex justify-center items-center rounded-md">
						<img src={DinersClub} alt="DinersClub" />
					</div>
				</div>
				<div>
					<form className="flex flex-col pt-4 gap-4">
						<div className="flex flex-row pt-4 gap-4">
							<input className="ring-1 ring-gray-400 rounded-2xl px-4 w-1/2 h-14 placeholder:after:content-['*'] after:ml-0.5 after:text-red-500" placeholder="Name on card" required autoComplete="cc-name" type="text" />
							<div className="relative w-1/2">
								<div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
									<IoMdCard className="text-gray-600 " />
								</div>
								<input type="email" className="w-full ps-10 text-gray-400  ring-1 ring-gray-400 rounded-2xl px-4 h-14" placeholder="Card Number" autoComplete="cc-number" required />
							</div>
						</div>
						<div className="flex flex-row pt-4 gap-4">
							<input className="ring-1 ring-gray-400 rounded-2xl px-4 w-1/2 h-14 placeholder:after:content-['*'] after:ml-0.5 after:text-red-500" placeholder="Expiry date" required autoComplete="cc-exp" type="text" />
							<input className="ring-1 ring-gray-400 rounded-2xl px-4 w-1/2 h-14 placeholder:after:content-['*'] after:ml-0.5 after:text-red-500" autoComplete="cc-csc" placeholder="CVV/CVC" required type="text" />
						</div>
					</form>
				</div>
				<hr className="my-8" />
				<div className="flex justify-between items-center">
					<h6>Total Payable: $XXX</h6>
					<div className="bg-green-600 w-40 rounded-xl flex items-center justify-center text-white">
						<PiPiggyBankFill />
						<p className="text-sm p-1">You saved price</p>
					</div>
				</div>
				<div className="flex items-center gap-2 py-4">
					<Link to="#" className="text-gray-700 underline decoration-gray-400 text-sm">
						You will be charged in AED
					</Link>
					<BsInfoCircleFill color="gray" className="cursor-pointer" />
				</div>
				<p className="text-gray-500">
					By clicking “confirm & pay”, you agree to{' '}
					<Link to="#" className="text-blue-700 underline decoration-blue-600">
						Ticket’s general terms and conditions{' '}
					</Link>
					and{' '}
					<Link to="#" className="text-blue-700 underline decoration-blue-600">
						cancellation policy
					</Link>
					.
				</p>
				<button className="bg-blue-600 my-6 rounded-lg text-white gap-2 flex items-center justify-center font-semibold text-lg sm:pl-10 sm:pr-10 sm:pt-3 sm:pb-3 pl-11 pr-11 pt-4 pb-4 shadow-md">
					<MdLock />
					Confirm & Pay
				</button>
			</div>
			<div className="border border-gray-300 p-4 my-5 bg-gray-100 rounded-md">
				<div className="flex items-center border h-8 w-20">
					<FaApple />
					<p className="text-gray-700">Pay</p>
				</div>
			</div>
		</section>
	)
}

export default PaymentMode
