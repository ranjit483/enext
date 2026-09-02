const fs = require('fs');
const path = require('path');

const adminTemplatePath = path.join(__dirname, '../pages/admin.html');
let template = fs.readFileSync(adminTemplatePath, 'utf8');

const pages = [
  { id: 'dashboard', path: 'admin/index.html', title: 'Dashboard Overview', activeUrl: '/admin' },
  { id: 'products', path: 'admin/products/index.html', title: 'Products', activeUrl: '/admin/products' },
  { id: 'categories', path: 'admin/categories/index.html', title: 'Categories', activeUrl: '/admin/categories' },
  { id: 'orders', path: 'admin/orders/index.html', title: 'Orders', activeUrl: '/admin/orders' },
  { id: 'payments', path: 'admin/payments/index.html', title: 'Payments', activeUrl: '/admin/payments' },
  { id: 'users', path: 'admin/users/index.html', title: 'Users', activeUrl: '/admin/users' },
  { id: 'coupons', path: 'admin/coupons/index.html', title: 'Coupons', activeUrl: '/admin/coupons' },
  { id: 'shipping', path: 'admin/shipping/index.html', title: 'Shipping', activeUrl: '/admin/shipping' },
  { id: 'settings', path: 'admin/settings/index.html', title: 'Settings', activeUrl: '/admin/settings' }
];

const sidebarRegex = /<nav class="flex-1 px-4 py-6 space-y-1.5 font-medium text-sm">[\s\S]*?<\/nav>/;

pages.forEach(page => {
  let newSidebar = `<nav class="flex-1 px-4 py-6 space-y-1.5 font-medium text-sm">\n`;
  
  pages.forEach(p => {
    const isActive = p.id === page.id;
    const activeClasses = isActive 
      ? `bg-[#95DBAE] text-slate-900 font-bold shadow-md` 
      : `text-slate-400 hover:text-white hover:bg-slate-800/60 transition-colors`;
    
    // Using same icon for all for simplicity in script, or extract from template
    let icon = `<svg class="w-5 h-5 ${isActive ? 'text-slate-900' : ''}" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"></path></svg>`;
    
    newSidebar += `            <a href="${p.activeUrl}" class="flex items-center gap-3 px-4 py-3 rounded-xl ${activeClasses}">
                ${icon}
                ${p.title}
            </a>\n`;
  });
  newSidebar += `        </nav>`;

  let pageHtml = template.replace(sidebarRegex, newSidebar);
  
  // Replace Title
  pageHtml = pageHtml.replace(/<h1 class="text-2xl font-extrabold text-slate-900">Dashboard Overview<\/h1>/, `<h1 class="text-2xl font-extrabold text-slate-900">${page.title}</h1>`);
  
  // Clear the main body content if it's not the dashboard so it's not duplicated everywhere
  if (page.id !== 'dashboard') {
    pageHtml = pageHtml.replace(/<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">[\s\S]*?<\/main>/, `<div class="p-6 bg-white rounded-3xl border border-slate-100 shadow-sm mt-8"><p class="text-slate-500">${page.title} module coming soon...</p></div></main>`);
  }

  const fullPath = path.join(__dirname, '../', page.path);
  fs.mkdirSync(path.dirname(fullPath), { recursive: true });
  fs.writeFileSync(fullPath, pageHtml);
});

console.log('Admin pages generated.');
