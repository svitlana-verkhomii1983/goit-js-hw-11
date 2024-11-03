import { fetchImages } from './js/pixabay-api.js';
import { renderGallery, showError, showLoader, hideLoader, clearGallery } from './js/render-functions.js';
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

const form = document.getElementById('search-form');
const loader = document.getElementById('loader');

form.addEventListener('submit', async (event) => {
  event.preventDefault();
  const query = event.target.elements['search-input'].value.trim();

  if (!query) {
    showError('Please enter a search query');
    return;
  }

  try {
    showLoader();
    clearGallery();
    const images = await fetchImages(query);
    hideLoader();
    
    if (images.length === 0) {
      showError('Sorry, there are no images matching your search query. Please try again!');
    } else {
      renderGallery(images);
    }
  } catch (error) {
    hideLoader();
    showError('Failed to fetch images. Please try again later.');
  }
});