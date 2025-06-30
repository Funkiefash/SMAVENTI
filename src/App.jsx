import { useState } from 'react';
function App() {
  const [productId, setProductId] = useState('');
  const [quantity, setQuantity] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch('/api/updateInventory', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ productId, quantity })
    });
    const data = await res.json();
    alert(JSON.stringify(data));
  };

  return (
    <div>
      <h1>Smart Inventory</h1>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Product ID"
          value={productId}
          onChange={(e) => setProductId(e.target.value)}
        />
        <input
          placeholder="Quantity"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
          type="number"
        />
        <button type="submit">Update Inventory</button>
      </form>
    </div>
  );
}
