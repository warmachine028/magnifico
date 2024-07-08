import { Shells, SmartFinder, ArtVenue, Waves, Video1, Stars } from '../assets'
import { EnvelopeIcon } from '../assets'

const Hero = () => {
	return (
		<section id="hero" className="flex flex-col sm:flex-row sm:container sm:px-2 mx-auto sm:py-16 my-20 justify-center bg-no-repeat bg-none bg-white" style={{ backgroundImage: `url('${Stars}')`, backgroundPosition: 'right 30px bottom -8px' }}>
			<div className="sm:w-1/2 w-full justify-center sm:mx-10 flex flex-col px-7">
				<div className="sm:w-[550px]">
					<h1 className="text-[72px] leading-[80px] font-extrabold hidden sm:block">
						Team projects,
						<br />
						done well
					</h1>
					<h1 className="text-5xl font-bold sm:hidden">Teach students worldwide</h1>

					<p className="text-gray-500 mt-8 leading-7 hidden  sm:block">
						The only platform that gives your team all the tools needed to work <br />
						together on their awesome projects.{' '}
					</p>
					<p className="text-gray-500 mt-8 text-xl leading-7 sm:hidden">Amet nunc diam orci duis ut sit diam arcu, nec. Eleifend proin massa tincidunt viverra lectus pulvinar. Nunc ipsum est pellentesque turpis ultricies.</p>

					<form className="mt-5 mb-5 flex gap-3">
						<input placeholder="Enter work email" className="border pl-12 sm:w-full w-1/2 h-12 border-gray-300 placeholder-gray-700 rounded-lg bg-no-repeat hidden sm:block" style={{ backgroundImage: `url('${EnvelopeIcon}')`, backgroundPosition: '15px' }} />
						<input placeholder="Enter work email" className="border pl-4 sm:w-full w-1/2 h-12 border-gray-300 placeholder-gray-700 rounded-lg sm:hidden"/>
						<button className="bg-blue-600 py-2 px-5 rounded-md text-white flex gap-2 items-center sm:w-64 w-1/2 justify-center " type="submit">
							Sign Up Free
							<box-icon name="right-arrow-alt" color="#ffffff" />
						</button>
					</form>
					<div className=" bg-slate-100 rounded-lg p-3 grid grid-cols-2 sm:grid-cols-4 items-end justify-items-center gap-5 my-5">
						<img src={Shells} alt="shells" />
						<img src={SmartFinder} alt="smartfinder" />
						<img src={ArtVenue} alt="artvenue" />
						<img src={Waves} alt="waves" />
					</div>
				</div>
			</div>
			<div className="sm:w-1/2 sm:px-10 px-7 flex w-full">
				<img src={Video1} alt="video" />
			</div>
		</section>
	)
}

export default Hero
