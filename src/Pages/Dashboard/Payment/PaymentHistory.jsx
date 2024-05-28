import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../Hooks/useAuth";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";


const PaymentHistory = () => {

    const { user } = useAuth()

    const axiosSecure = useAxiosSecure()

    const { data: payments = [] } = useQuery({
        queryKey: ['payments', user.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/payments/${user.email}`)
            return res.data
        }
        
        // const { data: payments = [] } = useQuery({
        //     queryKey: ['payments', user.email],
        //     queryFn: async () => {
        //         const res = await axiosSecure.get(`/payments/${user.email}`)
        //         return res.data;
        //     }
        // }
    })


    return (
        <div>
            <h2 className="text-3xl">Payment done: {payments.length}</h2>

            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Job</th>
                            <th>Favorite Color</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            payments.map((payment, idx) => {
                                <tr key={payment._id}>
                                    <th>{idx + 1}</th>
                                    <td>Cy Ganderton</td>
                                    <td>Quality Control Specialist</td>
                                    <td>Blue</td>
                                </tr>
                            })
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default PaymentHistory;