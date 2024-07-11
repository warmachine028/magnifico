import { IoIosArrowDown } from 'react-icons/io'

const AdditionalInformation = () => {
	return (
		<section id="aditional-information" className="my-8 sm:pt-10">
			<h6 className="text-2xl font-medium mt-10 sm:text-3xl">Additional information</h6>
			<p className="py-5 sm:text-xl font-light text-gray-700 text-lg">We need a few more details to complete your reservation.</p>
			<form className="flex flex-col gap-4 sm:pt-8">
				<div className="flex sm:flex-row flex-col gap-4">
					<input className="h-14 sm:w-1/2 w-full rounded-2xl px-4 ring-1 ring-gray-300 after:ml-0.5 after:text-red-500 placeholder:after:content-['*']" placeholder="Input label" required type="text" />
					<div className="relative sm:w-1/2 w-full">
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
