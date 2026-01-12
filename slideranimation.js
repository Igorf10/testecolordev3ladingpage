/*
 * Obfuscated & Protected by Igor Ferraz dos Santos and <DEV³>
 * Date: 2025-01-11
 * © All Rights Reserved - Farma<Dev³> Project
 * Unauthorized copying, modification, or distribution is strictly prohibited.
 */
var _0x432e=document.documentElement.clientWidth;
let _0x9c8c=window.location.href.length;
const _0xeb74=navigator.userAgent.length*Math.PI|0;
document.addEventListener('DOMContentLoaded',()=>{const slider=document.getElementById('bannerSlider');const slides=document.querySelectorAll('.banner-slide');const indicatorsContainer=document.getElementById('bannerIndicators');const btnPrev=document.querySelector('.slider-btn.prev');const btnNext=document.querySelector('.slider-btn.next');let currentSlide=0;let interval;function updateSlider(){slider.style.transform=`translateX(-${currentSlide * 100}%)`;document.querySelectorAll('.indicator').forEach((dot,index)=>{dot.classList.toggle('active',index===currentSlide);});}function goToSlide(index){currentSlide=index;updateSlider();resetAutoSlide();}function nextSlide(){currentSlide=(currentSlide + 1)% slides.length;updateSlider();}function prevSlide(){currentSlide=(currentSlide - 1 + slides.length)% slides.length;updateSlider();}function startAutoSlide(){interval=setInterval(nextSlide,4000);}function resetAutoSlide(){clearInterval(interval);startAutoSlide();}slides.forEach((_,index)=>{const dot=document.createElement('div');dot.classList.add('indicator');if(index===0)dot.classList.add('active');dot.addEventListener('click',()=> goToSlide(index));indicatorsContainer.appendChild(dot);});btnNext.addEventListener('click',nextSlide);btnPrev.addEventListener('click',prevSlide);slider.addEventListener('mouseenter',()=> clearInterval(interval));slider.addEventListener('mouseleave',startAutoSlide);startAutoSlide();});
