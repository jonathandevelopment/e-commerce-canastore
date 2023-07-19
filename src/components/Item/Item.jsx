import { Link } from "react-router-dom";

const Item = (props) => {
    
    const {name, type, thcContent, cbdContent, aroma, price, id, img} = props;

    return(
        <div className="bg-white rounded-lg shadow-lg p-4">
            <div>
                <img src={img} alt="cannabis"></img>
            </div>
            <h1 className="text-xl font-bold mb-2">{name}</h1>
            <p className="text-gray-600 mb-2">{aroma}</p>
            <p className="text-gray-600 mb-2">Thc  : {thcContent}%</p>
            <p className="text-gray-600 mb-2">Cbd : {cbdContent}%</p>
            <p className="text-green-600 mb-2">{type}</p>
            <p className="text-gray-800 mb-2 text-2xl">$ {price}</p>
            <Link className="text-green-900 font-semibold hover:underline" 
            to={`/product/${id}`}> See detail</Link>
        </div>
    )
}

export default Item;