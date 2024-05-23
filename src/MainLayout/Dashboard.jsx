import { FaAudioDescription, FaCalendar, FaCalendarCheck, FaHamburger, FaHome, FaMoneyBillAlt, FaPhone, FaUtensils } from "react-icons/fa";
import { FaBook, FaCartShopping, FaList, FaShop, FaUser } from "react-icons/fa6";
import { NavLink, Outlet } from "react-router-dom";
import useCart from "../Hooks/useCart";


const Dashboard = () => {

    const [cart] = useCart()

    const isAdmin = true;

    return (
        <div className="flex gap-10">
            <div className="w-64 min-h-screen bg-orange-400">
                <ul className="menu p-4 space-y-3">
                    {
                        isAdmin

                            ?

                            <>
                                <li>
                                    <NavLink to="/dashboard/adminHome">
                                        <FaHome className='text-lg text-white' />
                                        Admin Home
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/dashboard/addItem">
                                        <FaUtensils className='text-lg text-white' />
                                        Add Item
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/dashboard/manageItems">
                                        <FaList className='text-lg text-white' />
                                        Manage Items
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/dashboard/manageBookings">
                                        <FaBook className='text-lg text-white' />
                                        Manage Bookings
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/dashboard/allUsers">
                                        <FaUser className='text-lg text-white' />
                                        All users
                                    </NavLink>
                                </li>
                            </>

                            :

                            <>
                                <li>
                                    <NavLink to="/dashboard/userHome">
                                        <FaHome className='text-lg text-white' />
                                        User Home
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/dashboard/booking">
                                        <FaCalendarCheck className='text-lg text-white' />
                                        my booking
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/dashboard/cart">
                                        <FaCartShopping className='text-lg text-white' />
                                        My Cart ({cart.length})
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/dashboard/review">
                                        <FaAudioDescription className='text-lg text-white' />
                                        add review
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/dashboard/payment">
                                        <FaMoneyBillAlt className='text-lg text-white' />
                                        payment history
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/dashboard/reservation">
                                        <FaCalendar className='text-lg text-white' />
                                        reservation
                                    </NavLink>
                                </li>
                            </>
                    }



                    <div className="divider"></div>
                    <li>
                        <NavLink to="/">
                            <FaHome className='text-lg text-white' />
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/menu">
                            <FaHamburger className='text-lg text-white' />
                            Menu
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/shop">
                            <FaShop className='text-lg text-white' />
                            Shop
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/contact">
                            <FaPhone className='text-lg text-white' />
                            Contact
                        </NavLink>
                    </li>
                </ul>
            </div>
            <div className="flex-1">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;