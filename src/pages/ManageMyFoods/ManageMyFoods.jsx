import { useState, useEffect } from "react";
import useAuth from "../../hooks/useAuth";
import axios from "axios";
import { MdDelete } from "react-icons/md";
import { FaPen } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const ManageMyFoods = () => {
    const [foods, setFoods] = useState([]);
    const { user } = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        const fetchFoods = async () => {
            try {
                const res = await axios.get(`http://localhost:5000/foods/by-emails/${user.email}`);
                setFoods(res.data);
            } catch (error) {
                console.error(error.message);
            }
        };
        fetchFoods();
    }, [user.email]);

    const handleUpdateFood = id => {
        console.log(id);
        navigate(`/updating-food/${id}`);
    };

    const handleDeleteFood = id => {
        console.log(id);
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
                axios.delete(`http://localhost:5000/foods/${id}`)
                    .then(res => {
                        if (res.data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                            setFoods(foods.filter(food => food._id !== id));
                        }
                    })
                    .catch(() => {
                        Swal.fire("Error!", "Something went wrong. Please try again.", "error");
                    });
            }
        });
    };

    return (
        <div className="w-11/12 mx-auto">
            <div className="relative flex flex-col w-full h-full text-gray-700 bg-white shadow-md rounded-xl bg-clip-border">
                <div className="p-6 px-0 overflow-scroll">
                    <table className="w-full mt-4 text-left table-auto min-w-max">
                        <thead>
                            <tr>
                                <th className="p-4 border-y border-blue-gray-100 bg-blue-gray-50/50">
                                    <p className="block font-sans text-sm antialiased font-normal leading-none text-blue-gray-900 opacity-70">
                                        Food Name
                                    </p>
                                </th>
                                <th className="p-4 border-y border-blue-gray-100 bg-blue-gray-50/50">
                                    <p className="block font-sans text-sm antialiased font-normal leading-none text-blue-gray-900 opacity-70">
                                        Food Quantity
                                    </p>
                                </th>
                                <th className="p-4 border-y border-blue-gray-100 bg-blue-gray-50/50">
                                    <p className="block font-sans text-sm antialiased font-normal leading-none text-blue-gray-900 opacity-70">
                                        Status
                                    </p>
                                </th>
                                <th className="p-4 border-y border-blue-gray-100 bg-blue-gray-50/50">
                                    <p className="block font-sans text-sm antialiased font-normal leading-none text-blue-gray-900 opacity-70">
                                        Expired Date
                                    </p>
                                </th>
                                <th className="p-4 border-y border-blue-gray-100 bg-blue-gray-50/50">
                                    <p className="block font-sans text-sm antialiased font-normal leading-none text-blue-gray-900 opacity-70"></p>
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {foods.map((food, idx) => (
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
                                    <td className="py-4 pl-12 border-b border-blue-gray-50">
                                        <p className="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
                                            {food.foodQuantity}
                                        </p>
                                    </td>
                                    <td className="border-b border-blue-gray-50">
                                        <div className="w-max">
                                            <div className="relative grid items-center px-2 py-1 font-sans text-xs font-bold text-green-900 uppercase rounded-md select-none whitespace-nowrap bg-green-500/20">
                                                <span>{food.foodStatus}</span>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="border-b border-blue-gray-50">
                                        <p className="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
                                            {new Date(food.expiredDate).toLocaleString()}
                                        </p>
                                    </td>
                                    <td className="p-4 border-b border-blue-gray-50">
                                        <button
                                            onClick={() => handleUpdateFood(food._id)}
                                            className="relative h-10 max-h-[40px] w-10 max-w-[40px] select-none rounded-lg text-center align-middle font-sans text-xs font-medium uppercase text-gray-900 transition-all hover:bg-gray-900/10 active:bg-gray-900/20 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                                            type="button"
                                        >
                                            <span className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
                                                <FaPen className="text-lg text-green-500" />
                                            </span>
                                        </button>
                                        <button
                                            onClick={() => handleDeleteFood(food._id)}
                                            className="relative h-10 max-h-[40px] w-10 max-w-[40px] select-none rounded-lg text-center align-middle font-sans text-xs font-medium uppercase text-gray-900 transition-all hover:bg-gray-900/10 active:bg-gray-900/20 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                                            type="button"
                                        >
                                            <span className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
                                                <MdDelete className="text-xl text-red-500" />
                                            </span>
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default ManageMyFoods;
