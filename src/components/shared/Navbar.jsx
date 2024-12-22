
import { useContext } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import SuccessToaster from "../ToasterNotification/SuccessToaster";
import ErrorToaster from "../ToasterNotification/ErrorToaster";
import { authContext } from "../../contexts/AuthProvider";

const Navbar = () => {
    const { user, logoutUser } = useContext(authContext);
    console.log(user);
    const navigate = useNavigate();

    const links = <>
        <NavLink to={"/"} className={({ isActive }) => isActive ? 'text-[#c59d5f] font-bold underline' : 'font-normal'}>Home</NavLink>
        <NavLink to={"/available-foods"} className={({ isActive }) => isActive ? 'text-[#c59d5f] font-bold underline' : 'font-normal'}>Available Foods</NavLink>
        <NavLink to={"/add-food"} className={({ isActive }) => isActive ? 'text-[#c59d5f] font-bold underline' : 'font-normal'}>Add Food</NavLink>
        <NavLink to={"/manage-foods"} className={({ isActive }) => isActive ? 'text-[#c59d5f] font-bold underline' : 'font-normal'}>Manage My Foods</NavLink>
        <NavLink to={"/my-food-requests"} className={({ isActive }) => isActive ? 'text-[#c59d5f] font-bold underline' : 'font-normal'}>My Food Request</NavLink>
        {
            user &&
            <NavLink to={"/profile"} className={({ isActive }) => isActive ? 'font-bold underline' : 'font-normal'}>My Profile</NavLink>
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
                <Link to={"/"} className="btn btn-ghost text-xl">FoodieFusion</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 gap-4">
                    {links}
                </ul>
            </div>
            <div className="navbar-end">
                {
                    user ?
                        <div className="dropdown dropdown-end">
                            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                                <div className="w-10 rounded-full">
                                    <img
                                        alt="Profile image"
                                        src={user ? user.photoURL : "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.istockphoto.com%2Fphotos%2Fblank-profile-pic&psig=AOvVaw3A7ocg8Ov4kMh92B2MEolH&ust=1732366004923000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCLDH7rf874kDFQAAAAAdAAAAABAE"} />
                                </div>
                            </div>
                            <ul
                                tabIndex={0}
                                className="menu menu-sm dropdown-content bg-[#1e0e5c] text-white rounded-box z-[1] mt-3 w-52 p-2 shadow">
                                <li>
                                    <Link to={"/profile"} className="justify-between">
                                        Profile
                                        <span className="badge">New</span>
                                    </Link>
                                </li>
                                <li><Link to={"/profile/update"}>Update Profile</Link></li>
                                <li onClick={handleLogoutUser}><a>Logout</a></li>
                            </ul>
                        </div>
                        :
                        <Link to={'/login'}>
                            <button className="btn bg-black text-white font-bold hover:bg-[#c59d5f]">Login</button>
                        </Link>
                }
            </div>
        </div >
    );
};

export default Navbar;
