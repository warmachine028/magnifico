import React from 'react'
import { HeadPhones } from '../assets'

const ChatBanner = () => {
	return (
		<div>
			<h6 className="text-3xl font-medium">Frequently asked questions</h6>
			<p className="py-5 text-xl font-light text-gray-700">Here are some of our most asked questions. </p>
			<div className="my-8 flex items-center justify-center gap-32 rounded-2xl bg-gray-100 py-4">
				<div>
					<h6 className="mt-5 font-semibold tracking-wide">
						Still need help?
						<br />
						We're here for you
					</h6>
					<button className="my-5 rounded-2xl bg-blue-700 px-5 py-4 text-white">Chat with us</button>
				</div>
				<img className="" src={HeadPhones} alt="" />
			</div>
		</div>
	)
}

export default ChatBanner
