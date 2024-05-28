import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import useCart from "../../../Hooks/useCart";


const CheckoutForm = () => {

    const stripe = useStripe();
    const elements = useElements();
    const [error, setError] = useState('')
    const [clientSecret, setClientSecret] = useState()

    const axiosSecure = useAxiosSecure()

    const [cart] = useCart()
    const totalPrice = cart.reduce((acc, item) => acc + item.price, 0)

    // useEffect(() => {

    //     axiosSecure.post('/create-checkout-session', { price: totalPrice })
    //         .then(res => {
    //             setClientSecret(res.data.clientSecret);
    //         })

    // }, [axiosSecure, totalPrice])

    useEffect(() => {
        if (totalPrice > 0) {
            axiosSecure.post('/create-checkout-session', { price: totalPrice })
                .then(res => {
                    setClientSecret(res.data.clientSecret);
                });
        }
    }, [axiosSecure, totalPrice]);


    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            // Stripe.js has not loaded yet. Make sure to disable
            // form submission until Stripe.js has loaded.
            return;
        }

        const card = elements.getElement(CardElement);

        if (card == null) {
            return;
        }

        // Use your card Element with other Stripe.js APIs
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });

        if (error) {
            setError(error.message)
        } else {
            console.log('[PaymentMethod]', paymentMethod);
            setError('')
        }

    }


    return (
        <form onSubmit={handleSubmit}>
            <CardElement
                options={{
                    style: {
                        base: {
                            fontSize: '16px',
                            color: '#424770',
                            '::placeholder': {
                                color: '#aab7c4',
                            },
                        },
                        invalid: {
                            color: '#9e2146',
                        },
                    },
                }}
            />

            <button
                className=" btn btn-primary btn-circle p-1"
                type="submit"
                disabled={!stripe || !clientSecret}>
                Pay
            </button>

            <p className="text-sm text-red-700 my-2">
                {
                    error
                }
            </p>
        </form>
    );
};

export default CheckoutForm;