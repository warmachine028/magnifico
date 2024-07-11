import React from 'react'
import { ChatBanner, Questions } from '../components'

const FAQ = () => {
	return (
		<section id="faq" className="my-20 flex flex-col-reverse px-7 sm:mx-11 sm:flex-row sm:gap-16">
			<ChatBanner />
			<Questions />
			<div className="sm:hidden">
				<h6 className="text-3xl font-medium">Frequently asked questions</h6>
				<p className="py-5 text-xl font-light text-gray-700">Here are some of our most asked questions. </p>
			</div>
		</section>
	)
}

export default FAQ
