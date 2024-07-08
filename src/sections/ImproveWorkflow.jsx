import {Video2} from "../assets"
import { SecondaryButton } from "../components";

const ImproveWorkflow = () => {
  return (
		<div className="container px-2 mx-auto mt-52 gap-72 flex">
			<div>
				<h1 className="text-[62px] leading-[80px] font-extrabold">Improve workflow</h1>
				<div className="flex w-full">
					<button className="border rounded-l-lg flex items-center justify-center p-3 w-1/3 px-16 bg-slate-100">Research</button>
					<button className="border flex items-center justify-center p-3 w-1/3">Plan</button>
					<button className="border rounded-r-lg flex items-center justify-center p-3 w-1/3">Design</button>
					
				</div>
				<div>
					<p className="text-gray-500 mt-8 leading-7">
						Etiam condimentum duis molestie malesuada volutpat pellentesque sed. <br></br>
						Ornare suspendisse ut ac neque lobortis sed tincidunt. Mi tempus quis <br></br>
						massa tellus imperdiet aenean nulla id.
					</p>
				</div>
				<div className="flex gap-4 mt-7">
					<SecondaryButton arrow color="blue">
						Check the tools
					</SecondaryButton>
				</div>
			</div>
			<div>
				<img src={Video2}></img>
			</div>
		</div>
  )
}

export default ImproveWorkflow