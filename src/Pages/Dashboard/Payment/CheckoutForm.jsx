import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import useCart from "../../../Hooks/useCart";
import useAuth from "../../../Hooks/useAuth";
import Swal from "sweetalert2";


const CheckoutForm = () => {

    const stripe = useStripe();
    const elements = useElements();
    const [error, setError] = useState('')
    const [clientSecret, setClientSecret] = useState()
    const [transitionId, setTransitionId] = useState()

    const { user } = useAuth()

    const axiosSecure = useAxiosSecure()

    const [cart, reface] = useCart()
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

        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: card,
                billing_details: {
                    email: user?.email || "anonymous",
                    name: user?.displayName || "anonymous",
                }
            }
        })

        if (confirmError) {
            console.log("confirm error");
        } else {
            console.log("payment intent", paymentIntent);
            if (paymentIntent.status === 'succeeded') {
                setTransitionId(paymentIntent.id)

                // now save the payment into database 

                const payment = {

                    email: user.email,
                    price: totalPrice,
                    date: new Date().toISOString().split('T')[0],
                    cartIds: cart.map(item => item._id),
                    menuItemIds: cart.map(item => item.menuId),
                    status: "pending",
                    transitionId: paymentIntent.id

                }

                const res = await axiosSecure.post("/payments", payment)
                console.log("paymentDone", res.data);
                reface();
                if (res.data?.paymentResult?.insertedId) {
                    Swal.fire({
                        position: "center",
                        icon: "success",
                        title: "Your work has been saved",
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            }
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
            {
                transitionId && <p className="text-lg text-green-500 font-semibold">
                    Your Transition Id: {transitionId}
                </p>
            }
        </form>
    );
};

export default CheckoutForm;