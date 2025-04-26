import React from 'react';

const Banner = () => {
  return (
    <div className="bg-black text-white py-4 px-3 sm:px-4 lg:px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-center mb-10 bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-orange-500">
          Shop By Categories
        </h2>

        <div className="flex flex-wrap justify-center gap-6">
          {/* Half Zipper Polo */}
          <div className="relative w-40 h-48 sm:w-52 sm:h-60 lg:w-64 lg:h-72 bg-white rounded-lg overflow-hidden shadow-md flex flex-col items-center">
            <img
              src="https://i.ibb.co.com/1fVyK2xq/Picsart-25-03-17-19-46-19-548-2.jpg"
              alt="Half Zipper Polo"
              className="w-full h-full object-contain p-2"
            />
            <div className="absolute bottom-2">
              <h3 className="bg-white text-black px-2 py-1 rounded text-sm font-semibold shadow-md">
                HALF ZIPPER POLO
              </h3>
            </div>
          </div>

          {/* Oversized T-Shirt */}
          <div className="relative w-40 h-48 sm:w-52 sm:h-60 lg:w-64 lg:h-72 bg-white rounded-lg overflow-hidden shadow-md flex flex-col items-center">
            <img
              src="https://i.ibb.co.com/N4QwPJM/De-Watermark-ai-1745346873254-jpg-1.png"
              alt="Oversized T-Shirt"
              className="w-full h-full object-contain p-2"
            />
            <div className="absolute bottom-2">
              <h3 className="bg-white text-black px-2 py-1 rounded text-sm font-semibold shadow-md">
                OVERSIZED T-SHIRT
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;

