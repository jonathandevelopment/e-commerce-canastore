import { useState, useEffect } from "react";
import getData from "../../server/async";
import Item from "../Item/Item";

const ItemListContainer = (props) => {
    const [cannabisProducts, setCannabisProducts] = useState([]);

    async function requestProducts() {
        const respuesta = await getData();
        setCannabisProducts(respuesta)
    }

    useEffect(() => {
        requestProducts();
    },[])

    
    

    return(
        <div className="container m-auto px-4 py-10">
            <h1 className="text-3xl font-semibold ">{props.title}</h1>
            <h2 className="text-xl font-semibold mb-10">{props.subtitle}</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">    
            {cannabisProducts.map((item) => (
                <Item key={item.id} {...item} />
            ))}
            </div>
            <div className="py-6 hover:underline">
                 <a href="/" >View All</a>
            </div>
            

        </div>
    );
}

export default ItemListContainer;