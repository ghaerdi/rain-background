const d=function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const c of r.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&i(c)}).observe(document,{childList:!0,subtree:!0});function n(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerpolicy&&(r.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?r.credentials="include":e.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(e){if(e.ep)return;e.ep=!0;const r=n(e);fetch(e.href,r)}};d();function l(t,o){t(),o&&o--&&l(t,o)}const u=t=>Math.floor(Math.random()*t);function a(t,o,n,i){l(()=>{const e=f(n,i);t.appendChild(e)},o)}function f(t,o){const n=document.createElement("DIV"),i="rgb(106, 106, 155)";n.className=`gout gout-${t}`,n.style.left=`${u(100)}vw`;const e=u(5e3);return setTimeout(()=>n.style.background=i,e+500),n.animate([{transform:`translateY(${100}vh)`}],{duration:1e3*o,iterations:1/0,delay:e}),n}function m(t,o){const n=(o.pageX-window.innerWidth/2)*-.025;t.style.transform=`translate(${n}px)`}const s=document.querySelector("#app");a(s,250,1,1.25);a(s,100,2,1);a(s,50,3,.35);window.addEventListener("mousemove",t=>m(s,t));