import{S as l}from"./assets/vendor-CWwQENHe.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function s(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(e){if(e.ep)return;e.ep=!0;const o=s(e);fetch(e.href,o)}})();const d="46804414-b7542e140c58663107171b647",u="https://pixabay.com/api/";async function f(n){const t=await fetch(`${u}?key=${d}&q=${encodeURIComponent(n)}&image_type=photo&orientation=horizontal&safesearch=true`);if(!t.ok)throw new Error(`HTTP error! status: ${t.status}`);return(await t.json()).hits}function m(n){const t=document.getElementById("gallery");t.innerHTML=n.map(r=>`
    <div class="photo-card">
      <a href="${r.largeImageURL}">
        <img src="${r.webformatURL}" alt="${r.tags}" title="${r.tags}" />
      </a>
      <div class="info">
        <div class="info-item">
          <b>Likes</b>
          <p>${r.likes}</p>
        </div>
        <div class="info-item">
          <b>Views</b>
          <p>${r.views}</p>
        </div>
        <div class="info-item">
          <b>Comments</b>
          <p>${r.comments}</p>
        </div>
        <div class="info-item">
          <b>Downloads</b>
          <p>${r.downloads}</p>
        </div>
      </div>
    </div>
  `).join(""),new l(".gallery a").refresh()}function a(n){iziToast.error({title:"Error",message:n,position:"topRight"})}function p(){document.getElementById("loader").style.display="block"}function c(){document.getElementById("loader").style.display="none"}function y(){document.getElementById("gallery").innerHTML=""}const h=document.getElementById("search-form");document.getElementById("loader");h.addEventListener("submit",async n=>{n.preventDefault();const t=n.target.elements["search-input"].value.trim();if(!t){a("Please enter a search query");return}try{p(),y();const s=await f(t);c(),s.length===0?a("Sorry, there are no images matching your search query. Please try again!"):m(s)}catch{c(),a("Failed to fetch images. Please try again later.")}});
//# sourceMappingURL=index.js.map
