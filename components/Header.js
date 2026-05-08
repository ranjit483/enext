export function renderHeader() {
  return `
    <header class="fixed w-full top-0 z-50 transition-all duration-300" id="main-header">
      <div class="bg-[#AAD792] border-b border-black/10 text-black">
        <div class="container mx-auto px-4 sm:px-6 lg:px-8">
          <div class="flex items-center justify-between h-20">
            <!-- Logo -->
            <div class="flex-shrink-0">
              <a href="/" class="flex items-center gap-2">
                <div class="w-10 h-10 rounded-xl bg-black flex items-center justify-center text-[#AAD792] font-bold text-xl shadow-lg">e</div>
                <span class="font-bold text-2xl tracking-tight text-black">enext</span>
              </a>
            </div>

            <!-- Desktop Navigation (Mega Menu) -->
            <nav class="hidden md:block">
              <ul class="flex space-x-8">
                <li class="group" id="categories-menu-item">
                  <a href="#" class="text-black hover:text-black/70 font-medium transition-colors py-8 inline-block" id="categories-toggle-btn">Categories</a>
                  <!-- Mega Menu Dropdown -->
                  <div class="absolute left-0 right-0 w-full top-full mt-0 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform origin-top translate-y-2 group-hover:translate-y-0 bg-[#AAD792] border-t border-black/10 shadow-2xl z-50">
                    <div class="container mx-auto px-4 py-8">
                      <div class="grid grid-cols-4 gap-8">
                        <div>
                          <h3 class="font-semibold text-lg mb-4 text-black border-b border-black/10 pb-2">Computers & Networking</h3>
                          <ul class="space-y-2">
                            <li><a href="/pages/shop.html?category=accessories" class="text-black/70 hover:text-black transition-colors">Computer & Accessories</a></li>
                            <li><a href="/pages/shop.html?category=laptop" class="text-black/70 hover:text-black transition-colors">Laptop</a></li>
                            <li><a href="/pages/shop.html?category=networking" class="text-black/70 hover:text-black transition-colors">Networking</a></li>
                            <li><a href="/pages/shop.html?category=fiber" class="text-black/70 hover:text-black transition-colors">Optical Fiber Cable & Accessories</a></li>
                          </ul>
                        </div>
                        <div>
                          <h3 class="font-semibold text-lg mb-4 text-black border-b border-black/10 pb-2">Smart Living</h3>
                          <ul class="space-y-2">
                            <li><a href="/pages/shop.html?category=home" class="text-black/70 hover:text-black transition-colors">Smart Home</a></li>
                            <li><a href="/pages/shop.html?category=office" class="text-black/70 hover:text-black transition-colors">Smart Office</a></li>
                            <li><a href="/pages/shop.html?category=security" class="text-black/70 hover:text-black transition-colors">Smart Securities</a></li>
                            <li><a href="/pages/shop.html?category=utility" class="text-black/70 hover:text-black transition-colors">Smart Utility</a></li>
                          </ul>
                        </div>
                        <div>
                          <h3 class="font-semibold text-lg mb-4 text-black border-b border-black/10 pb-2">Wearables & More</h3>
                          <ul class="space-y-2">
                            <li><a href="/pages/shop.html?category=electronics" class="text-black/70 hover:text-black transition-colors">Electronics</a></li>
                            <li><a href="/pages/shop.html?category=trackers" class="text-black/70 hover:text-black transition-colors">Trackers</a></li>
                            <li><a href="/pages/shop.html?category=others" class="text-black/70 hover:text-black transition-colors">Others</a></li>
                          </ul>
                        </div>
                        <div class="bg-black/5 rounded-2xl p-6 flex flex-col justify-center items-start">
                          <span class="inline-block px-3 py-1 bg-black text-[#AAD792] text-xs font-bold rounded-full mb-3">New Arrival</span>
                          <h4 class="font-bold text-xl mb-2 text-black">enext Vision Pro</h4>
                          <p class="text-sm text-black/70 mb-4">Experience the future of mixed reality today.</p>
                          <a href="#" class="text-sm font-semibold text-black hover:underline">Shop Now →</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li><a href="/pages/shop.html" class="text-black hover:text-black/70 font-medium transition-colors py-8 inline-block">Shop</a></li>
                <li><a href="/pages/about.html" class="text-black hover:text-black/70 font-medium transition-colors py-8 inline-block">About</a></li>
                <li><a href="/pages/contact.html" class="text-black hover:text-black/70 font-medium transition-colors py-8 inline-block">Contact</a></li>
              </ul>
            </nav>

            <!-- Right Actions -->
            <div class="flex items-center space-x-4 sm:space-x-6">
              <!-- Search -->
              <div class="relative hidden sm:block group">
                <input type="text" placeholder="Search..." class="w-48 lg:w-64 bg-black/5 border-none rounded-full py-2 pl-10 pr-4 text-sm focus:ring-2 focus:ring-black outline-none transition-all placeholder-black/50 text-black">
                <svg class="w-5 h-5 absolute left-3 top-2.5 text-black/50" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                <!-- AJAX Live Search Dropdown Placeholder -->
                <div class="absolute w-full mt-2 bg-[#AAD792] border border-black/10 rounded-xl shadow-xl opacity-0 invisible group-focus-within:opacity-100 group-focus-within:visible transition-all duration-200 z-50">
                  <div class="p-4 text-sm text-black/50">Type to search products...</div>
                </div>
              </div>

              <!-- Icons -->
              <div class="flex items-center space-x-3 text-black">
                <a href="/pages/login.html" class="hover:text-black/70 transition-colors" title="Account">
                  <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg>
                </a>
                <div class="relative group" id="wishlist-dropdown-container">
                  <button class="hover:text-black/70 transition-colors relative bg-transparent" title="Wishlist" id="wishlist-icon-btn">
                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>
                    <span class="absolute -top-1 -right-1 bg-black text-[#AAD792] text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">2</span>
                  </button>

                  <!-- Wishlist Dropdown -->
                  <div class="absolute right-0 mt-2 w-80 bg-[#AAD792] border border-black/10 rounded-2xl shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50 overflow-hidden" id="wishlist-dropdown">
                    <div class="p-4 border-b border-black/10 flex justify-between items-center">
                      <span class="font-bold text-black">Wishlist</span>
                      <span class="text-xs text-black/50">2 Items</span>
                    </div>
                    <div class="max-h-64 overflow-y-auto p-4 space-y-4">
                      <!-- Mini Wishlist Item 1 -->
                      <div class="flex gap-3">
                        <img src="https://images.unsplash.com/photo-1546868871-7041f2a55e12?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80" alt="Product" class="w-12 h-12 rounded-lg object-cover bg-black/5">
                        <div class="flex-1">
                          <h4 class="text-xs font-bold text-black line-clamp-1">enext Watch Ultra</h4>
                          <p class="text-[10px] text-black/50">Nrs. 299.00</p>
                        </div>
                        <button class="text-black/30 hover:text-red-500 transition-colors">
                          <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"></path></svg>
                        </button>
                      </div>
                      <!-- Mini Wishlist Item 2 -->
                      <div class="flex gap-3">
                        <img src="https://images.unsplash.com/photo-1610945661005-41f72df48b7b?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80" alt="Product" class="w-12 h-12 rounded-lg object-cover bg-black/5">
                        <div class="flex-1">
                          <h4 class="text-xs font-bold text-black line-clamp-1">enext Vision Pro</h4>
                          <p class="text-[10px] text-black/50">Nrs. 3,499.00</p>
                        </div>
                        <button class="text-black/30 hover:text-red-500 transition-colors">
                          <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"></path></svg>
                        </button>
                      </div>
                    </div>
                    <div class="p-4 bg-black/5">
                      <a href="/pages/wishlist.html" class="block text-center py-2.5 rounded-lg bg-black text-[#AAD792] text-xs font-bold hover:bg-black/80 transition-all">View All Wishlist</a>
                    </div>
                  </div>
                </div>
                <div class="relative group" id="cart-dropdown-container">
                  <button class="hover:text-black/70 transition-colors relative bg-transparent" title="Cart" id="cart-icon-btn">
                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
                    <span class="absolute -top-1 -right-1 bg-black text-[#AAD792] text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center" id="cart-badge">1</span>
                  </button>
                  
                  <!-- Cart Dropdown -->
                  <div class="absolute right-0 mt-2 w-80 bg-[#AAD792] border border-black/10 rounded-2xl shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50 overflow-hidden" id="cart-dropdown">
                    <div class="p-4 border-b border-black/10 flex justify-between items-center">
                      <span class="font-bold text-black">Your Cart</span>
                      <span class="text-xs text-black/50">1 Item</span>
                    </div>
                    <div class="max-h-64 overflow-y-auto p-4 space-y-4">
                      <!-- Mini Cart Item -->
                      <div class="flex gap-3">
                        <img src="https://images.unsplash.com/photo-1546868871-7041f2a55e12?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80" alt="Product" class="w-12 h-12 rounded-lg object-cover bg-black/5">
                        <div class="flex-1">
                          <h4 class="text-xs font-bold text-black line-clamp-1">enext Watch Ultra</h4>
                          <p class="text-[10px] text-black/50">1 x Nrs. 299.00</p>
                        </div>
                      </div>
                    </div>
                    <div class="p-4 bg-black/5 space-y-3">
                      <div class="flex justify-between items-center text-sm">
                        <span class="text-black/50">Total:</span>
                        <span class="font-bold text-black">Nrs. 299.00</span>
                      </div>
                      <div class="grid grid-cols-2 gap-2">
                        <a href="/pages/cart.html" class="text-center py-2 rounded-lg bg-black text-[#AAD792] text-xs font-bold hover:bg-black/80 transition-colors">View Cart</a>
                        <a href="/pages/checkout.html" class="text-center py-2 rounded-lg bg-white text-black text-xs font-bold border border-black/10 hover:bg-black/5 transition-colors">Checkout</a>
                      </div>
                    </div>
                  </div>
                </div>

                <!-- Mobile menu button -->
                <button class="md:hidden ml-2 focus:outline-none bg-transparent" id="mobile-menu-btn">
                  <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>

    <!-- Mobile Menu Overlay -->
    <div id="mobile-menu" class="fixed inset-0 z-50 bg-white translate-x-full transition-transform duration-300 md:hidden">
      <div class="p-6">
        <div class="flex items-center justify-between mb-8">
          <div class="flex items-center gap-2">
            <div class="w-10 h-10 rounded-xl bg-black flex items-center justify-center text-[#AAD792] font-bold text-xl">e</div>
            <span class="font-bold text-2xl tracking-tight text-black">enext</span>
          </div>
          <button id="close-menu-btn" class="text-black bg-transparent">
            <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>
          </button>
        </div>
        <nav>
          <ul class="space-y-6">
            <li class="relative">
              <button id="mobile-categories-btn" class="w-full flex items-center justify-between text-2xl font-bold text-black border-b border-black/5 pb-4 bg-transparent">
                Categories
                <svg class="w-6 h-6 transition-transform" id="mobile-categories-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
              </button>
              <ul id="mobile-categories-list" class="hidden pl-4 mt-4 space-y-4">
                <li><a href="/pages/shop.html?category=electronics" class="text-lg font-semibold text-black/70">Electronics</a></li>
                <li><a href="/pages/shop.html?category=trackers" class="text-lg font-semibold text-black/70">Trackers</a></li>
                <li><a href="/pages/shop.html?category=laptop" class="text-lg font-semibold text-black/70">Laptops</a></li>
                <li><a href="/pages/shop.html?category=home" class="text-lg font-semibold text-black/70">Smart Home</a></li>
              </ul>
            </li>
            <li><a href="/pages/shop.html" class="text-2xl font-bold text-black block border-b border-black/5 pb-4">Shop</a></li>
            <li><a href="/pages/about.html" class="text-2xl font-bold text-black block border-b border-black/5 pb-4">About</a></li>
            <li><a href="/pages/contact.html" class="text-2xl font-bold text-black block border-b border-black/5 pb-4">Contact</a></li>
            <li><a href="/pages/login.html" class="text-2xl font-bold text-black block border-b border-black/5 pb-4">My Account</a></li>
          </ul>
        </nav>
      </div>
    </div>
  `;
}


export function initHeader() {
  const header = document.getElementById('main-header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      header.classList.add('shadow-md');
    } else {
      header.classList.remove('shadow-md');
    }
  });
}
