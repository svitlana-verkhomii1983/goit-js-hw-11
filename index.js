import{S as d,i as a}from"./assets/vendor-BrddEoy-.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function n(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(e){if(e.ep)return;e.ep=!0;const o=n(e);fetch(e.href,o)}})();const u="46804414-b7542e140c58663107171b647",f="https://pixabay.com/api/";async function m(s){const t=await fetch(`${f}?key=${u}&q=${encodeURIComponent(s)}&image_type=photo&orientation=horizontal&safesearch=true`);if(!t.ok)throw new Error(`HTTP error! status: ${t.status}`);return(await t.json()).hits}function y(s){const t=document.getElementById("gallery");t.innerHTML=s.map(r=>`
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
  `).join(""),new d(".gallery a").refresh()}function p(){const s=document.getElementById("gallery");s.innerHTML=""}const l=document.getElementById("search-input"),g=document.getElementById("search-form"),c=document.getElementById("loader");document.getElementById("gallery");l.addEventListener("focus",()=>{l.value=""});g.addEventListener("submit",async s=>{s.preventDefault();const t=l.value.trim();if(!t){a.error({title:"Error",message:"Please enter a search term!"});return}p(),c.style.display="block";try{const n=await m(t);n.length===0?a.warning({title:"No Results",message:"Sorry, there are no images matching your search query. Please try again!"}):y(n)}catch{a.error({title:"Error",message:"An error occurred while fetching images. Please try again later."})}finally{c.style.display="none"}});
//# sourceMappingURL=index.js.map
