import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const Profile = () => {
    const { user } = useAuth();
    console.log('Profile', user);

    return (
        <div>
            <div className='pb-24'>
                {/* heading div */}
                <div className='bg-black pb-48'>
                    <h2 data-aos="fade-down" className='text-3xl font-bold text-white pt-8 text-center'>Welcome {user && user.displayName ? user.displayName : "Loading"}</h2>
                </div>

                {/* details div */}
                <div className="w-11/12 mx-auto flex flex-col justify-center items-center bg-white rounded-3xl shadow-lg -mt-32 p-8">
                    <div className="avatar">
                        <div className="w-40 -mt-20 rounded-full">
                            <img
                                src={user && user.photoURL ? user.photoURL : "https://i.ibb.co.com/DVHspZ8/profile.jpg"}
                                alt="Profile"
                            />
                        </div>
                    </div>
                    <h3 className='text-2xl font-bold pt-4 text-center'>{user && user.displayName ? user.displayName : "Anonymous"}</h3>
                    <p className="text-sm text-gray-600 pb-4">{user && user.email ? user.email : "Anonymous email"}</p>
                    <Link to={"/update-profile"}>
                        <button className="btn bg-[#c59d5f] text-white">Update Profile</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Profile;
