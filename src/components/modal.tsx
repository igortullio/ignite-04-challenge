import * as Dialog from '@radix-ui/react-dialog'
import Image from 'next/image'
import { X } from 'phosphor-react'
import { formatCurrencyString, useShoppingCart } from 'use-shopping-cart'
import * as S from '../styles/components/modal'

export function Modal() {
	const { cartDetails, cartCount, formattedTotalPrice, redirectToCheckout, removeItem } = useShoppingCart()

	const isButtonDisabled = cartCount === 0

	function handleFinish() {
		redirectToCheckout()
	}

	return (
		<Dialog.Portal>
			<S.Overlay />

			<S.Content>
				<S.CloseButton>
					<X size={24} />
				</S.CloseButton>

				<S.Title>Sacola de compras</S.Title>

				<S.CardsContent>
					{Object.values(cartDetails ?? {}).map(entry => (
						<S.CardItem key={entry.id}>
							<Image src={entry.image} height={94} width={94} alt={entry.description} />
							<S.CardItemContent>
								<S.CartItemTitle>{entry.name}</S.CartItemTitle>
								<S.CartItemPrice>
									{entry.quantity} x {formatCurrencyString({ value: entry.price, currency: 'BRL' })} = {entry.formattedValue}
								</S.CartItemPrice>
								<S.CartItemRemoveButton onClick={() => removeItem(entry.id)}>Remover</S.CartItemRemoveButton>
							</S.CardItemContent>
						</S.CardItem>
					))}
				</S.CardsContent>

				<S.Footer>
					<S.TotalContent>
						<S.TotalInfo>
							<S.TotalInfoItem>Quantidade</S.TotalInfoItem>
							<S.TotalInfoItem>{cartCount} itens</S.TotalInfoItem>
						</S.TotalInfo>
						<S.TotalInfo bold>
							<S.TotalInfoItem>Valor total</S.TotalInfoItem>
							<S.TotalInfoItem bold>{formattedTotalPrice}</S.TotalInfoItem>
						</S.TotalInfo>
					</S.TotalContent>
					<S.FinishButton disabled={isButtonDisabled} onClick={handleFinish}>
						Finalizar compra
					</S.FinishButton>
				</S.Footer>
			</S.Content>
		</Dialog.Portal>
	)
}
