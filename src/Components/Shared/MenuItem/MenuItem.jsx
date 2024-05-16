/* eslint-disable react/prop-types */

const MenuItem = ({ item }) => {
    const { price, name, recipe, image } = item;

    return (
        <div className="flex gap-5 items-center justify-center">
            <div>
                <img style={{ borderRadius: '0px 200px 200px 200px' }} className="w-[118px] h-[104px]" src={image} alt="" />
            </div>
            <div>
                <h3 className="cinzel text-lg">{name} ------------</h3>
                <p className="inter">{recipe}</p>
            </div>
            <div>
                <h4 className="text-[#D99904] inter text-lg">${price}</h4>
            </div>
        </div>
    );
};

export default MenuItem;
