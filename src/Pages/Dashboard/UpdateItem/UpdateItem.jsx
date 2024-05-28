import { useLoaderData } from "react-router-dom";
import SectionHeading from "../../../Components/Shared/SectionHeading/SectionHeading";


const UpdateItem = () => {
    
    const item = useLoaderData()
    console.log(item);

    return (
        <div className="mt-10">
            <SectionHeading
                heading={"Update Item"}
                subHeading={"----Update____"}
            >
            </SectionHeading>
        </div>
    );
};

export default UpdateItem;