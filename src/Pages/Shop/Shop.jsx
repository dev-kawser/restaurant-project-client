import { useParams } from "react-router-dom";
import FoodCard from "../../Components/Shared/FoodCard/FoodCard";
import SectionCover from "../../Components/Shared/SectionCover/SectionCover";
import useMenu from "../../Hooks/useMenu";
import shopImg from "../../assets/shop/banner2.jpg"
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const Shop = () => {

    const [menu] = useMenu()

    const { category } = useParams();
    console.log(category);
    
    const soup = menu.filter(item => item.category === 'soup')
    const salad = menu.filter(item => item.category === 'salad')
    const dessert = menu.filter(item => item.category === 'dessert')
    const pizza = menu.filter(item => item.category === 'pizza')
    const drinks = menu.filter(item => item.category === 'drinks')


    return (
        <div>
            <SectionCover
                img={shopImg}
                heading={"Our Shop"}
                subHeading={"Would you like to try a dish?"}
            ></SectionCover>
            <div className="mt-32 max-w-screen-xl mx-auto">
                <Tabs>
                    <TabList>
                        <Tab><h1 className="text-lg font-semibold">Salad</h1></Tab>
                        <Tab><h1 className="text-lg font-semibold">pizza</h1></Tab>
                        <Tab><h1 className="text-lg font-semibold">soups</h1></Tab>
                        <Tab><h1 className="text-lg font-semibold">desserts</h1></Tab>
                        <Tab><h1 className="text-lg font-semibold">drinks</h1></Tab>
                    </TabList>

                    <TabPanel>
                        <div className="grid grid-cols-3 gap-10 mt-10">
                            {
                                salad.map(item => <FoodCard
                                    key={item._id}
                                    item={item}
                                ></FoodCard>)
                            }
                        </div>
                    </TabPanel>

                    <TabPanel>
                        <div className="grid grid-cols-3 gap-10 mt-10">
                            {
                                pizza.map(item => <FoodCard
                                    key={item._id}
                                    item={item}
                                ></FoodCard>)
                            }
                        </div>
                    </TabPanel>

                    <TabPanel>
                        <div className="grid grid-cols-3 gap-10 mt-10">
                            {
                                soup.map(item => <FoodCard
                                    key={item._id}
                                    item={item}
                                ></FoodCard>)
                            }
                        </div>
                    </TabPanel>

                    <TabPanel>
                        <div className="grid grid-cols-3 gap-10 mt-10">
                            {
                                dessert.map(item => <FoodCard
                                    key={item._id}
                                    item={item}
                                ></FoodCard>)
                            }
                        </div>
                    </TabPanel>

                    <TabPanel>
                        <div className="grid grid-cols-3 gap-10 mt-10">
                            {
                                drinks.map(item => <FoodCard
                                    key={item._id}
                                    item={item}
                                ></FoodCard>)
                            }
                        </div>
                    </TabPanel>

                </Tabs>
            </div>
        </div>
    );
};

export default Shop;