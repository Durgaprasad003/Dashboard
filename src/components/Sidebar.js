import React from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineMenu } from 'react-icons/ai'; // Correct import for the icon

const Sidebar = () => {
  return (
    <div className="bg-gradient-to-b from-blue-900 to-blue-700 text-white w-64 h-full fixed left-0 top-0 p-6 shadow-lg transition-transform duration-300 ease-in-out transform hover:translate-x-0">
      <h2 className="text-3xl font-bold mb-6 text-center">Dashboard</h2>
      <ul>
        {[
          { path: '/', label: 'Inventory Summary' },
          { path: '/reports', label: 'Reports' },
          { path: '/transactions', label: 'Recent Transactions' },
          { path: '/low-stock', label: 'Low Stock Alerts' },
          { path: '/top-selling', label: 'Top Selling Products' },
          { path: '/activity', label: 'Activity Log' },
        ].map((item, index) => (
          <li key={index} className="mb-4">
            <Link
              to={item.path}
              className="flex items-center p-2 rounded-lg hover:bg-blue-800 transition duration-200 ease-in-out"
            >
              <AiOutlineMenu className="mr-2" />
              <span className="font-medium">{item.label}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
