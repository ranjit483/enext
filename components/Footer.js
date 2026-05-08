export function renderFooter() {
  return `
    <footer class="bg-[#AAD792] text-black pt-16 pb-8 border-t border-black/10">
      <div class="container mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          <!-- Company Info -->
          <div>
            <div class="flex items-center gap-2 mb-6">
              <div class="w-8 h-8 rounded-lg bg-black flex items-center justify-center text-[#AAD792] font-bold text-lg">e</div>
              <span class="font-bold text-xl tracking-tight text-black">enext</span>
            </div>
            <p class="text-sm mb-6 text-black/70">Pioneering the future of wearable technology and smart living.</p>
            <div class="flex space-x-4">
              <!-- Social Icons -->
              <a href="#" class="w-10 h-10 rounded-full bg-black/5 flex items-center justify-center hover:bg-black hover:text-[#AAD792] transition-colors">
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg>
              </a>
              <a href="#" class="w-10 h-10 rounded-full bg-black/5 flex items-center justify-center hover:bg-black hover:text-[#AAD792] transition-colors">
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
              </a>
            </div>
          </div>

          <!-- Quick Links -->
          <div>
            <h4 class="text-black font-semibold mb-6">Quick Links</h4>
            <ul class="space-y-3 text-sm">
              <li><a href="/pages/shop.html" class="hover:text-black/70 transition-colors">Shop All</a></li>
              <li><a href="/pages/about.html" class="hover:text-black/70 transition-colors">About Us</a></li>
              <li><a href="/pages/contact.html" class="hover:text-black/70 transition-colors">Contact</a></li>
              <li><a href="/pages/faq.html" class="hover:text-black/70 transition-colors">FAQ</a></li>
            </ul>
          </div>

          <!-- Policies -->
          <div>
            <h4 class="text-black font-semibold mb-6">Policies</h4>
            <ul class="space-y-3 text-sm">
              <li><a href="/pages/terms.html" class="hover:text-black/70 transition-colors">Terms & Conditions</a></li>
              <li><a href="/pages/privacy.html" class="hover:text-black/70 transition-colors">Privacy Policy</a></li>
              <li><a href="/pages/refund.html" class="hover:text-black/70 transition-colors">Refund Policy</a></li>
              <li><a href="/pages/warranty.html" class="hover:text-black/70 transition-colors">Warranty Policy</a></li>
            </ul>
          </div>

          <!-- Newsletter & Contact -->
          <div>
            <h4 class="text-black font-semibold mb-6">Stay Updated</h4>
            <form class="mb-6 relative">
              <input type="email" placeholder="Enter your email" class="w-full bg-black/5 border border-black/10 rounded-lg py-3 px-4 text-sm text-black focus:ring-2 focus:ring-black outline-none placeholder-black/50">
              <button type="submit" class="absolute right-2 top-2 bottom-2 bg-black text-[#AAD792] px-4 rounded-md text-xs font-semibold transition-colors">Subscribe</button>
            </form>
            <div class="text-sm space-y-2">
              <p class="flex items-start gap-2 text-black/70">
                <svg class="w-5 h-5 text-black shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                <span>Bhimsen Sthan, Paropakar Marg,<br>Kathmandu-20 Bagmati,<br>Pradesh 2041, Nepal</span>
              </p>
              <p class="flex items-center gap-2 text-black/70">
                <svg class="w-5 h-5 text-black shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                <span>+977-1-5355275</span>
              </p>
              <div class="flex items-center gap-2 text-black/70">
                <svg class="w-5 h-5 text-black shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                <div class="flex flex-col">
                  <a href="mailto:support24@next-tech.com.np" class="hover:text-black">support24@next-tech.com.np</a>
                  <a href="mailto:info@next-tech.com.np" class="hover:text-black">info@next-tech.com.np</a>
                </div>
              </div>
            </div>
          </div>

        </div>
        
        <div class="border-t border-black/10 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-black/50">
          <p>Copyright &copy; ${new Date().getFullYear()} enext. Powered by Next technology Pvt.Ltd</p>
          <div class="mt-4 md:mt-0 flex space-x-4">
            <img src="https://via.placeholder.com/40x25/000000/ffffff?text=Visa" alt="Visa" class="rounded">
            <img src="https://via.placeholder.com/40x25/000000/ffffff?text=eSewa" alt="eSewa" class="rounded">
            <img src="https://via.placeholder.com/40x25/000000/ffffff?text=Khalti" alt="Khalti" class="rounded">
          </div>
        </div>
      </div>
    </footer>
  `;
}

