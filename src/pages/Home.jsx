import { Community, Hero, ImproveWorkflow, ProblemSolved, TimeWorking, Tools } from '../sections'

const Home = () => {
	return (
		<main className="dark:bg-slate-900">
			<div className="sm:container mx-auto sm:px-2">
				<Hero />
				<hr className="hidden sm:block" />
				<TimeWorking />
				<Tools />
				<ProblemSolved />
				<ImproveWorkflow />
				<Community />
			</div>
		</main>
	)
}

export default Home
