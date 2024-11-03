import React from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,  
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

// Register necessary components
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const SalesTrendsChart = ({ data }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow" style={{ width: '100%', maxWidth: '800px', height: '400px' }}>
      <h2 className="text-xl font-bold mb-4">Sales Trends</h2>
      <Line 
        data={data} 
        options={{
          responsive: true,
          maintainAspectRatio: false, // Allow the chart to fill the container
          plugins: {
            legend: {
              position: 'top',
            },
            title: {
              display: true,
              text: 'Sales Trends Over Time',
            },
          },
        }} 
      />
    </div>
  );
};

export default SalesTrendsChart;
