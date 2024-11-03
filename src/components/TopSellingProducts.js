import React from "react";

const TopSellingProducts = () => {
  const topSellingProducts = [
    { id: 1, name: "Laptop", sales: 150 },
    { id: 2, name: "Mouse", sales: 120 },
    { id: 3, name: "Keyboard", sales: 100 },
  ];

  return (
    <div className="bg-white p-4 rounded-lg shadow">
      <h2 className="text-xl font-bold mb-4">Top Selling Products</h2>
      <div className="space-y-4">
        {topSellingProducts.map((product) => (
          <div key={product.id} className="flex items-center justify-between p-2 border rounded">
            <p className="font-semibold">{product.name}</p>
            <p className="text-gray-500">Sales: {product.sales}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopSellingProducts;
