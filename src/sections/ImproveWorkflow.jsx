import { Video2 } from '../assets'
import { SecondaryButton } from '../components'

const ImproveWorkflow = () => {
	return (
		<section id="improveworkflow" className="container sm:px-2 mx-auto sm:mt-52 mt-20 sm:gap-72 flex sm:flex-row flex-col px-5">
			<div className="sm:w-1/2 w-full">
				<h1 className="sm:text-6xl xs:text-5xl text-4xl  font-bold sm:leading-[80px] sm:font-extrabold  sm:my-5 my-4">Improve workflow</h1>
				<div className="flex sm:w-full my-7">
					<button className="border rounded-l-lg flex items-center justify-center p-3 w-1/3 px-16 bg-slate-100">Research</button>
					<button className="border flex items-center justify-center p-3 w-1/3">Plan</button>
					<button className="border rounded-r-lg flex items-center justify-center p-3 w-1/3">Design</button>
				</div>
				<div>
					<p className="text-gray-500 mt-8 xs:text-xl text-sm  leading-7 ">Egestas fringilla aliquam leo, habitasse arcu varius lorem elit. Neque pellentesque donec et tellus ac varius tortor, bibendum. Nulla felis ac turpis at amet. Purus malesuada placerat arcu at enim elit in accumsan.</p>
				</div>
				<div className="flex my-10">
					<SecondaryButton arrow color="blue">
						Check the tools
					</SecondaryButton>
				</div>
			</div>
			<div className="sm:w-1/2 w-full justify-center items-center">
				<img src={Video2} />
			</div>
		</section>
	)
}

export default ImproveWorkflow
