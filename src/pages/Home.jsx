import { Community, Hero, ImproveWorkflow, ProblemSolved, TimeWorking, Tools } from '../sections'

const Home = () => {
	return (
		<main className="mx-auto font-roboto sm:container sm:px-2 sm:py-16">
			<Hero />
			<hr className="hidden sm:block" />
			<TimeWorking />
			<Tools />
			<ProblemSolved />
			<ImproveWorkflow />
			<Community />
		</main>
	)
}

export default Home
