import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { addDoc, collection } from 'firebase/firestore';
import { db } from './Firebase'; // Ensure db is correctly imported

const AddTestimonial = () => {
    const [newTestimonial, setNewTestimonial] = useState({
        name: '',
        description: '',
    });
    const navigate = useNavigate();

    const handleAddTestimonial = async () => {
        try {
            if (!newTestimonial.name || !newTestimonial.description) {
                alert('Please fill in all fields');
                return;
            }

            // Save the testimonial to Firebase Firestore
            await addDoc(collection(db, 'Testimonials'), {
                ...newTestimonial,
                createdAt: new Date(),
            });

            navigate('/admin'); // Redirect to the testimonials page after adding
        } catch (error) {
            console.error('Error adding testimonial:', error);  // Add more error details for debugging
            alert('Error adding testimonial. Please try again.');
        }
    };

    return (
        <div className="h-screen w-full pt-4 fixed z-[999] backdrop-blur flex justify-center items-center ">
            <div className="h-auto max-w-[700px] bg-[#6ac57e] w-full rounded-3xl">
                <div className="w-full flex flex-col gap-5 py-10 px-4">
                    <div className="mb-3 font-bold text-[#fff] text-3xl text-center">
                        Add Testimonial
                    </div>

                    <input
                        type="text"
                        placeholder="Name"
                        value={newTestimonial.name}
                        onChange={(e) =>
                            setNewTestimonial({ ...newTestimonial, name: e.target.value })
                        }
                        className="px-8 py-2 rounded-lg w-full border-none outline-none"
                        required
                    />

                    <textarea
                        placeholder="Description"
                        value={newTestimonial.description}
                        onChange={(e) =>
                            setNewTestimonial({
                                ...newTestimonial,
                                description: e.target.value,
                            })
                        }
                        className="px-8 py-2 rounded-lg w-full border-none outline-none"
                        rows="4"
                        required
                    />

                    <div className="flex justify-center items-center gap-5 mt-4">
                        <Link to="/admin">
                            <button className="px-8 py-2 bg-[#fff] rounded-lg font-semibold">
                                Cancel
                            </button>
                        </Link>
                        <button
                            onClick={handleAddTestimonial}
                            className="px-8 py-2 bg-[#fff] rounded-lg font-semibold"
                        >
                            Add Testimonial
                        </button>
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default AddTestimonial;
