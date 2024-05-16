import SectionHeading from "../../Shared/SectionHeading/SectionHeading";
import CategorySlider from "./CategorySlider";


const Category = () => {
    return (
        <div className="mt-32 max-w-screen-xl mx-auto">
            <SectionHeading
                heading={'ORDER ONLINE'}
                subHeading={'---From 11:00am to 10:00pm---'}
            >
            </SectionHeading>
            <CategorySlider></CategorySlider>
        </div >
    );
};

export default Category;