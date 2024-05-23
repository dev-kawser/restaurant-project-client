import { useContext, useState } from 'react';
import { useRef } from 'react';
import { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { AuthContext } from '../../../Provider/AuthProvider';
import { FaCartShopping } from 'react-icons/fa6';
import useCart from "../../../Hooks/useCart";

const Navbar = () => {

    const { user, LogOut } = useContext(AuthContext)
    const [cart] = useCart()

    const [dropDownState, setDropDownState] = useState(false);
    const dropDownMenuRef = useRef();

    useEffect(() => {
        const closeDropDown = (e) => {
            if (!dropDownMenuRef?.current?.contains(e?.target)) {
                setDropDownState(false);
            }
        };

        document.addEventListener('mousedown', closeDropDown);

        return () => {
            document.removeEventListener('mousedown', closeDropDown);
        };
    }, []);

    // bg-[rgba(21, 21, 21, 0.50)]

    const links = <>

        <li className="group flex  cursor-pointer flex-col">
            <NavLink
                className={({ isActive }) => isActive ? 'text-yellow-400 font-bold ' : 'font-semibold hover:scale-105'}
                to="/"
            >Home</NavLink><span className="mt-[2px] h-[3px] w-[0px] rounded-full bg-[#D99904] transition-all duration-300 group-hover:w-full"></span>
        </li>
        <li className="group flex  cursor-pointer flex-col">
            <NavLink
                className={({ isActive }) => isActive ? 'text-yellow-400 font-bold ' : 'font-semibold hover:scale-105'}
                to="/contact">CONTACT us</NavLink><span className="mt-[2px] h-[3px]  w-[0px] rounded-full bg-[#D99904] transition-all duration-300 group-hover:w-full"></span>
        </li>
        <li className="group flex  cursor-pointer flex-col">
            <NavLink
                className={({ isActive }) => isActive ? 'text-yellow-400 font-bold ' : 'font-semibold hover:scale-105'}
                to="/dashboard">Dashboard</NavLink><span className="mt-[2px] h-[3px]  w-[0px] rounded-full bg-[#D99904]  transition-all duration-300 group-hover:w-full"></span>
        </li>
        <li className="group flex  cursor-pointer flex-col">
            <NavLink
                className={({ isActive }) => isActive ? 'text-yellow-400 font-bold ' : 'font-semibold hover:scale-105'}
                to="/menu">Our Menu</NavLink><span className="mt-[2px] h-[3px]  w-[0px] rounded-full bg-[#D99904] transition-all duration-300 group-hover:w-full"></span>
        </li>
        <li className="group flex  cursor-pointer flex-col">
            <NavLink
                className={({ isActive }) => isActive ? 'text-yellow-400 font-bold ' : 'font-semibold hover:scale-105'}
                to="/shop"
            >Our Shop</NavLink><span className="mt-[2px] h-[3px]  w-[0px] rounded-full bg-[#D99904]  transition-all duration-300 group-hover:w-full"></span>
        </li>
        <li className="group flex  cursor-pointer flex-col">
            <NavLink
                className={({ isActive }) => isActive ? 'text-yellow-400 font-bold ' : 'font-semibold hover:scale-105'}
                to="/secret"
            >Secret</NavLink><span className="mt-[2px] h-[3px]  w-[0px] rounded-full bg-[#D99904]  transition-all duration-300 group-hover:w-full"></span>
        </li>
        <li className="group flex  cursor-pointer flex-col">
            <NavLink to="/dashboard/cart">
                <div className="relative mx-auto hover:scale-105 p-2 rounded-md w-fit h-fit">
                    <FaCartShopping className='text-lg' />
                    <span className="absolute -right-2 -top-2 flex h-[24px] w-[24px] items-center justify-center rounded-full bg-blue-600 text-center text-[12px] text-white ">+{cart?.length}</span>
                </div>
            </NavLink>
        </li>
        {
            user ?
                <li className="group flex  cursor-pointer flex-col">
                    <button
                        onClick={() => LogOut()}
                        className='font-semibold hover:scale-105'
                    >Logout</button><span className="mt-[2px] h-[3px]  w-[0px] rounded-full bg-[#D99904]  transition-all duration-300 group-hover:w-full"></span>
                </li>
                :
                <li className="group flex  cursor-pointer flex-col">
                    <NavLink
                        className={({ isActive }) => isActive ? 'text-yellow-400 font-bold ' : 'font-semibold hover:scale-105'}
                        to="/login"
                    >Login</NavLink><span className="mt-[2px] h-[3px]  w-[0px] rounded-full bg-[#D99904]  transition-all duration-300 group-hover:w-full"></span>
                </li>
        }



    </>

    return (
        <div className='bg-red-800'>
            <nav className="flex max-w-screen-2xl mx-auto items-center justify-between px-4 py-2 text-white">
                <div className="scale-100 cursor-pointer rounded-2xl px-3 py-2 text-xl font-semibold text-white transition-all duration-200 hover:scale-110">
                    <NavLink to="/" className='cinzel font-black'>BISTRO BOSS <br /> <span className='font-bold tracking-[8px]'>Restaurant</span></NavLink>
                </div>
                <ul className="hidden inter items-center justify-between gap-10 md:flex">
                    {links}
                </ul>
                <div ref={dropDownMenuRef} onClick={() => setDropDownState(!dropDownState)} className="relative flex transition-transform md:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="cursor-pointer" > <line x1="4" x2="20" y1="12" y2="12" /> <line x1="4" x2="20" y1="6" y2="6" /><line x1="4" x2="20" y1="18" y2="18" /> </svg>
                    {dropDownState && (
                        <ul className="inter z-10 p-3  gap-2  bg-[#393E46]  absolute right-0 top-11 flex w-[200px] flex-col  rounded-lg   text-base ">
                            {links}
                        </ul>
                    )}
                </div>
            </nav>
        </div>
    );
};

export default Navbar;