import React, { useState } from "react";
import docbg from '../assets/docbg.jpg'
import Doc from "../assets/doc.jpg";

const Team = () => {
  const [activeDoctor, setActiveDoctor] = useState(null);

  const toggleContent = (doctorIndex) => {
    setActiveDoctor(activeDoctor === doctorIndex ? null : doctorIndex);
  };

  return (
    <div>
      <section>
       <div className="w-full h-[700px] flex">
          <img
            src={docbg}
            alt="ayur"
            className="w-full h-full object-cover"
          />
        </div>

            {/* <div className="absolute inset-0 flex items-center ">
          <h1 className="text-black text-[70px] font-bold   rounded-lg">
          The Hands That Heal
          </h1>
        </div> */}
          </section>
      <div className="flex flex-col min-h-screen ">
       
      <div className="w-full h-full mt-10 ">
     
        <div className="flex justify-center items-center gap-6">
        
          <div className="flex flex-col items-center text-center space-y-4">
          <h1 className="text-black text-[70px] font-bold  text-center  rounded-lg">
          The Hands That Heal
          </h1>
            <div className="w-60 h-80 overflow-hidden rounded-full shadow-lg">
              
              <img
                src={Doc}
                alt="Doctor"
                className="object-cover w-full h-full"
              />
            </div>
            <div className="text-xl font-semibold">Dr. Ajitha Kumari</div>
            <div className="text-lg font-medium">Doctor Details</div>
            <div className="paraFont">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Dignissimos voluptates, vitae nisi sint, quo cumque aut placeat
              doloribus possimus ipsa odio temporibus aspernatur doloremque
              recusandae repellat, unde officiis est? Qui!
            </div>
          </div>
        </div>
      </div>
    </div>

    </div>
   
    
  );
};

export default Team;
