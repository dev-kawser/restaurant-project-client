import { Helmet } from "react-helmet";
import BannerSlider from "../../Components/ForHome/BannerSlider/BannerSlider";
import BistroBoss from "../../Components/ForHome/BistroBoss/BistroBoss";
import Category from "../../Components/ForHome/Category/Category";
import Features from "../../Components/ForHome/Features/Features";
import PopularMenu from "../../Components/ForHome/PopularMenu/PopularMenu";
import Testimonials from "../../Components/ForHome/Testimonials/Testimonials";



// className="max-w-screen-2xl mx-auto"

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>BISTRO BOSS | Home</title>
            </Helmet>

            <BannerSlider></BannerSlider>
            <Category></Category>
            <BistroBoss></BistroBoss>
            <PopularMenu></PopularMenu>
            <Features></Features>
            <Testimonials></Testimonials>
        </div>
    );
};

export default Home;