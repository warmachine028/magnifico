import { DestinationCard } from '../components'
import { PaymentHero, AdditionalInformation, PaymentMode, TotalPayable, FAQ } from '../sections'

const Payment = () => {
	return (
		<main className="container mx-auto sm:flex sm:flex-col sm:px-14 sm:py-16 px-7 py-14 font-sans">
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
				<div className="hidden sm:flex">
					<DestinationCard />
				</div>
					<hr />
				</div>
			{/* <FAQ />
			<hr className='pb-36'/> */}
		</main>
	)
}

export default Payment
