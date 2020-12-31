const functions = require('firebase-functions');
const express = require('express');
const cors = require('cors');
const stripe = require('stripe')('sk_test_51HdMs9HOAxUNfXsh9n6S08wbkI0gEjw5NulfSDM1SbNxdL0f2PdjsEqgEBgieUjAAnzLv2X5e4KvzMdb8D1Ehyzc00lZ35GWka');

const app = express();

app.use(cors({
    origin: true
}));
app.use(express.json());

app.post('/payments/create', async (req, res) => {
    try {
        const { amount, shipping } = req.body;
        const paymentIntent = await stripe.paymentIntent.create({
            shipping,
            amount,
            currency: 'usd'
        });

        res
            .status(200)
            .send(paymentIntent.client_secret);

    } catch (err) {
        res
            .status(500)
            .json({
                statusCode: 500,
                message: err.message
            });
    }
})

app.get('/', (req, res) => {
    console.log("HELLO!");

    res
        .status(404)
        .send('404, Not Found.');
});

exports.api = functions.https.onRequest(app);

