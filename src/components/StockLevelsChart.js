import React from 'react';
import { Bar } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const StockLevelsChart = ({ data }) => (
  <div className="bg-white p-4 rounded-lg shadow" style={{ width: '100%', maxWidth: '800px', height: '400px' }}>
    <h2 className="text-xl font-bold mb-4">Stock Levels</h2>
    <Bar data={data} options={{ maintainAspectRatio: false }} />
  </div>
);

export default StockLevelsChart;
