import { DestinationCard } from '../components'
import { PaymentHero, AdditionalInformation, PaymentMode, TotalPayable, FAQ } from '../sections'

const Payment = () => {
	return (
		<main className="container mx-auto flex flex-col px-14 py-16 font-sans">
				<div className="flex">
					<div className="mx-10 w-2/3">
						<PaymentHero />
						<hr />
						<AdditionalInformation />
						<hr />
						<PaymentMode />
						<hr />
						<TotalPayable />
						<hr />
					</div>
					<DestinationCard />
					<hr />
				</div>
			<FAQ />
		</main>
	)
}

export default Payment
