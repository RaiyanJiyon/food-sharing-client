import axios from "axios";
import { useState, useEffect } from "react";
import useAuth from "../../hooks/useAuth";

const MyFoodRequest = () => {
    const [foods, setFoods] = useState([]);
    const { user } = useAuth();

    // Function to fetch data
    const fetchFoods = async () => {
        try {
            const res = await axios.get("https://food-sharing-server-pied.vercel.app/foods", {withCredentials: true});
            setFoods(res.data);
        } catch (error) {
            console.error("Error fetching foods:", error);
        }
    };

    // Fetch foods on component mount
    useEffect(() => {
        fetchFoods();
    }, []);

    return (
        <div className="w-11/12 mx-auto">
            <div className="relative flex flex-col w-full h-full text-gray-700 bg-white shadow-md rounded-xl bg-clip-border">
                <div className="p-6 px-0 overflow-scroll">
                    <table className="w-full mt-4 text-left table-auto min-w-max">
                        <thead>
                            <tr>
                                <th className="p-4 border-y border-blue-gray-100 bg-blue-gray-50/50">Food Name</th>
                                <th className="p-4 border-y border-blue-gray-100 bg-blue-gray-50/50">Donator Name</th>
                                <th className="p-4 border-y border-blue-gray-100 bg-blue-gray-50/50">Status</th>
                                <th className="p-4 border-y border-blue-gray-100 bg-blue-gray-50/50">Pickup Location</th>
                                <th className="p-4 border-y border-blue-gray-100 bg-blue-gray-50/50">Expired Date</th>
                                <th className="p-4 border-y border-blue-gray-100 bg-blue-gray-50/50">Request Date</th>
                            </tr>
                        </thead>
                        <tbody>
                            {foods.map(
                                (food, idx) =>
                                    food.foodStatus === "requested" &&
                                    food.requestedBy === user.email && (
                                        <tr key={idx}>
                                            <td className="p-4 border-b border-blue-gray-50">
                                                <div className="flex items-center gap-3">
                                                    <img
                                                        src={food.foodUrl}
                                                        alt={`${food.foodName} image`}
                                                        className="relative inline-block h-9 w-9 rounded-full object-cover object-center"
                                                    />
                                                    <div className="flex flex-col">
                                                        <p className="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
                                                            {food.foodName}
                                                        </p>
                                                        <p className="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900 opacity-70">
                                                            {food.additionalNotes}
                                                        </p>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="p-4 border-b border-blue-gray-50">
                                                <p className="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
                                                    {food.displayName}
                                                </p>
                                            </td>
                                            <td className="p-4 border-b border-blue-gray-50">
                                                <div className="w-max">
                                                    <div className="relative grid items-center px-2 py-1 font-sans text-xs font-bold text-green-900 uppercase rounded-md select-none whitespace-nowrap bg-green-500/20">
                                                        <span>{food.foodStatus}</span>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="p-4 border-b border-blue-gray-50">
                                                <p className="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
                                                    {food.pickupLocation}
                                                </p>
                                            </td>
                                            <td className="p-4 border-b border-blue-gray-50">
                                                <p className="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
                                                    {new Date(food.expiredDate).toLocaleString()}
                                                </p>
                                            </td>
                                            <td className="p-4 border-b border-blue-gray-50">
                                                <p className="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
                                                    {new Date(food.requestDate).toLocaleString()}
                                                </p>
                                            </td>
                                        </tr>
                                    )
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default MyFoodRequest;
