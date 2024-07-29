import { Helmet } from 'react-helmet'
import { DestinationCard } from '../components'
import { PaymentHero, AdditionalInformation, PaymentMode, TotalPayable, FAQ } from '../sections'

const Payment = () => {
	return (
		<main className="dark:bg-slate-900">
			<Helmet>
				<meta charSet="utf-8" />
				<title>Magnifico-Payments</title>
				<link rel="canonical" href="https://magnifico-sp.vercel.app/" />
				<meta property="og:image" content="https://github.com/user-attachments/assets/a8e90a68-36ec-4d0e-9146-3a2a07f3785d" />
			</Helmet>
			<div className="sticky left-0 top-20 z-40 flex w-full justify-center bg-blue-600 p-3 text-center text-white sm:hidden">Holding your tickets for 30:00</div>
			<div className="mx-auto pb-14 font-sans sm:container sm:flex sm:flex-col sm:px-14 sm:py-16">
				<div className="px-7 pt-12 sm:flex">
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
				<hr className="sm:pb-36" />
			</div>
		</main>
	)
}

export default Payment
