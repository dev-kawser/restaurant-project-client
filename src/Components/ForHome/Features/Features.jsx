import SectionHeading from "../../Shared/SectionHeading/SectionHeading";
import featuredImage from "../../../assets/home/featured.jpg"
import "./Features.css"


const Features = () => {
    return (
        <div className="features-item hero bg-fixed mt-32">
            <div className="hero-overlay bg-opacity-70"></div>
            <div className="py-28 max-w-screen-xl mx-auto text-white">
                <SectionHeading
                    heading={"FROM OUR MENU"}
                    subHeading={"---Check it out---"}
                ></SectionHeading>
                <div className="flex mt-12 gap-14 justify-center items-center">
                    <div>
                        <img className="w-[648px]" src={featuredImage} alt="" />
                    </div>
                    <div className="max-w-[604px] inter">
                        <h4>March 20, 2023</h4>

                        <h3>WHERE CAN I GET SOME?</h3>

                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptate facere, deserunt dolores maiores quod nobis quas quasi. Eaque repellat recusandae ad laudantium tempore consequatur consequuntur omnis ullam maxime tenetur.
                        </p>

                        <div className="mt-5">
                            <button className="border-b-4 font-semibold py-3 px-4 border-white hover:border-[#CD9003] rounded-md">Read More</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Features;