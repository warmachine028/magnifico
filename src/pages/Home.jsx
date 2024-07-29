import { Helmet } from 'react-helmet'
import { Community, Hero, ImproveWorkflow, ProblemSolved, TimeWorking, Tools } from '../sections'

const Home = () => {
	return (
		<main className="dark:bg-slate-900">
			<Helmet>
				<meta charSet="utf-8" />
				<title>Magnifico-Home</title>
				<link rel="canonical" href="https://magnifico-sp.vercel.app/" />
				<meta property="og:image" content="https://github.com/user-attachments/assets/44078aaf-5da1-4809-88f1-495a6cd6823a" />
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
