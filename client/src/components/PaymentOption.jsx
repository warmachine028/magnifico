import { FaCircle } from 'react-icons/fa'
import { ImRadioChecked2 } from 'react-icons/im'

const PaymentOption = ({ children, name, icon, disabled, defaultChecked }) => {
	return (
		<label className="cursor-pointer">
			<input name="paymentMode" disabled={disabled} className="peer sr-only" type="radio" defaultChecked={defaultChecked} />
			<div className="group relative my-5 cursor-pointer rounded-2xl bg-gray-100 px-7 py-5 ring-1 ring-gray-300 peer-checked:bg-white peer-checked:ring-gray-700 peer-disabled:cursor-not-allowed dark:bg-gray-300">
				<div className="relative flex items-center gap-4 dark:bg-gray-300">
					<div className="flex h-8 items-center justify-center rounded-lg border px-2 text-gray-600 peer-checked:group-[]:text-black peer-disabled:group-[]:border-0 peer-disabled:group-[]:bg-gray-200 peer-disabled:group-[]:text-gray-400">{icon}</div>
					<h6 className="text-xl font-medium text-gray-500 peer-checked:group-[]:text-black peer-disabled:group-[]:hidden">{name}</h6>
					<h6 className="hidden font-medium text-gray-500 peer-disabled:group-[]:block">Coming Soon</h6>
					<div className="pointer-events-none absolute inset-y-0 end-0 flex items-center pe-4 text-gray-200 peer-checked:group-[]:text-black">
						<ImRadioChecked2 className="hidden size-7 peer-checked:group-[]:block" />
						<FaCircle className="size-6 rounded-full ring-2 ring-gray-300 peer-checked:group-[]:hidden" />
					</div>
				</div>
				<div className="hidden peer-checked:group-[]:block dark:bg-gray-300">{children}</div>
			</div>
		</label>
	)
}

export default PaymentOption
