import React, { useEffect, useState } from ‘react’;

const Dashboard = () => {
  const [prediction, setPrediction] = useState(null);
  const [message, setMessage] = useState(’’);

  const addInventory = async () => {
    const res = await fetch(’/api/updateInventory’, {
      method: ‘POST’,
      headers: { ‘Content-Type’: ‘application/json’ },
      body: JSON.stringify({ productId: ‘A101’, quantity: 10 })
    });
    const data = await res.json();
    setMessage(data.message);
  };

  const getStockPrediction = async () => {
    const res = await fetch(’/api/predictStock’);
    const data = await res.json();
    setPrediction(data);
  };

  useEffect(() => {
    getStockPrediction();
  }, []);

  return (
    <div className=”p-4”>
      <h1 className=”text-xl font-bold”>Smart Inventory Dashboard</h1>
      <button onClick={addInventory} className=”bg-blue-500 text-white px-4 py-2 mt-4 rounded”>
        Add Inventory
      </button>
      {message && <p className=”mt-2 text-green-600”>{message}</p>}
      {prediction && (
        <div className=”mt-4”>
          <h2 className=”text-lg font-semibold”>Stock Prediction</h2>
          <p>Product ID: {prediction.productId}</p>
          <p>Estimated Days Left: {prediction.estimatedDaysLeft}</p>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
