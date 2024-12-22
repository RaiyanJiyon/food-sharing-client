import Banner from "./Banner";
import TopFoods from "./ExtraSections/TopFoods";

const Home = () => {
    return (
        <div>
            <div>
                <Banner />
            </div>
            <div className="mt-20">
                <TopFoods />
            </div>
        </div>
    );
};

export default Home;