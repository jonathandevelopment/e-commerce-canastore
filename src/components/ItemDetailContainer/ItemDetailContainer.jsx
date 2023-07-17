import { useState, useEffect } from "react";
import { getProductData } from "../../server/async";
import { useParams } from "react-router-dom";


const ItemDetailContainer = () => {
    const [cannabisProduct, setCannabisProduct] = useState({});
    const { id } = useParams();

    async function requestProduct() {
        const respuesta = await getProductData(id);
        setCannabisProduct(respuesta)
    }

    useEffect(() => {
      requestProduct();
    },)

  return (
    <div className="flex items-center justify-center">
      <div className=" my-10 p-4 ">
        <div>
          <img width={300} src={cannabisProduct.img} alt="cannabis"></img>
        </div>
        <h1 className="text-xl font-bold mb-2">{cannabisProduct.name}</h1>
        <p className="text-gray-600 mb-2">{cannabisProduct.aroma}</p>
        <p className="text-gray-600 mb-2">Thc : {cannabisProduct.thcContent}%</p>
        <p className="text-gray-600 mb-2">Cbd : {cannabisProduct.cbdContent}%</p>
        <p className="text-green-600 mb-2">{cannabisProduct.type}</p>
        <p className="text-gray-800 mb-2 text-2xl">$ {cannabisProduct.price}</p>
      </div>
    </div>
  );
};

export default ItemDetailContainer;