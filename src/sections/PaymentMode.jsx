import { IoMdCard } from 'react-icons/io'
import { FaApple, FaGoogle } from 'react-icons/fa'
import { CreditCardForm } from '../components'
import { ImRadioChecked2 } from 'react-icons/im'

const PaymentMode = () => {
	return (
		<section id="payment-mode" className="my-8">
			<h6 className="mt-10 text-3xl font-medium">Select your mode of payment</h6>
			<p className="py-5 text-xl font-light text-gray-700">Payments with Tickets are secure and encrypted.</p>
			<label className="cursor-pointer">
				<input name="paymentMode" className="peer sr-only" type="radio" />
				<div className="group relative my-5 cursor-pointer rounded-2xl bg-gray-100 px-7 py-5 ring-1 ring-gray-300 peer-checked:bg-white peer-checked:ring-gray-700">
					<div className="flex items-center gap-4">
						<div className="flex h-8 w-10 items-center justify-center rounded-md border">
							<IoMdCard className="text-gray-600" />
						</div>
						<h6 className="text-xl font-medium text-gray-500 peer-checked:group-[]:text-black">Credit & debit card</h6>
						<ImRadioChecked2 />
					</div>
					{/* <CreditCardForm/> */}
				</div>
			</label>
			<div className="my-5 rounded-2xl bg-gray-100 px-7 py-5 ring-1 ring-gray-300 has-[:checked]:bg-white has-[:checked]:ring-gray-700">
				<div className="relative flex items-center gap-4">
					<div className="flex h-8 w-10 items-center justify-center rounded-md border">
						<IoMdCard className="text-gray-600" />
					</div>
					<input name="paymentMode" className="peer absolute inset-y-0 end-4" type="radio" />
					<h6 className="text-xl font-medium text-gray-500 peer-checked:text-black">Credit & debit card</h6>
				</div>
				{/* <CreditCardForm/> */}
			</div>
			<div className="my-5 rounded-2xl bg-gray-100 px-7 py-5 ring-1 ring-gray-300 has-[:checked]:bg-white has-[:checked]:ring-gray-700">
				<div className="relative flex items-center gap-4">
					<div className="flex h-8 w-10 items-center justify-center rounded-md border">
						<IoMdCard className="text-gray-600" />
					</div>
					<input name="paymentMode" className="peer absolute inset-y-0 end-4" type="radio" />
					<h6 className="text-xl font-medium text-gray-500 peer-checked:text-black">Credit & debit card</h6>
				</div>
				{/* <CreditCardForm/> */}
			</div>

			<div className="my-5 rounded-2xl bg-gray-100 p-5 text-gray-600 ring-1 ring-gray-700">
				<div className="flex items-center justify-between">
					<div className="flex items-center gap-4">
						<div className="flex h-8 w-14 items-center justify-center rounded-lg border bg-gray-200 text-gray-500">
							<FaApple />
							<p className="">Pay</p>
						</div>
						<h6 className="text-gray-500">Coming soon</h6>
					</div>
					<input name="paymentMode" type="radio" />
				</div>
			</div>
			<div className="my-5 rounded-2xl border border-gray-300 bg-gray-100 p-5 text-gray-600">
				<div className="flex items-center justify-between">
					<div className="flex items-center gap-4">
						<div className="flex h-8 w-14 items-center justify-center rounded-lg border bg-gray-200 text-gray-500">
							<FaGoogle />
							<p className="">Pay</p>
						</div>
						<h6 className="text-gray-500">Coming soon</h6>
					</div>
					<input name="paymentMode" type="radio" />
				</div>
			</div>
		</section>
	)
}

export default PaymentMode
