import { Helmet } from 'react-helmet'
import { Community, Hero, ImproveWorkflow, ProblemSolved, TimeWorking, Tools } from '../sections'

const Home = () => {
	return (
		<main className="dark:bg-slate-900">
			<Helmet>
				<meta charSet="utf-8" />
				<title>Magnifico-Home</title>
				<link rel="canonical" href="https://warmachine028.github.io/magnifico/" />
			</Helmet>
			<div className="mx-auto sm:container sm:px-2 xl:px-10">
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
