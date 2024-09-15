import { Video2 } from '@/assets'
import { SecondaryButton } from '@/components'

const ImproveWorkflow = () => {
	return (
		<section id="improve-workflow" className="mt-20 flex flex-col px-5 lg:mt-52 lg:flex-row lg:gap-72 xl:gap-56">
			<div className="w-full lg:w-1/2 xl:w-4/6">
				<h1 className="xs:text-5xl my-4 text-4xl font-bold lg:my-5 lg:text-6xl lg:font-extrabold lg:leading-[80px] dark:text-blue-600">
					Improve workflow
				</h1>
				<div className="my-7 flex lg:w-full">
					<button className="flex w-1/3 items-center justify-center rounded-l-lg border p-3 px-16 dark:border-blue-700 dark:bg-blue-200">
						Research
					</button>
					<button className="flex w-1/3 items-center justify-center border p-3 dark:border-blue-700 dark:text-white">
						Plan
					</button>
					<button className="flex w-1/3 items-center justify-center rounded-r-lg border p-3 dark:border-blue-700 dark:text-white">
						Design
					</button>
				</div>
				<div>
					<p className="xs:text-xl mt-8 text-sm leading-7 text-gray-500">
						Egestas fringilla aliquam leo, habitasse arcu varius lorem elit. Neque pellentesque donec et
						tellus ac varius tortor, bibendum. Nulla felis ac turpis at amet. Purus malesuada placerat arcu
						at enim elit in accumsan.
					</p>
				</div>
				<div className="my-10 flex">
					<SecondaryButton arrow color="blue">
						Check the tools
					</SecondaryButton>
				</div>
			</div>
			<div className="w-full items-center justify-center lg:w-1/2 xl:w-[700px]">
				<img src={Video2} className="w-full" />
			</div>
		</section>
	)
}

export default ImproveWorkflow
