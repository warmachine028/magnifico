const AdditionalInformation = () => {
	return (
		<section id="aditionalinformation" className="font-['Open_Sans'] pt-10">
			<div>
				<h6 className="mt-10 text-xl font-medium">Additional information</h6>
				<p className="py-5 font-light text-gray-700">We need a few more details to complete your reservation.</p>
			</div>
			<form>
				<div className="flex flex-row pt-4 gap-4">
					<input className="border rounded-lg pl-4 p-3 w-1/2" placeholder="Input label" />
					<input className="border rounded-lg pl-4 p-3 w-1/2" placeholder="Select" />
				</div>
				<input className="border rounded-lg pl-4 w-full pt-3 pb-3 my-6 required:before:*" placeholder="Multiselect" type="text" />
			</form>
		</section>
	)
}

export default AdditionalInformation
