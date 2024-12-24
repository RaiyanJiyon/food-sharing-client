import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import Modal from "../../components/ui/Modal";

const FoodDetails = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const foodData = useLoaderData();
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    return (
        <div className="w-11/12 mx-auto mt-10">
            <h1 className="text-4xl font-bold mb-4 text-center">{foodData.foodName}</h1>
            <div className="hero w-full">
                <div className="hero-content flex-col lg:flex-row items-start">
                    <img
                        src={foodData.foodUrl}
                        className="rounded-lg shadow-2xl md:w-[500px] md:h-[400px] object-cover md:object-fill"
                        alt={foodData.foodName} />
                    <div className="w-full lg:ml-10 mt-10 lg:mt-0">
                        <h1 className="text-5xl font-bold mb-4">{foodData.foodName}</h1>
                        <p className="text-xl font-semibold mb-2">Quantity: {foodData.foodQuantity}</p>
                        <p className="text-lg mb-2"><span className="font-semibold">Pickup Location:</span> {foodData.pickupLocation}</p>
                        <p className="text-lg mb-2"><span className="font-semibold">Expires On:</span> {new Date(foodData.expiredDate).toLocaleString()}</p>
                        <p className="text-lg mb-2"><span className="font-semibold">Additional Notes:</span> {foodData.additionalNotes}</p>
                        <p className="text-lg mb-2"><span className="font-semibold">Status:</span> {foodData.foodStatus ? 'Available' : 'Unavailable'}</p>

                        <div className="flex items-center mt-4">
                            <img
                                src={foodData.photoURL}
                                alt={foodData.displayName}
                                className="h-12 w-12 rounded-full mr-4"
                            />
                            <div>
                                <p className="text-lg font-semibold">{foodData.displayName}</p>
                                <p className="text-sm text-gray-600">{foodData.email}</p>
                            </div>
                        </div>
                        <button onClick={openModal}  className="btn bg-[#c59d5f] hover:bg-black text-white font-bold border-none mt-6">
                            Request
                        </button>
                    </div>
                </div>
            </div>
            <Modal isOpen={isModalOpen} onClose={closeModal} />
        </div>
    );
};

export default FoodDetails;
