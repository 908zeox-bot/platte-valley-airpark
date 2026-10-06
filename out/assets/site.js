const toggle=document.querySelector('.menu-toggle');const nav=document.querySelector('.navlinks');toggle?.addEventListener('click',()=>{const open=toggle.getAttribute('aria-expanded')!=='true';toggle.setAttribute('aria-expanded',String(open));nav.classList.toggle('open',open);toggle.textContent=open?'Close':'Menu'});nav?.addEventListener('click',e=>{if(e.target.closest('a')){nav.classList.remove('open');toggle.setAttribute('aria-expanded','false');toggle.textContent='Menu'}});document.addEventListener('keydown',e=>{if(e.key==='Escape' && nav?.classList.contains('open')){nav.classList.remove('open');toggle.setAttribute('aria-expanded','false');toggle.textContent='Menu';toggle.focus()}});
const filterButtons=[...document.querySelectorAll('[data-filter]')];
filterButtons.forEach(button=>button.addEventListener('click',()=>{filterButtons.forEach(b=>b.setAttribute('aria-pressed',String(b===button)));let count=0;document.querySelectorAll('.gallery-item').forEach(item=>{const show=button.dataset.filter==='all'||item.dataset.group===button.dataset.filter;item.hidden=!show;if(show)count++});const countEl=document.querySelector('#gallery-count');if(countEl)countEl.textContent=count+' photos'}));
const dialog=document.querySelector('.lightbox');let photoIndex=0,activePhotos=[],lastPhoto;
if(dialog){
 const image=document.querySelector('#lightbox-img'),caption=document.querySelector('#lightbox-caption'),count=document.querySelector('#photo-count'),error=document.querySelector('#photo-error');
 const showPhoto=()=>{const photo=activePhotos[photoIndex];error.hidden=true;image.hidden=false;image.alt=photo.dataset.caption;image.src=photo.dataset.large;caption.textContent=photo.dataset.caption;count.textContent=(photoIndex+1)+' / '+activePhotos.length;};
 image.addEventListener('error',()=>{image.hidden=true;error.hidden=false});
 document.querySelectorAll('.photo-button').forEach(button=>button.addEventListener('click',()=>{activePhotos=[...document.querySelectorAll('.gallery-item:not([hidden]) .photo-button')];photoIndex=activePhotos.indexOf(button);lastPhoto=button;showPhoto();dialog.showModal()}));
 const change=delta=>{photoIndex=(photoIndex+delta+activePhotos.length)%activePhotos.length;showPhoto()};
 dialog.querySelector('[data-next]').addEventListener('click',()=>change(1));dialog.querySelector('[data-prev]').addEventListener('click',()=>change(-1));dialog.querySelector('[data-close]').addEventListener('click',()=>dialog.close());
 dialog.addEventListener('close',()=>lastPhoto?.focus());dialog.addEventListener('keydown',event=>{if(event.key==='ArrowRight'){event.preventDefault();change(1)}if(event.key==='ArrowLeft'){event.preventDefault();change(-1)}});
 dialog.addEventListener('click',event=>{if(event.target===dialog){const rect=dialog.getBoundingClientRect();if(event.clientX<rect.left||event.clientX>rect.right||event.clientY<rect.top||event.clientY>rect.bottom)dialog.close()}});
}
const storyForm=document.querySelector('form[name="history-stories"]');storyForm?.addEventListener('submit',event=>{if(storyForm.elements.website.value)event.preventDefault()});
// Keep the existing production analytics tag; review builds do not send traffic.
if(['plattevalleyairpark.com','www.plattevalleyairpark.com'].includes(location.hostname)){
 window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments)}window.gtag=gtag;
 const analytics=document.createElement('script');analytics.async=true;analytics.src='https://www.googletagmanager.com/gtag/js?id=G-DZNGNKV4CJ';document.head.appendChild(analytics);gtag('js',new Date());gtag('config','G-DZNGNKV4CJ',{page_path:location.pathname});
}
