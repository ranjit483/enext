export function renderHeader() {
  return `
    <header class="sticky top-0 z-40 flex flex-col shadow-sm font-sans">
      <!-- Top Green Bar -->
      <div class="bg-[#AAD792] py-3 px-4 sm:px-6 lg:px-8 border-b border-black/5">
        <div class="max-w-7xl mx-auto flex justify-between items-center gap-4">
          <!-- Logo -->
          <div class="flex-shrink-0 flex items-center">
            <a class="font-bold text-3xl md:text-4xl tracking-tighter flex items-center" href="/">
              <span class="text-[#2563EB]">e</span><span class="text-[#3730A3]">n</span><span class="text-[#9333EA]">e</span><span class="text-[#C026D3]">x</span><span class="text-[#DB2777]">t</span>
            </a>
          </div>

          <!-- Desktop Search Bar -->
          <form class="hidden md:flex flex-1 max-w-2xl mx-8" action="/pages/shop.html">
            <div class="flex w-full rounded-xl overflow-hidden bg-slate-100/90 border border-transparent focus-within:border-emerald-600 focus-within:bg-white focus-within:shadow-md transition-all duration-300">
              <input type="text" placeholder="Search in enext" class="flex-1 px-5 py-2.5 text-sm bg-transparent focus:outline-none text-slate-800 placeholder-slate-400" />
              <button type="submit" class="px-5 flex items-center justify-center text-slate-500 hover:text-slate-900 transition-colors">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
              </button>
            </div>
          </form>

          <!-- Right Action Icons -->
          <div class="hidden md:flex items-center space-x-6">
            <!-- Wishlist Icon -->
            <a href="/pages/wishlist.html" class="text-slate-800 hover:text-slate-600 transition-colors relative flex items-center">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>
              <span class="absolute -top-2 -right-2 bg-gradient-to-r from-emerald-500 to-green-600 text-white text-[10px] font-bold rounded-full h-4 w-4 flex items-center justify-center border border-white">0</span>
            </a>

            <!-- Cart Icon (Triggers Drawer) -->
            <button id="cart-icon-btn" class="text-slate-800 hover:text-slate-600 transition-colors relative flex items-center focus:outline-none">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 100 4 2 2 0 000-4z"></path></svg>
              <span class="absolute -top-2 -right-2 bg-gradient-to-r from-emerald-500 to-green-600 text-white text-[10px] font-bold rounded-full h-4 w-4 flex items-center justify-center border border-white" id="cart-badge-count">4</span>
            </button>

            <!-- User Menu -->
            <div class="relative group">
              <a href="/pages/login.html" class="flex items-center gap-2 text-slate-800 hover:text-slate-600 transition-colors font-medium text-sm">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg>
                <span>Manaraja</span>
                <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
              </a>
              <!-- Dropdown -->
              <div class="absolute right-0 top-full mt-2 w-48 bg-white rounded-xl shadow-xl border border-slate-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 py-2 z-50">
                <a href="/pages/dashboard.html" class="block px-4 py-2 text-sm text-slate-700 hover:bg-slate-50">My Account</a>
                <a href="/pages/admin.html" class="block px-4 py-2 text-sm text-slate-700 hover:bg-slate-50 font-semibold text-emerald-600">Admin Dashboard</a>
                <a href="/pages/super-admin.html" class="block px-4 py-2 text-sm text-slate-700 hover:bg-slate-50 font-semibold text-indigo-600">Super Admin Panel</a>
                <hr class="my-1 border-slate-100">
                <a href="/pages/login.html" class="block px-4 py-2 text-sm text-red-600 hover:bg-slate-50">Logout</a>
              </div>
            </div>
          </div>

          <!-- Mobile Menu Button -->
          <div class="flex md:hidden items-center space-x-4">
            <button id="mobile-cart-btn" class="text-slate-800 relative">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 100 4 2 2 0 000-4z"></path></svg>
              <span class="absolute -top-2 -right-2 bg-emerald-600 text-white text-[10px] font-bold rounded-full h-4 w-4 flex items-center justify-center border border-white">4</span>
            </button>
            <button id="mobile-menu-btn" class="text-slate-800 focus:outline-none">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
            </button>
          </div>
        </div>
      </div>

      <!-- Second Bar: Categories & Nav Links -->
      <div class="bg-[#95DBAE] py-2.5 px-4 sm:px-6 lg:px-8 shadow-sm">
        <div class="max-w-7xl mx-auto flex items-center justify-between">
          <div class="flex items-center space-x-8">
            <!-- All Departments Dropdown -->
            <div class="relative group z-50">
              <button class="flex items-center space-x-2 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-xl shadow-sm hover:bg-white hover:shadow-md transition-all duration-300">
                <svg class="w-5 h-5 text-slate-800" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 10h16M4 14h16M4 18h16"></path></svg>
                <span class="font-bold text-slate-800 text-sm">All Departments</span>
              </button>

              <div class="absolute top-full left-0 mt-1 w-64 bg-white border border-slate-100 shadow-2xl rounded-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 py-2 z-50">
                <a href="/pages/shop.html?category=computer" class="block px-4 py-2.5 text-sm text-slate-700 hover:bg-[#95DBAE]/20 hover:text-slate-900 transition-colors font-medium">Computer & Accessories</a>
                <a href="/pages/shop.html?category=laptop" class="block px-4 py-2.5 text-sm text-slate-700 hover:bg-[#95DBAE]/20 hover:text-slate-900 transition-colors font-medium">Laptop</a>
                <a href="/pages/shop.html?category=fiber" class="block px-4 py-2.5 text-sm text-slate-700 hover:bg-[#95DBAE]/20 hover:text-slate-900 transition-colors font-medium">Optical Fiber Cable & Accessories</a>
                <a href="/pages/shop.html?category=smarthome" class="block px-4 py-2.5 text-sm text-slate-700 hover:bg-[#95DBAE]/20 hover:text-slate-900 transition-colors font-medium">Smart Home</a>
                <a href="/pages/shop.html?category=smartoffice" class="block px-4 py-2.5 text-sm text-slate-700 hover:bg-[#95DBAE]/20 hover:text-slate-900 transition-colors font-medium">Smart Office</a>
                <a href="/pages/shop.html?category=securities" class="block px-4 py-2.5 text-sm text-slate-700 hover:bg-[#95DBAE]/20 hover:text-slate-900 transition-colors font-medium">Smart securities</a>
                <a href="/pages/shop.html?category=utility" class="block px-4 py-2.5 text-sm text-slate-700 hover:bg-[#95DBAE]/20 hover:text-slate-900 transition-colors font-medium">Smart Utility</a>
                <a href="/pages/shop.html?category=networking" class="block px-4 py-2.5 text-sm text-slate-700 hover:bg-[#95DBAE]/20 hover:text-slate-900 transition-colors font-medium">Networking</a>
                <a href="/pages/shop.html?category=electronics" class="block px-4 py-2.5 text-sm text-slate-700 hover:bg-[#95DBAE]/20 hover:text-slate-900 transition-colors font-medium">Electronics</a>
                <a href="/pages/shop.html?category=others" class="block px-4 py-2.5 text-sm text-slate-700 hover:bg-[#95DBAE]/20 hover:text-slate-900 transition-colors font-medium">Others</a>
              </div>
            </div>

            <!-- Navigation Links -->
            <nav class="hidden md:flex space-x-6">
              <a href="/" class="text-slate-900 hover:text-emerald-900 font-bold text-sm transition-colors">Home</a>
              <a href="/pages/shop.html" class="text-slate-900 hover:text-emerald-900 font-bold text-sm transition-colors">Shop</a>
              <a href="/pages/about.html" class="text-slate-900 hover:text-emerald-900 font-bold text-sm transition-colors">Our Story</a>
              <a href="/pages/contact.html" class="text-slate-900 hover:text-emerald-900 font-bold text-sm transition-colors">Contacts</a>
              <a href="/pages/cart.html" class="text-slate-900 hover:text-emerald-900 font-bold text-sm transition-colors">My Cart</a>
            </nav>
          </div>
        </div>
      </div>
    </header>

    <!-- Slide-Over Shopping Cart Drawer (Matching Image 3) -->
    <div id="cart-drawer-overlay" class="fixed inset-0 bg-black/50 backdrop-blur-xs z-50 opacity-0 invisible transition-all duration-300">
      <div id="cart-drawer" class="fixed top-0 right-0 h-full w-full max-w-md bg-white shadow-2xl z-50 transform translate-x-full transition-transform duration-300 flex flex-col">
        <!-- Drawer Header -->
        <div class="p-6 border-b border-slate-100 flex items-center justify-between">
          <div class="flex items-center gap-2 text-slate-900 font-bold text-lg">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 100 4 2 2 0 000-4z"></path></svg>
            <span>MY CART</span>
          </div>
          <button id="close-cart-btn" class="text-slate-400 hover:text-slate-900 transition-colors text-2xl font-light">&times;</button>
        </div>

        <!-- Cart Items List (Matching Image 3) -->
        <div class="flex-1 overflow-y-auto p-6 space-y-6">
          <!-- Item 1 -->
          <div class="flex items-center justify-between border-b border-slate-100 pb-4">
            <div class="flex-1">
              <h4 class="font-bold text-xs text-slate-900 uppercase tracking-tight">ASUS LAPTOP E410KA/N4500/4/64 G...</h4>
              <p class="text-[11px] text-slate-400 mt-0.5">color: Dark</p>
              <div class="flex items-center gap-4 mt-2">
                <div class="flex items-center border border-slate-200 rounded-md px-2 py-0.5 text-xs text-slate-600">
                  <button class="px-1.5">-</button><span class="px-2 font-bold">1</span><button class="px-1.5">+</button>
                </div>
                <span class="text-xs font-bold text-slate-900">x Rs 32,000.00</span>
              </div>
            </div>
            <button class="text-slate-300 hover:text-red-500 text-lg ml-2">&times;</button>
          </div>

          <!-- Item 2 -->
          <div class="flex items-center justify-between border-b border-slate-100 pb-4">
            <div class="flex-1">
              <h4 class="font-bold text-xs text-slate-900 uppercase tracking-tight">HDD 10TB INTERNAL SEAGATE</h4>
              <p class="text-[11px] text-slate-400 mt-0.5">color: Dark</p>
              <div class="flex items-center gap-4 mt-2">
                <div class="flex items-center border border-slate-200 rounded-md px-2 py-0.5 text-xs text-slate-600">
                  <button class="px-1.5">-</button><span class="px-2 font-bold">1</span><button class="px-1.5">+</button>
                </div>
                <span class="text-xs font-bold text-slate-900">x Rs 26,670.00</span>
              </div>
            </div>
            <button class="text-slate-300 hover:text-red-500 text-lg ml-2">&times;</button>
          </div>

          <!-- Item 3 -->
          <div class="flex items-center justify-between border-b border-slate-100 pb-4">
            <div class="flex-1">
              <h4 class="font-bold text-xs text-slate-900 uppercase tracking-tight">LAPTOP 3530 CI5-1334U 8GB/512NV...</h4>
              <p class="text-[11px] text-slate-400 mt-0.5">color: Dark</p>
              <div class="flex items-center gap-4 mt-2">
                <div class="flex items-center border border-slate-200 rounded-md px-2 py-0.5 text-xs text-slate-600">
                  <button class="px-1.5">-</button><span class="px-2 font-bold">1</span><button class="px-1.5">+</button>
                </div>
                <span class="text-xs font-bold text-slate-900">x Rs 81,250.00</span>
              </div>
            </div>
            <button class="text-slate-300 hover:text-red-500 text-lg ml-2">&times;</button>
          </div>

          <!-- Item 4 -->
          <div class="flex items-center justify-between border-b border-slate-100 pb-4">
            <div class="flex-1">
              <h4 class="font-bold text-xs text-slate-900 uppercase tracking-tight">OPTICAL PATCH CORD SC/APC-SC/APC</h4>
              <p class="text-[11px] text-slate-400 mt-0.5">color: Dark</p>
              <div class="flex items-center gap-4 mt-2">
                <div class="flex items-center border border-slate-200 rounded-md px-2 py-0.5 text-xs text-slate-600">
                  <button class="px-1.5">-</button><span class="px-2 font-bold">1</span><button class="px-1.5">+</button>
                </div>
                <span class="text-xs font-bold text-slate-900">x Rs 0.00</span>
              </div>
            </div>
            <button class="text-slate-300 hover:text-red-500 text-lg ml-2">&times;</button>
          </div>
        </div>

        <!-- Drawer Footer -->
        <div class="p-6 border-t border-slate-100 bg-slate-50 space-y-4">
          <div class="flex items-center justify-between text-slate-900 font-bold text-sm">
            <span>Subtotal:</span>
            <span class="text-base">Rs 139,920.00</span>
          </div>
          <div class="space-y-2">
            <a href="/pages/cart.html" class="block w-full py-3 text-center bg-slate-100 text-slate-800 font-bold text-xs rounded-xl uppercase tracking-wider hover:bg-slate-200 transition-colors">View Cart</a>
            <a href="/pages/checkout.html" class="block w-full py-3 text-center bg-[#95DBAE] text-slate-900 font-bold text-xs rounded-xl uppercase tracking-wider hover:bg-[#78B08D] transition-colors shadow-md">Checkout</a>
          </div>
        </div>
      </div>
    </div>
  `;
}

export function initHeader() {
  const cartBtn = document.getElementById('cart-icon-btn');
  const mobileCartBtn = document.getElementById('mobile-cart-btn');
  const closeBtn = document.getElementById('close-cart-btn');
  const overlay = document.getElementById('cart-drawer-overlay');
  const drawer = document.getElementById('cart-drawer');

  const openCart = () => {
    if (overlay && drawer) {
      overlay.classList.remove('opacity-0', 'invisible');
      drawer.classList.remove('translate-x-full');
    }
  };

  const closeCart = () => {
    if (overlay && drawer) {
      overlay.classList.add('opacity-0', 'invisible');
      drawer.classList.add('translate-x-full');
    }
  };

  if (cartBtn) cartBtn.addEventListener('click', openCart);
  if (mobileCartBtn) mobileCartBtn.addEventListener('click', openCart);
  if (closeBtn) closeBtn.addEventListener('click', closeCart);
  if (overlay) overlay.addEventListener('click', (e) => {
    if (e.target === overlay) closeCart();
  });
}
