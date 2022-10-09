import { ReactNode } from 'react'
import { CartProvider } from 'use-shopping-cart'

interface CartContextProviderProps {
	children: ReactNode
}

export function CartContextProvider({ children }: CartContextProviderProps) {
	const stripePublicKey = process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY
	const successUrl = `${process.env.NEXT_PUBLIC_NEXT_URL}/success?session_id={CHECKOUT_SESSION_ID}`
	const cancelUrl = `${process.env.NEXT_PUBLIC_NEXT_URL}/`

	return (
		<CartProvider
			mode="payment"
			cartMode="client-only"
			stripe={stripePublicKey}
			successUrl={successUrl}
			cancelUrl={cancelUrl}
			currency="BRL"
			allowedCountries={['BZ']}
		>
			{children}
		</CartProvider>
	)
}
