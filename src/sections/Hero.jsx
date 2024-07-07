import { Shells, SmartFinder, ArtVenue, Waves, Video1, Stars } from '../assets'
import { EnvelopeIcon } from '../assets'

const Hero = () => {
	return (
		<section id="hero" className="flex  container px-2 mx-auto mt-20 justify-center">
			<div className="w-1/2 justify-center mx-10 pr-36">
				<h1 className="text-[72px] leading-[80px] font-extrabold">
					Team projects,
					<br />
					done well
				</h1>

				<p className="text-gray-500 mt-8 leading-7">
					The only platform that gives your team all the tools needed to work <br></br>
					together on their awesome projects.{' '}
				</p>
				<form className="mt-5 mb-5 flex gap-3">
					<input placeholder="Enter work email" className="border pl-12 w-full h-12 border-gray-300 placeholder-gray-700 rounded-lg bg-no-repeat" style={{ backgroundImage: `url('${EnvelopeIcon}')`, backgroundPosition: "15px"}} />
					<button className="bg-blue-600 py-2 px-5 rounded-md text-white flex gap-2 items-center w-64 justify-center" type="submit">
						Sign Up Free
						<box-icon name="right-arrow-alt" color="#ffffff" />
					</button>
				</form>
				<div className="flex bg-slate-100 rounded-lg p-3 justify-between ">
					<img src={Shells} alt="shells" />
					<img src={SmartFinder} alt="smartfinder" />
					<img src={ArtVenue} alt="artvenue" />
					<img src={Waves} alt="waves" />
				</div>
			</div>
			<div className="w-1/2 px-10 ">
				<img src={Video1} alt="video" />
			</div>
		</section>
	)
}

export default Hero
