import { DestinationCard } from '../components'
import { AdditionalInformation, ModeofPayment, PaymentHero } from '../sections'

const Payment = () => {
	return (
		<main className="container mx-auto px-14 font-['Open_Sans']  py-16 flex flex-row">
			<div className="mx-10 w-2/3">
				<PaymentHero />
				<hr />
				<AdditionalInformation />
				<hr />
				<ModeofPayment />
			</div>
			<DestinationCard />
		</main>
	)
}

export default Payment
