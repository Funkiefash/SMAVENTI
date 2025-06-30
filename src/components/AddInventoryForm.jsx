import React, { useState } from 'react';

export default function AddInventoryForm() {
  const [item, setItem] = useState({ name: '', quantity: 0 });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await fetch(`${import.meta.env.VITE_API_URL}/updateInventory`, {
      method: 'POST',
      body: JSON.stringify(item),
    });
    setItem({ name: '', quantity: 0 });
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-4 shadow rounded space-y-4">
      <h2 className="text-lg font-semibold">Add Inventory Item</h2>
      <input
        type="text"
        placeholder="Item Name"
        value={item.name}
        onChange={(e) => setItem({ ...item, name: e.target.value })}
        className="w-full p-2 border rounded"
        required
      />
      <input
        type="number"
        placeholder="Quantity"
        value={item.quantity}
        onChange={(e) => setItem({ ...item, quantity: Number(e.target.value) })}
        className="w-full p-2 border rounded"
        required
      />
      <button className="bg-blue-600 text-white px-4 py-2 rounded">Add Item</button>
    </form>
  );
}
