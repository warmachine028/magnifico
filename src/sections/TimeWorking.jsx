import { Pic1 as image1, Pic2 as image2, Pic3 as image3 } from '../assets'
import { SecondaryButton } from '../components'

const TimeWorking = () => {
	return (
		<section className="flex container px-2 mx-auto mt-52">
			<div className="flex gap-4 w-1/2 justify-center">
				<img className="h-96 mt-20" src={image1} alt="women" />
				<img className="h-96" src={image2} alt="group" />
				<img className="h-96 mt-14" src={image3} alt="women" />
			</div>
			<div className="w-1/2 px-10">
				<h1 className="text-[62px] leading-[80px] font-extrabold">
					Enjoy your time
					<br />
					working
				</h1>
				<p className="text-gray-500 mt-8 leading-7">
					Etiam condimentum duis molestie malesuada volutpat pellentesque sed. <br />
					Ornare suspendisse ut ac neque lobortis sed tincidunt. Mi tempus quis <br />
					massa tellus imperdiet aenean nulla id.
				</p>
				<div className="mt-7">
					<SecondaryButton arrow color="blue">
						See how it helped others
					</SecondaryButton>
				</div>
			</div>
		</section>
	)
}

export default TimeWorking
