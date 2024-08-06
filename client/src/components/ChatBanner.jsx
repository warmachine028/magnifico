import { HeadPhones } from '../assets'

const ChatBanner = () => {
	return (
		<div className="sm:w-2/5 sm:max-w-md">
			<div className="hidden sm:block">
				<h6 className="text-3xl font-medium dark:text-blue-700">Frequently asked questions</h6>
				<p className="py-5 text-xl font-light text-gray-700 dark:text-gray-400">Here are some of our most asked questions. </p>
			</div>
			<div className="my-8 flex items-center justify-between rounded-2xl bg-gray-100 px-7 py-4 dark:bg-gray-300">
				<div>
					<h6 className="mt-5 max-w-40 font-semibold tracking-wide dark:text-gray-800">Still need help? We're here for you</h6>
					<button className="my-5 rounded-2xl bg-black px-5 py-4 text-white transition-colors duration-150 hover:opacity-90 sm:bg-blue-700">Chat with us</button>
				</div>
				<img className="animate-bounce" src={HeadPhones} alt="HeadPhones" />
			</div>
		</div>
	)
}

export default ChatBanner
