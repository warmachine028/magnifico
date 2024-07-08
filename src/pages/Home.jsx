import { Community, Hero, ImproveWorkflow, ProblemSolved, TimeWorking, Tools } from '../sections'

const Home = () => {
	return (
		<main>
			<Hero />
			<hr className='hidden sm:block'/>
            <TimeWorking />
            <Tools/>
			<ProblemSolved />
			{/* <ImproveWorkflow />
			<Community /> */}
		</main>
	)
}

export default Home
