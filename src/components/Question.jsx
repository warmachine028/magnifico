import React from 'react'
import { GoPlus } from 'react-icons/go'

const Question = ({ ques, ans }) => {
	return (
		<label className="cursor-pointer">
			<input type="radio" className="peer sr-only" name='faq' />
			<div className="group my-4 items-center gap-4 rounded-2xl p-6 ring-1 ring-gray-300 peer-checked:ring-gray-500">
				<div className="flex items-center gap-4">
					<GoPlus className="text-gray-500 peer-checked:group-[]:hidden" />
					<GoPlus className="hidden rotate-45 text-gray-500 transition-all delay-150 ease-in-out peer-checked:group-[]:flex" />
					<h6 className="font-semibold">{ques}</h6>
				</div>
				<p className="mx-8 my-4 hidden text-gray-500 transition-all delay-150 ease-in-out peer-checked:group-[]:block">{ans}</p>
			</div>
		</label>
	)
}

export default Question
