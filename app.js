/* ============================================================
   APP LOGIC — isse edit karne ki zaroorat nahi hai.
   Sirf products.js edit karo naye products add karne ke liye.
   ============================================================ */

const CATEGORY_LABELS = {
  atv: "ATV",
  utv: "UTV",
  dirtbike: "Dirt Bike"
};

let currentFilter = "all";

/* Build a WhatsApp click-to-chat link */
function buildWaLink(message) {
  const text = encodeURIComponent(message || STORE_CONFIG.defaultMessage);
  return `https://wa.me/${STORE_CONFIG.whatsappNumber}?text=${text}`;
}

/* Render one product card */
function renderProductCard(p) {
  const stockBadge = p.inStock
    ? `<span class="badge">In Stock</span>`
    : `<span class="badge stock-out">Out of Stock</span>`;

  const media = p.image
    ? `<img src="${p.image}" alt="${p.name}" loading="lazy">`
    : `<div class="ph">${p.name}<br><span style="font-size:10px;opacity:0.7;">No image yet</span></div>`;

  const priceNote = p.priceNote ? `<small>${p.priceNote}</small>` : "";
  const topSpeedSpec = p.topSpeed ? `<span>⚡ <b>${p.topSpeed}</b></span>` : "";

  const waMessage = `${STORE_CONFIG.defaultMessage}${p.name} (₹${p.price})`;

  return `
    <div class="product-card" data-category="${p.category}">
      <div class="product-media">
        ${media}
        ${stockBadge}
      </div>
      <div class="product-body">
        <span class="product-cat">${CATEGORY_LABELS[p.category] || p.category}</span>
        <h3 class="product-title">${p.name}</h3>
        <div class="product-specs">
          <span>🔧 <b>${p.engine}</b></span>
          ${topSpeedSpec}
        </div>
        <div class="product-price">₹${p.price} ${priceNote}</div>
        <div class="product-actions">
          <a class="pbtn pbtn-wa" href="${buildWaLink(waMessage)}" target="_blank" rel="noopener">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38a9.9 9.9 0 0 0 4.74 1.21h.01c5.46 0 9.9-4.45 9.9-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2m0 1.67c2.2 0 4.26.86 5.82 2.42a8.2 8.2 0 0 1 2.41 5.82c0 4.54-3.7 8.23-8.24 8.23a8.2 8.2 0 0 1-4.19-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.18 8.18 0 0 1-1.26-4.38c0-4.54 3.7-8.23 8.25-8.23"/></svg>
            Enquire
          </a>
        </div>
      </div>
    </div>
  `;
}

/* Render the grid based on current filter */
function renderProducts() {
  const grid = document.getElementById("productGrid");
  const heading = document.getElementById("productsHeading");
  const list = currentFilter === "all"
    ? PRODUCTS
    : PRODUCTS.filter(p => p.category === currentFilter);

  heading.textContent = currentFilter === "all"
    ? "All Models"
    : CATEGORY_LABELS[currentFilter] + " Models";

  if (list.length === 0) {
    grid.innerHTML = `
      <div class="empty-state" style="grid-column:1/-1;">
        <div class="big">No models here yet</div>
        <p>Add products to this category in products.js</p>
      </div>
    `;
    return;
  }

  grid.innerHTML = list.map(renderProductCard).join("");
}

/* Update category card counts on homepage */
function updateCategoryCounts() {
  ["atv", "utv", "dirtbike"].forEach(cat => {
    const count = PRODUCTS.filter(p => p.category === cat).length;
    const el = document.querySelector(`[data-count="${cat}"]`);
    if (el) el.textContent = `${count} model${count !== 1 ? "s" : ""}`;
  });
}

/* Filter bar click handling */
function setupFilterBar() {
  const buttons = document.querySelectorAll(".filter-btn");
  buttons.forEach(btn => {
    btn.addEventListener("click", () => {
      buttons.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      currentFilter = btn.dataset.filter;
      renderProducts();
    });
  });
}

/* Scroll to products section and apply a filter (used by category cards) */
function scrollToProducts(filter) {
  currentFilter = filter;
  document.querySelectorAll(".filter-btn").forEach(b => {
    b.classList.toggle("active", b.dataset.filter === filter);
  });
  renderProducts();
  document.getElementById("products").scrollIntoView({ behavior: "smooth", block: "start" });
}

/* Wire up all WhatsApp buttons across the page */
function setupWaButtons() {
  const generalLink = buildWaLink(STORE_CONFIG.defaultMessage);
  ["headerWaBtn", "heroWaBtn", "ctaWaBtn", "footerWaBtn", "floatWaBtn"].forEach(id => {
    const el = document.getElementById(id);
    if (el) {
      el.href = generalLink;
      el.target = "_blank";
      el.rel = "noopener";
    }
  });
}

/* Init */
document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("year").textContent = new Date().getFullYear();
  updateCategoryCounts();
  renderProducts();
  setupFilterBar();
  setupWaButtons();
});
