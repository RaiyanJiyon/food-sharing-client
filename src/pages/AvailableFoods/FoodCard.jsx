import PropTypes from 'prop-types'; // ES6
import { Link } from 'react-router-dom';

const FoodCard = ({ food }) => {
    return (
        <div className="relative flex flex-col my-6 bg-white shadow-sm border border-slate-200 rounded-lg">
            <div className="relative h-56 m-2.5 overflow-hidden text-white rounded-md">
                <img
                    className="h-56"
                    src={`${food.foodUrl}`}
                    alt={`${food.foodName} image`}
                />
            </div>
            <div className="p-4">
                <div className="mb-4 rounded-full bg-green-500 py-0.5 px-2.5 border border-transparent text-xs text-white transition-all shadow-sm w-20 text-center">
                    {food.foodStatus}
                </div>
                <h6 className="mb-2 text-slate-800 text-xl font-semibold">
                    {food.foodName}
                </h6>
                <p className="text-slate-600 leading-normal font-light">
                    {food.additionalNotes}
                </p>
            </div>
            <div className="flex items-center justify-between p-4">
                <div className="flex items-center">
                    <img
                        alt="Tania Andrew"
                        src={`${food.photoURL}`}
                        className="relative inline-block h-8 w-8 rounded-full"
                    />
                    <div className="flex flex-col ml-3 text-sm">
                        <span className="text-slate-800 font-semibold">{food.displayName}</span>
                        <span className="text-slate-600">
                            January 10, 2024
                        </span>
                    </div>
                </div>
                <Link to={`/food/${food._id}`}>
                    <button className='btn btn-sm bg-black text-white font-bold'>View Details</button>
                </Link>
            </div>
        </div>
    );
};


// FoodCard.propTypes = {
//     food: PropTypes.object,
// }

export default FoodCard;