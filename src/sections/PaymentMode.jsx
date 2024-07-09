import { DinersClub, MasterCard, Visa } from '../assets'

const PaymentMode = () => {
	return (
		<section id="modeofpayment" className="pt-10">
			<h6 className="mt-10 text-xl font-medium">Select your mode of payment</h6>
			<p className="py-5 font-light text-gray-700 pb-8">Payments with Tickete are secure and encrypted.</p>
			<div className="border border-slate-500  rounded-lg py-5 px-7">
				<div className="flex items-center">
					<div className="flex gap-4 items-center">
						<div className="flex items-center justify-center w-10 h-8 border rounded-md">
							<box-icon name="credit-card" color="#555a62"></box-icon>
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
					<form className="flex flex-row pt-4 gap-4">
						<input className="border rounded-lg pl-4 p-3 w-1/2" placeholder="Name on card" />
						<input className="border rounded-lg pl-4 p-3 w-1/2" placeholder="Card number" />
					</form>
					<div className="flex flex-row pt-4 gap-4">
						<input className="border rounded-lg pl-4 p-3 w-1/2" placeholder="Expiry date" />
						<input className="border rounded-lg pl-4 p-3 w-1/2" placeholder="CVV/CVC" />
					</div>
				</div>
				<hr className="my-8" />
				<div className="flex justify-between items-center">
					<h6>Total Payable: $XXX</h6>
					<div className="bg-green-200 w-40 rounded-xl flex items-center justify-center">
						<box-icon name="money" color="#15803d gap-2"></box-icon>
						<p className="text-green-700 text-sm p-1">You saved price</p>
					</div>
				</div>
				<div className="flex items-center gap-2 py-4">
					<p className="text-gray-700 underline decoration-gray-400 text-sm">You will be charged in AFD</p>
					<box-icon name="info-circle" color="#374151"></box-icon>
				</div>
				<p className="text-gray-500">
					By clicking “confirm & pay”, you agree to <span className="text-blue-700 underline decoration-blue-600">Tickete’s general terms and conditions </span>and <span className="text-blue-700 underline decoration-blue-600">cancellation policy</span>.
				</p>
				<button className="bg-blue-600 my-6 rounded-lg text-white gap-2 flex items-center justify-center font-semibold text-lg sm:pl-10 sm:pr-10 sm:pt-3 sm:pb-3 pl-11 pr-11 pt-4 pb-4 shadow-md">
					<box-icon name="lock" type="solid" color="#ffffff"></box-icon>
					Confirm & Pay
				</button>
			</div>
			<div className="border border-gray-300 p-4 my-5 bg-gray-100 rounded-md">
				<div className="flex items-center border h-8 w-20">
					<box-icon name="apple" type="logo" color="#776e6e"></box-icon>
					<p className="text-gray-700">Pay</p>
				</div>
			</div>
		</section>
	)
}

export default PaymentMode
