export default async function handler(req, res) {
  try {
    const response = await fetch('https://yv08immote.execute-api.us-east-1.amazonaws.com/Prod_Stage/generateReport', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    });

    const report = await response.json();
    return res.status(200).json(report);
  } catch (error) {
    console.error('Report generation failed:', error);
    return res.status(500).json({ error: 'Report API call failed' });
  }
}