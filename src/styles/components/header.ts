import { styled } from '..'

export const Container = styled('header', {
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

	position: 'relative',
	width: 48,
	height: 48,
	padding: '0.75rem',
	backgroundColor: '$gray800',

	svg: {
		color: '$gray500'
	},

	'&:disabled': {
		cursor: 'not-allowed',
		opacity: 0.6
	},

	'&:not(:disabled):hover': {
		svg: {
			color: '$gray300'
		},

		'&::after': {
			background: '$green300'
		}
	},

	'&::after': {
		background: '$green500',
		color: '$white',
		borderRadius: '50%',

		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',

		position: 'absolute',
		width: 24,
		height: 24,
		top: -7,
		right: -7
	}
})
