'use client';

import React, { useState, useEffect } from 'react';
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale,
  Title,
  Tooltip,
  Legend
);

const chartOptions = (title) => ({
  responsive: true,
  plugins: {
    title: {
      display: !!title,
      text: title,
    },
    legend: {
      labels: {
        color: '#374151',
      },
    },
  },
  scales: {
    x: {
      ticks: { color: '#6B7280' },
      grid: { color: '#E5E7EB' },
    },
    y: {
      ticks: { color: '#6B7280' },
      grid: { color: '#E5E7EB' },
    },
  },
});

const AdminDashboard = () => {
  const [timeRangeOrder, setTimeRangeOrder] = useState('week');
  const [timeRangeRevenue, setTimeRangeRevenue] = useState('month');

  const [orderData, setOrderData] = useState({ labels: [], datasets: [] });
  const [revenueData, setRevenueData] = useState({ labels: [], datasets: [] });

  // Orders
  useEffect(() => {
    const datasets = {
      day: {
        labels: ['Sáng', 'Trưa', 'Chiều', 'Tối'],
        data: [5, 8, 12, 10],
      },
      week: {
        labels: ['T2', 'T3', 'T4', 'T5', 'T6', 'T7', 'CN'],
        data: [20, 35, 28, 40, 50, 45, 30],
      },
      month: {
        labels: ['Tuần 1', 'Tuần 2', 'Tuần 3', 'Tuần 4'],
        data: [120, 150, 130, 180],
      },
    };

    const current = datasets[timeRangeOrder] || { labels: [], data: [] };
    setOrderData({
      labels: current.labels,
      datasets: [
        {
          label: 'Số đơn hàng',
          data: current.data,
          borderColor: '#3B82F6',
          backgroundColor: '#BFDBFE',
          pointRadius: 5,
          pointHoverRadius: 7,
        },
      ],
    });
  }, [timeRangeOrder]);

  // Revenue
  useEffect(() => {
    const rawData = {
      day: {
        labels: ['Sáng', 'Trưa', 'Chiều', 'Tối'],
        data: [2000000, 3500000, 5000000, 4000000],
      },
      week: {
        labels: ['T2', 'T3', 'T4', 'T5', 'T6', 'T7', 'CN'],
        data: [12, 15, 20, 25, 18, 22, 17], // triệu
      },
      month: {
        labels: [
          'Tháng 1',
          'Tháng 2',
          'Tháng 3',
          'Tháng 4',
          'Tháng 5',
          'Tháng 6',
          'Tháng 7',
          'Tháng 8',
          'Tháng 9',
          'Tháng 10',
          'Tháng 11',
          'Tháng 12',
        ],
        data: [
          150000000, 180000000, 200000000, 250000000, 300000000, 320000000,
          350000000, 370000000, 340000000, 360000000, 310000000, 330000000,
        ],
      },
    };

    const current = rawData[timeRangeRevenue] || { labels: [], data: [] };
    const finalData = Array.isArray(current.data)
      ? current.data.map((x) => x * (timeRangeRevenue === 'week' ? 1000000 : 1))
      : [];

    setRevenueData({
      labels: current.labels,
      datasets: [
        {
          label: 'Doanh thu (VND)',
          data: finalData,
          borderColor: '#10B981',
          backgroundColor: '#6EE7B7',
          pointRadius: 5,
          pointHoverRadius: 7,
        },
      ],
    });
  }, [timeRangeRevenue]);

  return (
    <div className="p-6 min-h-screen text-white">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-black">Admin Dashboard</h2>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mb-6">
        <Card
          title="Đơn hàng hôm nay"
          value="58"
          growth="+15%"
          color="bg-gradient-to-tr from-blue-500 to-purple-600"
          icon="🛒"
        />
        <Card
          title="Khách hàng mới"
          value="22"
          growth="+10%"
          color="bg-gradient-to-tr from-green-500 to-emerald-400"
          icon="👤"
        />
        <Card
          title="Sản phẩm bán chạy"
          value="Áo thun Basic"
          growth="+8%"
          color="bg-gradient-to-tr from-pink-500 to-rose-400"
          icon="👕"
        />
        <Card
          title="Doanh thu hôm nay"
          value="12,5tr"
          growth="+6%"
          color="bg-gradient-to-tr from-orange-500 to-yellow-500"
          icon="💰"
        />
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        {/* Orders Chart */}
        <div className="bg-white rounded-2xl p-6 shadow-xl text-slate-800">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h3 className="text-lg font-semibold">Thống kê đơn hàng</h3>
              <p className="text-sm text-slate-500">
                Tăng <span className="text-green-600 font-bold">12%</span> so
                với tuần trước
              </p>
            </div>
            <select
              value={timeRangeOrder}
              onChange={(e) => setTimeRangeOrder(e.target.value)}
              className="text-sm px-3 py-1.5 bg-white border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 text-gray-700"
            >
              <option value="day">Hôm nay</option>
              <option value="week">Tuần</option>
              <option value="month">Tháng</option>
            </select>
          </div>
          <Line data={orderData} options={chartOptions('')} />
        </div>

        {/* Revenue Chart */}
        <div className="bg-white rounded-2xl p-6 shadow-xl text-slate-800">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h3 className="text-lg font-semibold">Doanh thu</h3>
              <p className="text-sm text-slate-500">
                Tăng <span className="text-green-600 font-bold">8%</span> so với
                tháng trước
              </p>
            </div>
            <select
              value={timeRangeRevenue}
              onChange={(e) => setTimeRangeRevenue(e.target.value)}
              className="text-sm px-3 py-1.5 bg-white border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 text-gray-700"
            >
              <option value="day">Hôm nay</option>
              <option value="week">Tuần</option>
              <option value="month">Tháng</option>
            </select>
          </div>
          <Line data={revenueData} options={chartOptions('')} />
        </div>
      </div>
    </div>
  );
};

const Card = ({ title, value, growth, color, icon }) => (
  <div className="bg-white text-slate-800 rounded-2xl p-4 shadow-xl flex items-center">
    <div
      className={`w-12 h-12 flex items-center justify-center rounded-full text-white mr-4 text-xl ${color}`}
    >
      {icon}
    </div>
    <div>
      <p className="text-sm text-slate-500">{title}</p>
      <h4 className="text-xl font-bold">{value}</h4>
      <p
        className={`text-sm font-semibold ${
          growth.includes('-') ? 'text-red-500' : 'text-green-500'
        }`}
      >
        {growth} so với hôm qua
      </p>
    </div>
  </div>
);

export default AdminDashboard;
