import { Helmet } from "react-helmet";
import SectionCover from "../../Components/Shared/SectionCover/SectionCover";
import useMenu from "../../Hooks/useMenu";
import MenuCategory from "../../Components/ForMenu/MenuCategory/MenuCategory";
import SectionHeading from "../../Components/Shared/SectionHeading/SectionHeading";
import menuImg from "../../assets/menu/banner3.jpg"
import dessertImg from "../../assets/menu/dessert-bg.jpeg"
import pizzaImg from "../../assets/menu/pizza-bg.jpg"
import saladImg from "../../assets/menu/salad-bg.jpg"
import soupImg from "../../assets/menu/soup-bg.jpg"



const Menu = () => {

    const [menu] = useMenu()

    const soup = menu.filter(item => item.category === 'soup')
    const salad = menu.filter(item => item.category === 'salad')
    const dessert = menu.filter(item => item.category === 'dessert')
    const pizza = menu.filter(item => item.category === 'pizza')
    const offered = menu.filter(item => item.category === 'offered')

    return (
        <div>
            <Helmet>
                <title>BISTRO BOSS | Menu</title>
            </Helmet>
            {/* page main cover */}
            <SectionCover
                img={menuImg}
                heading={"OUR MENU"}
                subHeading={"Would you like to try a dish?"}
            ></SectionCover>
            <div className="mt-32 max-w-screen-xl mx-auto">
                <SectionHeading
                    heading={"TODAY'S OFFER"}
                    subHeading={"---Don't miss---"}
                ></SectionHeading>
            </div>

            {/* offered items */}
            <MenuCategory item={offered}></MenuCategory>

            {/* dessert items */}
            <MenuCategory
                coverImg={dessertImg}
                coverTitle={"DESSERTS"}
                coverSubTitle={"Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."}
                item={dessert}
            ></MenuCategory>

            {/* pizza items */}
            <MenuCategory
                coverImg={pizzaImg}
                coverTitle={"PIZZA"}
                coverSubTitle={"Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."}
                item={pizza}
            ></MenuCategory>

            {/* salads items */}
            <MenuCategory
                coverImg={saladImg}
                coverTitle={"SALADS"}
                coverSubTitle={"Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."}
                item={salad}
            ></MenuCategory>

            {/* pizza items */}
            <MenuCategory
                coverImg={soupImg}
                coverTitle={"SOUPS"}
                coverSubTitle={"Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."}
                item={soup}
            ></MenuCategory>
        </div>
    );
};

export default Menu;