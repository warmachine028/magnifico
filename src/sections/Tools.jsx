import { CircleOfNetworks as image1 } from '../assets'
import { SecondaryButton } from '../components'

const Tools = () => {
	return (
		<section id="tools" className="flex container sm:px-2 mx-auto sm:gap-72 gap-16 sm:my-44 my-28 sm:flex-row flex-col">
			<div className="sm:w-1/2 w-full justify-center px-7">
				<h1 className="text-4xl xs:text-5xl sm:text-6xl sm:leading-[80px] sm:font-extrabold  font-bold">Get all the tools your team needs</h1>
				<p className="text-gray-500 mt-8 leading-7 xs:text-xl text-sm">Egestas fringilla aliquam leo, habitasse arcu varius lorem elit. Neque pellentesque donec et tellus ac varius tortor, bibendum. Nulla felis ac turpis at amet. Purus malesuada placerat arcu at enim elit in accumsan.</p>
				<div className="mt-7">
					<SecondaryButton arrow color="blue">
						Check the tools
					</SecondaryButton>
				</div>
			</div>
			<div className="sm:w-1/2 w-full flex justify-center items-center">
				<img src={image1} alt="Circle Of Networks" />
			</div>
		</section>
	)
}

export default Tools
