import React, { useState, useEffect } from 'react';
import { IoMdLogOut } from "react-icons/io";
import { Link, useNavigate } from "react-router-dom";
import { FaSquarePlus } from "react-icons/fa6";
import { db, auth } from "./Firebase";
import { ref as dbRef, set, push, remove } from "firebase/database";
import { onAuthStateChanged } from 'firebase/auth';
import { IoPersonCircleOutline } from "react-icons/io5";
import { IoMdArrowRoundForward } from "react-icons/io";
const UploadVideo = ({ dbPath }) => {
  const [videoUrl, setVideoUrl] = useState('');
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  const handleVideoUpload = () => {
    if (!videoUrl) return;
    setIsLoading(true);

    // Push the new video to the database, creating a unique key for each video
    const newVideoRef = push(dbRef(db, dbPath));  // Create a unique key
    set(newVideoRef, { url: videoUrl })
      .then(() => {
        setIsLoading(false);
        setShowSuccess(true);
        setTimeout(() => {
          setShowSuccess(false);
        }, 5000);
        setVideoUrl('');
      })
      .catch(() => {
        setIsError(true);
        setIsLoading(false);
      });
  };
  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate("/"); 
    } catch (error) {
      console.error("Error logging out:", error);
    }
  };
  return (
    <div>
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
                  UPLOAD VIDEOS
                </h2>
              

                {user && (
        <div className='flex flex-col justify-center items-center gap-5 mt-10'>
          <input
            type="text"
            placeholder='Enter the YouTube URL'
            value={videoUrl}
            onChange={(e) => setVideoUrl(e.target.value)}
            className='py-2 px-8 outline-none rounded-xl shadow-lg bg-white border border-[#eaeaea]'
          />
          <button onClick={handleVideoUpload} className='flex items-center gap-2 md:text-xl text-sm bg-white px-8 py-2 rounded-xl shadow-lg font-bold text-[#343434] border border-[#eaeaea]'>
            Upload <span className='text-[#ff9019]'><FaSquarePlus /></span>
          </button>
          {isLoading ? <span className='text-sm md:text-xl font-semibold fontName text-[#343434]'>Loading...</span> : null}
          {isError ? <span className='text-sm md:text-xl font-semibold fontName text-[#343434]'>Error <span className='text-[#ff9019]'>Uploading</span> URL</span> : null}
          {showSuccess && <h1 className='text-sm md:text-xl font-base fontName text-[#343434]'>Uploaded <span className='text-[#ff9019]'>Successfully</span></h1>}
        </div>
      )}
          </div>
        </div>
      </div>
      {/* <div className="fixed">
        <Testimonial />
      </div> */}
    </div>
      
    </div>
  )
}

export default UploadVideo;