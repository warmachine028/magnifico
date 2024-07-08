import {Video2} from "../assets"
import { SecondaryButton } from "../components";

const ImproveWorkflow = () => {
  return (
		<div className="container px-2 mx-auto mt-52 gap-72 flex flex-row">
			<div className="w-1/2">
				<h1 className="text-6xl leading-[80px] font-extrabold  my-5">Improve workflow</h1>
				<div className="flex w-full">
					<button className="border rounded-l-lg flex items-center justify-center p-3 w-1/3 px-16 bg-slate-100">Research</button>
					<button className="border flex items-center justify-center p-3 w-1/3">Plan</button>
					<button className="border rounded-r-lg flex items-center justify-center p-3 w-1/3">Design</button>
				</div>
				<div>
					<p className="text-gray-500 mt-8 leading-7">Egestas fringilla aliquam leo, habitasse arcu varius lorem elit. Neque pellentesque donec et tellus ac varius tortor, bibendum. Nulla felis ac turpis at amet. Purus malesuada placerat arcu at enim elit in accumsan.</p>
				</div>
				<div className="flex gap-4 mt-7">
					<SecondaryButton arrow color="blue">
						Check the tools
					</SecondaryButton>
				</div>
			</div>
			<div className="w-1/2">
				<img src={Video2}></img>
			</div>
		</div>
  )
}

export default ImproveWorkflow