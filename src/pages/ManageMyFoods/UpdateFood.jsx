import { useState, useEffect } from "react";
import useAuth from "../../hooks/useAuth";
import axios from "axios";
import { useLoaderData, useParams, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateFood = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const { user } = useAuth();
    const { displayName, photoURL, email } = user;
    const { id } = useParams();
    const navigate = useNavigate();

    const allFood = useLoaderData();
    const [filteredFood, setFilteredFood] = useState(null);

    useEffect(() => {
        if (allFood) {
            const food = allFood.find(food => food._id === id);
            setFilteredFood(food);
        }
    }, [allFood, id]);

    const handleUpdateFoodForm = e => {
        e.preventDefault();

        const form = e.currentTarget;
        const formData = new FormData(form);

        const foodName = formData.get('foodName');
        const foodUrl = formData.get('foodUrl');
        const foodQuantity = formData.get('foodQuantity');
        const pickupLocation = formData.get('pickupLocation');
        const expiredDate = formData.get('expiredDate');
        const additionalNotes = formData.get('additionalNotes');
        const foodStatus = formData.get('foodStatus') === 'on' ? 'available' : 'unavailable';

        const foodData = {
            foodName,
            foodUrl,
            foodQuantity,
            pickupLocation,
            expiredDate,
            additionalNotes,
            foodStatus,
            displayName,
            photoURL,
            email,
        };

        axios.put(`https://food-sharing-server-pied.vercel.app/foods/${id}`, foodData, {withCredentials: true})
            .then(res => {
                if (res.data.modifiedCount > 0) {
                    Swal.fire({
                        title: "Food has been updated!",
                        icon: "success",
                        draggable: true,
                    }).then(() => {
                        navigate('/manage-foods');
                    });
                }
            })
            .catch(error => {
                console.error('Error updating food data:', error.message);
                Swal.fire({
                    icon: 'error',
                    title: 'Update Failed',
                    text: 'Failed to update food details. Please try again.',
                });
            });
    };

    return (
        <div>
            {filteredFood && (
                <form onSubmit={handleUpdateFoodForm} className="card-body">
                    {/* row 1 */}
                    <div className="flex flex-col sm:flex-row items-center sm:gap-6">
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Food Name</span>
                            </label>
                            <input
                                type="text"
                                name="foodName"
                                defaultValue={filteredFood.foodName}
                                className="input input-bordered w-full"
                                required
                            />
                        </div>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Food Image URL</span>
                            </label>
                            <input
                                type="url"
                                name="foodUrl"
                                defaultValue={filteredFood.foodUrl}
                                className="input input-bordered w-full"
                                required
                            />
                        </div>
                    </div>
                    {/* row 2 */}
                    <div className="flex flex-col sm:flex-row items-center sm:gap-6">
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Food Quantity</span>
                            </label>
                            <input
                                type="number"
                                name="foodQuantity"
                                defaultValue={filteredFood.foodQuantity}
                                className="input input-bordered w-full"
                                required
                            />
                        </div>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Pickup Location</span>
                            </label>
                            <input
                                type="text"
                                name="pickupLocation"
                                defaultValue={filteredFood.pickupLocation}
                                className="input input-bordered w-full"
                                required
                            />
                        </div>
                    </div>
                    {/* row 3 */}
                    <div className="flex items-center gap-6">
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Expired Date/Time</span>
                            </label>
                            <input
                                type="date"
                                name="expiredDate"
                                defaultValue={new Date(filteredFood.expiredDate).toISOString().split('T')[0]}
                                className="input input-bordered w-full"
                                required
                            />
                        </div>
                    </div>
                    {/* row 4 */}
                    <div className="flex items-center gap-6">
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Additional Notes</span>
                            </label>
                            <input
                                type="text"
                                name="additionalNotes"
                                defaultValue={filteredFood.additionalNotes}
                                className="input input-bordered w-full"
                                required
                            />
                        </div>
                    </div>
                    {/* row 5 */}
                    <div className="form-control">
                        <label className="label cursor-pointer">
                            <span className="label-text">Food Status</span>
                            <input
                                type="checkbox"
                                name="foodStatus"
                                defaultChecked={filteredFood.foodStatus === 'available'}
                                className="checkbox"
                            />
                        </label>
                    </div>

                    <div className="form-control mt-6">
                        <button className="btn bg-black text-white font-bold">Update Food</button>
                    </div>
                </form>
            )}
        </div>
    );
};

export default UpdateFood;