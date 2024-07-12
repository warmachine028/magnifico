import { Pic1 as image1, Pic2 as image2, Pic3 as image3, Stars } from '../assets'
import { SecondaryButton } from '../components'

const TimeWorking = () => {
	return (
		<section id="time-working" className="relative my-28 flex flex-col-reverse gap-16 sm:my-52 sm:flex-row">
			<div className="flex w-full justify-center gap-2 sm:w-1/2 sm:gap-4">
				<img className="z-10 mt-20 h-52 xs:h-60 sm:h-96" src={image1} alt="woman" />
				<img className="z-10 h-52 xs:h-60 sm:h-96" src={image2} alt="group" />
				<img className="sx:h-60 z-10 mt-12 h-52 sm:mt-14 sm:h-96" src={image3} alt="girl" />
				<img className="absolute bottom-32 left-0" src={Stars} alt="stars" />
			</div>
			<div className="px-7 sm:w-1/2 sm:px-10">
				<h1 className="text-4xl font-bold xs:text-5xl sm:text-6xl sm:font-extrabold sm:leading-[80px]">Enjoy your time working</h1>
				<p className="mt-8 text-sm leading-6 text-gray-500 xs:text-xl xs:leading-7">Etiam condimentum duis molestie malesuada volutpat pellentesque sed. Ornare suspendisse ut ac neque lobortis sed tincidunt. Mi tempus quis massa tellus imperdiet aenean nulla id.</p>
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
