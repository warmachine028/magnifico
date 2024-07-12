import { SecondaryButton } from '../components'
import { Container } from '../assets'

const ProblemSolved = () => {
	return (
		<section id="problem-solved" style={{ backgroundImage: `url('${Container}')` }} className="flex w-full items-center bg-cover bg-center bg-no-repeat px-2 py-16 text-white sm:mt-48 sm:h-[550px] sm:rounded-3xl">
			<div className="hidden sm:block sm:w-1/2" />
			<div className="flex flex-col gap-9 px-7 sm:w-1/2 sm:pr-24">
				<div className="flex flex-col gap-7">
					<h1 className="text-4xl font-bold xs:text-5xl sm:text-6xl sm:font-extrabold sm:leading-[80px]">Problems come and get solved with ease</h1>
					<p className="xs:text-md max-w-xl pr-2 text-sm leading-6 xs:pr-0 xs:leading-7 sm:text-xl sm:leading-8">Egestas fringilla aliquam leo, habitasse arcu varius lorem elit. Neque pellentesque donec et tellus ac varius tortor, bibendum. Nulla felis ac turpis at amet. Purus malesuada placerat arcu at enim elit in accumsan.</p>
				</div>
				<SecondaryButton arrow color="white">
					Improve workflow
				</SecondaryButton>
			</div>
		</section>
	)
}

export default ProblemSolved
