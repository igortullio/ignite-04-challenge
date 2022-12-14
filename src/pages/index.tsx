import 'keen-slider/keen-slider.min.css'

import { useKeenSlider } from 'keen-slider/react'
import { GetStaticProps } from 'next'
import Image from 'next/future/image'
import Head from 'next/head'
import Link from 'next/link'
import { Handbag } from 'phosphor-react'
import Stripe from 'stripe'

import { stripe } from '../libs/stripe'

import * as S from '../styles/pages/home'

interface Product {
	id: string
	name: string
	imageUrl: string
	price: string
}

interface HomeProps {
	products: Product[]
}

export default function Home({ products }: HomeProps) {
	const [sliderRef] = useKeenSlider({
		slides: {
			perView: 3,
			spacing: 48
		}
	})

	return (
		<>
			<Head>
				<title>Home | Ignite shop</title>
			</Head>
			<S.Container ref={sliderRef} className="keen-slider">
				{products.map(product => {
					return (
						<Link href={`/product/${product.id}`} key={product.id} prefetch={false}>
							<S.Product className="keen-slider__slide">
								<Image src={product.imageUrl} width={520} height={480} alt="" />
								<footer>
									<div>
										<strong>{product.name}</strong>
										<span>{product.price}</span>
									</div>
									<button>
										<Handbag weight="bold" size={32} />
									</button>
								</footer>
							</S.Product>
						</Link>
					)
				})}
			</S.Container>
		</>
	)
}

export const getStaticProps: GetStaticProps = async () => {
	const response = await stripe.products.list({
		expand: ['data.default_price']
	})

	const products = response.data.map(product => {
		const price = product.default_price as Stripe.Price

		return {
			id: product.id,
			name: product.name,
			imageUrl: product.images[0],
			price: new Intl.NumberFormat('pt-BR', {
				style: 'currency',
				currency: 'BRL'
			}).format(price.unit_amount / 100)
		}
	})

	return {
		props: {
			products
		},
		revalidate: 60 * 60 * 2 // 2 hours
	}
}
