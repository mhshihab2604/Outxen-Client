import React from 'react';

const products = [
  {
    id: 1,
    name: 'Half Zipper Polo t-shirt – Black',
    category: 'Half Zipper Polo',
    image: 'https://i.ibb.co/1fVyK2xq/Picsart-25-03-17-19-46-19-548-2.jpg',
    oldPrice: 699,
    newPrice: 449,
    discount: 36,
    inStock: true,
  },
  {
    id: 2,
    name: 'Half Zipper Polo T-shirt – Coffee',
    category: 'Half Zipper Polo',
    image: 'https://i.ibb.co/N2K4pT7w/Picsart-25-03-17-19-46-49-851-2.jpg',
    oldPrice: 699,
    newPrice: 449,
    discount: 36,
    inStock: true,
  },
  {
    id: 3,
    name: 'Half Zipper Polo t-shirt – Olive',
    category: 'Half Zipper Polo',
    image: 'https://i.ibb.co/nMbJXxkP/Picsart-25-03-17-18-51-45-910-2.jpg',
    oldPrice: 699,
    newPrice: 449,
    discount: 36,
    inStock: true,
  },
  {
    id: 4,
    name: 'Oversized Drop Shoulder T-Shirt – Black',
    category: 'Oversized T-shirt',
    image: 'https://i.ibb.co/N4QwPJM/De-Watermark-ai-1745346873254-jpg-1.png',
    oldPrice: 399,
    newPrice: 299,
    discount: 25,
    inStock: true,
  },
];

const FeaturedProduct = () => {
  return (
    <div className="bg-white py-8 px-4 sm:px-8 lg:px-16">
      <h2 className="text-2xl sm:text-3xl font-bold text-center mb-10 bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-orange-500">
        PRODUCTS
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {products.map((product) => (
          <div key={product.id} className="border rounded-lg overflow-hidden shadow-md relative hover:shadow-lg transition">
            {/* Discount badge */}
            <div className="absolute top-2 left-2 bg-red-600 text-white text-xs font-semibold px-2 py-1 rounded">
              -{product.discount}%
            </div>

            {/* Image */}
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-60 object-contain p-4"
            />

            {/* Info section */}
            <div className="px-4 py-2">
              {/* Product Name */}
              <h3 className="text-sm font-bold text-gray-800 mb-1">{product.name}</h3>

              {/* Category */}
              <p className="text-xs text-gray-500 mb-2">{product.category}</p>

              {/* Stock */}
              {product.inStock ? (
                <p className="text-green-600 text-sm flex items-center gap-1 mb-2">
                  <span>✔</span> In stock
                </p>
              ) : (
                <p className="text-red-600 text-sm mb-2">Out of stock</p>
              )}

              {/* Price */}
              <div className="flex items-center gap-2 mb-3">
                <p className="line-through text-gray-400 text-sm">৳ {product.oldPrice}.00</p>
                <p className="text-green-600 font-bold text-lg">৳ {product.newPrice}.00</p>
              </div>

              {/* Add to Basket Button */}
              <button className="w-full bg-gray-200 text-gray-800 py-2 rounded hover:bg-gray-300 font-semibold text-sm">
                ADD TO BASKET
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedProduct;
