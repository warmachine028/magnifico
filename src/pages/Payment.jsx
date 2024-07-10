import { DestinationCard } from '../components'
import { PaymentHero, AdditionalInformation, PaymentMode, TotalPayable } from '../sections'

const Payment = () => {
	return (
		<main className="container mx-auto flex flex-row px-14 py-16 font-sans">
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
			</div>
			<hr />
			{/* <FAQ className="w-2/5"/>
            <Questions className="w-3/5"/> */}
		</main>
	)
}

export default Payment
