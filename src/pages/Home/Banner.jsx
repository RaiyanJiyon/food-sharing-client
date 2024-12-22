import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';

// Import Swiper modules
import { Autoplay } from 'swiper/modules';
import BannerDetails from './BannerDetails';

const Banner = () => {
    return (
        <div>
            <Swiper
                modules={[Autoplay]}
                spaceBetween={50}
                slidesPerView={1}
                autoplay={{ delay: 5000, disableOnInteraction: false }}
            >
                <SwiperSlide>
                    <BannerDetails
                        image={'https://dt-kudil.myshopify.com/cdn/shop/files/AdobeStock_595497117_copy.jpg?v=1689852304&width=1780'}
                        secondaryTitle={'50% On All'}
                        primaryTitle={'Hot & Spicy Chicken Varieties'}
                        description={'Indulge in our fiery and flavorful chicken dishes, crafted to perfection with the freshest ingredients and an authentic spice blend.'}
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <BannerDetails
                        image={'https://dt-kudil.myshopify.com/cdn/shop/files/AdobeStock_125123242_2.jpg?v=1689927812&width=1780'}
                        secondaryTitle={'Mega Discounts On'}
                        primaryTitle={'Tasty Bites & Healthy Foods'}
                        description={'Discover a delectable range of healthy and tasty bites, meticulously prepared to satisfy your cravings and nourish your body.'}
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <BannerDetails
                        image={'https://dt-kudil.myshopify.com/cdn/shop/files/AdobeStock_265582946.jpg?v=1689934943&width=1780'}
                        secondaryTitle={'Spicy Dinner'}
                        primaryTitle={'Healthy Hot & Spicy Thai Food'}
                        description={'Experience the perfect balance of heat and health with our spicy Thai dishes, featuring bold flavors and wholesome ingredients.'}
                    />
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Banner;
