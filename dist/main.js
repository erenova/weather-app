(()=>{"use strict";var e={d:(n,t)=>{for(var o in t)e.o(t,o)&&!e.o(n,o)&&Object.defineProperty(n,o,{enumerable:!0,get:t[o]})},o:(e,n)=>Object.prototype.hasOwnProperty.call(e,n),r:e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}},n={};function t(){document.querySelector("#notification-tab").childNodes.forEach((e=>{e.addEventListener("click",(()=>{var n;null==e||null===(n=e.classList)||void 0===n||n.add("-translate-x-[120%]"),setTimeout((()=>{e.remove()}),300)})),setTimeout((()=>{var n;null==e||null===(n=e.classList)||void 0===n||n.add("-translate-x-[120%]"),setTimeout((()=>{e.remove()}),300)}),2500)}))}function o(e){const n=(new Date).getTime(),o='    <div\n      id="'.concat(n,'"\n      class="-translate-x-[120%] transition-transform fixed top-6 left-4 w-60 h-10 rounded-lg flex items-center bg-red-600 shadow shadow-black text-white p-8 font-bold z-50"\n    >\n      <span class="drop-shadow" data-language-text="alert" data-alert="">\n        ').concat(e,"\n      </span>\n    </div>");document.getElementById("notification-tab").innerHTML+=o;const a=document.getElementById(n);requestAnimationFrame((()=>{a.classList.remove("-translate-x-[120%]"),setTimeout((()=>{a.classList.add("-translate-x-[120%]"),setTimeout((()=>{a.remove()}),300)}),3500)})),t()}function a(e){const n=(new Date).getTime(),o='<div\n      id="'.concat(n,'"\n      class="-translate-x-[120%] transition-transform fixed top-6 left-4 w-60 h-10 rounded-lg flex items-center bg-green-600 shadow shadow-black text-white p-8 font-bold z-50"\n    >\n      <span class="" data-language-text="success" data-success="">').concat(e,"</span></div>");document.getElementById("notification-tab").innerHTML+=o;const a=document.getElementById(n);requestAnimationFrame((()=>{a.classList.remove("-translate-x-[120%]"),setTimeout((()=>{a.classList.add("-translate-x-[120%]"),setTimeout((()=>{a.remove()}),300)}),3500)})),t()}e.r(n),e.d(n,{V:()=>r,H:()=>u,modalDark:()=>d});const i="http://api.weatherapi.com/v1/forecast.json?key=".concat("6325d8e01df64fdd83b53822240302","&days=3").concat("&aqi=no&lang=tr"),c=document.getElementById("language-selection-desktop"),l=document.getElementById("language-selection-mobile");function s(){o("The Feature Is Under Development"),c.selectedIndex=0,l.selectedIndex=0}c.addEventListener("change",s),l.addEventListener("change",s);const d=document.getElementById("modal-dark");function r(){d.classList.remove("invisible")}function u(){d.classList.add("invisible")}const m=document.getElementById("settings-button-desktop"),h=document.getElementById("menu-desktop"),{modalDark:y}=n;m.addEventListener("click",(function(){h.classList.remove("invisible"),h.classList.remove("opacity-0"),r()})),y.addEventListener("click",(function(){h.classList.add("invisible"),h.classList.add("opacity-0"),u()}));const g=document.getElementById("menu-mobile"),w=document.getElementById("close-menu-mobile"),v=document.getElementById("settings-nav-mobile"),f=document.getElementById("search-menu-mobile"),p=document.getElementById("search-nav-mobile"),L=document.getElementById("search-input-mobile"),{modalDark:x}=n;function E(){g.classList.add("translate-x-full"),u()}function C(){f.classList.add("invisible"),f.classList.add("opacity-0"),u(),L.blur()}v.addEventListener("click",(function(){g.classList.remove("translate-x-full"),r()})),w.addEventListener("click",E),x.addEventListener("click",E),p.addEventListener("click",(function(){f.classList.remove("invisible"),f.classList.remove("opacity-0"),r(),L.focus()})),x.addEventListener("click",C);const k={dark:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#f7fafc" class="h-10 dark:fill-[#2d3748]">\n  <path\n    d="M17.75,4.09L15.22,6.03L16.13,9.09L13.5,7.28L10.87,9.09L11.78,6.03L9.25,4.09L12.44,4L13.5,1L14.56,4L17.75,4.09M21.25,11L19.61,12.25L20.2,14.23L18.5,13.06L16.8,14.23L17.39,12.25L15.75,11L17.81,10.95L18.5,9L19.19,10.95L21.25,11M18.97,15.95C19.8,15.87 20.69,17.05 20.16,17.8C19.84,18.25 19.5,18.67 19.08,19.07C15.17,23 8.84,23 4.94,19.07C1.03,15.17 1.03,8.83 4.94,4.93C5.34,4.53 5.76,4.17 6.21,3.85C6.96,3.32 8.14,4.21 8.06,5.04C7.79,7.9 8.75,10.87 10.95,13.06C13.14,15.26 16.1,16.22 18.97,15.95M17.33,17.97C14.5,17.81 11.7,16.64 9.53,14.5C7.36,12.31 6.2,9.5 6.04,6.68C3.23,9.82 3.34,14.64 6.35,17.66C9.37,20.67 14.19,20.78 17.33,17.97Z"\n  />\n</svg>\n',light:'<svg\n  xmlns="http://www.w3.org/2000/svg"\n  viewBox="0 0 24 24"\n  class="h-10"\n\n  fill="none"\n  stroke="#eab308"\n  stroke-width="1.5"\n  stroke-linecap="round"\n  stroke-linejoin="round"\n>\n  <circle cx="12" cy="12" r="5"></circle>\n  <line x1="12" y1="1" x2="12" y2="3"></line>\n  <line x1="12" y1="21" x2="12" y2="23"></line>\n  <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>\n  <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>\n  <line x1="1" y1="12" x2="3" y2="12"></line>\n  <line x1="21" y1="12" x2="23" y2="12"></line>\n  <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>\n  <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>\n</svg>\n',clear:'<svg class="drop-shadow" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" >\n  <path\n    d="M160 136c0-30.62 4.51-61.61 16-88C99.57 81.27 48 159.32 48 248c0 119.29 96.71 216 216 216 88.68 0 166.73-51.57 200-128-26.39 11.49-57.38 16-88 16-119.29 0-216-96.71-216-216z"\n    fill="none"\n    stroke="#0369a1"\n    stroke-linecap="round"\n    stroke-linejoin="round"\n    stroke-width="32"\n  />\n</svg>\n',cloudy:'<svg class="drop-shadow"\n  xmlns="http://www.w3.org/2000/svg"\n  viewBox="0 0 24 24"\n  fill="#cbd5e1"\n  \n  \n>\n  <path\n    d="M6,19A5,5 0 0,1 1,14A5,5 0 0,1 6,9C7,6.65 9.3,5 12,5C15.43,5 18.24,7.66 18.5,11.03L19,11A4,4 0 0,1 23,15A4,4 0 0,1 19,19H6M19,13H17V12A5,5 0 0,0 12,7C9.5,7 7.45,8.82 7.06,11.19C6.73,11.07 6.37,11 6,11A3,3 0 0,0 3,14A3,3 0 0,0 6,17H19A2,2 0 0,0 21,15A2,2 0 0,0 19,13Z"\n  />\n</svg>\n',sunny:'<svg class="drop-shadow"\n  xmlns="http://www.w3.org/2000/svg"\n  \n  \n  viewBox="0 0 24 24"\n  fill="none"\n  stroke="#eab308"\n  stroke-width="1.5"\n  stroke-linecap="round"\n  stroke-linejoin="round"\n>\n  <circle cx="12" cy="12" r="5"></circle>\n  <line x1="12" y1="1" x2="12" y2="3"></line>\n  <line x1="12" y1="21" x2="12" y2="23"></line>\n  <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>\n  <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>\n  <line x1="1" y1="12" x2="3" y2="12"></line>\n  <line x1="21" y1="12" x2="23" y2="12"></line>\n  <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>\n  <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>\n</svg>\n',snowy:'<svg class="drop-shadow" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">\n  \x3c!-- Path for the cloud --\x3e\n  <path\n    d="M6,14A1,1 0 0,1 7,15A1,1 0 0,1 6,16A5,5 0 0,1 1,11A5,5 0 0,1 6,6C7,3.65 9.3,2 12,2C15.43,2 18.24,4.66 18.5,8.03L19,8A4,4 0 0,1 23,12A4,4 0 0,1 19,16H18A1,1 0 0,1 17,15A1,1 0 0,1 18,14H19A2,2 0 0,0 21,12A2,2 0 0,0 19,10H17V9A5,5 0 0,0 12,4C9.5,4 7.45,5.82 7.06,8.19C6.73,8.07 6.37,8 6,8A3,3 0 0,0 3,11A3,3 0 0,0 6,14"\n    fill="#cbd5e1"\n  />\n  \x3c!-- Path for the star --\x3e\n  <path\n    d="M7.88,18.07L10.07,17.5L8.46,15.88C8.07,15.5 8.07,14.86 8.46,14.46C8.85,14.07 9.5,14.07 9.88,14.46L11.5,16.07L12.07,13.88C12.21,13.34 12.76,13.03 13.29,13.17C13.83,13.31 14.14,13.86 14,14.4L13.41,16.59L15.6,16C16.14,15.86 16.69,16.17 16.83,16.71C16.97,17.24 16.66,17.79 16.12,17.93L13.93,18.5L15.54,20.12C15.93,20.5 15.93,21.15 15.54,21.54C15.15,21.93 14.5,21.93 14.12,21.54L12.5,19.93L11.93,22.12C11.79,22.66 11.24,22.97 10.71,22.83C10.17,22.69 9.86,22.14 10,21.6L10.59,19.41L8.4,20C7.86,20.14 7.31,19.83 7.17,19.29C7.03,18.76 7.34,18.21 7.88,18.07Z"\n    fill="#a5f3fc"\n  />\n</svg>\n',snowyRainy:'<svg class="drop-shadow"\n  xmlns="http://www.w3.org/2000/svg"\n  viewBox="0 0 24 24"\n  \n  \n>\n  <path\n    d="M 18.5 18.67 m -17.5 -7.67 A 5 5 0 0 1 6 6 C 7 3.65 9.3 2 12 2 C 15.43 2 18.24 4.66 18.5 8.03 L 19 8 A 4 4 0 0 1 23 12 A 4 4 0 0 1 19 16 A 1 1 0 0 1 18 15 A 1 1 0 0 1 19 14 A 2 2 0 0 0 21 12 A 2 2 0 0 0 19 10 H 17 V 9 A 5 5 0 0 0 12 4 C 9.5 4 7.45 5.82 7.06 8.19 C 6.73 8.07 6.37 8 6 8 A 3 3 0 0 0 3 11 C 3 11.85 3.35 12.61 3.91 13.16 C 4.27 13.55 4.26 14.16 3.88 14.54 C 3.5 14.93 2.85 14.93 2.47 14.54 C 1.56 13.63 1 12.38 1 11"\n    fill="#cbd5e1"\n  />\n  <path\n    d="M 18.5 18.67 m -14.5 -1.31 C 3.86 16.82 4.18 16.25 4.73 16.11 L 7 15.5 L 5.33 13.86 C 4.93 13.46 4.93 12.81 5.33 12.4 C 5.73 12 6.4 12 6.79 12.4 L 8.45 14.05 L 9.04 11.8 C 9.18 11.24 9.75 10.92 10.29 11.07 C 10.85 11.21 11.17 11.78 11 12.33 L 10.42 14.58 L 12.67 14 C 13.22 13.83 13.79 14.15 13.93 14.71 C 14.08 15.25 13.76 15.82 13.2 15.96 L 10.95 16.55 L 12.6 18.21 C 13 18.6 13 19.27 12.6 19.67 C 12.2 20.07 11.54 20.07 11.15 19.67 L 9.5 18 L 8.89 20.27 C 8.75 20.83 8.18 21.14 7.64 21 C 7.08 20.86 6.77 20.29 6.91 19.74 L 7.5 17.5 L 5.26 18.09 C 4.71 18.23 4.14 17.92 4 17.36 Z"\n    fill="#a5f3fc"\n  />\n  <path\n    d="M 18.5 18.67 c 0 1.29 -1 2.33 -2.25 2.33 C 15 21 14 19.96 14 18.67 C 14 17.12 16.25 14.5 16.25 14.5 C 16.25 14.5 18.5 17.12 18.5 18.67"\n    fill="#0ea5e9"\n  />\n</svg>\n',partlyCloudyNight:'<svg class="drop-shadow"\n  xmlns="http://www.w3.org/2000/svg"\n  viewBox="0 0 512 512"\n  \n  \n>\n  <path\n    d="M388.31 272c47.75 0 89.77-27.77 107.69-68.92-14.21 6.18-30.9 8.61-47.38 8.61A116.31 116.31 0 01332.31 95.38c0-16.48 2.43-33.17 8.61-47.38C299.77 65.92 272 107.94 272 155.69a116.31 116.31 0 003.44 28.18"\n    fill="none"\n    stroke="#0369a1"\n    stroke-linecap="round"\n    stroke-linejoin="round"\n    stroke-width="32"\n  />\n  <path\n    d="M90.61 306.85A16.07 16.07 0 00104 293.6C116.09 220.17 169.63 176 232 176c57.93 0 96.62 37.75 112.2 77.74a15.84 15.84 0 0012.2 9.87c50 8.15 91.6 41.54 91.6 99.59 0 59.4-48.6 100.8-108 100.8H106c-49.5 0-90-24.7-90-79.2 0-48.47 38.67-72.22 74.61-77.95z"\n    fill="none"\n    stroke="#cbd5e1"\n    stroke-linejoin="round"\n    stroke-width="32"\n  />\n</svg>\n',partlyCloudyDay:'<svg class="drop-shadow"\n  xmlns="http://www.w3.org/2000/svg"\n  viewBox="0 0 512 512"\n  \n  \n>\n  <path\n    d="M384.8 271.4a80 80 0 10-123.55-92M464 208h32M336 48v32M222.86 94.86l22.63 22.63M449.14 94.86l-22.63 22.63"\n    fill="none"\n    stroke="#eab308"\n    stroke-linecap="round"\n    stroke-linejoin="round"\n    stroke-width="32"\n  />\n  <path\n    d="M90.61 306.85A16.07 16.07 0 00104 293.6C116.09 220.17 169.63 176 232 176c57.93 0 96.62 37.75 112.2 77.74a15.84 15.84 0 0012.2 9.87c50 8.15 91.6 41.54 91.6 99.59 0 59.4-48.6 100.8-108 100.8H106c-49.5 0-90-24.7-90-79.2 0-48.47 38.67-72.22 74.61-77.95z"\n    fill="none"\n    stroke="#cbd5e1"\n    stroke-linejoin="round"\n    stroke-width="32"\n  />\n</svg>\n',foggy:'<svg class="drop-shadow"\n  xmlns="http://www.w3.org/2000/svg"\n  viewBox="0 0 24 24"\n  \n  \n>\n  <path\n    d="M3,15H13A1,1 0 0,1 14,16A1,1 0 0,1 13,17H3A1,1 0 0,1 2,16A1,1 0 0,1 3,15M16,15H21A1,1 0 0,1 22,16A1,1 0 0,1 21,17H16A1,1 0 0,1 15,16A1,1 0 0,1 16,15M1,12A5,5 0 0,1 6,7C7,4.65 9.3,3 12,3C15.43,3 18.24,5.66 18.5,9.03L19,9C21.19,9 22.97,10.76 23,13H21A2,2 0 0,0 19,11H17V10A5,5 0 0,0 12,5C9.5,5 7.45,6.82 7.06,9.19C6.73,9.07 6.37,9 6,9A3,3 0 0,0 3,12C3,12.35 3.06,12.69 3.17,13H1.1L1,12M3,19H5A1,1 0 0,1 6,20A1,1 0 0,1 5,21H3A1,1 0 0,1 2,20A1,1 0 0,1 3,19M8,19H21A1,1 0 0,1 22,20A1,1 0 0,1 21,21H8A1,1 0 0,1 7,20A1,1 0 0,1 8,19Z"\n    fill="#cbd5e1"\n  />\n</svg>\n',rainy:'<svg class="drop-shadow"\n  xmlns="http://www.w3.org/2000/svg"\n  viewBox="0 0 512 512"\n  \n  \n>\n  <path\n    d="M114.61 162.85A16.07 16.07 0 00128 149.6C140.09 76.17 193.63 32 256 32c57.93 0 96.62 37.75 112.2 77.74a15.84 15.84 0 0012.2 9.87c50 8.15 91.6 41.54 91.6 99.59 0 59.4-48.6 100.8-108 100.8H130c-49.5 0-90-24.7-90-79.2 0-48.47 38.67-72.22 74.61-77.95z"\n    fill="none"\n    stroke="#cbd5e1"\n    stroke-linejoin="round"\n    stroke-width="32"\n  />\n  <path\n    stroke="#0ea5e9"\n    stroke-linecap="round"\n    stroke-linejoin="round"\n    stroke-width="32"\n    d="M144 384l-32 48M224 384l-64 96M304 384l-32 48M384 384l-64 96"\n  />\n</svg>\n',rainyLightning:'<svg class="drop-shadow"\n  xmlns="http://www.w3.org/2000/svg"\n  viewBox="0 0 512 512"\n  \n  \n>\n  <path\n    fill="none"\n    stroke="#fde047"\n    stroke-linecap="round"\n    stroke-linejoin="round"\n    stroke-width="32"\n    d="M 120 352 M 208 304 l -16 96 h 48 v 80 l 80 -112 h -48 l 16 -64 z"\n  />\n  <path\n    fill="#0ea5e9"\n    stroke="#0ea5e9"\n    stroke-linecap="round"\n    stroke-linejoin="round"\n    stroke-width="32"\n    d="M 120 352 l -24 48 M 136 432 l -16 32 M 400 352 l -24 48 M 416 432 l -16 32"\n  />\n  <path\n    fill="none"\n    stroke="#cbd5e1"\n    stroke-linecap="round"\n    stroke-linejoin="round"\n    stroke-width="32"\n    d="M 120 352 m 284.33 -199.11 H 392.2 C 384.71 84.85 326.14 32 256 32 a 136.39 136.39 0 0 0 -128.63 90.67 h -4.57 c -49.94 0 -90.8 40.8 -90.8 90.66 h 0 C 32 263.2 72.86 304 122.8 304 h 281.53 C 446 304 480 270 480 228.44 h 0 c 0 -41.55 -34 -75.55 -75.67 -75.55 z"\n  />\n</svg>\n',heavySnow:'<svg class="drop-shadow"\n  xmlns="http://www.w3.org/2000/svg"\n  viewBox="0 0 24 24"\n  \n>\n  <path\n    d="M 4 16.36 m -3 -6.36 A 5 5 0 0 1 6 5 C 7 2.65 9.3 1 12 1 C 15.43 1 18.24 3.66 18.5 7.03 L 19 7 A 4 4 0 0 1 23 11 A 4 4 0 0 1 19 15 A 1 1 0 0 1 18 14 A 1 1 0 0 1 19 13 A 2 2 0 0 0 21 11 A 2 2 0 0 0 19 9 H 17 V 8 A 5 5 0 0 0 12 3 C 9.5 3 7.45 4.82 7.06 7.19 C 6.73 7.07 6.37 7 6 7 A 3 3 0 0 0 3 10 C 3 10.85 3.35 11.61 3.91 12.16 C 4.27 12.55 4.26 13.16 3.88 13.54 C 3.5 13.93 2.85 13.93 2.47 13.54 C 1.56 12.63 1 11.38 1 10 z"\n    fill="#cbd5e1"\n  />\n  <path\n    d="M 4 16.36 C 3.86 15.82 4.18 15.25 4.73 15.11 L 7 14.5 L 5.33 12.86 C 4.93 12.46 4.93 11.81 5.33 11.4 C 5.73 11 6.4 11 6.79 11.4 L 8.45 13.05 L 9.04 10.8 C 9.18 10.24 9.75 9.92 10.29 10.07 C 10.85 10.21 11.17 10.78 11 11.33 L 10.42 13.58 L 12.67 13 C 13.22 12.83 13.79 13.15 13.93 13.71 C 14.08 14.25 13.76 14.82 13.2 14.96 L 10.95 15.55 L 12.6 17.21 C 13 17.6 13 18.27 12.6 18.67 C 12.2 19.07 11.54 19.07 11.15 18.67 L 9.5 17 L 8.89 19.27 C 8.75 19.83 8.18 20.14 7.64 20 C 7.08 19.86 6.77 19.29 6.91 18.74 L 7.5 16.5 L 5.26 17.09 C 4.71 17.23 4.14 16.92 4 16.36 M 14.03 20.43 C 14.13 20.82 14.5 21.04 14.91 20.94 L 16.5 20.5 L 16.06 22.09 C 15.96 22.5 16.18 22.87 16.57 22.97 C 16.95 23.08 17.35 22.85 17.45 22.46 L 17.86 20.89 L 19.03 22.05 C 19.3 22.33 19.77 22.33 20.05 22.05 C 20.33 21.77 20.33 21.3 20.05 21.03 L 18.89 19.86 L 20.46 19.45 C 20.85 19.35 21.08 18.95 20.97 18.57 C 20.87 18.18 20.5 17.96 20.09 18.06 L 18.5 18.5 L 18.94 16.91 C 19.04 16.5 18.82 16.13 18.43 16.03 C 18.05 15.92 17.65 16.15 17.55 16.54 L 17.14 18.11 L 15.97 16.95 C 15.7 16.67 15.23 16.67 14.95 16.95 C 14.67 17.24 14.67 17.7 14.95 17.97 L 16.11 19.14 L 14.54 19.55 C 14.15 19.65 13.92 20.05 14.03 20.43 Z"\n    fill="#a5f3fc"\n  />\n</svg>\n'};function b(e,n){if(!n){if(1e3===e)return k.clear;if(1003===e||1006===e)return k.partlyCloudyNight}switch(e){case 1087:case 1273:case 1276:return k.rainyLightning;case 1114:case 1117:case 1222:case 1225:case 1237:case 1264:case 1279:case 1282:return k.heavySnow;case 1210:case 1213:case 1216:case 1219:case 1255:case 1258:case 1261:return k.snowy;case 1e3:return k.sunny;case 1006:case 1009:return k.cloudy;case 1003:return k.partlyCloudyDay;case 1069:case 1204:case 1207:case 1249:case 1252:return k.snowyRainy;case 1030:case 1135:case 1147:return k.foggy;case 1072:case 1063:case 1150:case 1153:case 1168:case 1180:case 1183:case 1186:case 1189:case 1192:case 1195:case 1198:case 1201:case 1240:case 1243:case 1246:case 1171:return k.rainy;default:return null}}let A={};function I(e){let{day:n,hour:t}=e;const o=A.forecastDays;return"today"===n&&t?o.today.hour[t]:"tomorrow"===n&&t?o.tomorrow.hour[t]:"other"===n&&t?o.other.hour[t]:o[n].hour}const{modalDark:M}=n,B=document.getElementById("page-loading"),T=document.getElementById("current-heat"),H=document.getElementById("current-condition"),S=document.getElementById("current-icon"),D=document.getElementById("current-hour"),q=document.getElementById("current-second"),j=document.getElementById("feels-like-degree"),_=document.getElementById("city-name"),Z=document.getElementById("country-name"),z=document.getElementById("expand-modal");function P(e){return document.querySelector('[data-active-modal="'.concat(e,'"]'))}function N(){z.classList.remove("invisible")}function O(e){let{hourElement:n,cloudElement:t,humidityElement:o,windElement:a,iconElement:i,conditionElement:c}=e;P("hour").innerText=n,P("cloud").innerText=t,P("humidity").innerText=o,P("wind").innerText=a,P("icon").innerHTML=i,P("condition").innerText=c}function V(e){let{hourElement:n,cloudElement:t,humidityElement:o,windElement:a,iconElement:i,conditionElement:c}=e;N(),r(),O({hourElement:n,cloudElement:t,humidityElement:o,windElement:a,iconElement:i,conditionElement:c})}function F(e,n){D.innerText=e,q.innerText=n}function R(e){let{heat:n,condition:t,iconCode:o,isDay:a,feelsLike:i,city:c,country:l}=e;var s;s=n,T.innerText=s,function(e){H.innerText=e}(t),function(e,n){S.innerHTML=b(e,n)}(o,a),function(e){j.innerText=e}(i),function(e){_.innerText=e}(c),function(e){Z.innerText=e}(l)}function U(e){let n=Math.floor(500*Math.random())+1e3;return e&&(n=1e3),B.classList.remove("invisible"),setTimeout((()=>{B.classList.add("invisible")}),n),n}document.querySelector('[data-modal-box="main"]').addEventListener("click",(function(){N(),r(),O(function(){const{misc:e,weatherContent:n}=A;return{hourElement:J(),cloudElement:e.cloud,humidityElement:e.humidity,windElement:e.wind,iconElement:b(n.code,n.isDay),conditionElement:n.text}}())})),M.addEventListener("click",(function(){z.classList.add("invisible")}));const W={timeZone:"Europe/Istanbul",intervalId:""};function G(e){var n;clearInterval(W.intervalId),W.timeZone=e,n=F,W.intervalId=setInterval((()=>{let[e,t]=[(new Date).toLocaleString("tr",{timeZone:W.timeZone}).slice(11,16),(new Date).toLocaleString("tr",{timeZone:W.timeZone}).slice(16)];n(e,t)}),1e3)}function J(e){let n=(new Date).toLocaleString("tr",{timeZone:W.timeZone}).slice(11,13);return e?Number(n):n}const K=document.getElementById("search-form-mobile"),Q=document.getElementById("search-input-mobile"),X=document.getElementById("search-button-mobile"),Y=document.getElementById("search-form-desktop"),$=document.getElementById("search-input-desktop"),ee=document.getElementById("search-button-desktop");function ne(e){const n=e.value.trim();return"string"==typeof n&&n.length>0&&(e.value=n,!0)}function te(e){const n=e.toLocaleString(),t=n.indexOf(".");return-1!==t?n.slice(0,t):n}async function oe(e){const n=await async function(e){try{var n;const t=null!==(n=await fetch("".concat(i,"&q=").concat(encodeURIComponent(e))))&&void 0!==n?n:null;if(null==t||!t.ok)return 400===t.status?console.log("Bad Request: The request was unacceptable."):console.log("HTTP Error: ".concat(t.status)),o("Please enter a valid city name."),null;const a=await t.json();if(!a.current||!a.location||!a.forecast)return 1006===a.error.code&&console.log("Please Enter Valid City Name!"),null;const{location:c,current:l,forecast:s}=a,{country:d,name:r,tz_id:u}=c,{condition:m,feelslike_c:h,feelslike_f:y,temp_c:g,temp_f:w,humidity:v,cloud:f,wind_kph:p,is_day:L}=l,{text:x,code:E}=m,C={naming:{countryName:d,cityName:r},currentTemp:{celsius:g,fahrenheit:w},feelsLike:{celsius:h,fahrenheit:y},forecastDays:{today:s.forecastday[0],tomorrow:s.forecastday[1],other:s.forecastday[2]},weatherContent:{text:x,code:E,isDay:L},misc:{humidity:v,cloud:f,wind:p,timezone:u}};return console.log(C),C}catch(e){return console.log("callWeatherApi function has problem."),console.error(e),null}}(e);if(!n)return;const t=te(n.currentTemp.celsius),a=te(n.feelsLike.celsius);G(n.misc.timezone),A=n,function(e){document.querySelectorAll("[data-forecast]").forEach((e=>{e.classList.add("lg:block")})),document.getElementById("back-page-desktop").classList.add("invisible"),document.getElementById("back-page-mobile").classList.add("invisible"),document.getElementById("hours-info").classList.remove("pb-20"),document.querySelectorAll("[data-box]").forEach((e=>{e.remove()}));let n=J(!0);n++;let t=n+9;const o=24-t;t>24&&(t=24);let a=I({day:"today"}),i=0;for(24===n&&(a=I({day:"tomorrow"}));n<t;n++){const e=a[n];let t="border-2";1!==i&&4!==i&&7!==i||(t="border-t-2 border-b-2",i++);const o='<button\n          type="button"\n          data-box="'.concat(n,'"\n          class="').concat(t,' border-[#2d3748] dark:border-white rounded-sm grid grid-cols-2 grid-rows-2 place-items-center lg:pr-5 lg:pl-5 lg:pt-1 lg:pb-1 shadow-sm active:shadow active:shadow-black shadow-black lg:max-h-40 lg:w-[65%]"\n        >\n          <div class="drop-shadow">').concat(te(e.temp_c),'<span data-temp-sign="°C">°C</span></div>\n          <div class="w-10 drop-shadow">\n            ').concat(b(e.condition.code,e.is_day),'\n          </div>\n          <div\n            class="col-start-1 col-end-3 lg:col-end-2 lg:row-start-1 lg:row-end-2 mb row-start-2 row-end-3 pb"\n          >\n            <span class="drop-shadow">').concat(e.time.slice(11),'</span>\n          </div>\n          <div class="hidden lg:block lg:text-center">\n            <span data-condition-text>').concat(e.condition.text,"</span>\n          </div>\n        </button>");ie.innerHTML+=o}if(document.querySelectorAll("[data-box]").forEach((e=>{e.addEventListener("click",(()=>{const n=I({day:"today",hour:e.dataset.box});console.log(n),V({hourElement:n.time.slice(11,13),cloudElement:n.cloud,humidityElement:n.humidity,windElement:n.wind_kph,iconElement:b(n.condition.code,n.is_day),conditionElement:n.condition.text})}))})),o<0){const e=I({day:"tomorrow"});for(let n=0;n<Math.abs(o);n++){const t=e[n];let o="border-2";1!==i&&4!==i&&7!==i||(o="border-t-2 border-b-2",i++);const a='<button\n          type="button"\n          data-box="'.concat(n,'"\n          data-tomorrow="').concat(n,'"\n          class="').concat(o,' border-[#2d3748] dark:border-white rounded-sm grid grid-cols-2 grid-rows-2 place-items-center lg:pr-5 lg:pl-5 lg:pt-1 lg:pb-1 shadow-sm active:shadow active:shadow-black shadow-black lg:max-h-40 lg:w-[65%]"\n        >\n          <div class="drop-shadow">').concat(te(t.temp_c),'<span data-temp-sign="°C">°C</span></div>\n          <div class="w-10 drop-shadow">\n            ').concat(b(t.condition.code,t.is_day),'\n          </div>\n          <div\n            class="col-start-1 col-end-3 lg:col-end-2 lg:row-start-1 lg:row-end-2 mb row-start-2 row-end-3 pb"\n          >\n            <span class="drop-shadow">').concat(t.time.slice(11),'</span>\n          </div>\n          <div class="hidden lg:block lg:text-center">\n            <span data-condition-text>').concat(t.condition.text,"</span>\n          </div>\n        </button>");ie.innerHTML+=a,document.querySelectorAll("[data-tomorrow]").forEach((e=>{e.addEventListener("click",(()=>{const n=I({day:"tomorrow",hour:e.dataset.tomorrow});V({hourElement:n.time.slice(11,13),cloudElement:n.cloud,humidityElement:n.humidity,windElement:n.wind_kph,iconElement:b(n.condition.code,n.is_day),conditionElement:n.condition.text})}))}))}}document.querySelectorAll("[data-box]").forEach((e=>{let n="today";Object.prototype.hasOwnProperty.call(e.dataset,"tomorrow")&&(n="tomorrow"),e.addEventListener("click",(()=>{const t=I({day:n,hour:e.dataset.box});V({hourElement:t.time.slice(11,13),cloudElement:t.cloud,humidityElement:t.humidity,windElement:t.wind_kph,iconElement:b(t.condition.code,t.is_day),conditionElement:t.condition.text})}))}))}(),R({heat:t,condition:n.weatherContent.text,iconCode:n.weatherContent.code,isDay:n.weatherContent.isDay,feelsLike:a,city:n.naming.cityName,country:n.naming.countryName})}function ae(e){e.preventDefault(),e.target!==Y&&e.target!==ee||!ne($)?e.target!==K&&e.target!==X||!ne(Q)?Error("şimdilik error returnluyorum"):(U(),C(),oe(Q.value),Q.value=""):(U(),oe($.value),$.blur())}Y.addEventListener("submit",ae),K.addEventListener("submit",ae),ee.addEventListener("click",ae),X.addEventListener("click",ae);const ie=document.getElementById("hours-info"),ce=document.getElementById("soundsMobile");function le(e){o("This Feature Is Under Development.")}function se(){o("This Feature Is Under Development.")}document.getElementById("soundsDesktop").addEventListener("change",le),ce.addEventListener("change",le),document.querySelectorAll("[data-switch]").forEach((e=>{e.addEventListener("click",se)})),document.getElementById("hours-info"),document.querySelectorAll('[data-forecast="today"]'),document.querySelectorAll('[data-forecast="tomorrow"]'),document.querySelectorAll('[data-forecast="other"]');const de=document.querySelectorAll("[data-other-day]");!function(){const e=new Date,n=new Date(e.setDate(e.getDate()+2)).toLocaleDateString("en",{weekday:"long"});de.forEach((e=>{e.innerText=n}))}();const re=document.querySelectorAll("[data-dark-icon]"),ue=document.querySelectorAll("[data-theme-button]");let me="light";function he(e){re.forEach((n=>{n.innerHTML=function(e){return"dark"===e?k.dark:"light"===e?k.light:void 0}(e)}))}function ye(e){const n=document.querySelector("html").classList;if(n.contains("dark"))return localStorage.setItem("mode","light"),n.remove("dark"),he(me),me="light",a("Light Theme Enabled"),"light";if("light"===me){if(localStorage.setItem("mode","dark"),n.add("dark"),he(me),me="dark","noAlert"===e)return"dark";a("Dark Theme Enabled")}}ue.forEach((e=>{e.addEventListener("click",ye)})),document.addEventListener("DOMContentLoaded",(function(){"dark"===localStorage.getItem("mode")&&ye("noAlert")})),U(!0),oe("Istanbul")})();