import { IoIosArrowDown } from 'react-icons/io'

const AdditionalInformation = () => {
	return (
		<section id="aditional-information" className="my-8 sm:pt-10">
			<h6 className="mt-10 text-2xl font-medium sm:text-3xl">Additional information</h6>
			<p className="py-5 text-lg font-light text-gray-700 sm:text-xl">We need a few more details to complete your reservation.</p>
			<form className="flex flex-col gap-4 sm:pt-8">
				<div className="flex flex-col gap-4 sm:flex-row">
					<input className="h-14 w-full rounded-2xl px-4 ring-1 ring-gray-300 after:ml-0.5 after:text-red-500 placeholder:after:content-['*'] sm:w-1/2" placeholder="Input label" required type="text" />
					<div className="relative w-full sm:w-1/2">
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
