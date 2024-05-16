
import SectionHeading from "../../Shared/SectionHeading/SectionHeading";
import MenuItem from "../../Shared/MenuItem/MenuItem";
import useMenu from "../../../Hooks/useMenu";


const PopularMenu = () => {

    const [menu] = useMenu()
    const PopularMenu = menu.filter(item => item.category === 'popular')


    return (
        <div className="mt-32 max-w-screen-xl mx-auto">
            <SectionHeading
                heading={"FROM OUR MENU"}
                subHeading={"---Check it out---"}
            ></SectionHeading>
            <div className="grid grid-cols-2 gap-10 mt-10">
                {
                    PopularMenu.map(item => <MenuItem

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