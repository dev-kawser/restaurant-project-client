/* eslint-disable react/prop-types */

import { Parallax } from 'react-parallax';


const SectionCover = ({ img, heading, subHeading }) => {
    return (

        <Parallax
            blur={{ min: -40, max: 40 }}
            bgImage={img}
            bgImageAlt="the dog"
            strength={-200}
        >
            <div className="hero h-[600px] bg-cover bg-center bg-no-repeat">
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-3xl">
                        <h1 className="mb-5 text-5xl font-bold">{heading}</h1>
                        <p className="mb-5">{subHeading}</p>
                    </div>
                </div>
            </div>
        </Parallax>
    );
};

export default SectionCover;