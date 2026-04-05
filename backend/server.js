const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const { Configuration, PlaidApi, PlaidEnvironments } = require('plaid');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Plaid configuration
const configuration = new Configuration({
  basePath: PlaidEnvironments.sandbox,
  baseOptions: {
    headers: {
      'PLAID-CLIENT-ID': process.env.PLAID_CLIENT_ID,
      'PLAID-SECRET': process.env.PLAID_SECRET,
    },
  },
});

const plaidClient = new PlaidApi(configuration);

// API Key Authentication Middleware
const authenticateApiKey = (req, res, next) => {
  console.log('Auth middleware called for:', req.path);
  const apiKey = req.headers['x-api-key'];
  const expectedApiKey = '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';
  console.log('API Key received:', apiKey ? 'present' : 'missing');
  console.log('Expected API Key:', expectedApiKey);

  if (!apiKey) {
    console.log('No API key provided');
    return res.status(401).json({ error: 'API key required' });
  }

  if (apiKey !== expectedApiKey) {
    console.log('Invalid API key');
    return res.status(403).json({ error: 'Invalid API key' });
  }

  console.log('API key authentication successful');
  next();
};

// Middleware
// app.use(helmet());
// app.use(cors());
app.use(express.json());

// Routes
app.get('/', (req, res) => {
  res.json({ message: 'AuraFinance Backend API' });
});

// Protected API routes
console.log('Defining auth-test route');
app.get('/auth-test', authenticateApiKey, (req, res) => {
  res.json({ message: 'API key authentication successful' });
});
console.log('Auth-test route defined');

app.get('/test', (req, res) => {
  res.json({ message: 'Test route works!' });
});

app.post('/api/create_link_token', authenticateApiKey, async (req, res) => {
  try {
    const response = await plaidClient.linkTokenCreate({
      user: { client_user_id: 'user-id' },
      client_name: 'AuraFinance',
      products: ['transactions'],
      country_codes: ['US'],
      language: 'en',
    });
    res.json({ link_token: response.data.link_token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to create link token' });
  }
});

app.post('/api/exchange_public_token', authenticateApiKey, async (req, res) => {
  try {
    const { public_token } = req.body;
    const response = await plaidClient.itemPublicTokenExchange({ public_token });
    res.json({ access_token: response.data.access_token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to exchange public token' });
  }
});

app.post('/api/transactions', authenticateApiKey, async (req, res) => {
  try {
    const { access_token } = req.body;
    const response = await plaidClient.transactionsGet({
      access_token,
      start_date: '2023-01-01',
      end_date: '2023-12-31',
    });
    res.json({ transactions: response.data.transactions });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to get transactions' });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});