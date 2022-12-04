require("dotenv").config();
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);
//stripe('sk_test_51M8NCRIq2h5Z6paUqRsNVdwNgmvHDPcl5K9lwp3Qr50FBwElwxnVFR7MhuagTrWTFyGkCqQU2Q3atYxoPAYZlq5t0062m1CZRX');

exports.handler = async (event) => {
    try {
        const { amount } = JSON.parse(event.body);

        const paymentIntent = await stripe.paymentIntents.create({
            amount,
            currency: "usd",
            payment_method_types: ["card"],
        });

        return {
            statusCode: 200,
            body: JSON.stringify({ paymentIntent }),
        };
    } catch (error) {
        console.log({ error });

        return {
            statusCode: 400,
            body: JSON.stringify({ error }),
        };
    }
};
