import React, { useState } from "react";
import pieOne from '../images/Pineapple_1_green_720x.webp'
import pieTwo from '../images/Pineapple_3_green_720x.webp'
import pieThree from '../images/Pineapple_4_green_720x.webp'
import banaOne from '../images/Banana_1_720x.webp'
import banaTwo from '../images/Banana_3_360x.webp'
import banaThree from '../images/Banana_6_360x.webp'
import straOne from '../images/Raspberry_1_720x.webp'
import straTwo from '../images/Raspberry_3_720x.webp'
import straThree from '../images/Raspberry_4_720x.webp'
import rasOne from '../images/Strawberry_1_720x.webp'
import rasTwo from '../images/Strawberry_3_720x.webp'
import rasThree from '../images/Strawberry_4_720x.webp'
import guaOne from '../images/Guava_1_720x.webp'
import guaTwo from '../images/Guava_3_720x.webp'
import guaThree from '../images/Guava_4_720x.webp'
import { FaStar } from "react-icons/fa6";
import { FaStarHalfAlt } from "react-icons/fa";



const Product = () => {
  const [selectedFlavor, setSelectedFlavor] = useState(0);
  const [selectedThumbnail, setSelectedThumbnail] = useState("");

  const [quantity, setQuantity] = useState(1);

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const decreaseQuantity = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  const products = [
    {
      id: 1,
      name: "BANAANA QUEEN",
      description:
        "Our fab collab with Nymphia Wind features sweet banana puree, decadent vanilla bean, and fresh brewed marigold flowers. Banana cream for the Banana Queen is a toast to Asian heritage and a celebration of this iconic yellow fruit.",
      oneTimePrice: "3,690.93",
      subscribedPrice: "3,690.93",
      reviews: 51,
      image: banaOne,
      thumbnails: [
        banaOne,
        banaTwo,
        banaThree,
      ],
    },

    {
      id: 2,
      name: "RASPBERRY LYCHEE",
      description:
        "Jammy raspberry puree, juicy lychees, and fresh brewed honeysuckle flowers reminiscent of your favorite gummy treats.",
      oneTimePrice: "3,690.93",
      subscribedPrice: "5,357.29",
      reviews: 80,
      image: straOne,
      thumbnails: [
        straOne,
        straTwo,
        straThree,
      ],
    },


    {
      id: 3,
      name: "STRAWBERRY PASSION",
      description:
        "Ripe strawberries and tart passion fruit meet freshly brewed hibiscus flowers for a sweet and tropical refresher.",
      oneTimePrice: "3,690.93",
      subscribedPrice: "4,337.29",
      reviews: 138,
      image: rasOne,
      thumbnails: [
        rasOne,
        rasTwo,
        rasThree,
      ],
    },


    {
      id: 4,
      name: "GUAVA ROSE",
      description:
        "Tropical pink guava, freshly brewed rose petals, and soothing elderberry for a fruity and floral pink drink.",
      oneTimePrice: "3,690.93",
      subscribedPrice: "2,937.93",
      reviews: 102,
      image: guaOne,
      thumbnails: [
        guaOne,
        guaTwo,
        guaThree,
      ],
    },


    {
      id: 5,
      name: "PINEAPPLE PARADISE",
      description:
        "Sun-kissed pineapple, zesty lime, and citrusy tangerine juice for a poolside getaway in a can. A light twist of Sichuan peppercorn rounds out this tropical flavor with a warm hint of spice.",
      oneTimePrice: "3,690.93",
      subscribedPrice: "3,610.93",
      reviews: 93,
      image: pieOne,
      thumbnails: [
        pieOne,
        pieTwo,
        pieThree,
      ],
    },

  ];

  const handleFlavorSelect = (index) => {
    setSelectedFlavor(index);
    setSelectedThumbnail(""); // Reset thumbnail when flavor changes
  };

  const handleThumbnailSelect = (thumb) => {
    setSelectedThumbnail(thumb);
  };

  const selectedProduct = products[selectedFlavor];
  const mainImage = selectedThumbnail || selectedProduct.image;

  return (
    <div className="container mx-auto max-w-6xl px-5 mt-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        
        <div className="text-center">
          <img
            src={mainImage}
            alt={selectedProduct.name}
            className="mb-3 mx-auto w-full max-w-lg rounded-3xl border-blueP border-2"
          />
          <div className="grid grid-cols-3 justify-center gap-5">
            {selectedProduct.thumbnails.map((thumb, index) => (
              <img
                key={index}
                src={thumb}
                alt={`Thumbnail ${index + 1}`}
                className={'w-32 h-32 md:w-40 md:h-40 rounded-3xl cursor-pointer border-blueP border-2'
                }
                onClick={() => handleThumbnailSelect(thumb)}
              />
            ))}
          </div>
        </div>

  
        <div>
          <h2 className="text-4xl md:text-5xl text-blueP font-bold">{selectedProduct.name}</h2>
          <p className="text-blueP text-lg mt-3"><span className="font-bold">12CANS |</span> PREBIOTIC + PROBIOTIC SPARKLING DRINK</p>
          <p className="flex items-center text-blueP mt-2 text-2xl"><FaStar /><FaStar /><FaStar /><FaStar /><FaStarHalfAlt />  <span className="ml-4 text-lg ">{selectedProduct.reviews} Reviews</span></p>
          <p className="text-blueP text-lg mt-3">{selectedProduct.description}</p>
       
        

          {/* Flavor Selector */}
          <div className="mt-6">
            <h5 className="text-lg text-blueP">Choose Your Flavor <span className="font-bold">{selectedProduct.name}</span></h5>
            <div className="grid grid-cols-5 gap-1 mt-2">
              {products.map((product, index) => (
                <img
                  key={product.id}
                  src={product.image}
                  alt={product.name}
                  className={`w-20 h-20 rounded-lg cursor-pointer border-2 ${
                    selectedFlavor === index ? "border-blueP" : "border-gray-200"
                  }`}
                  onClick={() => handleFlavorSelect(index)}
                />
              ))}
            </div>
          </div>

          <div className="bg-white mt-5">
  
      
  
        <div className="flex items-center justify-between border-2 rounded-xl px-4 py-3 border-gray-300">
          <label className="flex items-center">
            <input
              type="radio"
              name="purchase"
              className="form-radio text-blueP"
             
            />
            <span className="ml-3 text-xl text-blueP  font-bold">One-time purchase</span>
          </label>
          <span className="text-xl text-blueP">12 Pack</span>
          <span className="text-xl text-blueP font-bold">Rs.{selectedProduct.oneTimePrice}</span>
        </div>

      
        <div className="border-2 rounded-xl mt-5 p-4 border-blueP">
          <div className="flex items-center justify-between">
            <label className="flex items-center">
              <input
                type="radio"
                name="purchase"
                className="form-radio text-blueP focus:ring-blueP"
                defaultChecked
              />
              <span className="ml-3 text-xl font-bold text-blueP flex items-center">
                Subscribe & Save{" "}
                <span className="ml-1 text-pink-500 text-sm">✨</span>
              </span>
            </label>
            <div className="text-right flex gap-2 items-center">
              
              <p className="text-xl line-through text-blueP">Rs. 3,690.93</p>
              <p className="text-lg font-bold text-blueP">Rs. 3,137.29</p>
            </div>
          </div>

          <div className="mt-4">
            <select
              className="w-full  rounded-xl border-2 border-blueP font-bold text-xl p-2 text-blueP"
              defaultValue="Delivery every 4 weeks - 15% off"
            >
              <option className="text-white bg-blueP">Delivery every 4 weeks - 15% off</option>
              <option className="text-white bg-blueP">Delivery every 2 weeks - 10% off</option>
              <option className="text-white bg-blueP">Delivery every 6 weeks - 20% off</option>
            </select>
          </div>

          <div className="mt-4 px-4 text-md space-y-2 text-blueP">
            <p>✓ Change or cancel anytime</p>
            <p>✓ Exclusive gifts + discounts</p>
            <div className="flex items-center space-x-2">
              <input type="checkbox" className="form-checkbox" />
              <label className="font-bold">Is this a gift?</label>
            </div>
          </div>
        </div>
      </div>

    
      <div className="flex items-center justify-between gap-2 mt-6">
        <div className="flex items-center space-x-4 border-2 border-blueP p-2 rounded-xl">
          <button
            onClick={decreaseQuantity}
            className="w-8 h-8 flex items-center justify-center text-2xl font-bold text-blueP "
          >
            -
          </button>
          <span className="text-lg font-medium">{quantity}</span>
          <button
            onClick={increaseQuantity}
            className="w-8 h-8 flex items-center justify-center text-2xl font-bold text-blueP ">
            +
          </button>
        </div>
        <button className="bg-pink-500 w-full text-white text-xl px-8 py-3 rounded-lg font-bold hover:bg-pink-600">
          ADD TO CART
        </button>
      </div>
    
      <div className="mt-4 flex items-center justify-center text-sm">
        <span className="text-blue-600 text-lg">↩</span>
        <p className="ml-2">
          Order 2+ for{" "}
          <span className="bg-yellow-300 p-1 text-blueP font-bold">FREE SHIPPING!</span>
        </p>
      </div>
    </div>
  
        </div>
      </div>
  
  );
};

export default Product;
