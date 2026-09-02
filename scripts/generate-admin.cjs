const fs = require('fs');
const path = require('path');

const icons = {
  dashboard: `<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"></path></svg>`,
  products: `<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"></path></svg>`,
  categories: `<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 10h16M4 14h16M4 18h16"></path></svg>`,
  orders: `<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"></path></svg>`,
  payments: `<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a2 2 0 002-2V7a2 2 0 00-2-2H6a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>`,
  users: `<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"></path></svg>`,
  coupons: `<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z"></path></svg>`,
  shipping: `<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 4H6a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-2m-4-1v8m0 0l3-3m-3 3L9 8"></path></svg>`,
  settings: `<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path></svg>`
};

const pagesConfig = [
  { id: 'dashboard', path: 'admin/index.html', title: 'Dashboard Overview', activeUrl: '/admin', btnText: 'Generate Report' },
  { id: 'products', path: 'admin/products/index.html', title: 'Products', activeUrl: '/admin/products', btnText: '+ Add Product' },
  { id: 'categories', path: 'admin/categories/index.html', title: 'Categories', activeUrl: '/admin/categories', btnText: '+ Create Category' },
  { id: 'orders', path: 'admin/orders/index.html', title: 'Orders', activeUrl: '/admin/orders', btnText: 'Export Orders' },
  { id: 'payments', path: 'admin/payments/index.html', title: 'Payments', activeUrl: '/admin/payments', btnText: 'Download Statement' },
  { id: 'users', path: 'admin/users/index.html', title: 'Users', activeUrl: '/admin/users', btnText: '+ Add User' },
  { id: 'coupons', path: 'admin/coupons/index.html', title: 'Coupons', activeUrl: '/admin/coupons', btnText: '+ Create Coupon' },
  { id: 'shipping', path: 'admin/shipping/index.html', title: 'Shipping', activeUrl: '/admin/shipping', btnText: '+ Add Shipping Zone' },
  { id: 'settings', path: 'admin/settings/index.html', title: 'Settings', activeUrl: '/admin/settings', btnText: 'Save Changes' }
];

function getLayoutHeader(title, btnText) {
  return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>enextAdmin - ${title}</title>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap" rel="stylesheet">
    <script src="https://cdn.tailwindcss.com"></script>
    <style>
        body { font-family: 'Inter', sans-serif; }
    </style>
</head>
<body class="bg-slate-50 text-slate-800 min-h-screen flex antialiased">
`;
}

function getSidebar(activeId) {
  let nav = `<aside class="w-64 bg-[#0B132B] text-slate-300 flex flex-col shrink-0">
        <div class="h-20 flex items-center px-6 border-b border-slate-800/60">
            <a href="/" class="flex items-center gap-1.5">
                <span class="font-extrabold text-2xl text-[#95DBAE] tracking-tight">enext</span>
                <span class="font-bold text-2xl text-white">Admin.</span>
            </a>
        </div>
        <nav class="flex-1 px-4 py-6 space-y-1.5 font-medium text-sm">
`;

  pagesConfig.forEach(p => {
    const isActive = p.id === activeId;
    const activeClasses = isActive 
      ? `bg-[#95DBAE] text-slate-900 font-bold shadow-md` 
      : `text-slate-400 hover:text-white hover:bg-slate-800/60 transition-colors`;
    
    nav += `            <a href="${p.activeUrl}" class="flex items-center gap-3 px-4 py-3 rounded-xl ${activeClasses}">
                ${icons[p.id]}
                ${p.title}
            </a>\n`;
  });

  nav += `        </nav>
        <div class="p-4 border-t border-slate-800/60">
            <a href="/pages/login.html" class="flex items-center gap-3 px-4 py-3 text-slate-400 hover:text-white text-sm font-medium transition-colors">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"></path></svg>
                Logout
            </a>
        </div>
    </aside>`;
  return nav;
}

function getTopbar() {
  return `    <div class="flex-1 flex flex-col min-w-0 overflow-y-auto">
        <header class="h-20 bg-white border-b border-slate-100 flex items-center justify-between px-8 z-10 sticky top-0">
            <div class="flex items-center bg-slate-100/70 px-4 py-2.5 rounded-xl w-80">
                <svg class="w-4 h-4 text-slate-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                <input type="text" placeholder="Search..." class="bg-transparent text-sm text-slate-800 placeholder-slate-400 focus:outline-none w-full">
            </div>
            <div class="flex items-center gap-6">
                <button class="text-slate-400 hover:text-slate-600 relative">
                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"></path></svg>
                    <span class="absolute top-0 right-0 w-2 h-2 rounded-full bg-red-500"></span>
                </button>
                <div class="flex items-center gap-3 pl-4 border-l border-slate-100">
                    <div class="w-10 h-10 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold text-sm">
                        M
                    </div>
                    <div class="text-left">
                        <p class="text-xs font-bold text-slate-900">Manaraja Ranjit</p>
                        <p class="text-[11px] text-slate-400">Super Admin</p>
                    </div>
                </div>
            </div>
        </header>
`;
}

function getPageContent(id, title, btnText) {
  let mainHeader = `        <main class="p-8 space-y-8 max-w-7xl mx-auto w-full">
            <div class="flex items-center justify-between">
                <h1 class="text-2xl font-extrabold text-slate-900">${title}</h1>
                <button class="bg-[#95DBAE] text-slate-900 font-bold px-5 py-2.5 rounded-xl hover:bg-[#78B08D] transition-colors text-sm shadow-sm">
                    ${btnText}
                </button>
            </div>
`;

  if (id === 'products') {
    return `        <main class="p-8 space-y-8 max-w-7xl mx-auto w-full">
            <div class="flex items-center justify-between">
                <h1 class="text-2xl font-extrabold text-slate-900">${title}</h1>
                <div class="flex items-center gap-3">
                    <button onclick="document.getElementById('import-csv-modal').classList.remove('hidden')" class="bg-white border border-slate-200 text-slate-700 font-bold px-4 py-2.5 rounded-xl hover:bg-slate-50 transition-colors text-sm shadow-xs flex items-center gap-2">
                        <svg class="w-4 h-4 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"></path></svg>
                        Import CSV
                    </button>
                    <button onclick="document.getElementById('add-product-modal').classList.remove('hidden')" class="bg-[#95DBAE] text-slate-900 font-bold px-5 py-2.5 rounded-xl hover:bg-[#78B08D] transition-colors text-sm shadow-sm">
                        + Add Product
                    </button>
                </div>
            </div>

            <!-- Add Product Modal -->
            <div id="add-product-modal" class="fixed inset-0 bg-slate-900/50 backdrop-blur-xs z-50 flex items-center justify-center hidden">
                <div class="bg-white rounded-3xl p-8 max-w-lg w-full shadow-2xl border border-slate-100 relative">
                    <div class="flex items-center justify-between border-b border-slate-100 pb-4 mb-6">
                        <h3 class="font-extrabold text-slate-900 text-lg">Add New Product</h3>
                        <button onclick="document.getElementById('add-product-modal').classList.add('hidden')" class="text-slate-400 hover:text-slate-700 text-xl font-bold">&times;</button>
                    </div>
                    <form id="add-product-form" class="space-y-4" onsubmit="handleSingleProductAdd(event)">
                        <div>
                            <label class="block text-xs font-bold text-slate-600 uppercase mb-1">Product Title / Name</label>
                            <input type="text" id="prod-name" required placeholder="e.g. ASUS LAPTOP E410KA" class="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 text-sm focus:outline-none focus:border-[#95DBAE]">
                        </div>
                        <div class="grid grid-cols-2 gap-4">
                            <div>
                                <label class="block text-xs font-bold text-slate-600 uppercase mb-1">SKU Code</label>
                                <input type="text" id="prod-sku" required placeholder="LAP-ASUS-410" class="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 text-sm focus:outline-none focus:border-[#95DBAE]">
                            </div>
                            <div>
                                <label class="block text-xs font-bold text-slate-600 uppercase mb-1">Category</label>
                                <select id="prod-category" class="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 text-sm focus:outline-none focus:border-[#95DBAE]">
                                    <option>Laptops</option>
                                    <option>Biometrics</option>
                                    <option>Audio</option>
                                    <option>Storage</option>
                                    <option>Networking</option>
                                </select>
                            </div>
                        </div>
                        <div class="grid grid-cols-2 gap-4">
                            <div>
                                <label class="block text-xs font-bold text-slate-600 uppercase mb-1">Price (Rs)</label>
                                <input type="number" id="prod-price" required placeholder="32000" class="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 text-sm focus:outline-none focus:border-[#95DBAE]">
                            </div>
                            <div>
                                <label class="block text-xs font-bold text-slate-600 uppercase mb-1">Stock Quantity</label>
                                <input type="number" id="prod-stock" required placeholder="24" class="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 text-sm focus:outline-none focus:border-[#95DBAE]">
                            </div>
                        </div>
                        <div class="pt-4 flex items-center justify-end gap-3 border-t border-slate-100">
                            <button type="button" onclick="document.getElementById('add-product-modal').classList.add('hidden')" class="px-5 py-2.5 text-xs font-bold text-slate-600 hover:bg-slate-100 rounded-xl transition-colors">Cancel</button>
                            <button type="submit" class="px-5 py-2.5 text-xs font-bold bg-[#95DBAE] text-slate-900 rounded-xl hover:bg-emerald-400 transition-colors shadow-sm">Save Product</button>
                        </div>
                    </form>
                </div>
            </div>

            <!-- Import CSV Modal -->
            <div id="import-csv-modal" class="fixed inset-0 bg-slate-900/50 backdrop-blur-xs z-50 flex items-center justify-center hidden">
                <div class="bg-white rounded-3xl p-8 max-w-lg w-full shadow-2xl border border-slate-100 relative">
                    <div class="flex items-center justify-between border-b border-slate-100 pb-4 mb-6">
                        <div class="flex items-center gap-3">
                            <div class="w-10 h-10 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
                                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"></path></svg>
                            </div>
                            <div>
                                <h3 class="font-extrabold text-slate-900 text-lg">Bulk Import Products</h3>
                                <p class="text-xs text-slate-400">Upload a CSV file to add multiple products</p>
                            </div>
                        </div>
                        <button onclick="document.getElementById('import-csv-modal').classList.add('hidden')" class="text-slate-400 hover:text-slate-700 text-xl font-bold">&times;</button>
                    </div>

                    <div class="space-y-4">
                        <div class="border-2 border-dashed border-slate-200 hover:border-[#95DBAE] transition-colors rounded-2xl p-8 text-center bg-slate-50/50 cursor-pointer" onclick="document.getElementById('csv-file-input').click()">
                            <svg class="w-10 h-10 text-slate-400 mx-auto mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path></svg>
                            <p class="text-sm font-bold text-slate-700">Click to upload or drag & drop</p>
                            <p class="text-xs text-slate-400 mt-1">CSV files only (Max file size: 10MB)</p>
                            <input type="file" id="csv-file-input" accept=".csv" class="hidden" onchange="handleCSVSelect(this)">
                        </div>

                        <div class="flex items-center justify-between px-1">
                            <span id="selected-filename" class="text-xs font-semibold text-emerald-600 truncate max-w-[200px]">No file selected</span>
                            <a href="javascript:void(0)" onclick="downloadSampleCSV()" class="text-xs font-bold text-blue-600 hover:underline flex items-center gap-1">
                                <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path></svg>
                                Download Sample CSV Template
                            </a>
                        </div>

                        <p id="import-status" class="text-xs font-bold text-emerald-600 hidden bg-emerald-50 p-3 rounded-xl border border-emerald-100"></p>

                        <div class="pt-4 flex items-center justify-end gap-3 border-t border-slate-100">
                            <button onclick="document.getElementById('import-csv-modal').classList.add('hidden')" class="px-5 py-2.5 text-xs font-bold text-slate-600 hover:bg-slate-100 rounded-xl transition-colors">Cancel</button>
                            <button onclick="processCSVImport()" class="px-5 py-2.5 text-xs font-bold bg-[#95DBAE] text-slate-900 rounded-xl hover:bg-emerald-400 transition-colors shadow-sm">
                                Import Products
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Products Module Filter Header -->
            <div class="flex flex-col md:flex-row gap-4 justify-between items-center bg-white p-4 rounded-2xl border border-slate-100 shadow-sm">
                <div class="flex items-center bg-slate-100/70 px-4 py-2 rounded-xl w-full md:w-80">
                    <svg class="w-4 h-4 text-slate-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                    <input type="text" id="search-product" onkeyup="filterProducts()" placeholder="Filter products..." class="bg-transparent text-xs text-slate-800 placeholder-slate-400 focus:outline-none w-full">
                </div>
                <div class="flex items-center gap-3 w-full md:w-auto justify-end">
                    <select id="filter-category" onchange="filterProducts()" class="bg-slate-100/70 text-xs font-semibold px-3 py-2 rounded-xl border-none focus:outline-none text-slate-700">
                        <option value="all">All Categories</option>
                        <option value="Laptops">Laptops</option>
                        <option value="Biometrics">Biometrics</option>
                        <option value="Audio">Audio</option>
                        <option value="Storage">Storage</option>
                        <option value="Networking">Networking</option>
                    </select>
                </div>
            </div>

            <!-- Dynamic Table -->
            <div class="bg-white rounded-3xl border border-slate-100 shadow-sm overflow-hidden">
                <table class="w-full text-left border-collapse">
                    <thead>
                        <tr class="border-b border-slate-100 text-[11px] uppercase font-bold text-slate-400 bg-slate-50/50">
                            <th class="py-4 px-6">Product</th>
                            <th class="py-4 px-6">Category</th>
                            <th class="py-4 px-6">Price</th>
                            <th class="py-4 px-6">Stock</th>
                            <th class="py-4 px-6">Sales</th>
                            <th class="py-4 px-6 text-right">Actions</th>
                        </tr>
                    </thead>
                    <tbody id="products-table-body" class="divide-y divide-slate-100 text-sm font-medium">
                        <!-- Populated dynamically via JS -->
                    </tbody>
                </table>
            </div>
        </main>

        <script>
            const defaultProducts = [
                { id: 1, name: 'ASUS LAPTOP E410KA/N4500/4/64 GB NVME NOTEBOOK', sku: 'LAP-ASUS-410', category: 'Laptops', price: 32000, stock: 24, sales: 124, img: 'https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=100' },
                { id: 2, name: 'ATTENDANCE MACHINE 1500 S151 DELI', sku: 'BIO-DELI-1500', category: 'Biometrics', price: 14500, stock: 12, sales: 45, img: 'https://images.unsplash.com/photo-1558089687-f282ffcbc126?w=100' },
                { id: 3, name: 'DELL LATITUDE 5420 CI5-1145G7 8GB/256GB', sku: 'LAP-DELL-5420', category: 'Laptops', price: 74000, stock: 3, sales: 89, img: 'https://images.unsplash.com/photo-1593642632823-8f785ba67e45?w=100' },
                { id: 4, name: 'HDD 10TB INTERNAL SEAGATE BARRACUDA', sku: 'STR-HDD-10TB', category: 'Storage', price: 26670, stock: 45, sales: 210, img: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=100' },
                { id: 5, name: 'APPLE AIRPODS MAX WIRELESS HEADPHONES', sku: 'AUD-APP-MAX', category: 'Audio', price: 58000, stock: 0, sales: 67, img: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=100' }
            ];

            function loadProducts() {
                const stored = localStorage.getItem('enext_products_db');
                if (!stored) {
                    localStorage.setItem('enext_products_db', JSON.stringify(defaultProducts));
                    return defaultProducts;
                }
                return JSON.parse(stored);
            }

            function saveProducts(products) {
                localStorage.setItem('enext_products_db', JSON.stringify(products));
                renderProducts();
            }

            function renderProducts(listToRender = null) {
                const products = listToRender || loadProducts();
                const tbody = document.getElementById('products-table-body');
                if (!tbody) return;

                if (products.length === 0) {
                    tbody.innerHTML = '<tr><td colspan="6" class="py-8 text-center text-slate-400 text-xs font-bold">No products found. Add one or import CSV!</td></tr>';
                    return;
                }

                tbody.innerHTML = products.map(p => {
                    let stockBadge = '';
                    if (p.stock > 10) {
                        stockBadge = \`<span class="px-2.5 py-1 rounded-full text-xs font-bold bg-emerald-50 text-emerald-600">In Stock (\${p.stock})</span>\`;
                    } else if (p.stock > 0) {
                        stockBadge = \`<span class="px-2.5 py-1 rounded-full text-xs font-bold bg-amber-50 text-amber-600">Low Stock (\${p.stock})</span>\`;
                    } else {
                        stockBadge = \`<span class="px-2.5 py-1 rounded-full text-xs font-bold bg-red-50 text-red-600">Out of Stock</span>\`;
                    }

                    return \`
                        <tr class="hover:bg-slate-50/50 transition-colors">
                            <td class="py-4 px-6 flex items-center gap-3">
                                <img src="\${p.img || 'https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=100'}" class="w-10 h-10 rounded-xl object-contain bg-slate-50 p-1 border border-slate-100">
                                <div>
                                    <p class="font-bold text-slate-900">\${p.name}</p>
                                    <p class="text-xs text-slate-400">SKU: \${p.sku}</p>
                                </div>
                            </td>
                            <td class="py-4 px-6 text-slate-600">\${p.category}</td>
                            <td class="py-4 px-6 font-bold text-slate-900">Rs \${Number(p.price).toLocaleString()}.00</td>
                            <td class="py-4 px-6">\${stockBadge}</td>
                            <td class="py-4 px-6 text-slate-600">\${p.sales || 0} sold</td>
                            <td class="py-4 px-6 text-right space-x-2">
                                <button onclick="deleteProduct(\${p.id})" class="text-xs font-bold text-red-500 hover:text-red-700">Delete</button>
                            </td>
                        </tr>
                    \`;
                }).join('');
            }

            function handleSingleProductAdd(e) {
                e.preventDefault();
                const name = document.getElementById('prod-name').value;
                const sku = document.getElementById('prod-sku').value;
                const category = document.getElementById('prod-category').value;
                const price = parseFloat(document.getElementById('prod-price').value);
                const stock = parseInt(document.getElementById('prod-stock').value);

                const products = loadProducts();
                products.unshift({
                    id: Date.now(),
                    name,
                    sku,
                    category,
                    price,
                    stock,
                    sales: 0,
                    img: 'https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=100'
                });

                saveProducts(products);
                document.getElementById('add-product-form').reset();
                document.getElementById('add-product-modal').classList.add('hidden');
            }

            let selectedCSVFile = null;
            function handleCSVSelect(input) {
                if (input.files && input.files[0]) {
                    selectedCSVFile = input.files[0];
                    document.getElementById('selected-filename').textContent = 'Selected: ' + selectedCSVFile.name;
                }
            }

            function processCSVImport() {
                const statusEl = document.getElementById('import-status');
                
                if (!selectedCSVFile) {
                    // Fallback demo import if no file selected
                    const products = loadProducts();
                    const demoBatch = [
                        { id: Date.now() + 1, name: 'ATTENDANCE MACHINE 1000+200 3765 DELI', sku: 'BIO-DELI-3765', category: 'Biometrics', price: 11200, stock: 15, sales: 10 },
                        { id: Date.now() + 2, name: 'ATTENDANCE MACHINE 500 S150 DELI', sku: 'BIO-DELI-S150', category: 'Biometrics', price: 9800, stock: 18, sales: 5 },
                        { id: Date.now() + 3, name: 'OPTICAL PATCH CORD SC/APC-SC/APC', sku: 'NET-OPT-SC', category: 'Networking', price: 450, stock: 100, sales: 50 }
                    ];
                    saveProducts([...demoBatch, ...products]);
                    statusEl.textContent = '✓ Bulk import complete! 3 products imported.';
                    statusEl.classList.remove('hidden');
                    setTimeout(() => {
                        document.getElementById('import-csv-modal').classList.add('hidden');
                        statusEl.classList.add('hidden');
                    }, 1200);
                    return;
                }

                const reader = new FileReader();
                reader.onload = function(e) {
                    const text = e.target.result;
                    const lines = text.split('\\n');
                    const products = loadProducts();
                    let count = 0;

                    lines.forEach((line, index) => {
                        if (index === 0 || !line.trim()) return; // skip header or empty line
                        const cols = line.split(',');
                        if (cols.length >= 4) {
                            products.unshift({
                                id: Date.now() + index,
                                name: cols[0].trim().replace(/^"|"$/g, ''),
                                sku: cols[1] ? cols[1].trim().replace(/^"|"$/g, '') : 'SKU-' + index,
                                category: cols[2] ? cols[2].trim().replace(/^"|"$/g, '') : 'General',
                                price: parseFloat(cols[3]) || 1000,
                                stock: parseInt(cols[4]) || 10,
                                sales: 0,
                                img: 'https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=100'
                            });
                            count++;
                        }
                    });

                    saveProducts(products);
                    statusEl.textContent = \`✓ Bulk import complete! \${count} products imported.\`;
                    statusEl.classList.remove('hidden');
                    setTimeout(() => {
                        document.getElementById('import-csv-modal').classList.add('hidden');
                        statusEl.classList.add('hidden');
                    }, 1200);
                };
                reader.readAsText(selectedCSVFile);
            }

            function downloadSampleCSV() {
                const csvContent = "data:text/csv;charset=utf-8,Title,SKU,Category,Price,Stock\\nATTENDANCE MACHINE 1000,BIO-DELI-3765,Biometrics,11200,15\\nOPTICAL PATCH CORD,NET-OPT-SC,Networking,450,100";
                const encodedUri = encodeURI(csvContent);
                const link = document.createElement("a");
                link.setAttribute("href", encodedUri);
                link.setAttribute("download", "sample_products.csv");
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
            }

            function deleteProduct(id) {
                let products = loadProducts();
                products = products.filter(p => p.id !== id);
                saveProducts(products);
            }

            function filterProducts() {
                const search = document.getElementById('search-product').value.toLowerCase();
                const category = document.getElementById('filter-category').value;
                const products = loadProducts();

                const filtered = products.filter(p => {
                    const matchesSearch = p.name.toLowerCase().includes(search) || p.sku.toLowerCase().includes(search);
                    const matchesCategory = category === 'all' || p.category === category;
                    return matchesSearch && matchesCategory;
                });

                renderProducts(filtered);
            }

            // Initialize on load
            document.addEventListener('DOMContentLoaded', () => {
                renderProducts();
            });
            renderProducts();
        </script>`;
  }

  if (id === 'categories') {
    return mainHeader + `
            <!-- Categories Module -->
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                <div class="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm">
                    <p class="text-xs font-bold text-slate-400 uppercase">Total Categories</p>
                    <h3 class="text-2xl font-black text-slate-900 mt-1">10</h3>
                </div>
                <div class="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm">
                    <p class="text-xs font-bold text-slate-400 uppercase">Active Categories</p>
                    <h3 class="text-2xl font-black text-slate-900 mt-1">10</h3>
                </div>
                <div class="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm">
                    <p class="text-xs font-bold text-slate-400 uppercase">Top Category</p>
                    <h3 class="text-2xl font-black text-slate-900 mt-1">Laptops</h3>
                </div>
                <div class="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm">
                    <p class="text-xs font-bold text-slate-400 uppercase">Total Products</p>
                    <h3 class="text-2xl font-black text-slate-900 mt-1">1,240</h3>
                </div>
            </div>

            <div class="bg-white rounded-3xl border border-slate-100 shadow-sm overflow-hidden">
                <table class="w-full text-left border-collapse">
                    <thead>
                        <tr class="border-b border-slate-100 text-[11px] uppercase font-bold text-slate-400 bg-slate-50/50">
                            <th class="py-4 px-6">Category Name</th>
                            <th class="py-4 px-6">Slug</th>
                            <th class="py-4 px-6">Products Count</th>
                            <th class="py-4 px-6">Status</th>
                            <th class="py-4 px-6 text-right">Actions</th>
                        </tr>
                    </thead>
                    <tbody class="divide-y divide-slate-100 text-sm font-medium">
                        <tr class="hover:bg-slate-50/50 transition-colors">
                            <td class="py-4 px-6 font-bold text-slate-900">💻 Laptops & Computers</td>
                            <td class="py-4 px-6 text-slate-500">/laptops</td>
                            <td class="py-4 px-6 text-slate-800 font-bold">342 items</td>
                            <td class="py-4 px-6"><span class="px-2.5 py-1 rounded-full text-xs font-bold bg-emerald-50 text-emerald-600">Active</span></td>
                            <td class="py-4 px-6 text-right space-x-2">
                                <button class="text-xs font-bold text-slate-600 hover:text-emerald-600">Edit</button>
                                <button class="text-xs font-bold text-red-500 hover:text-red-700">Delete</button>
                            </td>
                        </tr>
                        <tr class="hover:bg-slate-50/50 transition-colors">
                            <td class="py-4 px-6 font-bold text-slate-900">⌚ Smartwatches & Trackers</td>
                            <td class="py-4 px-6 text-slate-500">/smartwatches</td>
                            <td class="py-4 px-6 text-slate-800 font-bold">184 items</td>
                            <td class="py-4 px-6"><span class="px-2.5 py-1 rounded-full text-xs font-bold bg-emerald-50 text-emerald-600">Active</span></td>
                            <td class="py-4 px-6 text-right space-x-2">
                                <button class="text-xs font-bold text-slate-600 hover:text-emerald-600">Edit</button>
                                <button class="text-xs font-bold text-red-500 hover:text-red-700">Delete</button>
                            </td>
                        </tr>
                        <tr class="hover:bg-slate-50/50 transition-colors">
                            <td class="py-4 px-6 font-bold text-slate-900">🎧 Audio & Headphones</td>
                            <td class="py-4 px-6 text-slate-500">/audio</td>
                            <td class="py-4 px-6 text-slate-800 font-bold">215 items</td>
                            <td class="py-4 px-6"><span class="px-2.5 py-1 rounded-full text-xs font-bold bg-emerald-50 text-emerald-600">Active</span></td>
                            <td class="py-4 px-6 text-right space-x-2">
                                <button class="text-xs font-bold text-slate-600 hover:text-emerald-600">Edit</button>
                                <button class="text-xs font-bold text-red-500 hover:text-red-700">Delete</button>
                            </td>
                        </tr>
                        <tr class="hover:bg-slate-50/50 transition-colors">
                            <td class="py-4 px-6 font-bold text-slate-900">📱 Mobile & Accessories</td>
                            <td class="py-4 px-6 text-slate-500">/mobile-accessories</td>
                            <td class="py-4 px-6 text-slate-800 font-bold">190 items</td>
                            <td class="py-4 px-6"><span class="px-2.5 py-1 rounded-full text-xs font-bold bg-emerald-50 text-emerald-600">Active</span></td>
                            <td class="py-4 px-6 text-right space-x-2">
                                <button class="text-xs font-bold text-slate-600 hover:text-emerald-600">Edit</button>
                                <button class="text-xs font-bold text-red-500 hover:text-red-700">Delete</button>
                            </td>
                        </tr>
                        <tr class="hover:bg-slate-50/50 transition-colors">
                            <td class="py-4 px-6 font-bold text-slate-900">💾 Storage & Hard Drives</td>
                            <td class="py-4 px-6 text-slate-500">/storage</td>
                            <td class="py-4 px-6 text-slate-800 font-bold">95 items</td>
                            <td class="py-4 px-6"><span class="px-2.5 py-1 rounded-full text-xs font-bold bg-emerald-50 text-emerald-600">Active</span></td>
                            <td class="py-4 px-6 text-right space-x-2">
                                <button class="text-xs font-bold text-slate-600 hover:text-emerald-600">Edit</button>
                                <button class="text-xs font-bold text-red-500 hover:text-red-700">Delete</button>
                            </td>
                        </tr>
                        <tr class="hover:bg-slate-50/50 transition-colors">
                            <td class="py-4 px-6 font-bold text-slate-900">🔒 Biometrics & Security</td>
                            <td class="py-4 px-6 text-slate-500">/biometrics</td>
                            <td class="py-4 px-6 text-slate-800 font-bold">114 items</td>
                            <td class="py-4 px-6"><span class="px-2.5 py-1 rounded-full text-xs font-bold bg-emerald-50 text-emerald-600">Active</span></td>
                            <td class="py-4 px-6 text-right space-x-2">
                                <button class="text-xs font-bold text-slate-600 hover:text-emerald-600">Edit</button>
                                <button class="text-xs font-bold text-red-500 hover:text-red-700">Delete</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </main>`;
  }

  if (id === 'orders') {
    return mainHeader + `
            <!-- Orders Module -->
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                <div class="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm">
                    <p class="text-xs font-bold text-slate-400 uppercase">Pending Orders</p>
                    <h3 class="text-2xl font-black text-amber-500 mt-1">14</h3>
                </div>
                <div class="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm">
                    <p class="text-xs font-bold text-slate-400 uppercase">Processing</p>
                    <h3 class="text-2xl font-black text-blue-500 mt-1">28</h3>
                </div>
                <div class="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm">
                    <p class="text-xs font-bold text-slate-400 uppercase">Completed</p>
                    <h3 class="text-2xl font-black text-emerald-500 mt-1">1,842</h3>
                </div>
                <div class="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm">
                    <p class="text-xs font-bold text-slate-400 uppercase">Cancelled</p>
                    <h3 class="text-2xl font-black text-red-500 mt-1">3</h3>
                </div>
            </div>

            <div class="bg-white rounded-3xl border border-slate-100 shadow-sm overflow-hidden">
                <table class="w-full text-left border-collapse">
                    <thead>
                        <tr class="border-b border-slate-100 text-[11px] uppercase font-bold text-slate-400 bg-slate-50/50">
                            <th class="py-4 px-6">Order ID</th>
                            <th class="py-4 px-6">Customer</th>
                            <th class="py-4 px-6">Date</th>
                            <th class="py-4 px-6">Payment</th>
                            <th class="py-4 px-6">Total</th>
                            <th class="py-4 px-6">Status</th>
                            <th class="py-4 px-6 text-right">Actions</th>
                        </tr>
                    </thead>
                    <tbody class="divide-y divide-slate-100 text-sm font-medium">
                        <tr class="hover:bg-slate-50/50 transition-colors">
                            <td class="py-4 px-6 font-bold text-slate-900">#ENX-9482</td>
                            <td class="py-4 px-6">
                                <p class="font-bold text-slate-900">Ranjit Manaraja</p>
                                <p class="text-xs text-slate-400">ranjitmanaraja@gmail.com</p>
                            </td>
                            <td class="py-4 px-6 text-slate-500">Sep 2, 2026</td>
                            <td class="py-4 px-6 text-slate-700">eSewa Pay</td>
                            <td class="py-4 px-6 font-black text-slate-900">Rs 139,920.00</td>
                            <td class="py-4 px-6"><span class="px-2.5 py-1 rounded-full text-xs font-bold bg-emerald-50 text-emerald-600">Completed</span></td>
                            <td class="py-4 px-6 text-right">
                                <button class="text-xs font-bold text-blue-600 hover:text-blue-800">View</button>
                            </td>
                        </tr>
                        <tr class="hover:bg-slate-50/50 transition-colors">
                            <td class="py-4 px-6 font-bold text-slate-900">#ENX-9481</td>
                            <td class="py-4 px-6">
                                <p class="font-bold text-slate-900">Samikshya Shrestha</p>
                                <p class="text-xs text-slate-400">samikshya@example.com</p>
                            </td>
                            <td class="py-4 px-6 text-slate-500">Sep 2, 2026</td>
                            <td class="py-4 px-6 text-slate-700">Khalti Pay</td>
                            <td class="py-4 px-6 font-black text-slate-900">Rs 32,000.00</td>
                            <td class="py-4 px-6"><span class="px-2.5 py-1 rounded-full text-xs font-bold bg-blue-50 text-blue-600">Processing</span></td>
                            <td class="py-4 px-6 text-right">
                                <button class="text-xs font-bold text-blue-600 hover:text-blue-800">View</button>
                            </td>
                        </tr>
                        <tr class="hover:bg-slate-50/50 transition-colors">
                            <td class="py-4 px-6 font-bold text-slate-900">#ENX-9480</td>
                            <td class="py-4 px-6">
                                <p class="font-bold text-slate-900">Bikram Thapa</p>
                                <p class="text-xs text-slate-400">bikram@gmail.com</p>
                            </td>
                            <td class="py-4 px-6 text-slate-500">Sep 1, 2026</td>
                            <td class="py-4 px-6 text-slate-700">Cash on Delivery</td>
                            <td class="py-4 px-6 font-black text-slate-900">Rs 14,500.00</td>
                            <td class="py-4 px-6"><span class="px-2.5 py-1 rounded-full text-xs font-bold bg-amber-50 text-amber-600">Pending</span></td>
                            <td class="py-4 px-6 text-right">
                                <button class="text-xs font-bold text-blue-600 hover:text-blue-800">View</button>
                            </td>
                        </tr>
                        <tr class="hover:bg-slate-50/50 transition-colors">
                            <td class="py-4 px-6 font-bold text-slate-900">#ENX-9479</td>
                            <td class="py-4 px-6">
                                <p class="font-bold text-slate-900">Priya Sharma</p>
                                <p class="text-xs text-slate-400">priya@gmail.com</p>
                            </td>
                            <td class="py-4 px-6 text-slate-500">Aug 31, 2026</td>
                            <td class="py-4 px-6 text-slate-700">FonePay QR</td>
                            <td class="py-4 px-6 font-black text-slate-900">Rs 81,250.00</td>
                            <td class="py-4 px-6"><span class="px-2.5 py-1 rounded-full text-xs font-bold bg-purple-50 text-purple-600">Shipped</span></td>
                            <td class="py-4 px-6 text-right">
                                <button class="text-xs font-bold text-blue-600 hover:text-blue-800">View</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </main>`;
  }

  if (id === 'payments') {
    return mainHeader + `
            <!-- Payments Module -->
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                <div class="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm">
                    <p class="text-xs font-bold text-slate-400 uppercase">Total Volume</p>
                    <h3 class="text-2xl font-black text-slate-900 mt-1">$45,231.89</h3>
                </div>
                <div class="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm">
                    <p class="text-xs font-bold text-slate-400 uppercase">Successful</p>
                    <h3 class="text-2xl font-black text-emerald-600 mt-1">2,310</h3>
                </div>
                <div class="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm">
                    <p class="text-xs font-bold text-slate-400 uppercase">Pending Payouts</p>
                    <h3 class="text-2xl font-black text-amber-500 mt-1">$3,420.00</h3>
                </div>
                <div class="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm">
                    <p class="text-xs font-bold text-slate-400 uppercase">Failed Payments</p>
                    <h3 class="text-2xl font-black text-slate-900 mt-1">0.4%</h3>
                </div>
            </div>

            <div class="bg-white rounded-3xl border border-slate-100 shadow-sm overflow-hidden">
                <table class="w-full text-left border-collapse">
                    <thead>
                        <tr class="border-b border-slate-100 text-[11px] uppercase font-bold text-slate-400 bg-slate-50/50">
                            <th class="py-4 px-6">Transaction ID</th>
                            <th class="py-4 px-6">Gateway</th>
                            <th class="py-4 px-6">Order Ref</th>
                            <th class="py-4 px-6">Amount</th>
                            <th class="py-4 px-6">Status</th>
                            <th class="py-4 px-6 text-right">Date</th>
                        </tr>
                    </thead>
                    <tbody class="divide-y divide-slate-100 text-sm font-medium">
                        <tr class="hover:bg-slate-50/50 transition-colors">
                            <td class="py-4 px-6 font-bold text-slate-900">TXN-884920</td>
                            <td class="py-4 px-6 text-slate-700">eSewa Mobile Wallet</td>
                            <td class="py-4 px-6 text-blue-600 font-semibold">#ENX-9482</td>
                            <td class="py-4 px-6 font-black text-slate-900">Rs 139,920.00</td>
                            <td class="py-4 px-6"><span class="px-2.5 py-1 rounded-full text-xs font-bold bg-emerald-50 text-emerald-600">Success</span></td>
                            <td class="py-4 px-6 text-right text-slate-500">Sep 2, 2026</td>
                        </tr>
                        <tr class="hover:bg-slate-50/50 transition-colors">
                            <td class="py-4 px-6 font-bold text-slate-900">TXN-884919</td>
                            <td class="py-4 px-6 text-slate-700">Khalti Wallet</td>
                            <td class="py-4 px-6 text-blue-600 font-semibold">#ENX-9481</td>
                            <td class="py-4 px-6 font-black text-slate-900">Rs 32,000.00</td>
                            <td class="py-4 px-6"><span class="px-2.5 py-1 rounded-full text-xs font-bold bg-emerald-50 text-emerald-600">Success</span></td>
                            <td class="py-4 px-6 text-right text-slate-500">Sep 2, 2026</td>
                        </tr>
                        <tr class="hover:bg-slate-50/50 transition-colors">
                            <td class="py-4 px-6 font-bold text-slate-900">TXN-884918</td>
                            <td class="py-4 px-6 text-slate-700">Cash on Delivery</td>
                            <td class="py-4 px-6 text-blue-600 font-semibold">#ENX-9480</td>
                            <td class="py-4 px-6 font-black text-slate-900">Rs 14,500.00</td>
                            <td class="py-4 px-6"><span class="px-2.5 py-1 rounded-full text-xs font-bold bg-amber-50 text-amber-600">Pending COD</span></td>
                            <td class="py-4 px-6 text-right text-slate-500">Sep 1, 2026</td>
                        </tr>
                        <tr class="hover:bg-slate-50/50 transition-colors">
                            <td class="py-4 px-6 font-bold text-slate-900">TXN-884917</td>
                            <td class="py-4 px-6 text-slate-700">FonePay QR</td>
                            <td class="py-4 px-6 text-blue-600 font-semibold">#ENX-9479</td>
                            <td class="py-4 px-6 font-black text-slate-900">Rs 81,250.00</td>
                            <td class="py-4 px-6"><span class="px-2.5 py-1 rounded-full text-xs font-bold bg-emerald-50 text-emerald-600">Success</span></td>
                            <td class="py-4 px-6 text-right text-slate-500">Aug 31, 2026</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </main>`;
  }

  if (id === 'users') {
    return mainHeader + `
            <!-- Users Module -->
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                <div class="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm">
                    <p class="text-xs font-bold text-slate-400 uppercase">Total Registered Users</p>
                    <h3 class="text-2xl font-black text-slate-900 mt-1">12,234</h3>
                </div>
                <div class="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm">
                    <p class="text-xs font-bold text-slate-400 uppercase">Super Admins</p>
                    <h3 class="text-2xl font-black text-purple-600 mt-1">1</h3>
                </div>
                <div class="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm">
                    <p class="text-xs font-bold text-slate-400 uppercase">Sub Admins</p>
                    <h3 class="text-2xl font-black text-blue-600 mt-1">4</h3>
                </div>
                <div class="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm">
                    <p class="text-xs font-bold text-slate-400 uppercase">Customers</p>
                    <h3 class="text-2xl font-black text-emerald-600 mt-1">12,229</h3>
                </div>
            </div>

            <div class="bg-white rounded-3xl border border-slate-100 shadow-sm overflow-hidden">
                <table class="w-full text-left border-collapse">
                    <thead>
                        <tr class="border-b border-slate-100 text-[11px] uppercase font-bold text-slate-400 bg-slate-50/50">
                            <th class="py-4 px-6">User</th>
                            <th class="py-4 px-6">Role</th>
                            <th class="py-4 px-6">Orders</th>
                            <th class="py-4 px-6">Joined Date</th>
                            <th class="py-4 px-6">Status</th>
                            <th class="py-4 px-6 text-right">Actions</th>
                        </tr>
                    </thead>
                    <tbody class="divide-y divide-slate-100 text-sm font-medium">
                        <tr class="hover:bg-slate-50/50 transition-colors">
                            <td class="py-4 px-6 flex items-center gap-3">
                                <div class="w-9 h-9 rounded-full bg-emerald-100 text-emerald-800 font-bold flex items-center justify-center text-xs">M</div>
                                <div>
                                    <p class="font-bold text-slate-900">Manaraja Ranjit</p>
                                    <p class="text-xs text-slate-400">ranjitmanaraja@gmail.com</p>
                                </div>
                            </td>
                            <td class="py-4 px-6"><span class="px-2.5 py-1 rounded-full text-xs font-bold bg-purple-50 text-purple-600">Super Admin</span></td>
                            <td class="py-4 px-6 text-slate-600 font-bold">48 orders</td>
                            <td class="py-4 px-6 text-slate-500">May 8, 2026</td>
                            <td class="py-4 px-6"><span class="px-2.5 py-1 rounded-full text-xs font-bold bg-emerald-50 text-emerald-600">Active</span></td>
                            <td class="py-4 px-6 text-right space-x-2">
                                <button class="text-xs font-bold text-slate-600 hover:text-emerald-600">Edit</button>
                            </td>
                        </tr>
                        <tr class="hover:bg-slate-50/50 transition-colors">
                            <td class="py-4 px-6 flex items-center gap-3">
                                <div class="w-9 h-9 rounded-full bg-blue-100 text-blue-800 font-bold flex items-center justify-center text-xs">S</div>
                                <div>
                                    <p class="font-bold text-slate-900">Samikshya Shrestha</p>
                                    <p class="text-xs text-slate-400">samikshya@example.com</p>
                                </div>
                            </td>
                            <td class="py-4 px-6"><span class="px-2.5 py-1 rounded-full text-xs font-bold bg-blue-50 text-blue-600">Customer</span></td>
                            <td class="py-4 px-6 text-slate-600">3 orders</td>
                            <td class="py-4 px-6 text-slate-500">Jun 12, 2026</td>
                            <td class="py-4 px-6"><span class="px-2.5 py-1 rounded-full text-xs font-bold bg-emerald-50 text-emerald-600">Active</span></td>
                            <td class="py-4 px-6 text-right space-x-2">
                                <button class="text-xs font-bold text-slate-600 hover:text-emerald-600">Edit</button>
                                <button class="text-xs font-bold text-red-500 hover:text-red-700">Block</button>
                            </td>
                        </tr>
                        <tr class="hover:bg-slate-50/50 transition-colors">
                            <td class="py-4 px-6 flex items-center gap-3">
                                <div class="w-9 h-9 rounded-full bg-amber-100 text-amber-800 font-bold flex items-center justify-center text-xs">B</div>
                                <div>
                                    <p class="font-bold text-slate-900">Bikram Thapa</p>
                                    <p class="text-xs text-slate-400">bikram@gmail.com</p>
                                </div>
                            </td>
                            <td class="py-4 px-6"><span class="px-2.5 py-1 rounded-full text-xs font-bold bg-blue-50 text-blue-600">Customer</span></td>
                            <td class="py-4 px-6 text-slate-600">12 orders</td>
                            <td class="py-4 px-6 text-slate-500">Jul 1, 2026</td>
                            <td class="py-4 px-6"><span class="px-2.5 py-1 rounded-full text-xs font-bold bg-red-50 text-red-600">Suspended</span></td>
                            <td class="py-4 px-6 text-right space-x-2">
                                <button class="text-xs font-bold text-slate-600 hover:text-emerald-600">Edit</button>
                                <button class="text-xs font-bold text-emerald-600 hover:text-emerald-800">Unblock</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </main>`;
  }

  if (id === 'coupons') {
    return mainHeader + `
            <!-- Coupons Module -->
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div class="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm relative overflow-hidden">
                    <div class="flex items-center justify-between mb-4">
                        <span class="px-3 py-1 rounded-full text-xs font-extrabold bg-emerald-50 text-emerald-600">ACTIVE</span>
                        <span class="text-xs font-bold text-slate-400">Used 450 times</span>
                    </div>
                    <h3 class="text-xl font-black text-slate-900 tracking-wider">ENEXT50</h3>
                    <p class="text-xs font-medium text-slate-500 mt-1">50% OFF up to Rs 5,000 on all electronics</p>
                    <div class="mt-4 pt-4 border-t border-slate-50 flex items-center justify-between text-xs text-slate-400 font-medium">
                        <span>Expires: Sep 30, 2026</span>
                        <button class="font-bold text-red-500 hover:text-red-700">Deactivate</button>
                    </div>
                </div>

                <div class="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm relative overflow-hidden">
                    <div class="flex items-center justify-between mb-4">
                        <span class="px-3 py-1 rounded-full text-xs font-extrabold bg-emerald-50 text-emerald-600">ACTIVE</span>
                        <span class="text-xs font-bold text-slate-400">Used 1,230 times</span>
                    </div>
                    <h3 class="text-xl font-black text-slate-900 tracking-wider">WELCOME10</h3>
                    <p class="text-xs font-medium text-slate-500 mt-1">10% OFF site-wide for new users</p>
                    <div class="mt-4 pt-4 border-t border-slate-50 flex items-center justify-between text-xs text-slate-400 font-medium">
                        <span>Expires: Dec 31, 2026</span>
                        <button class="font-bold text-red-500 hover:text-red-700">Deactivate</button>
                    </div>
                </div>

                <div class="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm relative overflow-hidden">
                    <div class="flex items-center justify-between mb-4">
                        <span class="px-3 py-1 rounded-full text-xs font-extrabold bg-blue-50 text-blue-600">SCHEDULED</span>
                        <span class="text-xs font-bold text-slate-400">Used 0 times</span>
                    </div>
                    <h3 class="text-xl font-black text-slate-900 tracking-wider">FESTIVE2026</h3>
                    <p class="text-xs font-medium text-slate-500 mt-1">Flat Rs 1,000 OFF on order above Rs 10,000</p>
                    <div class="mt-4 pt-4 border-t border-slate-50 flex items-center justify-between text-xs text-slate-400 font-medium">
                        <span>Starts: Oct 1, 2026</span>
                        <button class="font-bold text-slate-600 hover:text-slate-900">Edit</button>
                    </div>
                </div>
            </div>
        </main>`;
  }

  if (id === 'shipping') {
    return mainHeader + `
            <!-- Shipping Module -->
            <div class="bg-white rounded-3xl border border-slate-100 shadow-sm overflow-hidden">
                <table class="w-full text-left border-collapse">
                    <thead>
                        <tr class="border-b border-slate-100 text-[11px] uppercase font-bold text-slate-400 bg-slate-50/50">
                            <th class="py-4 px-6">Shipping Zone</th>
                            <th class="py-4 px-6">Regions / Cities</th>
                            <th class="py-4 px-6">Delivery Time</th>
                            <th class="py-4 px-6">Shipping Rate</th>
                            <th class="py-4 px-6">Status</th>
                            <th class="py-4 px-6 text-right">Actions</th>
                        </tr>
                    </thead>
                    <tbody class="divide-y divide-slate-100 text-sm font-medium">
                        <tr class="hover:bg-slate-50/50 transition-colors">
                            <td class="py-4 px-6 font-bold text-slate-900">Kathmandu Valley</td>
                            <td class="py-4 px-6 text-slate-600">Kathmandu, Lalitpur, Bhaktapur</td>
                            <td class="py-4 px-6 text-slate-500">1 - 2 Days</td>
                            <td class="py-4 px-6 font-black text-slate-900">Rs 100.00</td>
                            <td class="py-4 px-6"><span class="px-2.5 py-1 rounded-full text-xs font-bold bg-emerald-50 text-emerald-600">Active</span></td>
                            <td class="py-4 px-6 text-right space-x-2">
                                <button class="text-xs font-bold text-slate-600 hover:text-emerald-600">Edit</button>
                            </td>
                        </tr>
                        <tr class="hover:bg-slate-50/50 transition-colors">
                            <td class="py-4 px-6 font-bold text-slate-900">Major Cities (Outside Valley)</td>
                            <td class="py-4 px-6 text-slate-600">Pokhara, Biratnagar, Chitwan, Butwal</td>
                            <td class="py-4 px-6 text-slate-500">2 - 4 Days</td>
                            <td class="py-4 px-6 font-black text-slate-900">Rs 250.00</td>
                            <td class="py-4 px-6"><span class="px-2.5 py-1 rounded-full text-xs font-bold bg-emerald-50 text-emerald-600">Active</span></td>
                            <td class="py-4 px-6 text-right space-x-2">
                                <button class="text-xs font-bold text-slate-600 hover:text-emerald-600">Edit</button>
                            </td>
                        </tr>
                        <tr class="hover:bg-slate-50/50 transition-colors">
                            <td class="py-4 px-6 font-bold text-slate-900">Remote Districts</td>
                            <td class="py-4 px-6 text-slate-600">All other Nepal courier locations</td>
                            <td class="py-4 px-6 text-slate-500">4 - 7 Days</td>
                            <td class="py-4 px-6 font-black text-slate-900">Rs 400.00</td>
                            <td class="py-4 px-6"><span class="px-2.5 py-1 rounded-full text-xs font-bold bg-emerald-50 text-emerald-600">Active</span></td>
                            <td class="py-4 px-6 text-right space-x-2">
                                <button class="text-xs font-bold text-slate-600 hover:text-emerald-600">Edit</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </main>`;
  }

  if (id === 'settings') {
    return mainHeader + `
            <!-- Settings Module -->
            <div class="bg-white rounded-3xl border border-slate-100 shadow-sm p-8 max-w-4xl space-y-8">
                <div>
                    <h3 class="text-lg font-bold text-slate-900 mb-4 border-b border-slate-100 pb-2">General Store Settings</h3>
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label class="block text-xs font-bold text-slate-600 uppercase mb-2">Store Name</label>
                            <input type="text" value="enext - Premium Wearable Electronics" class="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 text-sm font-medium focus:outline-none focus:border-[#95DBAE]">
                        </div>
                        <div>
                            <label class="block text-xs font-bold text-slate-600 uppercase mb-2">Support Email</label>
                            <input type="email" value="ranjitmanaraja@gmail.com" class="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 text-sm font-medium focus:outline-none focus:border-[#95DBAE]">
                        </div>
                        <div>
                            <label class="block text-xs font-bold text-slate-600 uppercase mb-2">Phone Number</label>
                            <input type="text" value="+977 9800000000" class="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 text-sm font-medium focus:outline-none focus:border-[#95DBAE]">
                        </div>
                        <div>
                            <label class="block text-xs font-bold text-slate-600 uppercase mb-2">Store Currency</label>
                            <select class="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 text-sm font-medium focus:outline-none focus:border-[#95DBAE]">
                                <option>NPR - Nepalese Rupee (Rs)</option>
                                <option>USD - US Dollar ($)</option>
                            </select>
                        </div>
                    </div>
                </div>

                <div>
                    <h3 class="text-lg font-bold text-slate-900 mb-4 border-b border-slate-100 pb-2">Payment Gateways</h3>
                    <div class="space-y-4">
                        <div class="flex items-center justify-between p-4 bg-slate-50 rounded-2xl border border-slate-100">
                            <div>
                                <p class="font-bold text-slate-900 text-sm">eSewa Wallet Integration</p>
                                <p class="text-xs text-slate-400">Accept online payments via eSewa</p>
                            </div>
                            <input type="checkbox" checked class="w-5 h-5 accent-emerald-500 rounded cursor-pointer">
                        </div>
                        <div class="flex items-center justify-between p-4 bg-slate-50 rounded-2xl border border-slate-100">
                            <div>
                                <p class="font-bold text-slate-900 text-sm">Khalti Payment Gateway</p>
                                <p class="text-xs text-slate-400">Accept mobile wallet payments via Khalti</p>
                            </div>
                            <input type="checkbox" checked class="w-5 h-5 accent-emerald-500 rounded cursor-pointer">
                        </div>
                        <div class="flex items-center justify-between p-4 bg-slate-50 rounded-2xl border border-slate-100">
                            <div>
                                <p class="font-bold text-slate-900 text-sm">Cash on Delivery (COD)</p>
                                <p class="text-xs text-slate-400">Allow customers to pay upon package delivery</p>
                            </div>
                            <input type="checkbox" checked class="w-5 h-5 accent-emerald-500 rounded cursor-pointer">
                        </div>
                    </div>
                </div>
            </div>
        </main>`;
  }

  // Fallback (for dashboard, we use existing template)
  return mainHeader + `</main>`;
}

// Generate files
const adminDashboardTemplate = fs.existsSync(path.join(__dirname, '../admin/index.html'))
  ? fs.readFileSync(path.join(__dirname, '../admin/index.html'), 'utf8')
  : '';

pagesConfig.forEach(page => {
  let fullHtml = '';
  
  if (page.id === 'dashboard') {
    // Preserve dashboard overview charts and cards
    fullHtml = getLayoutHeader(page.title, page.btnText) +
               getSidebar(page.id) +
               getTopbar() +
               adminDashboardTemplate.substring(adminDashboardTemplate.indexOf('<main class="p-8 space-y-8 max-w-7xl mx-auto w-full">')) +
               `\n</body>\n</html>`;
  } else {
    fullHtml = getLayoutHeader(page.title, page.btnText) +
               getSidebar(page.id) +
               getTopbar() +
               getPageContent(page.id, page.title, page.btnText) +
               `\n    </div>\n</body>\n</html>`;
  }

  const fullPath = path.join(__dirname, '../', page.path);
  fs.mkdirSync(path.dirname(fullPath), { recursive: true });
  fs.writeFileSync(fullPath, fullHtml);
});

console.log('All 9 Admin Module pages built successfully!');
