import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth";

const Modal = ({ isOpen, onClose }) => {
    const { user } = useAuth();

    const handleRequestFoodForm = e => {
        e.preventDefault();

        const form = e.currentTarget;
        const formData = new FormData(form);
        const email = formData.get('email');
        const firstName = formData.get('firstName');
        const lastName = formData.get('lastName');
        const applied_date = formData.get('applied_date');
        const fee = formData.get('fee');

        const visaData = { email, firstName, lastName, applied_date, fee };
        console.log(visaData);

        fetch('http://localhost:5000/visa-application', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(visaData)
        })
            .then(res => {
                if (!res.ok) {
                    throw new Error(`HTTP error! status: ${res.status}`);
                }
                return res.json();
            })
            .then(data => {
                if (data.insertedId) {
                    Swal.fire({
                        position: "top-center",
                        icon: "success",
                        title: "Submission Successful",
                        showConfirmButton: false,
                        timer: 1500
                    });
                    form.reset();
                    onClose();
                }
            })
            .catch(error => {
                Swal.fire({
                    position: "top-center",
                    icon: "error",
                    title: "Submission Failed",
                    text: error.message,
                    showConfirmButton: true
                });
            });

    };

    return (
        <dialog
            id="my_modal_5"
            className="modal modal-bottom sm:modal-middle"
            open={isOpen} // Dynamically control visibility
        >
            <div className="modal-box">
                <form onSubmit={handleRequestFoodForm} className="card-body">
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
                                disabled />
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
                                disabled />
                        </div>
                    </div>
                    {/* row 2 */}
                    <div className="flex flex-col sm:flex-row items-center sm:gap-6">
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Food Id</span>
                            </label>
                            <input
                                type="number"
                                name="foodQuantity"
                                placeholder="Type food id"
                                className="input input-bordered w-full"
                                disabled />
                        </div>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Expired Date/Time</span>
                            </label>
                            <input
                                type="date"
                                name="expiredDate"
                                className="input input-bordered w-full"
                                disabled />
                        </div>
                    </div>
                    {/* row 3 */}
                    <div className="flex flex-col sm:flex-row items-center sm:gap-6">
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Request Date</span>
                            </label>
                            <input
                                type="date"
                                name="requestDate"
                                className="input input-bordered w-full"
                                disabled />
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
                                disabled />
                        </div>
                    </div>
                    {/* row 4 */}
                    <div className="flex items-center gap-6">
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Food Donator Email </span>
                            </label>
                            <input
                                type="email"
                                name="expiredDate"
                                className="input input-bordered w-full"
                                defaultValue={user.email}
                                disabled />
                        </div>
                    </div>
                    {/* row 5 */}
                    <div className="flex items-center gap-6">
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Food Donator Name </span>
                            </label>
                            <input
                                type="text"
                                name="expiredDate"
                                className="input input-bordered w-full"
                                defaultValue={user.displayName}
                                disabled />
                        </div>
                    </div>
                    {/* row 6 */}
                    <div className="flex items-center gap-6">
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">User Email </span>
                            </label>
                            <input
                                type="email"
                                name="expiredDate"
                                className="input input-bordered w-full"
                                defaultValue={user.email}
                                disabled />
                        </div>
                    </div>
                    {/* row 7 */}
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
                    <div className="form-control mt-6">
                        <button className="btn bg-[#c59d5f] hover:bg-black text-white font-bold border-none">Request</button>
                    </div>
                </form>
                <div className="modal-action w-full p-4 md:p-5">
                    <button onClick={onClose} className="btn w-full bg-red-500 text-white font-bold">
                        Close
                    </button>
                </div>
            </div>
        </dialog>
    );
};

export default Modal;