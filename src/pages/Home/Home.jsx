import { useEffect } from "react";
import Banner from "./Banner";
import PopularFood from "./ExtraSections/PopularFood";
import TopFoods from "./ExtraSections/TopFoods";
import FeaturedFoods from "./FeaturedFoods";
import FoodDelivery from "./ExtraSections/FoodDelivery";

const Home = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div>
            <div >
                <Banner />
            </div>
            <div className="mt-20">
                <FeaturedFoods />
            </div>
            <div className="mt-16">
                <PopularFood />
            </div>
            <div className="mt-20">
                <TopFoods />
            </div>
            <div className="mt-20">
                <FoodDelivery />
            </div>
        </div>
    );
};

export default Home;