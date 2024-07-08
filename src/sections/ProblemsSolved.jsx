import { SecondaryButton } from '../components'
import { Container } from '../assets'
const ProblemSolved = () => {
	return (
		<section id='tools' style={{ backgroundImage: `url('${Container}')` }} className="container px-2 mx-auto sm:mt-48 bg-no-repeat w-full sm:h-[550px]  bg-center sm:rounded-3xl bg-cover flex text-white items-center py-16">
			<div className="sm:w-1/2 hidden sm:block" />
			<div className="sm:w-1/2 sm:pr-24 flex flex-col gap-9 px-7">
				<div className="flex flex-col gap-7">
					<h1 className="sm:text-6xl text-5xl font-bold  sm:leading-[80px] sm:font-extrabold">Problems come and get solved with ease</h1>
					<p className="leading-8 max-w-xl sm:text-xl">Egestas fringilla aliquam leo, habitasse arcu varius lorem elit. Neque pellentesque donec et tellus ac varius tortor, bibendum. Nulla felis ac turpis at amet. Purus malesuada placerat arcu at enim elit in accumsan.</p>
				</div>
				<SecondaryButton arrow color="white">
					Improve workflow
				</SecondaryButton>
			</div>
		</section>
	)
}

export default ProblemSolved
