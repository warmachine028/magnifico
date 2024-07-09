import { DestinationCard } from "../components"
import { PaymentHero } from "../sections"

const Payment = () => {
  return (
		<main className="container mx-auto px-14 py-16 flex flex-row">
			<div className="mx-10 w-2/3">
        <PaymentHero />
        <hr/>
			</div>
			<aside className="w-1/3 max-w-sm px-5">
				<DestinationCard />
			</aside>
		</main>
  )
}

export default Payment