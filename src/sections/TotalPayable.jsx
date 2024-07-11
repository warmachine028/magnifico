import { BsInfoCircleFill } from 'react-icons/bs'
import { Link } from 'react-router-dom'

const TotalPayable = () => {
	return (
		<section id="total-payable" className="mb-6 mt-12">
			<h1 className="text-3xl font-medium">Total Payable: $XXX</h1>
			<div className="my-6 rounded-2xl p-7 ring-1 ring-gray-300">
				<div className="flex items-center gap-2">
					<BsInfoCircleFill className="cursor-pointer" />
					<Link to="#">You will be charged in AED</Link>
				</div>
				<p className="px-6 py-2 text-gray-500">The price shown here is in US Dollar (USD) as per the current conversion rate. You will be charged in United Arab Emirates Dirham (AED).</p>
			</div>
		</section>
	)
}

export default TotalPayable
