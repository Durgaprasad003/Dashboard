import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import InventorySummary from './components/InventorySummary';
import RecentTransactions from './components/RecentTransactions';
import LowStockAlerts from './components/LowStockAlerts';
import StockLevelsChart from './components/StockLevelsChart';
import SalesTrendsChart from './components/SalesTrendsChart';
import ActivityLog from './components/ActivityLog';
import TopSellingProducts from './components/TopSellingProducts';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
import Notifications from './components/Notifications';

const App = () => {
  // Example data for charts and lists
  const stockLevelsData = {
    labels: ['Product A', 'Product B', 'Product C'],
    datasets: [
      {
        label: 'Stock Levels',
        data: [50, 20, 80],
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
      },
    ],
  };

  const salesTrendsData = {
    labels: ['January', 'February', 'March', 'April', 'May'],
    datasets: [
      {
        label: 'Sales Trends',
        data: [100, 200, 150, 300, 250],
        fill: false,
        borderColor: 'rgba(75, 192, 192, 1)',
      },
    ],
  };

  const transactions = [
    { id: 1, product: 'Laptop', type: 'Sale', quantity: 2, date: '2024-11-01' },
    { id: 2, product: 'Mouse', type: 'Sale', quantity: 5, date: '2024-11-02' },
    { id: 3, product: 'Keyboard', type: 'Sale', quantity: 1, date: '2024-11-03' },
    { id: 4, product: 'Laptop', type: 'Return', quantity: 1, date: '2024-11-04' },
  ];

  const lowStockItems = [
    { id: 1, name: 'Product A', quantity: 5 },
    { id: 2, name: 'Product B', quantity: 2 },
  ];

  const topSellingProducts = [
    { id: 1, name: 'Laptop', sales: 150 },
    { id: 2, name: 'Mouse', sales: 120 },
    { id: 3, name: 'Keyboard', sales: 100 },
  ];

  const activityLogs = [
    { id: 1, action: "Updated stock", item: "Laptop", user: "vivek", timestamp: "2024-11-01 10:30" },
    { id: 2, action: "Added new item", item: "Mouse", user: "Nikki", timestamp: "2024-10-30 15:45" },
    { id: 3, action: "Deleted item", item: "Keyboard", user: "Sravani", timestamp: "2024-10-28 09:15" },
    { id: 4, action: "Processed sale", item: "Monitor", user: "Mehfuz", timestamp: "2024-10-27 14:00" },
  ];

  // Example placeholders for notifications
  const notifications = [];
  const showNotifications = false; // Replace with your actual state
  const toggleNotifications = () => {}; // Replace with your actual function

  return (
    <Router>
      <div className="flex">
        <Sidebar />
        <div className="flex-grow ml-64 p-4">
          <Navbar />
          <Routes>
            <Route path="/" element={<InventorySummary />} />
            <Route path="reports" element={
              <div className="flex flex-col md:flex-row md:space-x-4 mb-8">
                <div className="flex-1">
                  <StockLevelsChart data={stockLevelsData} />
                </div>
                <div className="flex-1">
                  <SalesTrendsChart data={salesTrendsData} />
                </div>
              </div>
            } />
            <Route path="transactions" element={<RecentTransactions transactions={transactions} />} />
            <Route path="low-stock" element={<LowStockAlerts items={lowStockItems} />} />
            <Route path="top-selling" element={<TopSellingProducts products={topSellingProducts} />} />
            <Route path="activity" element={<ActivityLog logs={activityLogs} />} />
          </Routes>
          {showNotifications && (
            <Notifications notifications={notifications} toggleNotifications={toggleNotifications} />
          )}
        </div>
      </div>
    </Router>
  );
};

export default App;
