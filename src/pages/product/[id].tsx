import axios from 'axios'
import { GetStaticPaths, GetStaticProps } from 'next'
import Image from 'next/future/image'
import Head from 'next/head'
import { useState } from 'react'
import Stripe from 'stripe'
import { stripe } from '../../libs/stripe'

import * as S from '../../styles/pages/product'

interface Product {
	id: string
	name: string
	description: string
	imageUrl: string
	price: string
	defaultPriceId: string
}

interface ProductProps {
	product: Product
}

export default function Product({ product }: ProductProps) {
	const [isCreationgCheckoutSession, setIsCreationgCheckoutSession] = useState(false)

	async function handleBuyProduct() {
		try {
			setIsCreationgCheckoutSession(true)

			const response = await axios.post('/api/checkout', {
				priceId: product.defaultPriceId
			})

			const { checkoutUrl } = response.data
			window.location.href = checkoutUrl
		} catch (error) {
			setIsCreationgCheckoutSession(false)
			alert('Falha ao redirecionar ao checkout!')
		}
	}

	return (
		<>
			<Head>
				<title>{product.name} | Ignite shop</title>
			</Head>
			<S.Container>
				<S.ImageContainer>
					<Image src={product.imageUrl} width={520} height={480} alt="" />
				</S.ImageContainer>

				<S.ProductDetails>
					<h1>{product.name}</h1>
					<span>{product.price}</span>

					<p>{product.description}</p>

					<button onClick={handleBuyProduct} disabled={isCreationgCheckoutSession}>
						Comprar agora
					</button>
				</S.ProductDetails>
			</S.Container>
		</>
	)
}

export const getStaticPaths: GetStaticPaths = async () => {
	return {
		paths: [{ params: { id: 'prod_MQw4CwEHauLtxT' } }],
		fallback: 'blocking'
	}
}

export const getStaticProps: GetStaticProps<ProductProps, { id: string }> = async ({ params }) => {
	const product = await stripe.products.retrieve(params.id, {
		expand: ['default_price']
	})

	const price = product.default_price as Stripe.Price

	return {
		props: {
			product: {
				id: product.id,
				name: product.name,
				description: product.description,
				imageUrl: product.images[0],
				price: new Intl.NumberFormat('pt-BR', {
					style: 'currency',
					currency: 'BRL'
				}).format(price.unit_amount / 100),
				defaultPriceId: price.id
			}
		},
		revalidate: 60 * 60 * 1 // 1 hours
	}
}
