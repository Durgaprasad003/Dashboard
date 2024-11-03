import React from 'react';

const Notifications = ({ notifications, toggleNotifications }) => (
  <div className="absolute right-0 mt-2 w-64 bg-white rounded-lg shadow-lg p-4 z-10">
    {notifications.map((notification) => (
      <div key={notification.id} className="mb-2 p-2 border-b">
        <p>{notification.message}</p>
      </div>
    ))}
    <button onClick={toggleNotifications}>Close</button>
  </div>
);

export default Notifications;
