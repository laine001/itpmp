export default async function handler(req, res) {
  console.log('Request received:', req.method);

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  let body = req.body;

  if (typeof body === 'string') {
    try {
      body = JSON.parse(body);
    } catch (e) {
      return res.status(400).json({ error: 'Invalid JSON body' });
    }
  }

  const messages = body?.messages || [];

  if (!messages.length) {
    return res.status(400).json({ error: 'Messages are required' });
  }

  const apiKey = process.env.NVIDIA_API_KEY;
  console.log('API Key exists:', process.env, !!apiKey);
  console.log('API Key prefix:', apiKey ? apiKey.substring(0, 10) + '...' : 'EMPTY');

  if (!apiKey) {
    return res.status(500).json({ error: 'NVIDIA_API_KEY environment variable is not set' });
  }

  try {
    console.log('Calling NVIDIA API with', messages.length, 'messages');
    const response = await fetch('https://integrate.api.nvidia.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`,
        'User-Agent': 'Mozilla/5.0'
      },
      body: JSON.stringify({
        // model: 'deepseek-ai/deepseek-v4-flash',
        // model: 'nvidia/nemotron-3-content-safety',
        model: 'moonshotai/kimi-k2-instruct-0905',
        messages,
        temperature: 1,
        top_p: 0.95,
        max_tokens: 16384
      })
    });

    console.log('NVIDIA API response status:', response.status);
    const data = await response.json();
    console.log('NVIDIA API response:', data);
    return res.status(200).json(data);
  } catch (error) {
    console.error('API error:', error);
    return res.status(500).json({ error: error.message });
  }
}