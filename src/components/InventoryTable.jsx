import React, { useEffect, useState } from 'react';

export default function InventoryTable() {
  const [inventory, setInventory] = useState([]);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/getInventory`)
      .then((res) => res.json())
      .then(setInventory);
  }, []);

  return (
    <div className="bg-white p-4 shadow rounded">
      <h2 className="text-lg font-semibold mb-2">Current Inventory</h2>
      <table className="w-full table-auto text-left">
        <thead>
          <tr>
            <th>Name</th>
            <th>Quantity</th>
          </tr>
        </thead>
        <tbody>
          {inventory.map((item, i) => (
            <tr key={i} className="border-t">
              <td>{item.name}</td>
              <td>{item.quantity}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
