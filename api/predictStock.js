export default async function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const response = await fetch('https://yv08immote.execute-api.us-east-1.amazonaws.com/Prod_StagepredictStock', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    });

    const prediction = await response.json();
    return res.status(200).json(prediction);
  } catch (error) {
    console.error('Prediction API error:', error);
    return res.status(500).json({ error: 'Prediction API call failed' });
  }
}