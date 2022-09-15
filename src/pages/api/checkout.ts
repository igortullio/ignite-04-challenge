import { NextApiRequest, NextApiResponse } from 'next'
import { stripe } from '../../libs/stripe'

export default async function handler(
  request: NextApiRequest,
  response: NextApiResponse,
) {
  const { priceId } = request.body

  const successUrl = `${process.env.NEXT_URL}/success?session_id={CHECKOUT_SESSION_ID}`
  const cancelUrl = `${process.env.NEXT_URL}/`

  const checkoutSession = await stripe.checkout.sessions.create({
    success_url: successUrl,
    cancel_url: cancelUrl,
    mode: 'payment',
    line_items: [
      {
        price: priceId,
        quantity: 1,
      },
    ],
  })

  return response.status(201).json({
    checkoutUrl: checkoutSession.url,
  })
}
