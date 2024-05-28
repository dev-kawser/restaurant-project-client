import { loadStripe } from "@stripe/stripe-js";
import SectionHeading from "../../../Components/Shared/SectionHeading/SectionHeading";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";



const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_PK)


const Payment = () => {
    return (
        <div className="mt-10">

            <SectionHeading
                subHeading={"Please payment first"}
                heading={"PAYMENT"}
            ></SectionHeading>

            <div className="mt-10 mx-80">
                <Elements stripe={stripePromise} >
                    <CheckoutForm></CheckoutForm>
                </Elements>
            </div>
        </div>
    );
};

export default Payment;