import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

export function renderGallery(images) {
  const gallery = document.getElementById('gallery');
  gallery.innerHTML = images.map(image => `
    <div class="photo-card">
      <a href="${image.largeImageURL}">
        <img src="${image.webformatURL}" alt="${image.tags}" title="${image.tags}" />
      </a>
      <div class="info">
        <div class="info-item">
          <b>Likes</b>
          <p>${image.likes}</p>
        </div>
        <div class="info-item">
          <b>Views</b>
          <p>${image.views}</p>
        </div>
        <div class="info-item">
          <b>Comments</b>
          <p>${image.comments}</p>
        </div>
        <div class="info-item">
          <b>Downloads</b>
          <p>${image.downloads}</p>
        </div>
      </div>
    </div>
  `).join('');

  const lightbox = new SimpleLightbox('.gallery a');
  lightbox.refresh();
}

export function clearGallery() {
  const gallery = document.getElementById('gallery');
  gallery.innerHTML = '';
}