const AdditionalInformation = () => {
	return (
		<section id="aditionalinformation" className="font-['Open_Sans'] pt-10 my-8">
			<h6 className="mt-10 text-3xl font-medium">Additional information</h6>
			<p className="py-5 font-light text-xl text-gray-700">We need a few more details to complete your reservation.</p>
			<form className="flex flex-col gap-4 pt-8">
				<div className="flex flex-row gap-4">
					<input className="ring-1 ring-gray-300 rounded-2xl px-4 w-full h-14 placeholder:after:content-['*'] after:ml-0.5 after:text-red-500" placeholder="Input label" required type="text" />
					<select className="ring-1 text-gray-400 ring-gray-300 rounded-2xl px-4 w-full h-14 placeholder:after:content-['*'] after:ml-0.5 after:text-red-500" required type="text">
						<option disabled selected value="">
							Select
						</option>
					</select>
				</div>
				<select className="ring-1 text-gray-400 ring-gray-300 rounded-2xl px-4 w-full h-14 placeholder:after:content-['*'] after:ml-0.5 after:text-red-500" required type="text">
					<option disabled selected value="">
						Multiselect
					</option>
				</select>
			</form>
		</section>
	)
}

export default AdditionalInformation
