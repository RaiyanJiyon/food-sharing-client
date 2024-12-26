import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const FeaturedFoods = () => {
    const [featuredFood, setFeaturedFood] = useState([]);

    useEffect(() => {
        const fetchFoods = async () => {
            try {
                const res = await axios.get('https://food-sharing-server-pied.vercel.app/featured-foods', {withCredentials: true});
                setFeaturedFood(res.data);
            } catch (error) {
                console.error(error);
            }
        }
        fetchFoods();
    }, []);

    return (
        <div className='w-11/12 mx-auto'>
            <div data-aos="zoom-in-down" className="space-y-4 mb-12">
                <h2 className="text-3xl text-[#c59d5f] font-bold text-center">Featured Foods</h2>
                <p className="w-full md:w-4/5 mx-auto text-[#394e6a] text-lg text-center font-medium">Explore our Featured Foods section, where we showcase food items with abundant quantities, ensuring you have plenty of choices to satisfy your cravings.</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {
                    featuredFood.map((food, idx) => (
                        food.foodStatus === 'available' &&
                        <div key={idx} className="relative flex flex-col my-6 bg-white shadow-sm border border-slate-200 rounded-lg">
                            <div className="relative h-56 m-2.5 overflow-hidden text-white rounded-md">
                                <img
                                    className="w-full h-56"
                                    src={`${food.foodUrl}`}
                                    alt={`${food.foodName} image`}
                                />
                            </div>
                            <div className="p-4">
                                <button className="btn btn-xs bg-green-500 text-white font-bold">Quantity: {food.foodQuantity}</button>
                                <h6 className="mt-4 mb-2 text-slate-800 text-xl font-semibold">
                                    {food.foodName}
                                </h6>
                                <p className="h-8 text-slate-600 leading-normal font-light">
                                    {food.additionalNotes}
                                </p>
                            </div>
                            <div className="flex items-center justify-between p-4">
                                <div className="flex items-center">
                                    <img
                                        alt="Tania Andrew"
                                        src={`${food.photoURL}`}
                                        className="relative inline-block h-8 w-8 rounded-full"
                                    />
                                    <div className="flex flex-col ml-3 text-sm">
                                        <span className="text-slate-800 font-semibold">{food.displayName}</span>
                                        <span className="text-slate-600">
                                            January 10, 2024
                                        </span>
                                    </div>
                                </div>
                                <Link to={`/food/${food._id}`}>
                                    <button className='btn btn-sm bg-black text-white font-bold'>View Details</button>
                                </Link>
                            </div>
                        </div>
                    ))
                }
            </div>
            <Link to={'/available-foods'} className="flex justify-center mt-6">
                <button className="btn bg-[#c59d5f] hover:bg-black text-white font-bold border-none">Show All</button>
            </Link>
        </div>
    );
};

export default FeaturedFoods;