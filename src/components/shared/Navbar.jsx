import { Link, NavLink, useNavigate } from "react-router-dom";
import { Tooltip } from 'react-tooltip';
import 'react-tooltip/dist/react-tooltip.css';
import SuccessToaster from "../ToasterNotification/SuccessToaster";
import ErrorToaster from "../ToasterNotification/ErrorToaster";
import useAuth from "../../hooks/useAuth";

const Navbar = () => {
    const { user, logoutUser } = useAuth();
    const navigate = useNavigate();

    const links = <>
        <NavLink to={"/"} className={({ isActive }) => isActive ? 'text-[#c59d5f] font-bold underline' : 'font-normal'}>Home</NavLink>
        <NavLink to={"/available-foods"} className={({ isActive }) => isActive ? 'text-[#c59d5f] font-bold underline' : 'font-normal'}>Available Foods</NavLink>
        <NavLink to={"/add-food"} className={({ isActive }) => isActive ? 'text-[#c59d5f] font-bold underline' : 'font-normal'}>Add Food</NavLink>
        <NavLink to={"/manage-foods"} className={({ isActive }) => isActive ? 'text-[#c59d5f] font-bold underline' : 'font-normal'}>Manage My Foods</NavLink>
        <NavLink to={"/my-food-requests"} className={({ isActive }) => isActive ? 'text-[#c59d5f] font-bold underline' : 'font-normal'}>My Food Request</NavLink>
        {
            user &&
            <NavLink to={"/my-profile"} className={({ isActive }) => isActive ? 'text-[#c59d5f] font-bold underline' : 'font-normal'}>My Profile</NavLink>
        }
    </>

    const handleLogoutUser = () => {
        logoutUser()
            .then(() => {
                console.log("Log out successfully");
                SuccessToaster("Log out successfully");
                navigate("/");
            })
            .catch(error => {
                console.error(error.message);
                ErrorToaster(error.message);
            });
    };

    return (
        <div className="navbar bg-white text-black">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-black text-white rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        {links}
                    </ul>
                </div>
                <Link to={"/"} className="btn btn-ghost text-xl underline">FoodieFusion</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 gap-4">
                    {links}
                </ul>
            </div>
            <div className="navbar-end">
                {
                    user ?
                        <div className="flex items-center gap-4">
                            <div className="avatar cursor-pointer" data-tooltip-id="avatar-tooltip">
                                <div className="w-12 rounded-full">
                                    <img src={user.photoURL} alt="Profile" />
                                </div>
                            </div>
                            <Tooltip className="z-10" id="avatar-tooltip">{user.displayName}</Tooltip>
                            <div onClick={handleLogoutUser}>
                                <button className="btn bg-black text-white font-bold hover:bg-[#c59d5f]">Logout</button>
                            </div>
                        </div>
                        :
                        <div className="space-x-4">
                            <Link to={'/login'}>
                                <button className="btn bg-black text-white font-bold hover:bg-[#c59d5f]">Login</button>
                            </Link>
                            <Link to={'/register'}>
                                <button className="btn bg-black text-white font-bold hover:bg-[#c59d5f]">Signup</button>
                            </Link>
                        </div>
                }
            </div>
        </div>
    );
};

export default Navbar;
