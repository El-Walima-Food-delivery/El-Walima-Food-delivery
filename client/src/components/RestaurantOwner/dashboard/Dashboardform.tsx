import React, { useState, useEffect } from 'react';
import axios from 'axios';

interface DashboardData {
  totalOrders: number;
  pendingOrders: number;
  completedOrders: number;
  revenue: number;
}

const Dashboard1: React.FC = () => {
  const [dashboardData, setDashboardData] = useState<DashboardData | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setLoading(true);
    axios.get<DashboardData>('http://localhost:3000/api/orders/order/dashboard', {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      }
    })
      .then(response => {
        setDashboardData(response.data);
        setLoading(false);
      })
      .catch(error => {
        setError(error.response?.data?.message || 'An error occurred while fetching dashboard data');
        setLoading(false);
        console.error('Error fetching dashboard data:', error);
      });
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!dashboardData) return <div>No data available</div>;

  return (
    <div>
      <h2>Dashboard</h2>
      <p>Total Orders: {dashboardData.totalOrders}</p>
      <p>Pending Orders: {dashboardData.pendingOrders}</p>
      <p>Completed Orders: {dashboardData.completedOrders}</p>
      <p>Total Revenue: ${dashboardData.revenue.toFixed(2)}</p>
    </div>
  );
};

export default Dashboard1;