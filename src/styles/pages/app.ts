import { styled } from '..'

export const Container = styled('div', {
	display: 'flex',
	flexDirection: 'column',
	alignItems: 'flex-start',
	justifyContent: 'center',
	minHeight: '100vh'
})

export const Header = styled('header', {
	padding: '2rem 0',
	width: '100%',
	maxWidth: 1180,
	margin: '0 auto',

	display: 'flex',
	alignItems: 'center',
	justifyContent: 'space-between'
})

export const CartButton = styled('button', {
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',

	width: 48,
	height: 48,
	padding: '0.75rem',
	backgroundColor: '$gray800',

	svg: {
		color: '$gray500'
	},

	'&:hover': {
		backgroundColor: '$gray500',

		svg: {
			color: '$gray300'
		}
	}
})
