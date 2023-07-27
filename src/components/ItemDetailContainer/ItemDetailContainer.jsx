import { useState, useEffect } from "react";
import { getProductData } from "../../server/async";
import { useParams } from "react-router-dom";
import Counter from "../Counter/Counter";

const ItemDetailContainer = (props) => {
  const [cannabisProduct, setCannabisProduct] = useState({});
  const { id } = useParams();

  useEffect(() => {
    async function requestProduct() {
      const respuesta = await getProductData(id);
      setCannabisProduct(respuesta);
    }
    requestProduct([id]);
  });

  const handleAddToCart = (count) => {
    console.log(`agregaste ${count} productos `);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="max-w-3xl w-full mx-8 my-12 p-6 bg-white rounded-lg shadow-lg">
        <div className="flex flex-col items-center">
          <img
            src={cannabisProduct.img}
            alt="cannabis"
            className="w-64 h-64 object-cover rounded-lg mb-6"
          />
          <div>
            <h1 className="text-3xl font-semibold text-gray-800 ">
              {cannabisProduct.name}
            </h1>
            <p className="text-xl text-green-600 mb-4">
              {cannabisProduct.type}
            </p>
            <p className="text-lg text-gray-600 ">
              Aroma: {cannabisProduct.aroma}
            </p>
            <p className="text-lg text-gray-600">
              THC Content: {cannabisProduct.thcContent}%
            </p>
            <p className="text-lg text-gray-600">
              CBD Content: {cannabisProduct.cbdContent}%
            </p>
            <p className="text-2xl text-gray-800 font-bold my-4">
              ${cannabisProduct.price}
            </p>
            <Counter stock={5} onConfirm={handleAddToCart} />
          </div>
        </div>
        <div className="border-t border-gray-300 pt-4">
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">
            Description
          </h2>
          <p className="text-gray-600">{cannabisProduct.description}</p>
        </div>
      </div>
    </div>
  );
};

export default ItemDetailContainer;
