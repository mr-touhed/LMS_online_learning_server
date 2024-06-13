
// This is your test secret API key.
const stripe = require("stripe")(process.env.STRIP_SECRET);

const get_payment = async (data) => {
       
      const { price, author_email,_id } = data
    const calculateOrderAmount = (price) => {
      
      return parseInt(price);
    };
   
    // Create a PaymentIntent with the order amount and currency
    const paymentIntent = await stripe.paymentIntents.create({
      amount: calculateOrderAmount(price),
      currency: "usd",
      payment_method_types: ["card"],
      // In the latest version of the API, specifying the `automatic_payment_methods` parameter is optional because Stripe enables its functionality by default.
      receipt_email: author_email,
      });
    console.log(paymentIntent);
    return paymentIntent.client_secret;
  }


  module.exports = get_payment