import React from 'react';

const ActivityLog = ({ logs }) => (
  <div className="bg-white p-6 rounded-lg shadow-md">
    <h2 className="text-2xl font-semibold mb-4">Activity Log</h2>
    <div className="space-y-3">
      {logs.map((log) => (
        <div key={log.id} className="p-2 bg-gray-50 rounded border border-gray-200">
          <p className="text-lg font-medium">{log.action}</p>
          <p className="text-gray-500">
            {log.item} - by {log.user} at {log.timestamp}
          </p>
        </div>
      ))}
    </div>
  </div>
);

export default ActivityLog;
