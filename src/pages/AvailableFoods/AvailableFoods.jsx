import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import FoodCard from "./FoodCard";
import SearchSection from "./SearchSection";
import { useState } from "react";

const fetchFoods = async () => {
    const res = await axios.get("http://localhost:5000/foods");
    return res.data;
};

const AvailableFoods = () => {
    const [searchTerm, setSearchTerm] = useState("");

    // Fetch data with TanStack Query
    const { data: allFoods = [] } = useQuery({
        queryKey: ["foods"],
        queryFn: fetchFoods,
    });

    // Filter foods based on the search term
    const filteredFoods = allFoods.filter((food) =>
        food.foodName.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="w-11/12 mx-auto">
            <div className="my-10">
                <SearchSection searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {filteredFoods.map((food, idx) => (
                    <FoodCard key={idx} food={food} />
                ))}
            </div>
        </div>
    );
};

export default AvailableFoods;