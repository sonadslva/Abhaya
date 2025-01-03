import React from "react";
import img1 from "../assets/abhayaroom2.jpeg";
import img2 from "../assets/abhayaroom3.jpeg";
import img3 from "../assets/abhayaroom4.jpg";
import img4 from "../assets/abhayaroom5.jpeg";
import img5 from "../assets/abhayaroom6.jpeg";
import img6 from "../assets/abhayaroom7.jpeg";
import img from '../assets/facilities.jpg'
import img7 from '../assets/abhayatreatment.jpeg';
import img8 from '../assets/abhayatreatmentroom.jpg'
import img9 from '../assets/abhayarooms1.jpg'
import Ayurvedic1 from "../assets/ayurvedic-header.jpg";

const Facilities = () => {
  return (
    <div>
      <section>
        <div className="w-full ">
          <img
            src={img}
            alt="ayur"
            className="w-full h-[600px] flex object-cover"
          />
        </div>
      </section>
      <section className="mt-[80px]">
        <div className="bg-grey flex justify-center items-center p-10 ">
          {/* left */}
          <div>
            <div className="text-[50px] font-bold">
              {" "}
              WE GIVE THE BEST SERVICE
            </div>
            <div className="paraFont">
              {" "}
              Choose the environment that best suits your health and relaxation
              needs. Both AC and Non-AC rooms are equipped to support your
              Ayurvedic journey.
            </div>
            <div className="text-[30px] font-medium">
              Great Room For Patient{" "}
            </div>
            <div className="paraFont">
              Comfortable and Affordable Room Options AC & NON AC Rooms
              Available Our AC and Non-AC rooms provide a balance of luxury,
              comfort, and affordability, making it easy for you to choose the
              option that fits your needs
            </div>
          </div>

          
          <div>
            <div>
              <img src={Ayurvedic1} alt="image" />
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container mx-auto px-4 py-8 mt-10 ">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 relative p-[30px]" >
           
            <div className="h-48 relative ">
              <a href="#">
                <img
                  src={img1}
                  alt="Hospitals"
                  className="w-full h-full object-cover rounded-lg"
                />
              </a>
            </div>

            <div className="h-48 relative">
              <a href="#">
                <img
                  src={img2}
                  alt="Branches"
                  className="w-full h-full object-cover rounded-lg"
                />
              </a>
            </div>

            
            <div className="h-48 relative">
              <a href="#">
                <img
                  src={img3}
                  alt="Branches"
                  className="w-full h-full object-cover rounded-lg"
                />
              </a>
            </div>

          
            <div className="h-48 relative">
              <a href="#">
                <img
                  src={img4}
                  alt="Branches"
                  className="w-full h-full object-cover rounded-lg"
                />
              </a>
            </div>
            <div className="h-48 relative">
              <a href="#">
                <img
                  src={img5}
                  alt="Branches"
                  className="w-full h-full object-cover rounded-lg"
                />
              </a>
            </div>
            <div className="h-48 relative">
              <a href="#">
                <img
                  src={img6}
                  alt="Branches"
                  className="w-full h-full object-cover rounded-lg"
                />
              </a>
            </div>
            <div className="h-48 relative">
              <a href="#">
                <img
                  src={img7}
                  alt="Branches"
                  className="w-full h-full object-cover rounded-lg"
                />
              </a>
            </div>
            <div className="h-48 relative">
              <a href="#">
                <img
                  src={img8}
                  alt="Branches"
                  className="w-full h-full object-cover rounded-lg"
                />
              </a>
            </div>
            <div className="h-48 relative">
              <a href="#">
                <img
                  src={img9}
                  alt="Branches"
                  className="w-full h-full object-cover rounded-lg"
                />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Facilities;
