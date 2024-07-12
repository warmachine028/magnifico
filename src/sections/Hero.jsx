import { FaArrowRight } from 'react-icons/fa'
import { Shells, SmartFinder, ArtVenue, Waves, Video1, Stars } from '../assets'
import { EnvelopeIcon } from '../assets'

const Hero = () => {
	return (
		<section id="hero" className="my-20 flex flex-col justify-center bg-white bg-none bg-no-repeat font-roboto sm:flex-row sm:px-2 sm:py-16 dark:bg-slate-900" style={{ backgroundImage: `url('${Stars}')`, backgroundPosition: 'right 30px bottom -8px' }}>
			<div className="flex w-full flex-col justify-center px-7 sm:mx-10 sm:w-1/2">
				<div className="sm:w-[550px]">
					<h1 className="hidden text-[72px] font-extrabold leading-[80px] sm:block dark:text-blue-600">
						Team projects,
						<br />
						done well
					</h1>
					<h1 className="text-4xl font-bold xs:text-5xl sm:hidden dark:text-blue-600">Teach students worldwide</h1>

					<p className="mt-8 hidden leading-7 text-gray-500 sm:block">
						The only platform that gives your team all the tools needed to work <br />
						together on their awesome projects.{' '}
					</p>
					<p className="mt-8 text-sm leading-7 text-gray-500 xs:text-xl sm:hidden">Amet nunc diam orci duis ut sit diam arcu, nec. Eleifend proin massa tincidunt viverra lectus pulvinar. Nunc ipsum est pellentesque turpis ultricies.</p>

					<form className="mb-5 mt-5 flex gap-3">
						<input placeholder="Enter work email" className="hidden h-12 w-1/2 rounded-lg border border-gray-300 bg-no-repeat pl-12 placeholder-gray-700 sm:block sm:w-full" type="email" autoComplete="email" style={{ backgroundImage: `url('${EnvelopeIcon}')`, backgroundPosition: '15px' }} />
						<input placeholder="Enter work email" type="email" autoComplete="email" className="xs:text-md h-12 w-1/2 rounded-lg border border-gray-300 pl-4 text-sm placeholder-gray-700 sm:hidden sm:w-full" />
						<button className="xs:text-md flex w-1/2 items-center justify-center gap-2 rounded-md bg-blue-600 px-5 py-2 text-sm text-white sm:w-64" type="submit">
							Sign Up Free
							<FaArrowRight />
						</button>
					</form>
					<div className="my-5 grid grid-cols-2 items-end justify-items-center gap-5 rounded-lg bg-slate-100 p-3 sm:grid-cols-4">
						<img src={Shells} alt="shells" />
						<img src={SmartFinder} alt="smartfinder" />
						<img src={ArtVenue} alt="artvenue" />
						<img src={Waves} alt="waves" />
					</div>
				</div>
			</div>
			<div className="flex w-full px-7 sm:w-1/2 sm:px-10">
				<img src={Video1} alt="video" />
			</div>
		</section>
	)
}

export default Hero
