// API utility functions for AuraFinance frontend
const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000';
const API_KEY = process.env.NEXT_PUBLIC_API_KEY;

if (!API_KEY) {
  console.error('NEXT_PUBLIC_API_KEY is not defined in environment variables');
}

const apiRequest = async (endpoint: string, options: RequestInit = {}) => {
  const url = `${API_BASE_URL}${endpoint}`;

  const headers = {
    'Content-Type': 'application/json',
    'x-api-key': API_KEY,
    ...options.headers,
  };

  const config: RequestInit = {
    ...options,
    headers,
  };

  const response = await fetch(url, config);

  if (!response.ok) {
    const errorData = await response.json().catch(() => ({ error: 'Unknown error' }));
    throw new Error(errorData.error || `HTTP error! status: ${response.status}`);
  }

  return response.json();
};

export const api = {
  // Plaid API endpoints
  createLinkToken: () => apiRequest('/api/create_link_token', { method: 'POST' }),
  exchangePublicToken: (publicToken: string) => apiRequest('/api/exchange_public_token', {
    method: 'POST',
    body: JSON.stringify({ public_token: publicToken }),
  }),
  getTransactions: (accessToken: string) => apiRequest('/api/transactions', {
    method: 'POST',
    body: JSON.stringify({ access_token: accessToken }),
  }),
};

export default api;