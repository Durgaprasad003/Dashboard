import React, { useState } from 'react';

const LowStockAlerts = ({ items = [] }) => {
  const [currentItems, setCurrentItems] = useState(items);
  const [restockAmounts, setRestockAmounts] = useState({});

  const handleRestock = (id) => {
    const amount = parseInt(restockAmounts[id] || 0, 10);
    if (amount > 0) {
      setCurrentItems((prevItems) =>
        prevItems.map((item) =>
          item.id === id ? { ...item, quantity: item.quantity + amount } : item
        )
      );
      setRestockAmounts((prevAmounts) => ({ ...prevAmounts, [id]: '' })); // Clear input after restocking
    } else {
      alert('Please enter a valid amount to restock.');
    }
  };

  const handleInputChange = (id, value) => {
    setRestockAmounts((prevAmounts) => ({ ...prevAmounts, [id]: value }));
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow">
      <h2 className="text-xl font-bold mb-4">Low Stock Alerts</h2>
      {currentItems.map((item) => (
        <div
          key={item.id}
          className="flex flex-col md:flex-row items-start md:items-center justify-between p-4 border rounded mb-2 space-y-2 md:space-y-0"
        >
          <div>
            <p className="font-medium">{item.name}</p>
            <p className="text-gray-500">Quantity: {item.quantity}</p>
          </div>
          <div className="flex items-center space-x-2">
            <input
              type="number"
              value={restockAmounts[item.id] || ''}
              onChange={(e) => handleInputChange(item.id, e.target.value)}
              className="border rounded px-2 py-1 w-full md:w-auto"
              placeholder="Amount"
            />
            <button
              onClick={() => handleRestock(item.id)}
              className="bg-blue-500 text-white px-4 py-2 rounded w-full md:w-auto"
            >
              Restock
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default LowStockAlerts;
