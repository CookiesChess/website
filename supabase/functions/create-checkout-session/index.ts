
import { serve } from "https://deno.land/std@0.168.0/http/server.ts"
import { stripe } from "../_utils/stripe.ts"
import { corsHeaders } from "../_utils/cors.ts"

const MONTHLY_PRICE_ID = 'price_XXXXX' // Replace with your Stripe price ID
const ANNUAL_PRICE_ID = 'price_XXXXX'  // Replace with your Stripe price ID

serve(async (req) => {
  // Handle CORS
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders })
  }

  try {
    const { priceId } = await req.json()
    
    // Map frontend price IDs to actual Stripe price IDs
    const stripePriceId = priceId === 'monthly' ? MONTHLY_PRICE_ID : ANNUAL_PRICE_ID

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [
        {
          price: stripePriceId,
          quantity: 1,
        },
      ],
      mode: 'subscription',
      success_url: `${req.headers.get('origin')}/?success=true`,
      cancel_url: `${req.headers.get('origin')}/?canceled=true`,
    })

    return new Response(
      JSON.stringify({ id: session.id }),
      {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 200,
      }
    )
  } catch (error) {
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 400,
      }
    )
  }
})
