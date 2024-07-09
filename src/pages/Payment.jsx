import { DestinationCard } from '../components'
import { PaymentHero, AdditionalInformation, PaymentMode } from '../sections'

const Payment = () => {
	return (
		<main className="container mx-auto px-14 font-['Open_Sans']  py-16 flex flex-row">
			<div className="flex">
                <div className="mx-10 w-2/3">
					<PaymentHero />
					<hr />
					<AdditionalInformation />
					<hr />
					<PaymentMode />
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
