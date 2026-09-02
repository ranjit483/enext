import '../style.css';
import { renderHeader, initHeader } from '../components/Header.js';
import { renderFooter } from '../components/Footer.js';

document.addEventListener('DOMContentLoaded', () => {
  // Inject Header
  const headerContainer = document.getElementById('header-placeholder');
  if (headerContainer) {
    headerContainer.className = 'sticky top-0 z-50 w-full';
    headerContainer.innerHTML = renderHeader();
    initHeader();
  }

  // Inject Footer
  const footerContainer = document.getElementById('footer-placeholder');
  if (footerContainer) {
    footerContainer.innerHTML = renderFooter();
  }

  // Mobile Menu Toggle
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  const closeMenuBtn = document.getElementById('close-menu-btn');

  if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener('click', () => {
      mobileMenu.classList.remove('translate-x-full');
    });
  }

  if (closeMenuBtn && mobileMenu) {
    closeMenuBtn.addEventListener('click', () => {
      mobileMenu.classList.add('translate-x-full');
    });
  }

  // Cart Dropdown Toggle (Click support for mobile/touch)
  const cartIconBtn = document.getElementById('cart-icon-btn');
  const cartDropdown = document.getElementById('cart-dropdown');

  if (cartIconBtn && cartDropdown) {
    cartIconBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      cartDropdown.classList.toggle('opacity-100');
      cartDropdown.classList.toggle('visible');
    });

    document.addEventListener('click', (e) => {
      if (!cartDropdown.contains(e.target) && e.target !== cartIconBtn) {
        cartDropdown.classList.add('opacity-0', 'invisible');
        cartDropdown.classList.remove('opacity-100', 'visible');
      }
    });
  }

  // Wishlist Dropdown Toggle (Click support for mobile/touch)
  const wishlistIconBtn = document.getElementById('wishlist-icon-btn');
  const wishlistDropdown = document.getElementById('wishlist-dropdown');

  if (wishlistIconBtn && wishlistDropdown) {
    wishlistIconBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      wishlistDropdown.classList.toggle('opacity-100');
      wishlistDropdown.classList.toggle('visible');
    });

    document.addEventListener('click', (e) => {
      if (!wishlistDropdown.contains(e.target) && e.target !== wishlistIconBtn) {
        wishlistDropdown.classList.add('opacity-0', 'invisible');
        wishlistDropdown.classList.remove('opacity-100', 'visible');
      }
    });
  }

  // Mobile Categories Accordion
  const mobileCategoriesBtn = document.getElementById('mobile-categories-btn');
  const mobileCategoriesList = document.getElementById('mobile-categories-list');
  const mobileCategoriesIcon = document.getElementById('mobile-categories-icon');

  if (mobileCategoriesBtn && mobileCategoriesList) {
    mobileCategoriesBtn.addEventListener('click', () => {
      mobileCategoriesList.classList.toggle('hidden');
      mobileCategoriesIcon.classList.toggle('rotate-180');
    });
  }

  // Desktop Categories Toggle (Click support for better UX)
  const categoriesToggleBtn = document.getElementById('categories-toggle-btn');
  const categoriesMenu = document.querySelector('#categories-menu-item div');

  if (categoriesToggleBtn && categoriesMenu) {
    categoriesToggleBtn.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      categoriesMenu.classList.toggle('opacity-100');
      categoriesMenu.classList.toggle('visible');
    });
    
    document.addEventListener('click', (e) => {
      if (!categoriesMenu.contains(e.target) && e.target !== categoriesToggleBtn) {
        categoriesMenu.classList.remove('opacity-100', 'visible');
      }
    });
  }

  // Parallax Effect for Hero
  const parallaxElements = document.querySelectorAll('.parallax');
  window.addEventListener('scroll', () => {
    let scrollY = window.scrollY;
    parallaxElements.forEach(el => {
      let speed = el.dataset.speed || 0.5;
      el.style.transform = `translateY(${scrollY * speed}px)`;
    });
  });

  // Intersection Observer for Scroll Animations
  const animateElements = document.querySelectorAll('.animate-on-scroll');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('opacity-100', 'translate-y-0');
        entry.target.classList.remove('opacity-0', 'translate-y-10');
      }
    });
  }, { threshold: 0.1 });

  animateElements.forEach(el => {
    el.classList.add('opacity-0', 'translate-y-10', 'transition-all', 'duration-700', 'ease-out');
    observer.observe(el);
  });
});
