import { Routes, Route, useLocation } from 'react-router-dom'
import { Home, Payment } from '@/pages'

const AppRouter = () => {
	const location = useLocation()
	return (
		<Routes location={location}>
			<Route path="/" element={<Home />} />
			<Route path="/payment" element={<Payment />} />
		</Routes>
	)
}

export default AppRouter
