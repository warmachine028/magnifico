import { IoIosArrowDown } from 'react-icons/io'

const AdditionalInformation = () => {
	return (
		<section id="aditional-information" className="my-8 pt-10">
			<h6 className="mt-10 text-3xl font-medium">Additional information</h6>
			<p className="py-5 text-xl font-light text-gray-700">We need a few more details to complete your reservation.</p>
			<form className="flex flex-col gap-4 pt-8">
				<div className="flex flex-row gap-4">
					<input className="h-14 w-1/2 rounded-2xl px-4 ring-1 ring-gray-300 after:ml-0.5 after:text-red-500 placeholder:after:content-['*']" placeholder="Input label" required type="text" />
					<div className="relative w-1/2">
						<div className="pointer-events-none absolute inset-y-0 end-0 flex items-center pe-3.5">
							<IoIosArrowDown color="gray" />
						</div>
						<select className="h-14 w-full appearance-none rounded-2xl px-4 text-gray-400 ring-1 ring-gray-300 after:ml-0.5 after:text-red-500 placeholder:after:content-['*']" required defaultValue="Select" type="text">
							<option disabled>Select</option>
						</select>
					</div>
				</div>
				<div className="relative w-full">
					<div className="pointer-events-none absolute inset-y-0 end-0 flex items-center pe-3.5">
						<IoIosArrowDown color="gray" />
					</div>
					<select className="h-14 w-full appearance-none rounded-2xl px-4 text-gray-400 ring-1 ring-gray-300 after:ml-0.5 after:text-red-500 placeholder:after:content-['*']" required type="text" defaultValue="Multiselect">
						<option disabled>Multiselect</option>
					</select>
				</div>
			</form>
		</section>
	)
}

export default AdditionalInformation
