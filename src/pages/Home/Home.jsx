import { useEffect } from "react";
import Banner from "./Banner";
import PopularFood from "./ExtraSections/PopularFood";
import TopFoods from "./ExtraSections/TopFoods";

const Home = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div>
            <div>
                <Banner />
            </div>
            <div className="mt-20">
                <PopularFood />
            </div>
            <div className="mt-20">
                <TopFoods />
            </div>
        </div>
    );
};

export default Home;