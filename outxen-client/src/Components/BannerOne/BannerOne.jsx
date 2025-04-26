import { useEffect, useState } from 'react';

const images = [
  { src: "https://i.ibb.co.com/N2K4pT7w/Picsart-25-03-17-19-46-49-851-2.jpg", alt: "Image 1" },
  { src: "https://i.ibb.co.com/1fVyK2xq/Picsart-25-03-17-19-46-19-548-2.jpg", alt: "Image 2" },
  { src: "https://i.ibb.co/N2K4pT7w/Picsart-25-03-17-19-46-49-851-2.jpg", alt: "Image 3" },
  { src: "https://i.ibb.co/nMbJXxkP/Picsart-25-03-17-18-51-45-910-2.jpg", alt: "Image 4" },
  { src: "https://i.ibb.co.com/1fVyK2xq/Picsart-25-03-17-19-46-19-548-2.jpg", alt: "Image 5" }
];

const BannerOne = () => {
  const [startIndex, setStartIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setVisibleCount(1);
      } else if (window.innerWidth < 1024) {
        setVisibleCount(2);
      } else {
        setVisibleCount(3);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const getVisibleImages = () => {
    const endIndex = startIndex + visibleCount;
    if (endIndex <= images.length) {
      return images.slice(startIndex, endIndex);
    } else {
      return [...images.slice(startIndex), ...images.slice(0, endIndex - images.length)];
    }
  };

  const prevSlide = () => {
    setStartIndex((prevIndex) =>
      (prevIndex - 1 + images.length) % images.length
    );
  };

  const nextSlide = () => {
    setStartIndex((prevIndex) =>
      (prevIndex + 1) % images.length
    );
  };

  return (
    <div>
      <div className="w-full px-4 mb-20">
        <h1 className="flex items-center justify-center text-2xl sm:text-3xl font-bold mt-20 text-center bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-orange-500">
          Our New Arrivals
        </h1>

        <div className="relative flex items-center justify-center w-full py-6">
          {/* Prev Button */}
          <button
            aria-label="Slide back"
            onClick={prevSlide}
            className="absolute left-0 z-30 p-2 bg-white rounded-full shadow-md hover:scale-105 transition"
          >
            <svg width="8" height="14" fill="none" viewBox="0 0 8 14" className="w-4 h-4">
              <path d="M7 1L1 7L7 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>

          {/* Image Gallery */}
          <div className="flex justify-center items-center gap-4 w-full max-w-6xl transition-all duration-300">
            {getVisibleImages().map((image, index) => (
              <div
                key={index}
                className="relative w-40 h-48 sm:w-52 sm:h-60 lg:w-64 lg:h-72 rounded-lg overflow-hidden shadow-md"
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover"
                />

                {/* Only Discount Text */}
                <div className="absolute top-2 right-2 bg-red-600 text-white text-xs px-2 py-1 rounded">
                  -36%
                </div>
              </div>
            ))}
          </div>

          {/* Next Button */}
          <button
            aria-label="Slide forward"
            onClick={nextSlide}
            className="absolute right-0 z-30 p-2 bg-white rounded-full shadow-md hover:scale-105 transition"
          >
            <svg width="8" height="14" viewBox="0 0 8 14" fill="none" className="w-4 h-4">
              <path d="M1 1L7 7L1 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default BannerOne;
