const express = require('express');
const app = express();
const PORT = 5001; // Use different port

app.use(express.json());

const authenticateApiKey = (req, res, next) => {
  const apiKey = req.headers['x-api-key'];
  const expectedApiKey = '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';

  if (!apiKey) {
    return res.status(401).json({ error: 'API key required' });
  }

  if (apiKey !== expectedApiKey) {
    return res.status(403).json({ error: 'Invalid API key' });
  }

  next();
};

app.get('/test', (req, res) => {
  res.json({ message: 'Basic test works' });
});

app.get('/api/test', authenticateApiKey, (req, res) => {
  res.json({ message: 'API key authentication successful' });
});

app.listen(PORT, () => {
  console.log(`Test server running on port ${PORT}`);
});