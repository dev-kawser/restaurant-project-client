import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { MdDelete } from "react-icons/md";
import Swal from "sweetalert2";
import { FaUserAlt } from "react-icons/fa";


const AllUsers = () => {


    const axiosSecure = useAxiosSecure()


    const { refetch, data: users = [] } = useQuery({
        queryKey: ["users"],
        queryFn: async () => {
            const res = await axiosSecure.get("/users")
            return res.data;
        }
    })

    const handleMakeAdmin = (id, name) => {
        axiosSecure.patch(`/users/admin/${id}`)
            .then(res => {
                if (res.data.modifiedCount > 0) {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: `${name} is an Admin Now`,
                        showConfirmButton: false,
                        timer: 1500
                    });
                    refetch();
                }
            })
    }

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
                axiosSecure.delete(`/users/${id}`)
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
        <div className="mt-20">
            <div className="flex justify-evenly">
                <h2 className="text-4xl font-bold">All Users</h2>
                <h2 className="text-4xl font-bold">Total Users: {users.length}</h2>
            </div>
            <div>
                <div className="overflow-x-auto">
                    <table className="table table-zebra">
                        {/* head */}
                        <thead>
                            <tr>
                                <th></th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Roll</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                users.map((user, idx) => <tr key={user._id}>
                                    <th>{idx + 1}</th>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                    <td>
                                        {user.role === 'admin' ? <p className="text-lg text-green-600 font-semibold">Admin</p> :
                                            <button
                                                onClick={() => handleMakeAdmin(user._id, user.name)}
                                                className="btn btn-ghost text-lg bg-orange-600 text-white">
                                                <FaUserAlt />
                                            </button>}
                                    </td>
                                    <td>
                                        <button
                                            onClick={() => handleDelete(user._id)}
                                            className="btn btn-ghost text-lg bg-red-600 text-white"><MdDelete /></button>
                                    </td>
                                </tr>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default AllUsers;