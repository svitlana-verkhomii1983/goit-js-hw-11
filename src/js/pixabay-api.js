const API_KEY = '46804414-b7542e140c58663107171b647';
const BASE_URL = 'https://pixabay.com/api/';

export async function fetchImages(query) {
  const response = await fetch(`${BASE_URL}?key=${API_KEY}&q=${encodeURIComponent(query)}&image_type=photo&orientation=horizontal&safesearch=true`);
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  const data = await response.json();
  return data.hits;
}

