import { Shells, SmartFinder, ArtVenue, Waves, Video1, Stars } from '../assets'

const Hero = () => {
	return (
		<section id="hero" className="flex gap-64 container px-2 mx-auto mt-20">
			<div>
				<div>
					<h1 className="text-[72px] leading-[80px] font-extrabold">
						Team projects,
						<br/>done well
					</h1>

					<p className="text-gray-500 mt-8 leading-7">
						The only platform that gives your team all the tools needed to work <br></br>
						together on their awesome projects.{' '}
					</p>
					<div className="mt-5 mb-5 flex gap-3">
						<input placeholder="Enter work email" className="border w-[408px] h-[48px] text-gray-900 border-gray-300 rounded-lg" />
						<button className="bg-blue-600 py-2 px-3 rounded-md text-white flex gap-2 items-center">
							Sign Up Free
							<box-icon name="right-arrow-alt" color="#ffffff" />
						</button>
					</div>
				</div>
				<div className="flex gap-7 pt-3 pb-3 bg-slate-100 pl-3 pr-2 rounded-lg">
					<img src={Shells} alt="shells" />
					<img src={SmartFinder} alt="smartfinder" />
					<img src={ArtVenue} alt="artvenue" />
					<img src={Waves} alt="waves" />
				</div>
			</div>
			<img src={Video1} alt="video" />
		</section>
	)
}

export default Hero
