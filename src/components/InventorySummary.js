import React from 'react';
import { FaBox, FaShoppingCart, FaExclamationTriangle } from "react-icons/fa";

const InventorySummary = () => (
  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
    {/* Top Row */}
    <div className="bg-white p-4 rounded-lg shadow flex justify-between items-center w-full md:w-67">
      <div className="flex flex-col">
        <p className="text-gray-500">Total Items</p>
        <h2 className="text-2xl font-bold">1,234</h2>
      </div>
      <FaBox className="text-3xl text-blue-500" />
    </div>
    
    <div className="bg-white p-4 rounded-lg shadow flex justify-between items-center w-full md:w-69">
      <div className="flex flex-col">
        <p className="text-gray-500">In Stock</p>
        <h2 className="text-2xl font-bold">850</h2>
      </div>
      <FaShoppingCart className="text-3xl text-green-500" />
    </div>

    {/* Bottom Row */}
    <div className="bg-white p-4 rounded-lg shadow flex justify-between items-center w-full md:w-69">
      <div className="flex flex-col">
        <p className="text-gray-500">Out of Stock</p>
        <h2 className="text-2xl font-bold">200</h2>
      </div>
      <FaExclamationTriangle className="text-3xl text-red-500" />
    </div>

    <div className="bg-white p-4 rounded-lg shadow flex justify-between items-center w-full md:w-69">
      <div className="flex flex-col">
        <p className="text-gray-500">Low Stock</p>
        <h2 className="text-2xl font-bold">184</h2>
      </div>
      <FaExclamationTriangle className="text-3xl text-yellow-500" />
    </div>
  </div>
);

export default InventorySummary;
