import { useEffect, useState } from "react";
import SectionHeading from "../../Shared/SectionHeading/SectionHeading";
import MenuItem from "../../Shared/MenuItem/MenuItem";


const PopularMenu = () => {

    const [menu, setMenu] = useState([])

    useEffect(() => {
        fetch('/menu.json')
            .then(res => res.json())
            .then(data => {
                const PopularMenu = data.filter(item => item.category === 'popular')
                setMenu(PopularMenu)
            })
    }, [])


    return (
        <div className="mt-32 max-w-screen-xl mx-auto">
            <SectionHeading
                heading={"FROM OUR MENU"}
                subHeading={"---Check it out---"}
            ></SectionHeading>
            <div className="grid grid-cols-2 gap-10 mt-10">
                {
                    menu.map(item => <MenuItem

                        key={item._id}
                        item={item}
                    ></MenuItem>)
                }
            </div>
            <div className="text-center">
                <button className="border-b-4 mt-10 mx-auto font-semibold py-3 px-4 border-black hover:border-[#CD9003] rounded-md">View Full Menu</button>
            </div>
        </div>
    );
};

export default PopularMenu;