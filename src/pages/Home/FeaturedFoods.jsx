import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const FeaturedFoods = () => {
    const [featuredFood, setFeaturedFood] = useState([]);

    useEffect(() => {
        const fetchFoods = async () => {
            try {
                const res = await axios.get('http://localhost:5000/featured-foods');
                setFeaturedFood(res.data);
            } catch (error) {
                console.error(error);
            }
        }
        fetchFoods();
    }, []);

    return (
        <div className='w-11/12 mx-auto'>
            <div>
                <h2 className='mb-5 text-3xl font-bold'>Featured Foods</h2>
                <p className='text-gray-800 mb-10'>Commodo sed egestas egestas fringilla phasellus faucibus scelerisque eleifend donec. Porttitor massa id neque aliquam vestibulum morbi blandit cursus risus. Orci ac auctor augue mauris augue neque gravida in Aliquam.</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {
                    featuredFood.map((food, idx) => (
                        <div key={idx} className="relative flex flex-col my-6 bg-white shadow-sm border border-slate-200 rounded-lg">
                            <div className="relative h-56 m-2.5 overflow-hidden text-white rounded-md">
                                <img
                                    className="h-56"
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
        </div>
    );
};

export default FeaturedFoods;