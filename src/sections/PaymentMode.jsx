import { IoMdCard } from 'react-icons/io'
import { FaApplePay, FaGooglePay } from 'react-icons/fa'
import { CreditCardForm, PaymentOption } from '../components'

const PaymentMode = () => {
	return (
		<section id="payment-mode" className="my-8">
			<h6 className="mt-10 text-3xl font-medium">Select your mode of payment</h6>
			<p className="py-5 text-xl font-light text-gray-700">Payments with Tickets are secure and encrypted.</p>
			<PaymentOption name="Credit & debit card" defaultChecked icon={<IoMdCard className="size-5" />}>
				<CreditCardForm />
			</PaymentOption>
			<PaymentOption name="Apple Pay" icon={<FaApplePay className="size-11" />}>
				<CreditCardForm />
			</PaymentOption>
			<PaymentOption name="Google Pay" disabled icon={<FaGooglePay className="size-11" />} />
		</section>
	)
}

export default PaymentMode
