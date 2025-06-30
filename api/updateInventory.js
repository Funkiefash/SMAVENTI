export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { productId, quantity } = req.body;

  try {
    const response = await fetch('https://yv08immote.execute-api.us-east-1.amazonaws.com/Prod_Stage/updateInventory', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ productId, quantity })
    });

    const result = await response.json();
    return res.status(200).json(result);
  } catch (error) {
    console.error('Error calling AWS API:', error);
    return res.status(500).json({ error: 'Failed to call AWS API Gateway' });
  }
}