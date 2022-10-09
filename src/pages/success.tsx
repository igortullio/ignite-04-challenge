import { GetServerSideProps } from 'next'
import Image from 'next/future/image'
import Head from 'next/head'
import Link from 'next/link'
import { useEffect } from 'react'
import Stripe from 'stripe'
import { useShoppingCart } from 'use-shopping-cart'
import { stripe } from '../libs/stripe'

import * as S from '../styles/pages/success'

interface Product {
	name: string
	imageUrl: string
}

interface SuccessProps {
	custumerName: string
	products: Product[]
}

export default function Success({ custumerName, products }: SuccessProps) {
	const { clearCart } = useShoppingCart()

	useEffect(() => {
		clearCart()
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])

	return (
		<>
			<Head>
				<title>Compra efetuada | Ignite shop</title>
				<meta name="robots" content="noindex" />
			</Head>
			<S.Container>
				<h1>Compra efetuada</h1>

				<S.ImagesContainer>
					{products.map(product => (
						<S.ImageContainer key={product.name}>
							<Image src={product.imageUrl} width={120} height={110} alt="" />
						</S.ImageContainer>
					))}
				</S.ImagesContainer>

				<p>
					Uhuul <strong>{custumerName}</strong>, sua compra de {products.length} camisetas já está a caminho da sua casa.
				</p>

				<Link href="/">Voltar ao catálogo</Link>
			</S.Container>
		</>
	)
}

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
	if (!query.session_id) {
		return {
			redirect: {
				destination: '/',
				permanent: false
			}
		}
	}

	const sessionId = String(query.session_id)

	const session = await stripe.checkout.sessions.retrieve(sessionId, {
		expand: ['line_items', 'line_items.data.price.product']
	})

	const products = session.line_items.data
		.map(lineItem => lineItem.price.product as Stripe.Product)
		.map(product => {
			return {
				name: product.name,
				imageUrl: product.images[0]
			}
		})

	return {
		props: {
			custumerName: session.customer_details.name,
			products
		}
	}
}
