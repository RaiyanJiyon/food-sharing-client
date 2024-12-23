import useAuth from "../../hooks/useAuth";
import axios from "axios";
import { useEffect } from "react";
import Swal from "sweetalert2";

const AddFood = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    
    const { user } = useAuth();
    const { displayName, photoURL, email } = user;

    const handleAddFoodForm = e => {
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
            email
        };

        axios.post('http://localhost:5000/foods', foodData)
            .then(res => {
                if (res.data.insertedId) {
                    Swal.fire({
                        title: "Food has been added!",
                        icon: "success",
                        draggable: true
                    });
                }
            })
            .catch(error => {
                console.error('Error posting food data:', error.message);
                Swal.fire({
                    title: `${error.message}`,
                    icon: "error",
                    draggable: true
                });
            });
    };

    return (
        <div>
            <form onSubmit={handleAddFoodForm} className="card-body">
                {/* row 1 */}
                <div className="flex flex-col sm:flex-row items-center sm:gap-6">
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Food Name</span>
                        </label>
                        <input
                            type="text"
                            name="foodName"
                            placeholder="Type food name"
                            className="input input-bordered w-full"
                            required />
                    </div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Food Image URL</span>
                        </label>
                        <input
                            type="url"
                            name="foodUrl"
                            placeholder="Type food image url"
                            className="input input-bordered w-full"
                            required />
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
                            placeholder="Type food quantity"
                            className="input input-bordered w-full"
                            required />
                    </div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Pickup Location</span>
                        </label>
                        <input
                            type="text"
                            name="pickupLocation"
                            placeholder="Type pickup location"
                            className="input input-bordered w-full"
                            required />
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
                            className="input input-bordered w-full"
                            required />
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
                            placeholder="Type additional notes"
                            className="input input-bordered w-full"
                            required />
                    </div>
                </div>
                {/* row 5 */}
                <div className="form-control">
                    <label className="label cursor-pointer">
                        <span className="label-text">Food Status</span>
                        <input
                            type="checkbox"
                            name="foodStatus"
                            defaultChecked
                            className="checkbox" />
                    </label>
                </div>

                <div className="form-control mt-6">
                    <button className="btn bg-black text-white font-bold">Add Food</button>
                </div>
            </form>
        </div>
    );
};

export default AddFood;