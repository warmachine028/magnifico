import { FaArrowRight } from 'react-icons/fa'

const Community = () => {
	return (
		<section id="community" className="container sm:px-2 mx-auto sm:mt-52 mt-36 bg-gradient-to-r from-blue-700 to-purple-900 flex-col justify-center sm:rounded-xl items-center sm:pt-0 sm:pb-0 py-14">
			<h1 className="sm:text-6xl xs:text-5xl text-4xl  sm:leading-[80px] leading- font-bold sm:font-extrabold text-white pt-16 px-6 text-center">Join the community today</h1>
			<p className="text-white text-center py-7 leading-7 sm:pl-14 sm:pr-14 xs:px-2 px-7 xs:text-xl text-sm">Egestas fringilla aliquam leo, habitasse arcu varius lorem elit. Neque pellentesque donec et tellus ac varius tortor, bibendum. Nulla felis ac turpis at amet. Purus malesuada placerat arcu at enim elit in accumsan.</p>
			<div className="flex justify-center items-center pb-16">
				<button className="bg-blue-600 rounded-md text-white gap-3 flex items-center justify-center font-bold text-lg sm:pl-10 sm:pr-10 sm:pt-3 sm:pb-3 pl-11 pr-11 pt-4 pb-4 shadow-xl">
					Sign Up Free
					<FaArrowRight />
				</button>
			</div>
		</section>
	)
}

export default Community
