import { Link } from "react-router-dom";
import ErrorImg from '../assets/images/404.webp'

const ErrorPage = () => {
    return (
        <div className='h-screen md:w-1/2 mx-auto flex flex-col justify-center items-center'>
            <div className="w-2/5 mx-auto">
                <img className="" src={ErrorImg} alt="404 image" />
            </div>
            <h1 className='text-3xl font-bold text-center'>404 : Page Not Found</h1>
            <p className='text-xl font-medium text-center mt-4'>We looked everywhere for this page. Are you sure the website URL is correct? Get in touch with the site owner.</p>

            <Link to={"/"} className="mt-4">
                <button className='btn bg-[#c59d5f] text-white font-bold rounded-[32px]'>Go Back Home</button>
            </Link>
        </div>
    );
};

export default ErrorPage;