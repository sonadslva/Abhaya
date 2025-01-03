import React from 'react';
import relax from '../assets/relax.jpeg'
import detox from '../assets/detox.png'
import bg1 from '../assets/bg1.png'
import packageimg from '../assets/pack.jpg'
const Packages = () => {
  return (
    

    <div >
      <section>
              <div className="w-full ">
                <img
                  src={packageimg}
                  alt="ayur"
                  className="w-full h-[600px] flex object-cover"
                />
              </div>
            </section>
            
      
    <section className=" relative z-50 mt-[50px]  bg-cover bg-center h-screen" >
      <div className="bg-white bg-opacity-80 p-8 sm:p-16 rounded-xl shadow-xl max-w-5xl mx-auto mt-10">
        <h1 className="text-4xl font-bold text-green-700 text-center mb-8">Ayurvedic Center Packages</h1>

        <div className="gap-8 flex justify-end items-center ">
          {/* Package 1 */}
          <div className="border rounded-lg shadow-lg overflow-hidden bg-white w-[1300px] h-[400px]">
            <img src={relax} alt="Relaxation Package" className="w-full h-56 object-cover" />
            <div className="p-6">
              <h2 className="text-sm font-bold text-green-700 mb-2">Relaxation Package</h2>
              <p className="text-gray-700 mb-4 text-xs">Experience deep relaxation with our traditional Ayurvedic massage and rejuvenation therapies. This package helps alleviate stress and improve overall well-being.</p>
              <p className="text-green-600 font-semibold text-lg">Price: 1500</p>
            </div>
          </div>

          {/* Package 2 */}
          <div className="border rounded-lg shadow-lg overflow-hidden bg-white w-[1300px] h-[400px]">
            <img src={detox} alt="Detox Package" className="w-full h-56 object-cover" />
            <div className="p-6">
              <h2 className="text-2xl font-bold text-green-700 mb-2">Detox Package</h2>
              <p className="text-gray-700 mb-4 text-xs">Cleanse and rejuvenate your body with our herbal detox therapies, designed to flush out toxins and restore balance to your mind and body.</p>
              <p className="text-green-600 font-semibold text-lg">Price: 2000</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    </div>
  );
};

export default Packages;
