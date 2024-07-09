const PaymentHero = () => {
	return (
		<section id="paymenthero">
			<div className="">
				<h1 className="text-6xl font-extrabold">Confirm & pay</h1>
				<div className="border font-['Open_Sans'] mt-16 pl-4 py-2 rounded-lg">
					<h6 className="font-medium">Free cancellation</h6>
					<h6 className="font-light text-gray-600">Tickets can be cancelled by 13th December, 2022.</h6>
				</div>
				<div>
					<h6 className="mt-10 text-xl">Enter your details</h6>
					<p className="py-5 font-light text-gray-700">We'll be sending your tickets to the details below. Booking for a friend? Add their details.</p>
				</div>
				<form className="pt-8">
					<input className="border rounded-lg pl-4 w-full pt-3 pb-3" placeholder="Full name" />
					<div className="flex flex-row pt-4 gap-4">
						<input className="border rounded-lg pl-4 p-3 w-1/2" placeholder="Country code" />
						<input className="border rounded-lg pl-4 p-3 w-1/2" placeholder="Phone number" />
					</div>
					<div className="flex flex-row py-4 gap-4">
						<input className="border rounded-lg pl-4 p-3 w-1/2" placeholder="Email" />
						<input className="border rounded-lg pl-4 p-3 w-1/2" placeholder="Confirm Email" />
					</div>
				</form>
			</div>
		</section>
	)
}

export default PaymentHero
