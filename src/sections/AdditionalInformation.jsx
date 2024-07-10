import { IoIosArrowDown } from "react-icons/io"

const AdditionalInformation = () => {
	return (
		<section id="aditionalinformation" className="font-['Open_Sans'] pt-10 my-8">
			<h6 className="mt-10 text-3xl font-medium">Additional information</h6>
			<p className="py-5 font-light text-xl text-gray-700">We need a few more details to complete your reservation.</p>
			<form className="flex flex-col gap-4 pt-8">
				<div className="flex flex-row gap-4">
					<input className="ring-1 ring-gray-300 rounded-2xl px-4 w-1/2 h-14 placeholder:after:content-['*'] after:ml-0.5 after:text-red-500" placeholder="Input label" required type="text" />
					<div className="w-1/2 relative">
						<div className="absolute inset-y-0 end-0 flex items-center pe-3.5 pointer-events-none">
							<IoIosArrowDown color="gray" />
						</div>
						<select className="ring-1 text-gray-400 ring-gray-300 rounded-2xl px-4 w-full h-14 placeholder:after:content-['*'] after:ml-0.5 after:text-red-500 appearance-none " required defaultValue="Select" type="text">
							<option disabled>Select</option>
						</select>
					</div>
				</div>
				<div className="w-full relative">
					<div className="absolute inset-y-0 end-0 flex items-center pe-3.5 pointer-events-none">
						<IoIosArrowDown color="gray" />
					</div>
					<select className="ring-1 text-gray-400 ring-gray-300 rounded-2xl appearance-none px-4 w-full h-14 placeholder:after:content-['*'] after:ml-0.5 after:text-red-500" required type="text" defaultValue="Multiselect">
						<option disabled>Multiselect</option>
					</select>
				</div>
			</form>
		</section>
	)
}

export default AdditionalInformation
