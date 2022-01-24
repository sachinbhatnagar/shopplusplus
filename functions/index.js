const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")('sk_test_51KKPQdH7ZwCEXBDQvlUzI2swAkMkqiwHksOnQUxhdDPuUam6pEvTUPewOv0pJlTmgX389M1jC8TI3jqHXtY7ox3100bvfjaRuy')

const corsOptions ={
    origin:'http://localhost:3000', 
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200
}


// App configuration
const app = express();

// Middlewares
app.use(cors(corsOptions));
app.use(express.json());

// API Routes
app.get('/', (req, res) => {res.status(200).send('hello')});

app.post('/payments/create', async (req, res) => {
    const total = req.query.total;

    console.log('Payment Request Received JINGLES! in amount of:', total);

    const paymentIntent = await stripe.paymentIntents.create({
        amount: total,
        currency: "usd",
    });

    res.status(201).send({
        clientSecret: paymentIntent.client_secret,
    });
});

// Listener

exports.api = functions.https.onRequest(app);