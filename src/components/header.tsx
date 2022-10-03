import Image from 'next/image'
import Link from 'next/link'
import { Handbag } from 'phosphor-react'
import { useShoppingCart } from 'use-shopping-cart'
import logoImg from '../assets/logo.svg'
import * as S from '../styles/components/header'

export function Header() {
	const { cartCount } = useShoppingCart()

	return (
		<S.Container>
			<Link href="/">
				<Image src={logoImg} alt="" />
			</Link>
			<S.CartButton
				css={{
					'&::after': {
						content: `'${cartCount}'`
					}
				}}
			>
				<Handbag weight="bold" size={32} />
			</S.CartButton>
		</S.Container>
	)
}
