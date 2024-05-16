

// eslint-disable-next-line react/prop-types
const SectionHeading = ({ heading, subHeading }) => {
    return (
        <div>
            <div className="text-center">
                <h4 className="text-lg inter italic text-[#D99904]">
                    {subHeading}
                </h4>
                <hr className="max-w-[424px] mx-auto my-3" />
                <h2 className="text-4xl inter">
                    {heading}
                </h2>
                <hr className="max-w-[424px] mx-auto mt-3" />
            </div>
        </div>
    );
};

export default SectionHeading;