import Stripe from "stripe";
import dotenv from 'dotenv';
dotenv.config();

const stripe = new Stripe(
  'sk_test_51M21vmGhuJ5xJe5G33cAvw1dPsGZ03RRUoMCquXgU519OERTrx4N6wkMLZ4GfXx2DFqu0ko4Nk5ASKqIZanL0aKx00HWxtpXZW'
);

export const renderStripe = async (req, res) => {
    const devUrl = 'http://localhost:8080';
    const productionUrl = "https://soap-works-production.up.railway.app";

  if (req.method === "POST") {
    try {
      const params = {
        submit_type: 'pay',
        mode: 'payment',
        payment_method_types: ['card'],
        billing_address_collection: 'auto',
        shipping_options: [
            { shipping_rate: 'shr_1M50fYGhuJ5xJe5GY2bYupwY' },
            { shipping_rate: 'shr_1M50ghGhuJ5xJe5GUWb7cMAN' },
        ],
        line_items: req.body.map((item) => {
            return {
                price_data: {
                    currency: 'usd',
                    product_data: {
                        name: item.Title,
                        images: [item.ImageUrl],
                    },
                    unit_amount: item.Price * 100,
                },
                adjustable_quantity: {
                    enabled: true,
                    minimum: 1,
                },
                quantity: item.Amount,
            }
        }),
        success_url: `${devUrl}/`,
        cancel_url: `${devUrl}/cancel`,
      };
      const session = await stripe.checkout.sessions.create(params);
      res.json({url: session.url});
    } catch (err) {
      res.status(500).json({ statusCode: 500, message: err.message });
    }
  }

};
