import React, { useState } from 'react';
import { Navigation, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Link } from 'react-router-dom';

const PopularFood = () => {
    const [selectedFood, setSelectedFood] = useState(true);

    const popularFoodImages = [
        {
            src: "//dt-kudil.myshopify.com/cdn/shop/files/home-carousel-1.jpg?v=1689942343",
            alt: "Spicy Gravy",
            title: "Spicy Gravy",
        },
        {
            src: "//dt-kudil.myshopify.com/cdn/shop/files/home-carousel-2.jpg?v=1689942364",
            alt: "Grill",
            title: "Grill",
        },
        {
            src: "//dt-kudil.myshopify.com/cdn/shop/files/grid-1.png?v=1687261301",
            alt: "Juice",
            title: "Juice",
        },
        {
            src: "//dt-kudil.myshopify.com/cdn/shop/files/grid-2.png?v=1687261318",
            alt: "Ice Cream",
            title: "Ice Cream",
        },
        {
            src: "//dt-kudil.myshopify.com/cdn/shop/files/grid-3.png?v=1687261332",
            alt: "Pizza",
            title: "Pizza",
        },
        {
            src: "//dt-kudil.myshopify.com/cdn/shop/files/grid-4.png?v=1687261348",
            alt: "Burger",
            title: "Burger",
        },
    ];

    const handleCardClick = (food) => {
        setSelectedFood(food);
    };

    return (
        <div className='w-11/12 mx-auto'>
            <div>
                <h2 className='mb-5 text-3xl font-bold'>Popular Dishes Of Our Restaurant</h2>
                <p className='text-gray-700 font-medium mb-10'>The PopularFood component showcases a carousel of popular dishes from your restaurant using Swiper. It features autoplay, navigation, and a hover effect to reveal the dish title and an &quot;Order Now&quot; button that links to the available foods page.</p>
            </div>
            <Swiper
                modules={[Navigation, Autoplay]}
                spaceBetween={50}
                slidesPerView={3}
                navigation
                autoplay={{ delay: 3000 }}
            >
                {
                    popularFoodImages.map((foodImage, idx) => (
                        <SwiperSlide key={idx}>
                            <div className='relative cursor-pointer' onClick={() => handleCardClick(foodImage)}>
                                <img className='w-full h-auto' src={foodImage.src} alt={foodImage.alt} />
                                <div className='absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 text-white opacity-0 hover:opacity-100 transition-opacity duration-300 space-y-6'>
                                    <h3 className='great-vibes-regular text-3xl font-bold'>{foodImage.title}</h3>
                                    <Link to={'/available-foods'}>
                                        <button className="btn bg-[#c59d5f] hover:bg-black text-white font-bold border-none">Order Now</button>
                                    </Link>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </div>
    );
};

export default PopularFood;