import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  collection,
  getDocs,
  deleteDoc,
  doc,
  updateDoc,
} from "firebase/firestore";
import { db } from "./Firebase";
import { signOut } from "firebase/auth";
import { auth } from "./Firebase";
import { IoPersonCircleOutline } from "react-icons/io5";
import { IoMdArrowRoundForward } from "react-icons/io";
import { CiEdit } from "react-icons/ci";
import { MdDelete } from "react-icons/md";
import { LuSave } from "react-icons/lu";
import { IoMdLogOut } from "react-icons/io";
import Testimonial from "./AddTestimonial";
const Admin = () => {
  const [testimonials, setTestimonials] = useState([]);
  const [editingId, setEditingId] = useState(null); 
  const [updatedTestimonial, setUpdatedTestimonial] = useState({
    name: "",
    description: "",
  });
  const navigate = useNavigate();

  
  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "Testimonials"));
        const testimonialList = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setTestimonials(testimonialList);
      } catch (error) {
        console.error("Error fetching testimonials:", error);
      }
    };

    fetchTestimonials();
  }, []);


  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate("/"); 
    } catch (error) {
      console.error("Error logging out:", error);
    }
  };


  const handleDelete = async (id) => {
    try {
      const testimonialDoc = doc(db, "Testimonials", id);
      await deleteDoc(testimonialDoc);
      
      setTestimonials(
        testimonials.filter((testimonial) => testimonial.id !== id)
      );
    } catch (error) {
      console.error("Error deleting testimonial:", error);
    }
  };


  const handleEdit = (testimonial) => {
    setEditingId(testimonial.id);
    setUpdatedTestimonial({
      name: testimonial.name,
      description: testimonial.description,
    });
  };


  const handleUpdate = async () => {
    try {
      const testimonialDoc = doc(db, "Testimonials", editingId);
      await updateDoc(testimonialDoc, updatedTestimonial);
     
      setTestimonials(
        testimonials.map((testimonial) =>
          testimonial.id === editingId
            ? { ...testimonial, ...updatedTestimonial }
            : testimonial
        )
      );
      setEditingId(null); 
    } catch (error) {
      console.error("Error updating testimonial:", error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUpdatedTestimonial((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div>
      <div className=" h-screen w-full flex">
        {/* Sidebar */}
        <div className="h-full w-[300px] bg-[#ADE896] flex flex-col items-center py-6">
          <div className="w-[100px] h-[100px] flex justify-center items-center mb-4">
            <IoPersonCircleOutline className="text-black w-full h-full" />
          </div>
          <h1 className="text-lg text-black">ADMIN </h1>
          <div className="flex items-center">
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <Link
                  to="/testimonial"
                  className="text-black text-lg flex items-center"
                >
                  <IoMdArrowRoundForward className="mr-2" /> Add Testimonial
                </Link>
              </li>
              <li className="flex items-center gap-2">
                <Link
                  to="/UploadVideo"
                  className="text-black text-lg flex items-center"
                >
                  <IoMdArrowRoundForward className="mr-2" /> Video
                </Link>
              </li>
              <li className="flex items-center gap-2">
                <Link
                  to="#"
                  onClick={handleLogout}
                  className="text-black text-lg flex items-center"
                >
                  <IoMdLogOut className="mr-2" /> Log Out
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Main Content */}
        <div className="h-full w-full bg-gray-100">
          <div className=" p-4 rounded-lg">
            <div>
              <div>
                {" "}
                <h1 className="bg-[#DFE8DC]">
                  <center>ADMIN PANEL</center>{" "}
                </h1>
              </div>
            </div>
          
                <h2 className="text-2xl font-semibold mb-4 text-center">
                  Testimonials
                </h2>
              

            {testimonials.length > 0 ? (
              <table className="min-w-full table-auto border-collapse">
                <thead>
                  <tr>
                    <th className="px-4 py-2 bg-[#92C83E] text-white text-left">
                      Name
                    </th>
                    <th className="px-4 py-2 bg-[#92C83E] text-white text-left">
                      Description
                    </th>
                    <th className="px-4 py-2 bg-[#92C83E] text-white text-left">
                      Created At
                    </th>
                    <th className="px-4 py-2 bg-[#92C83E] text-white text-left">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {testimonials.map((testimonial) => (
                    <tr key={testimonial.id}>
                      <td className="border border-[#999696] px-4 py-2">
                        {editingId === testimonial.id ? (
                          <input
                            type="text"
                            name="name"
                            value={updatedTestimonial.name}
                            onChange={handleChange}
                            className="p-2 border border-[#999696] rounded-md w-full"
                          />
                        ) : (
                          testimonial.name
                        )}
                      </td>

                      <td className="border border-[#999696] px-4 py-2">
                        {editingId === testimonial.id ? (
                          <textarea
                            name="description"
                            value={updatedTestimonial.description}
                            onChange={handleChange}
                            className="p-2 border border-[#999696] rounded-md w-full"
                          />
                        ) : (
                          testimonial.description
                        )}
                      </td>

                      <td className="border border-[#999696] px-4 py-2">
                        {testimonial.createdAt
                          ? new Date(
                              testimonial.createdAt.seconds * 1000
                            ).toLocaleDateString()
                          : "N/A"}
                      </td>

                      <td className="border border-[#999696] px-4 py-2">
                        <div className="flex justify-evenly">
                          <div className="w-[60px] h-[10px]">
                            {editingId === testimonial.id ? (
                              <button
                                onClick={handleUpdate}
                                className="text-black text-2xl"
                              >
                                <LuSave />
                              </button>
                            ) : (
                              <button
                                onClick={() => handleEdit(testimonial)}
                                className="text-black text-2xl"
                              >
                                <CiEdit />
                              </button>
                            )}
                          </div>

                          <div className="w-[60px] h-[10px]">
                            <button
                              onClick={() => handleDelete(testimonial.id)}
                              className="text-black text-2xl"
                            >
                              <MdDelete />
                            </button>
                          </div>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            ) : (
              <p>No testimonials found.</p>
            )}
          </div>
        </div>
      </div>
      {/* <div className="fixed">
        <Testimonial />
      </div> */}
    </div>
  );
};

export default Admin;
