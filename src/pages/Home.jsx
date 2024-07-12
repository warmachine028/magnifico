import { Navbar } from '../components'
import { Community, Hero, ImproveWorkflow, ProblemSolved, TimeWorking, Tools } from '../sections'

const Home = () => {
	return (
		<main className="container mx-auto dark:bg-slate-900">
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
