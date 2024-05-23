import useCart from "../../Hooks/useCart";
import SingleCart from "./SingleCart";


const Cart = () => {

    const [cart] = useCart();
    const totalPrice = cart.reduce((acc, item) => acc + item.price, 0)


    return (
        <div className="mt-20">
            <div className="flex justify-evenly">
                <h2 className="text-4xl font-bold">Total Order: {cart.length}</h2>
                <h2 className="text-4xl font-bold">Total Price: ${totalPrice}</h2>
                <button className="btn btn-secondary">Pay</button>
            </div>
            <div>
                <div className="overflow-x-auto mt-10">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>
                                </th>
                                <th>IMAGE</th>
                                <th>ITEM NAME</th>
                                <th>PRICE</th>
                                <th>ACTION</th>
                            </tr>
                        </thead>
                        <tbody>
                           {
                            cart.map((item, idx) => <SingleCart item={item} idx={idx} key={item._id}></SingleCart>)
                           }
                        </tbody>

                    </table>
                </div>
            </div>
        </div>
    );
};

export default Cart;