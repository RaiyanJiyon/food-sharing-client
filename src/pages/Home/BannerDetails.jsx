import { Link } from "react-router-dom";
import { Typewriter } from 'react-simple-typewriter'
import { Fade } from "react-awesome-reveal";

const BannerDetails = ({ image, secondaryTitle, primaryTitle, description }) => {
    return (
        <div
            className="hero min-h-screen"
            style={{
                backgroundImage: `url(${image})`,
            }}>

            <div className="hero-content text-white text-center">
                <div>
                    <h3 className="great-vibes-regular text-[#c59d5f] text-5xl">{secondaryTitle}</h3>
                    <h1 className="mb-5 text-5xl font-bold">
                        <Typewriter
                            words={[primaryTitle]}
                            loop={5}
                            cursor
                            cursorStyle='_'
                            typeSpeed={70}
                            deleteSpeed={50}
                            delaySpeed={1000}

                        />
                    </h1>
                    <Fade>
                        <p className="mb-5 text-white text-xl w-3/4 mx-auto">
                            {description}
                        </p>
                    </Fade>
                    <Link to={'/available-foods'}>
                        <button className="btn bg-[#c59d5f] hover:bg-black text-white font-bold border-none">Explore Now</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default BannerDetails;