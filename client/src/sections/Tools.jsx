import { CircleOfNetworks as image1 } from '../assets'
import { SecondaryButton } from '../components'

const Tools = () => {
	return (
		<section id="tools" className="mx-auto my-28 flex flex-col gap-16 font-roboto sm:my-44 lg:flex-row lg:gap-72 lg:py-16 xl:gap-56">
			<div className="w-full justify-center px-7 lg:w-1/2 xl:w-4/6">
				<h1 className="text-4xl font-bold dark:text-blue-600 xs:text-5xl lg:text-6xl lg:font-extrabold lg:leading-[80px]">Get all the tools your team needs</h1>
				<p className="mt-8 text-sm leading-7 text-gray-500 xs:text-xl">Egestas fringilla aliquam leo, habitasse arcu varius lorem elit. Neque pellentesque donec et tellus ac varius tortor, bibendum. Nulla felis ac turpis at amet. Purus malesuada placerat arcu at enim elit in accumsan.</p>
				<div className="mt-7">
					<SecondaryButton arrow color="blue">
						Check the tools
					</SecondaryButton>
				</div>
			</div>
			<div className="flex w-full items-center justify-center lg:w-1/2">
				<img src={image1} alt="Circle Of Networks" />
			</div>
		</section>
	)
}

export default Tools
