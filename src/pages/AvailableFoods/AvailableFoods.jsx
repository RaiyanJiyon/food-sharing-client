import axios from "axios";
import { useEffect, useState } from "react";
import FoodCard from "./FoodCard";
import SearchSection from "./SearchSection";

const AvailableFoods = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const [allFoods, setAllFoods] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");

    useEffect(() => {
        const fetchFoods = async () => {
            try {
                const res = await axios.get('http://localhost:5000/foods')
                setAllFoods(res.data);
            } catch (error) {
                console.error(error);
            }
        }
        fetchFoods();
    }, [])

    const filteredFoods = allFoods.filter(food =>
        food.foodName.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="w-11/12 mx-auto">
            <div className="my-10">
                <SearchSection searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {
                    filteredFoods.map((food, idx) => (
                        <FoodCard key={idx} food={food} />
                    ))
                }

            </div>
        </div>
    );
};

export default AvailableFoods;