import { Brand } from '../models/Brand';

const API_URL = 'http://localhost:8000/api/brands';

// Helper function to handle country header dynamically
const fetchWithCountry = (
  url: string,
  countryCode: string = 'FR',
  options: RequestInit = {}
): Promise<Response> => {
  const headers = options.headers ? new Headers(options.headers) : new Headers();
  headers.set('CF-IPCountry', countryCode);

  return fetch(url, { ...options, headers });
};

// GET: Fetch brands based on the country
export const getBrands = async (countryCode: string = 'FR'): Promise<Brand[]> => {
  const response = await fetchWithCountry(API_URL, countryCode);
  if (!response.ok) {
    throw new Error('Failed to fetch brands');
  }
  return response.json();
};

// POST: Create a new brand
export const createBrand = async (data: Omit<Brand, 'brand_id'>): Promise<Brand> => {
  const response = await fetchWithCountry(API_URL, 'FR', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
  if (!response.ok) {
    throw new Error('Failed to create brand');
  }
  return response.json();
};

// PUT: Update an existing brand
export const updateBrand = async (id: number, data: Partial<Omit<Brand, 'brand_id'>>): Promise<Brand> => {
  const response = await fetchWithCountry(`${API_URL}/${id}`, 'FR', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
  if (!response.ok) {
    throw new Error('Failed to update brand');
  }
  return response.json();
};

// DELETE: Delete a brand
export const deleteBrand = async (id: number): Promise<void> => {
  const response = await fetchWithCountry(`${API_URL}/${id}`, 'FR', {
    method: 'DELETE',
  });
  if (!response.ok) {
    throw new Error('Failed to delete brand');
  }
};
