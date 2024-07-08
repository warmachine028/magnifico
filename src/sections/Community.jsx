import { SecondaryButton } from '../components'
const Community = () => {
	return (
		<section id="community" className="container sm:px-2 mx-auto mt-52 bg-gradient-to-r from-blue-700 to-purple-900 flex-col justify-center sm:rounded-xl items-center">
			<h1 className="sm:text-6xl text-5xl sm:leading-[80px] leading- font-bold sm:font-extrabold text-white pt-16 px-6 text-center">Join the community today</h1>
			<p className="text-white text-center py-7 leading-7 sm:pl-14 sm:pr-14">Egestas fringilla aliquam leo, habitasse arcu varius lorem elit. Neque pellentesque donec et tellus ac varius tortor, bibendum. Nulla felis ac turpis at amet. Purus malesuada placerat arcu at enim elit in accumsan.</p>
			<div className="flex justify-center items-center pb-16">
				<button className="bg-blue-600 rounded-md text-white gap-3 flex items-center justify-center font-bold text-lg pl-10 pr-10 pt-3 pb-3 shadow-black">
					Sign Up Free
					<box-icon name="right-arrow-alt" color="#ffffff" />
				</button>
			</div>
		</section>
	)
}

export default Community
