import React, { useState } from 'react';

const Counter = (props) => {
  // State to keep track of the count
  const [count, setCount] = useState(1);

  // Function to increment the count
  const increment = () => {
    if (count === props.stock) {
    } else {
      setCount(count + 1);
    }
  };

  // Function to decrement the count
  const decrement = () => {
    count > 1 ? setCount(count - 1) : setCount(count)
  };

  return (
    <div className="p-4 border rounded-lg shadow-md">
      <div className="flex items-center mb-2">
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded-md mr-2"
          onClick={decrement}
        >
          -
        </button>
        <p className="text-2xl font-bold">{count}</p>
        <button
          className="px-4 py-2 bg-green-500 text-white rounded-md ml-2"
          onClick={increment}
        >
          +
        </button>
      </div>
      <button onClick={() => props.onConfirm(count)} className="my-4 px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 focus:outline-none focus:ring focus:ring-green-300">
              Add to Cart
     </button>
    </div>
  );
};

export default Counter;
