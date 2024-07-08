import { Pic1 as image1, Pic2 as image2, Pic3 as image3, Stars } from '../assets'
import { SecondaryButton } from '../components'

const TimeWorking = () => {
	return (
		<section className="flex container sm:px-2 mx-auto sm:my-52 flex-col-reverse gap-16 sm:flex-row relative my-28">
			<div className="flex sm:gap-4 gap-2 sm:w-1/2 justify-center w-full">
				<img className="z-10 sm:h-96 h-60  mt-20" src={image1} alt="woman" />
				<img className="z-10 sm:h-96 h-60" src={image2} alt="group" />
				<img className="z-10 sm:h-96 h-60 mt-12 sm:mt-14" src={image3} alt="girl" />
				<img className="absolute left-0 bottom-32" src={Stars} alt="stars" />
			</div>
			<div className="sm:w-1/2 sm:px-10 px-7">
				<h1 className="sm:text-6xl text-5xl font-bold sm:leading-[80px] sm:font-extrabold">Enjoy your time working</h1>
				<p className="text-gray-500 mt-8 text-xl leading-7">Etiam condimentum duis molestie malesuada volutpat pellentesque sed. Ornare suspendisse ut ac neque lobortis sed tincidunt. Mi tempus quis massa tellus imperdiet aenean nulla id.</p>
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
