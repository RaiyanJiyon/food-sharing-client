import axios from "axios";
import { useEffect, useState } from "react";
import FoodCard from "./FoodCard";

const AvailableFoods = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    
    const [allFoods, setAllFoods] = useState([]);

    axios.get('http://localhost:5000/foods')
        .then(res => {
            setAllFoods(res.data)
        })
        .catch(error => {
            console.error(error.message);
        })

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-11/12 mx-auto">
            {
                allFoods.map((food, idx) => (
                    <FoodCard key={idx} food={food} />
                ))
            }
        </div>
    );
};

export default AvailableFoods;