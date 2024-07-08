import { Mountain } from "../assets"
const PaymentHero = () => {
    return (
		<section id="paymenthero" className="container mx-auto px-2 py-16 flex flex-row">
			<div className="mx-10 w-3/4">
				<h1 className="text-6xl font-extrabold">Confirm & pay</h1>
				<div className="py-10">
					<form className="border rounded-lg font-['Open_Sans']  flex flex-col ">
						<textarea
							className="overflow-y-hidden resize-none pr-[500px]h-16"
							id="multiline-input"
							placeholder="Free cancellation&#10;Tickets can be cancelled by 13th December, 2022.&#10;"
						></textarea>
					</form>
					<div>
						<h6 className="font-['Open_Sans'] mt-10 text-xl">Enter your details</h6>
						<p className="py-5 font-light text-gray-700">We'll be sending your tickets to the details below. Booking for a friend? Add their details.</p>
					</div>
					<form className="pt-8">
						<input className="border rounded-lg pl-4 pr-[540px] pt-3 pb-3" placeholder="Full name" />
						<div className="flex flex-row pt-4 gap-4">
							<input className="border rounded-lg pl-4 pt-3 pb-3 pr-40" placeholder="Country code" />
							<input className="border rounded-lg pl-4 pt-3 pb-3 pr-40" placeholder="Phone number" />
						</div>
						<div className="flex flex-row py-4 gap-4">
							<input className="border rounded-lg pl-4 pt-3 pb-3 pr-40" placeholder="Email" />
							<input className="border rounded-lg pl-4 pt-3 pb-3 pr-40" placeholder="Confirm Email" />
						</div>
					</form>
					<hr></hr>
				</div>
			</div>
			<div className="w-1/4 flex flex-col border ">
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
		</section>
	)
}

export default PaymentHero