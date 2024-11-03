import React from 'react';

const RecentTransactions = ({ transactions }) => (
  <div className="bg-white p-4 rounded-lg shadow">
    <h2 className="text-xl font-bold mb-4">Recent Transactions</h2>
    <table className="w-full border-collapse">
      <thead>
        <tr className="bg-gray-100">
          <th className="text-left py-2 px-4 font-medium">Product</th>
          <th className="text-left py-2 px-4 font-medium">Type</th>
          <th className="text-left py-2 px-4 font-medium">Quantity</th>
          <th className="text-left py-2 px-4 font-medium">Date</th>
        </tr>
      </thead>
      <tbody>
        {transactions.map((transaction) => (
          <tr key={transaction.id} className="border-t">
            <td className="py-2 px-4">{transaction.product}</td>
            <td className="py-2 px-4">{transaction.type}</td>
            <td className="py-2 px-4">{transaction.quantity}</td>
            <td className="py-2 px-4">{transaction.date}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

export default RecentTransactions;
