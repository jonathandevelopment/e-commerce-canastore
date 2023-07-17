import { useState, useEffect } from "react";
import getData, { getProductData } from "../../server/async";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
  const [cannabisProduct, setCannabisProduct] = useState({});
  const [cannabisProducts, setCannabisProducts] = useState([]);
  const { id } = useParams();

  async function requestProduct() {
    const respuesta = await getProductData(id);
    setCannabisProduct(respuesta);
  }

  async function requestProducts() {
    const respuesta = await getData();
    setCannabisProducts(respuesta);
  }

  useEffect(() => {
    requestProduct();
    requestProducts();
  }, []);

  const productIndex = parseInt(id) - 1;
  const productExists = productIndex >= 0 && productIndex < cannabisProducts.length;
  const product = productExists ? cannabisProducts[productIndex] : null;

  return (
    <div className="flex items-center justify-center">
      {product ? (
        <div className="my-10 p-4">
          <div>
            <img width={300} src={product.img} alt="cannabis"></img>
          </div>
          <h1 className="text-xl font-bold mb-2">{product.name}</h1>
          <p className="text-gray-600 mb-2">{product.aroma}</p>
          <p className="text-gray-600 mb-2">Thc : {product.thcContent}%</p>
          <p className="text-gray-600 mb-2">Cbd : {product.cbdContent}%</p>
          <p className="text-green-600 mb-2">{product.type}</p>
          <p className="text-gray-800 mb-2 text-2xl">$ {product.price}</p>
        </div>
      ) : (
        <h1 className="text-3xl font-semibold text-center">Page Not Found</h1>
      )}
    </div>
  );
};

export default ItemDetailContainer;
