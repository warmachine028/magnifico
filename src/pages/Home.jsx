import { Community, Hero, ImproveWorkflow, ProblemSolved, TimeWorking, Tools } from '../sections'

const Home = () => {
	return (
		<main>
			<Hero />
            <TimeWorking />
            <Tools/>
			<ProblemSolved />
			<ImproveWorkflow />
			<Community />
		</main>
	)
}

export default Home
