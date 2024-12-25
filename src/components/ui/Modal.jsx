import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";

const Modal = ({ isOpen, onClose, foodData }) => {
    const { user } = useAuth();
    const navigate = useNavigate();
    const currentDate = new Date().toLocaleString();

    const handleRequestFoodForm = e => {
        e.preventDefault();
    
        const updatedFoodData = {
            ...foodData,
            foodStatus: "requested",
            requestDate: currentDate, // Add current date
            requestedBy: user.email, // Add current user's email
        };
    
        console.log('Updated Food Data:', updatedFoodData); // Log the updated food data
    
        // Update the food status in the database
        fetch(`http://localhost:5000/foods/${foodData._id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(updatedFoodData),
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        position: "top-center",
                        icon: "success",
                        title: "Added To My Request Food",
                        showConfirmButton: false,
                        timer: 1500,
                    });
                    onClose();
                    navigate('/my-food-requests');
                }
            })
            .catch(error => {
                Swal.fire({
                    position: "top-center",
                    icon: "error",
                    title: "Request Failed",
                    text: error.message,
                    showConfirmButton: true,
                });
            });
    };
    
    

    return (
        <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle" open={isOpen}>
            <div className="modal-box">
                <form onSubmit={handleRequestFoodForm} className="card-body">
                    <input type="text" value={foodData.foodName} className="input input-bordered w-full" disabled />
                    <input type="url" value={foodData.foodUrl} className="input input-bordered w-full" disabled />
                    <input type="text" value={foodData.foodQuantity} className="input input-bordered w-full" disabled />
                    <input type="text" value={foodData.email} className="input input-bordered w-full" disabled />
                    <input type="text" value={foodData.displayName} className="input input-bordered w-full" disabled />
                    <input type="text" value={user.email} className="input input-bordered w-full" disabled />
                    <input type="text" value={currentDate} className="input input-bordered w-full" disabled />
                    <input type="text" value={foodData.pickupLocation} className="input input-bordered w-full" disabled />
                    <input type="text" value={new Date(foodData.expiredDate).toLocaleString()} className="input input-bordered w-full" disabled />
                    <textarea name="additionalNotes" placeholder="Type additional notes" className="textarea textarea-bordered w-full" required />
                    <button className="btn bg-[#c59d5f] hover:bg-black text-white font-bold border-none mt-4">Request</button>
                </form>
                <div className="modal-action">
                    <button onClick={onClose} className="btn bg-red-500 text-white font-bold">Close</button>
                </div>
            </div>
        </dialog>
    );
};


export default Modal;