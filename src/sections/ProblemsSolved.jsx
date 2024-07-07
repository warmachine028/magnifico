import { SecondaryButton } from '../components'
import { Container } from '../assets'
const ProblemSolved = () => {
	return (
		<section style={{backgroundImage: `url('${Container}')`}} className="container px-2 mx-auto mt-48 bg-my-image bg-no-repeat w-full h-[550px] bg-center rounded-3xl bg-cover flex text-white items-center">
			<div className="w-1/2"></div>
			<div className="w-1/2 flex flex-col gap-6">
				<div className="flex flex-col gap-4">
					<h1 className="text-[60px] leading-[80px] font-extrabold">
						Problems come and
						<br />
						get solved with ease
					</h1>
					<p className="leading-8 max-w-xl text-xl">Egestas fringilla aliquam leo, habitasse arcu varius lorem elit. Neque pellentesque donec et tellus ac varius tortor, bibendum. Nulla felis ac turpis at amet. Purus malesuada placerat arcu at enim elit in accumsan.</p>
				</div>
				<SecondaryButton arrow color="white">
					Improve workflow
				</SecondaryButton>
			</div>
		</section>
	)
}

export default ProblemSolved
