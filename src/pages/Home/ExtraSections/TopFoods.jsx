import Marquee from "react-fast-marquee";

const TopFoods = () => {
    const foodImages = [
        {
            src: "//dt-kudil.myshopify.com/cdn/shop/files/AdobeStock_123555365.png?v=1687263984",
            alt: "Food Image 1",
            width: 131,
            height: 124,
        },
        {
            src: "//dt-kudil.myshopify.com/cdn/shop/files/Group_245.svg?v=1689770588",
            alt: "Food Image 2",
            width: 205,
            height: 124,
        },
        {
            src: "//dt-kudil.myshopify.com/cdn/shop/files/AdobeStock_368108768.png?v=1687264022",
            alt: "Food Image 3",
            width: 131,
            height: 124,
        },
        {
            src: "//dt-kudil.myshopify.com/cdn/shop/files/AdobeStock_284468930.png?v=1687264046",
            alt: "Food Image 4",
            width: 361,
            height: 124,
        },
        {
            src: "//dt-kudil.myshopify.com/cdn/shop/files/AdobeStock_306478539.png?v=1687264170",
            alt: "Food Image 5",
            width: 131,
            height: 124,
        },
        {
            src: "//dt-kudil.myshopify.com/cdn/shop/files/AdobeStock_232625881.png?v=1687264187",
            alt: "Food Image 6",
            width: 205,
            height: 124,
        },
        {
            src: "//dt-kudil.myshopify.com/cdn/shop/files/AdobeStock_221011204.png?v=1687264203",
            alt: "Food Image 7",
            width: 131,
            height: 124,
        },
        {
            src: "//dt-kudil.myshopify.com/cdn/shop/files/AdobeStock_601987580.png?v=1687264226",
            alt: "Food Image 8",
            width: 205,
            height: 124,
        },
        {
            src: "//dt-kudil.myshopify.com/cdn/shop/files/AdobeStock_307526036.png?v=1687266251",
            alt: "Food Image 9",
            width: 205,
            height: 124,
        },
        {
            src: "//dt-kudil.myshopify.com/cdn/shop/files/AdobeStock_283708116.png?v=1687266264",
            alt: "Food Image 10",
            width: 131,
            height: 124,
        },
    ];

    return (
        <div>
            <div data-aos="zoom-in-down" className="space-y-4">
                <h2 className="text-3xl text-[#c59d5f] font-bold text-center">Top Foods</h2>
                <p className="w-full md:w-4/5 mx-auto text-[#394e6a] text-lg text-center font-medium">
                    Explore the finest selection of top foods renowned for their quality and taste.
                    Let&apos;s dive into their exclusive offerings!
                </p>
            </div>

            <div className="flex items-center mt-10">
                <Marquee pauseOnHover={true}>
                    {foodImages.map((food, index) => (
                        <img
                            key={index}
                            className=" mr-6 cursor-pointer"
                            src={food.src}
                            alt={food.alt || "Food image"}
                        />
                    ))}
                </Marquee>
            </div>
        </div>
    );
};

export default TopFoods;