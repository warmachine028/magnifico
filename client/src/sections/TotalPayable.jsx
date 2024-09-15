import { BsInfoCircleFill } from 'react-icons/bs'

const TotalPayable = () => {
	return (
		<section id="total-payable" className="mb-6 mt-12">
			<h1 className="text-3xl font-medium dark:text-blue-700">Total Payable: $XXX</h1>
			<div className="my-6 rounded-2xl p-7 ring-1 ring-gray-300">
				<div className="relative flex items-center gap-2 dark:text-white">
					<BsInfoCircleFill className="peer size-5 cursor-pointer" />
					<span className="absolute bottom-3 m-2 w-48 scale-0 rounded-md bg-gray-100 p-2 text-xs font-medium text-gray-600 shadow-md transition-all duration-100 peer-hover:scale-100">
						The amount you will be required to pay for a product or service will be calculated and billed in
						the currency of the United Arab Emirates
					</span>
					<p>You will be charged in AED</p>
				</div>
				<p className="px-6 py-2 text-gray-500">
					The price shown here is in US Dollar (USD) as per the current conversion rate. You will be charged
					in United Arab Emirates Dirham (AED).
				</p>
			</div>
		</section>
	)
}

export default TotalPayable
