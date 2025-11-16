import React from "react";
import { Link } from "react-router-dom";

const Final = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-50 p-6">
      <div className="bg-white p-10 rounded-lg shadow-lg text-center">
        <h1 className="text-3xl font-bold mb-4 text-green-600">Thank You!</h1>
        <p className="mb-6 text-gray-700">
          Your order has been successfully placed.
        </p>
        <p className="mb-6 text-gray-500">
          You will receive a confirmation email shortly.
        </p>
        <Link
          to="/shop"
          className="bg-[#db4444] text-white px-6 py-3 rounded hover:bg-[#b03030]"
        >
          Continue Shopping
        </Link>
      </div>
    </div>
  );
};

export default Final;
