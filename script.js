const toggle=document.querySelector('.menu-toggle');
const nav=document.querySelector('#navlinks');
toggle.addEventListener('click',()=>{const open=nav.classList.toggle('open');toggle.setAttribute('aria-expanded',String(open));});
nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{nav.classList.remove('open');toggle.setAttribute('aria-expanded','false');}));
const backtop=document.querySelector('#backtop');
window.addEventListener('scroll',()=>{backtop.style.display=window.scrollY>400?'block':'none';});
backtop.addEventListener('click',()=>window.scrollTo({top:0,behavior:'smooth'}));
