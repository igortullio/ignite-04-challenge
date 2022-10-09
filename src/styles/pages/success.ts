import { styled } from '..'

export const Container = styled('main', {
	display: 'flex',
	flexDirection: 'column',
	alignItems: 'center',
	justifyContent: 'center',
	margin: '0 auto',
	height: 656,

	h1: {
		fontSize: '$2xl',
		color: '$gray100'
	},

	p: {
		fontSize: '$xl',
		color: '$gray300',
		maxWidth: 560,
		textAlign: 'center',
		marginTop: '2rem',
		lineHeight: 1.4
	},

	a: {
		display: 'block',
		marginTop: '5rem',
		fontSize: '$lg',
		color: '$green500',
		textDecoration: 'none',
		fontWeight: 'bold',

		'&:hover': {
			color: '$green300'
		}
	}
})

export const ImagesContainer = styled('div', {
	display: 'flex',

	'div + div': {
		marginLeft: -50
	}
})

export const ImageContainer = styled('div', {
	width: 140,
	height: 140,
	background: 'linear-gradient(180deg, #1ea483 0%, #7465d4 100%)',
	borderRadius: '50%',
	boxShadow: '0px 0px 60px rgba(0, 0, 0, 0.8)',
	padding: '0.25rem',
	marginTop: '4rem',

	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',

	img: {
		objectFit: 'cover'
	}
})
