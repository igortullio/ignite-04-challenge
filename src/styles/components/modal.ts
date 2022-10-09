import * as Dialog from '@radix-ui/react-dialog'
import { styled } from '..'

export const Overlay = styled(Dialog.Overlay, {
	position: 'fixed',
	width: '100vw',
	height: '100vh',
	inset: 0
})

export const Content = styled(Dialog.Content, {
	position: 'fixed',
	top: 0,
	right: 0,
	bottom: 0,
	width: '30vw',
	display: 'flex',
	flexDirection: 'column',
	justifyContent: 'space-between',

	background: '$gray800',
	padding: '4.5rem 3rem'
})

export const CloseButton = styled(Dialog.Close, {
	position: 'absolute',
	background: 'transparent',
	border: 0,
	top: '1.5rem',
	right: '1.5rem',
	lineHeight: 0,
	cursor: 'pointer',
	color: '$gray500',

	'&:hover': {
		color: '$gray300'
	}
})

export const Title = styled(Dialog.Content, {
	color: '$gray100',
	fontWeight: 'bold',
	fontSize: '1.25rem',
	lineHeight: '160%'
})

export const CardsContent = styled('ul', {
	display: 'flex',
	flexDirection: 'column',
	gap: '1.25rem'
})

export const CardItem = styled('li', {
	listStyle: 'none',
	display: 'flex',
	gap: '1.25rem',

	img: {
		background: 'linear-gradient(180deg, #1ea483 0%, #7465d4 100%)',
		borderRadius: 8,
		objectFit: 'cover'
	}
})

export const CardItemContent = styled('div', {
	display: 'flex',
	flexDirection: 'column',
	justifyContent: 'space-between'
})

export const CartItemTitle = styled('span', {
	fontSize: 18,
	lineHeight: '160%',
	color: '$gray300'
})

export const CartItemPrice = styled('span', {
	fontWeight: 'bold',
	fontSize: 18,
	lineHeight: '160%',
	color: '$white'
})

export const CartItemRemoveButton = styled('a', {
	fontWeight: 'bold',
	fontSize: 16,
	lineHeight: '160%',
	color: '$green500',
	cursor: 'pointer'
})

export const Footer = styled('footer', {
	display: 'flex',
	flexDirection: 'column',
	justifyContent: 'space-between',
	gap: '3.5rem'
})

export const TotalContent = styled('div', {
	display: 'flex',
	flexDirection: 'column',
	gap: '0.5rem'
})

export const TotalInfo = styled('div', {
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'space-between',

	variants: {
		bold: {
			true: {
				fontWeight: 'bold',
				fontSize: 18
			}
		}
	}
})

export const TotalInfoItem = styled('span', {
	variants: {
		bold: {
			true: {
				fontWeight: 'bold',
				fontSize: 24
			}
		}
	}
})

export const FinishButton = styled('button', {
	height: '4rem',
	width: '100%',
	background: '$green500',
	borderRadius: 8,

	color: '$white',
	fontWeight: 'bold',
	fontSize: 18,
	lineHeight: '160%',

	'&:disabled': {
		cursor: 'not-allowed',
		opacity: 0.6
	},

	'&:not(:disabled):hover': {
		background: '$green300'
	}
})
