/* eslint-disable react/prop-types */

import { MdDelete } from "react-icons/md";
import Swal from "sweetalert2";


import useAxiosSecure from "../../../Hooks/useAxiosSecure";
// import useMenu from "../../../Hooks/useMenu";
import { FaEdit } from "react-icons/fa";
import useMenu from "../../../Hooks/useMenu";
import { Link } from "react-router-dom";


const SingleMenu = ({ item, idx }) => {

    const [, refetch] = useMenu();
    const axiosSecure = useAxiosSecure();


    const { image, name, price, _id } = item;

    const handleDelete = id => {

        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.delete(`/menu/${id}`)
                    .then(res => {
                        if (res.data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                            refetch();
                        }
                    })
            }
        });


    }

    return (
        <tr>
            <th>
                {idx + 1}
            </th>
            <td>
                <div className="flex items-center gap-3">
                    <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                            <img src={image} alt="Avatar Tailwind CSS Component" />
                        </div>
                    </div>
                </div>
            </td>
            <td>
                <div>
                    <div className="font-bold">{name}</div>
                </div>
            </td>
            <td className="text-lg font-semibold">${price}</td>
            <th>
                <Link to={`/dashboard/updateItem/${_id}`}>
                    <button
                        className="btn btn-ghost text-lg bg-red-600 text-white"><FaEdit />
                    </button>
                </Link>
            </th>
            <th>
                <button
                    onClick={() => handleDelete(_id)}
                    className="btn btn-ghost text-lg bg-red-600 text-white"><MdDelete /></button>
            </th>
        </tr>
    );
};

export default SingleMenu;