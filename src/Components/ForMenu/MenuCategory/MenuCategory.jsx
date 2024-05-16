/* eslint-disable react/prop-types */
import MenuItem from "../../Shared/MenuItem/MenuItem";
import SectionCover from "../../Shared/SectionCover/SectionCover";


const MenuCategory = ({ item, coverImg, coverTitle, coverSubTitle }) => {

    return (
        <div className="mt-32">

            {
                coverTitle && <SectionCover
                    img={coverImg}
                    heading={coverTitle}
                    subHeading={coverSubTitle}
                ></SectionCover>
            }

            <div className="grid max-w-screen-xl mx-auto grid-cols-2 gap-10 mt-20">
                {
                    item.map(item => <MenuItem

                        key={item._id}
                        item={item}
                    ></MenuItem>)
                }
            </div>
            <div className="text-center">
                <button className="border-b-4 mt-10 mx-auto font-semibold py-3 px-4 border-black hover:border-[#CD9003] rounded-md">ORDER YOUR FAVOURITE FOOD</button>
            </div>
        </div>
    );
};

export default MenuCategory;