import { SecondaryButton } from '@/components'
import { Container } from '@/assets'

const ProblemSolved = () => {
	return (
		<section id="problem-solved" style={{ backgroundImage: `url('${Container}')` }} className="flex w-full items-center bg-cover bg-center bg-no-repeat px-2 py-16 font-roboto text-white sm:container lg:mt-48 lg:h-[550px] sm:rounded-3xl lg:px-2 lg:py-16">
			<div className="hidden sm:block lg:w-1/2" />
			<div className="flex flex-col gap-9 px-7 lg:w-1/2 lg:pr-24">
				<div className="flex flex-col gap-7">
					<h1 className="text-4xl font-bold xs:text-5xl lg:text-6xl lg:font-extrabold lg:leading-[80px]">Problems come and get solved with ease</h1>
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
