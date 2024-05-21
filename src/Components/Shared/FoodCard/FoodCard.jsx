/* eslint-disable react/prop-types */

import Swal from "sweetalert2";
import useAuth from "../../../Hooks/useAuth";
import { useLocation, useNavigate } from "react-router-dom";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import useCart from "../../../Hooks/useCart";



const FoodCard = ({ item }) => {

    const { user } = useAuth();
    const navigate = useNavigate()
    const location = useLocation()
    const axiosSecure = useAxiosSecure()
    const [, refetch] = useCart();

    const { price, name, recipe, image, _id } = item;

    const handleAddToCart = food => {

        if (user && user.email) {

            const cartItem = {
                menuId: _id,
                userEmail: user.email,
                name: food.name,
                price: food.price,
                recipe: food.recipe,
                image: food.image,
            }

            axiosSecure.post('/carts', cartItem)
                .then(res => {
                    if (res.data.insertedId) {
                        Swal.fire({
                            position: "center",
                            icon: "success",
                            title: "Your Cart has been saved",
                            showConfirmButton: false,
                            timer: 1500
                        });
                        refetch();
                    }
                })

        } else {
            Swal.fire({
                title: "You are not logged in",
                text: "Please Login first to cart",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Login!"
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate("/login", { state: location.pathname })
                }
            });
        }
    }

    return (
        <div className="card bg-base-100 shadow-xl relative">
            <figure><img src={image} alt="Shoes" /></figure>
            <div className="card-body text-center">
                <p className="bg-slate-900 text-white p-1 rounded-full absolute top-4 right-10">${price}</p>
                <h2 className="text-xl font-semibold text-center">{name}</h2>
                <p>{recipe}</p>
                <div className="card-actions justify-center">
                    <button
                        onClick={() => handleAddToCart(item)}
                        className="border-b-4 mx-auto font-semibold py-3 px-4 border-black hover:border-[#CD9003] rounded-md">ADD TO CART</button>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;