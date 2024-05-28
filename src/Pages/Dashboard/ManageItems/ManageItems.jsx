
import SectionHeading from "../../../Components/Shared/SectionHeading/SectionHeading";
import useMenu from "../../../Hooks/useMenu";
import SingleMenu from "./SingleMenu";


const ManageItems = () => {

    const [menu] = useMenu()

    return (
        <>

            <div className="mt-10">
                <SectionHeading
                    heading={"Manage Item"}
                    subHeading={"Manage Item ---------"}
                ></SectionHeading>
            </div>
            <div>
                <div>
                    <div className="overflow-x-auto mt-10">
                        <table className="table">
                            {/* head */}
                            <thead>
                                <tr>
                                    <th>
                                    </th>
                                    <th>IMAGE</th>
                                    <th>ITEM NAME</th>
                                    <th>PRICE</th>
                                    <th>ACTION</th>
                                    <th>ACTION</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    menu.map((item, idx) => <SingleMenu menu={menu} item={item} idx={idx} key={item._id}></SingleMenu>)
                                }
                            </tbody>

                        </table>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ManageItems;