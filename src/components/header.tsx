import * as Dialog from '@radix-ui/react-dialog'
import Image from 'next/image'
import Link from 'next/link'
import { Handbag } from 'phosphor-react'
import { useShoppingCart } from 'use-shopping-cart'
import logoImg from '../assets/logo.svg'
import * as S from '../styles/components/header'
import { Modal } from './modal'

export function Header() {
	const { cartCount } = useShoppingCart()

	const isButtonDisabled = cartCount === 0

	return (
		<S.Container>
			<Link href="/">
				<Image src={logoImg} alt="" />
			</Link>
			<Dialog.Root>
				<Dialog.Trigger asChild>
					<S.CartButton
						disabled={isButtonDisabled}
						css={{
							'&::after': {
								content: `'${cartCount}'`
							}
						}}
					>
						<Handbag weight="bold" size={32} />
					</S.CartButton>
				</Dialog.Trigger>

				<Modal />
			</Dialog.Root>
		</S.Container>
	)
}
