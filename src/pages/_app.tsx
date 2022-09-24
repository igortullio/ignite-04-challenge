import { AppProps } from 'next/app'
import Image from 'next/future/image'
import Link from 'next/link'
import { Handbag } from 'phosphor-react'

import logoImg from '../assets/logo.svg'
import { globalStyles } from '../styles/global'

import * as S from '../styles/pages/app'

globalStyles()

export default function App({ Component, pageProps }: AppProps) {
	return (
		<S.Container>
			<S.Header>
				<Link href="/">
					<Image src={logoImg} alt="" />
				</Link>
				<S.CartButton>
					<Handbag weight="bold" size={32} />
				</S.CartButton>
			</S.Header>
			<Component {...pageProps} />
		</S.Container>
	)
}
