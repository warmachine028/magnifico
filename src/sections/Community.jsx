
const Community = () => {
  return (
		<section id="community" className="container px-2 mx-auto mt-52 bg-gradient-to-r from-blue-700 to-purple-800 flex-col justify-center rounded-lg">
			<h1 className="text-[60px] leading-[80px] font-extrabold text-white pt-20 text-center">
				Join the community today
			</h1>
			<p className=" mt-9 mb-9 text-white text-center">
				Egestas fringilla aliquam leo, habitasse arcu varius lorem elit. Neque
				pellentesque donec et tellus ac varius tortor, bibendum. Nulla felis ac{" "}
				<br></br>
				turpis at amet. Purus malesuada placerat arcu at enim elit in accumsan.
			</p>
			<div className="flex justify-center pb-10">
				<button className="bg-blue-600 py-2 px-3 rounded-md text-white gap-4 flex">
					Sign Up Free
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						strokeWidth={1.5}
						stroke="currentColor"
						className="size-6"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
						/>
					</svg>
				</button>
			</div>
		</section>
	);
}

export default Community