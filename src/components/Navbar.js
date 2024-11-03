import React, { useState } from "react";
import { FiSearch, FiBell, FiUser } from "react-icons/fi";

function Navbar() {
  const [showNotifications, setShowNotifications] = useState(false);
  const [showUserMenu, setShowUserMenu] = useState(false);

  const toggleNotifications = () => {
    setShowNotifications(!showNotifications);
    if (showUserMenu) setShowUserMenu(false); // Close user menu if open
  };

  const toggleUserMenu = () => {
    setShowUserMenu(!showUserMenu);
    if (showNotifications) setShowNotifications(false); // Close notifications if open
  };

  return (
    <nav className="bg-white border-b border-gray-200 shadow-sm p-4">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between space-y-3 md:space-y-0">
        {/* Left: Inventory Dashboard */}
        <div className="text-2xl font-bold text-gray-800">Inventory User Dashboard</div>

        {/* Center: Search bar */}
        <div className="w-full md:flex-1 md:max-w-lg mx-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Search inventory..."
              className="w-full pl-10 pr-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
              <FiSearch className="h-5 w-5" />
            </span>
          </div>
        </div>

        {/* Right: Notification and Profile Icons */}
        <div className="flex items-center space-x-4">
          {/* Notification Icon */}
          <div className="relative">
            <button className="text-gray-600 hover:text-gray-800" onClick={toggleNotifications}>
              <FiBell className="h-6 w-6" />
            </button>
            {showNotifications && (
              <div className="absolute right-0 mt-2 w-48 bg-white border rounded-lg shadow-lg z-10">
                <div className="p-2">
                  <p className="font-bold">Notifications</p>
                  <p className="text-gray-600">You have 3 new messages.</p>
                  <p className="text-gray-600">Server maintenance at 2 AM.</p>
                </div>
              </div>
            )}
          </div>

          {/* User Profile Icon */}
          <div className="relative">
            <button className="text-gray-600 hover:text-gray-800" onClick={toggleUserMenu}>
              <FiUser className="h-6 w-6" />
            </button>
            {showUserMenu && (
              <div className="absolute right-0 mt-2 w-48 bg-white border rounded-lg shadow-lg z-10">
                <div className="p-2">
                  <p className="font-bold">Username</p>
                  <button className="text-red-500 hover:text-red-700">Logout</button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
