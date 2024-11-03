import React, { useState } from 'react';
import InventorySummary from '../components/InventorySummary';
import RecentTransactions from '../components/RecentTransactions';
import LowStockAlerts from '../components/LowStockAlerts';
import StockLevelsChart from '../components/StockLevelsChart';
import SalesTrendsChart from '../components/SalesTrendsChart';
import ActivityLog from '../components/ActivityLog';
import Notifications from '../components/Notifications';
import Navbar from '../components/Navbar';
import TopSellingProducts from '../components/TopSellingProducts';

const DashboardPage = () => {
  const [notifications, setNotifications] = useState([]);
  const [showNotifications, setShowNotifications] = useState(false);

  const transactions = [
    { id: 1, product: "Laptop", type: "Sale", quantity: -2, date: "2024-11-01" },
    { id: 2, product: "Mouse", type: "Restock", quantity: 50, date: "2024-10-30" },
    { id: 3, product: "Keyboard", type: "Sale", quantity: -5, date: "2024-10-28" },
    { id: 4, product: "Monitor", type: "Sale", quantity: -3, date: "2024-10-27" },
    { id: 5, product: "USB Cable", type: "Restock", quantity: 20, date: "2024-10-26" },
  ];

  const stockLevelsData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "Stock Levels",
        data: [65, 70, 50, 80, 90, 100],
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1,
      },
    ],
  };

  const lowStockItems = [
    { id: 1, name: "Laptop", quantity: 5, threshold: 10 },
    { id: 2, name: "Mouse", quantity: 3, threshold: 15 },
    { id: 3, name: "Keyboard", quantity: 2, threshold: 8 },
    { id: 4, name: "Monitor", quantity: 1, threshold: 5 },
  ];

  const activityLogs = [
    { id: 1, action: "Updated stock", item: "Laptop", user: "vivek", timestamp: "2024-11-01 10:30" },
    { id: 2, action: "Added new item", item: "Mouse", user: "Nikki", timestamp: "2024-10-30 15:45" },
    { id: 3, action: "Deleted item", item: "Keyboard", user: "Sravani", timestamp: "2024-10-28 09:15" },
    { id: 4, action: "Processed sale", item: "Monitor", user: "Mehfuz", timestamp: "2024-10-27 14:00" },
  ];

  const salesTrendsData = {
    labels: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
    datasets: [
      {
        label: "Sales ($)",
        data: [3000, 2500, 4000, 3500, 6000, 5000, 7000, 8000, 6500, 7200, 7800, 9000],
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 2,
        fill: true,
      },
    ],
  };

  const toggleNotifications = () => setShowNotifications(!showNotifications);

  return (
    <div>
      <Navbar />
      <InventorySummary />
      {/* Flex container for charts */}
      <div className="flex flex-col md:flex-row md:space-x-4 mb-8">
        <div className="flex-1">
          <StockLevelsChart data={stockLevelsData} />
        </div>
        <div className="flex-1">
          <SalesTrendsChart data={salesTrendsData} />
        </div>
      </div>
      <RecentTransactions transactions={transactions} />
      <LowStockAlerts items={lowStockItems} />
      <TopSellingProducts/>
      <ActivityLog logs={activityLogs} />
      {showNotifications && <Notifications notifications={notifications} toggleNotifications={toggleNotifications} />}
    </div>
  );
};

export default DashboardPage;
