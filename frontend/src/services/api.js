const BASE_URL = 'https://parallelum.com.br/fipe/api/v1';

async function request(path, options = {}) {
  const response = await fetch(`${BASE_URL}${path}`, options);
  if (!response.ok) {
    const message = await response.text();
    throw new Error(message || 'Erro ao consultar API');
  }
  return response.json();
}

export const api = {
  getBrands: () => request('/carros/marcas'),
  getModels: (brandId) => request(`/carros/marcas/${brandId}/modelos`),
  getYears: (brandId, modelId) => request(`/carros/marcas/${brandId}/modelos/${modelId}/anos`),
  getCarPrice: (brandId, modelId, yearId) =>
    request(`/carros/marcas/${brandId}/modelos/${modelId}/anos/${yearId}`),
};

export default api;
