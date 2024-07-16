import { FaArrowRight } from 'react-icons/fa'

const Community = () => {
	return (
		<section id="community" className="mt-36 flex-col items-center justify-center bg-gradient-to-r from-blue-700 to-purple-900 py-14 sm:mt-52 sm:rounded-xl sm:pb-0 sm:pt-0">
			<h1 className="leading- px-6 pt-16 text-center text-4xl font-bold text-white xs:text-5xl sm:text-6xl sm:font-extrabold sm:leading-[80px]">Join the community today</h1>
			<p className="px-7 py-7 text-center text-sm leading-7 text-white xs:px-2 xs:text-xl sm:pl-14 sm:pr-14">Egestas fringilla aliquam leo, habitasse arcu varius lorem elit. Neque pellentesque donec et tellus ac varius tortor, bibendum. Nulla felis ac turpis at amet. Purus malesuada placerat arcu at enim elit in accumsan.</p>
			<div className="flex items-center justify-center pb-16">
				<button className="flex items-center justify-center gap-3 rounded-md bg-blue-600 pb-4 pl-11 pr-11 pt-4 text-lg font-bold text-white shadow-xl sm:pb-3 sm:pl-10 sm:pr-10 sm:pt-3">
					Sign Up Free
					<FaArrowRight />
				</button>
			</div>
		</section>
	)
}

export default Community
