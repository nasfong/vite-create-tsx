import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top' as const,
    },
    title: {
      display: true,
      text: 'Chart.js Bar Chart',
    },
  },
};

const labels = ['January', 'February', 'March', 'April'];

export const data = {
  labels,
  datasets: [
    {
      label: 'Dataset 1',
      data: [10, 20, 30, 40],
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    },
    {
      label: 'Dataset 2',
      data: [40, 30, 20, 10],
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
    },
  ],
};

export function Chart1() {
  return <Bar options={options} data={data} />;
}
