const API_URL = '/api';

export async function checkHealth() {
  const response = await fetch(`${API_URL}/health`);
  return response.json();
}

export async function getSales() {
  const response = await fetch(`${API_URL}/sales`);
  return response.json();
}

export async function createSale(monto, descripcion) {
  const response = await fetch(`${API_URL}/sales`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ monto, descripcion })
  });
  return response.json();
}
