/* eslint-disable react/prop-types */


const FoodCard = ({ item }) => {

    const { price, name, recipe, image } = item;

    return (
        <div className="card bg-base-100 shadow-xl relative">
            <figure><img src={image} alt="Shoes" /></figure>
            <div className="card-body text-center">
                <p className="bg-slate-900 text-white p-1 rounded-full absolute top-4 right-10">${price}</p>
                <h2 className="text-xl font-semibold text-center">{name}</h2>
                <p>{recipe}</p>
                <div className="card-actions justify-center">
                    <button className="border-b-4 mx-auto font-semibold py-3 px-4 border-black hover:border-[#CD9003] rounded-md">ADD TO CART</button>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;