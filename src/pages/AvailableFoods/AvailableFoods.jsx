import axios from "axios";
import { useEffect, useState } from "react";
import FoodCard from "./FoodCard";
import SearchSection from "./SearchSection";
import SortingSection from "./SortingSection";

const AvailableFoods = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const [allFoods, setAllFoods] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [sortCriterion, setSortCriterion] = useState("");
    const [isThreeColumn, setIsThreeColumn] = useState(true);

    useEffect(() => {
        const fetchFoods = async () => {
            try {
                const res = await axios.get('https://food-sharing-server-pied.vercel.app/foods', {withCredentials: true});
                setAllFoods(res.data);
            } catch (error) {
                console.error(error);
            }
        };
        fetchFoods();
    }, []);

    const filteredFoods = allFoods.filter(food =>
        food.foodName.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const sortedFoods = filteredFoods.sort((a, b) => {
        if (sortCriterion === "Food Expire Date") {
            return new Date(a.expiredDate) - new Date(b.expiredDate);
        }
        return 0;
    });

    const toggleLayout = () => {
        setIsThreeColumn(!isThreeColumn);
    };

    return (
        <div className="w-11/12 mx-auto">
            <div className="my-10">
                <SearchSection searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
            </div>

            <div className="my-6 text-center">
                <button
                    onClick={toggleLayout}
                    className="px-4 py-2 bg-[#c59d5f] text-white font-bold rounded hover:bg-black transition"
                >
                    Change to {isThreeColumn ? "Two" : "Three"} Column Layout
                </button>
            </div>

            <div className="mt-10 md:mt-0">
                <SortingSection setSortCriterion={setSortCriterion} />
            </div>

            {/* Dynamic Grid */}
            <div className={`grid gap-6 ${isThreeColumn ? "grid-cols-1 sm:grid-cols-2 md:grid-cols-3" : "grid-cols-1 sm:grid-cols-1 md:grid-cols-2"}`}>
                {sortedFoods.map((food, idx) => (
                    food.foodStatus === 'available' &&
                    <FoodCard key={idx} food={food} />
                ))}
            </div>
        </div>
    );
};

export default AvailableFoods;
