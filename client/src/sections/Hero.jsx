import { FaArrowRight, FaRegEnvelope, FaUser } from 'react-icons/fa'
import { Shells, SmartFinder, ArtVenue, Waves, Video1, Stars } from '../assets'

const Hero = () => {
	return (
		<section id="hero" className="flex flex-col justify-center bg-none bg-no-repeat py-28 font-roboto sm:flex-row sm:py-48" style={{ backgroundImage: `url('${Stars}')`, backgroundPosition: 'right 30px bottom 150px' }}>
			<div className="flex w-full flex-col justify-center px-7 sm:mx-10 sm:w-1/2">
				<div className="sm:w-[550px]">
					<h1 className="hidden text-[72px] font-extrabold leading-[80px] dark:text-blue-600 sm:block">
						Team projects,
						<br />
						done well
					</h1>
					<h1 className="text-4xl font-bold dark:text-blue-600 xs:text-5xl sm:hidden">Teach students worldwide</h1>

					<p className="mt-8 hidden leading-7 text-gray-500 sm:block">
						The only platform that gives your team all the tools needed to work <br />
						together on their awesome projects.{' '}
					</p>
					<p className="my-10 text-sm leading-7 text-gray-500 xs:text-xl sm:hidden">Amet nunc diam orci duis ut sit diam arcu, nec. Eleifend proin massa tincidunt viverra lectus pulvinar. Nunc ipsum est pellentesque turpis ultricies.</p>

					<form className="mb-5 mt-5 flex flex-col gap-3 sm:flex-row">
						<div className="relative w-full">
							<div className="pointer-events-none absolute inset-y-0 start-0 flex items-center ps-3.5">
								<FaRegEnvelope className="text-gray-400" />
							</div>
							<input type="email" className="m-0 h-14 w-full appearance-none rounded-md px-4 ps-10 text-gray-400 ring-1 ring-gray-300 dark:bg-gray-300 dark:text-gray-800" placeholder="Enter Work email" autoComplete="email" required />
						</div>

						<button className="xs:text-md text-md flex w-full items-center justify-center gap-2 rounded-md bg-blue-600 px-8 py-4 text-white sm:w-64" type="submit">
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
