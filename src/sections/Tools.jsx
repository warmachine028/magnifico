import { CircleOfNetworks as image1 } from '../assets'
import { SecondaryButton } from '../components'

const Tools = () => {
	return (
		<section id="tools" className="flex container px-2 mx-auto mt-52 gap-72">
			<div className=''>
				<h1 className="text-[62px] leading-[80px] font-extrabold">
					Get all the tools your
					<br/>team needs
				</h1>
				<p className="text-gray-500 mt-8 leading-7">
					Etiam condimentum duis molestie malesuada volutpat pellentesque sed. <br/>
					Ornare suspendisse ut ac neque lobortis sed tincidunt. Mi tempus quis <br/>
					massa tellus imperdiet aenean nulla id.
				</p>
				<div className="flex gap-4 mt-7">
					<SecondaryButton arrow color="blue">
						Check the tools
					</SecondaryButton>
				</div>
			</div>
			<img src={image1} alt="Circle Of Networks" />
		</section>
	)
}

export default Tools
