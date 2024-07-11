import { DestinationCard } from '../components'
import { PaymentHero, AdditionalInformation, PaymentMode, TotalPayable, FAQ } from '../sections'

const Payment = () => {
	return (
		<main className="mx-auto px-7 py-14 font-sans sm:container sm:flex sm:flex-col sm:px-14 sm:py-16">
			<div className="sm:flex">
				<div className="sm:mx-10 sm:w-2/3">
					<PaymentHero />
					<hr />
					<AdditionalInformation />
					<hr />
					<PaymentMode />
					<hr />
					<TotalPayable />
					<hr />
				</div>
				<div className="hidden w-1/3 sm:flex">
					<DestinationCard />
				</div>
				<hr />
			</div>
			<FAQ />
			<hr className="pb-36" />
		</main>
	)
}

export default Payment
