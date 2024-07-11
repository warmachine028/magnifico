import React from 'react'
import { ChatBanner, Questions } from '../components'

const FAQ = () => {
	return (
		<section id="FAQ" className="mx-11 my-20 flex gap-6">
			<div className="w-2/5">
				<ChatBanner />
			</div>
			<div className="w-3/5">
				<Questions />
			</div>
		</section>
	)
}

export default FAQ
