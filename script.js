/*
 * Ethio-Mart
 * Frontend application logic
 *
 * This file intentionally keeps the data, state, rendering, and event
 * handling in separate sections so it is easy to understand and maintain.
 */

// -----------------------------------------------------------------------------
// Product data
// -----------------------------------------------------------------------------

const products = [
  {
    id: 1,
    name: "Ethiopian Single-Origin Coffee",
    category: "Food & Drinks",
    price: 450,
    rating: 4.9,
    badge: "Popular",
    image: "https://images.unsplash.com/photo-1447933601403-0c6688de566e?auto=format&fit=crop&w=900&q=85",
    description:
      "A refined roasted coffee selection inspired by Ethiopia's celebrated coffee culture.",
    featured: true,
  },
  {
    id: 2,
    name: "Pure Ethiopian Honey",
    category: "Food & Drinks",
    price: 620,
    rating: 4.8,
    badge: "Local",
    image: "https://images.unsplash.com/photo-1587049352846-4a222e784d38?auto=format&fit=crop&w=900&q=85",
    description:
      "Golden honey with a smooth, naturally sweet profile for breakfast, tea and everyday use.",
    featured: true,
  },
  {
    id: 3,
    name: "Handmade Mesob Basket",
    category: "Home & Living",
    price: 1250,
    rating: 4.7,
    badge: "Craft",
    image: "https://images.unsplash.com/photo-1590736969955-71cc94901144?auto=format&fit=crop&w=900&q=85",
    description:
      "A handcrafted basket-inspired piece that brings warmth and character to modern spaces.",
    featured: true,
  },
  {
    id: 4,
    name: "Wireless Headphones",
    category: "Electronics",
    price: 2850,
    rating: 4.6,
    badge: "Deal",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=900&q=85",
    description:
      "Comfortable wireless headphones designed for study sessions, music and everyday calls.",
  },
  {
    id: 5,
    name: "Classic Canvas Backpack",
    category: "Fashion",
    price: 1950,
    rating: 4.5,
    badge: "New",
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=900&q=85",
    description:
      "A practical everyday backpack with a clean silhouette and dependable storage.",
  },
  {
    id: 6,
    name: "Ceramic Coffee Set",
    category: "Home & Living",
    price: 1650,
    rating: 4.7,
    badge: "Home",
    image: "https://images.unsplash.com/photo-1514228742587-6b1558fcf93a?auto=format&fit=crop&w=900&q=85",
    description:
      "A minimal ceramic set designed for relaxed coffee moments with friends and family.",
  },
  {
    id: 7,
    name: "Everyday Running Shoes",
    category: "Fashion",
    price: 3400,
    rating: 4.6,
    badge: "Popular",
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=900&q=85",
    description:
      "Lightweight everyday footwear for walking, training and active routines.",
  },
  {
    id: 8,
    name: "Study Desk Lamp",
    category: "Electronics",
    price: 980,
    rating: 4.4,
    badge: "Value",
    image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=900&q=85",
    description:
      "A compact desk lamp for focused study, reading and late-night work.",
  },
  {
    id: 9,
    name: "Shea & Aloe Body Lotion",
    category: "Beauty",
    price: 780,
    rating: 4.6,
    badge: "Care",
    image: "https://images.unsplash.com/photo-1556229010-6c3f2c9ca5f8?auto=format&fit=crop&w=900&q=85",
    description:
      "A daily moisturizing lotion designed for a simple, comfortable skincare routine.",
  },
  {
    id: 10,
    name: "Hydrating Face Cleanser",
    category: "Beauty",
    price: 890,
    rating: 4.5,
    badge: "New",
    image: "https://images.unsplash.com/photo-1556228578-8c89e6adf883?auto=format&fit=crop&w=900&q=85",
    description:
      "A gentle cleanser for a fresh and uncomplicated daily skincare routine.",
  },
  {
    id: 11,
    name: "Minimal Ceramic Vase",
    category: "Home & Living",
    price: 1150,
    rating: 4.6,
    badge: "Decor",
    image: "https://images.unsplash.com/photo-1578500494198-246f612d3b3d?auto=format&fit=crop&w=900&q=85",
    description:
      "A clean decorative vase that complements contemporary living spaces.",
  },
  {
    id: 12,
    name: "Insulated Travel Bottle",
    category: "Home & Living",
    price: 1350,
    rating: 4.8,
    badge: "Best seller",
    image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?auto=format&fit=crop&w=900&q=85",
    description:
      "A reusable insulated bottle for work, campus, travel and everyday routines.",
  },
  {
    id: 13,
    name: "Compact Bluetooth Speaker",
    category: "Electronics",
    price: 1750,
    rating: 4.5,
    badge: "Audio",
    image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?auto=format&fit=crop&w=900&q=85",
    description:
      "A compact speaker for personal listening, small gatherings and study breaks.",
  },
  {
    id: 14,
    name: "Fast USB-C Charger",
    category: "Electronics",
    price: 1250,
    rating: 4.7,
    badge: "Essential",
    image: "https://images.unsplash.com/photo-1583863788434-e58a36330cf0?auto=format&fit=crop&w=900&q=85",
    description:
      "A practical USB-C charging accessory for compatible phones and everyday devices.",
  },
  {
    id: 15,
    name: "Premium Cotton T-Shirt",
    category: "Fashion",
    price: 890,
    rating: 4.5,
    badge: "Everyday",
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=900&q=85",
    description: "A versatile cotton T-shirt with a clean fit for everyday wear.",
  },
  {
    id: 16,
    name: "Classic Leather Wallet",
    category: "Fashion",
    price: 1450,
    rating: 4.7,
    badge: "Classic",
    image: "https://images.unsplash.com/photo-1627123424574-724758594e93?auto=format&fit=crop&w=900&q=85",
    description:
      "A compact everyday wallet with a timeless profile and practical card storage.",
  },
  {
    id: 17,
    name: "Spiced Tea Collection",
    category: "Food & Drinks",
    price: 560,
    rating: 4.6,
    badge: "Local",
    image: "https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=900&q=85",
    description:
      "A warm tea collection suited to quiet mornings and shared conversations.",
  },
  {
    id: 18,
    name: "Roasted Peanut Snack Pack",
    category: "Food & Drinks",
    price: 320,
    rating: 4.4,
    badge: "Value",
    image: "https://images.unsplash.com/photo-1567892737950-30c4db37cd89?auto=format&fit=crop&w=900&q=85",
    description:
      "A convenient roasted snack for study sessions, travel and everyday breaks.",
  },
  {
    id: 19,
    name: "Smart LED Bulb",
    category: "Electronics",
    price: 650,
    rating: 4.3,
    badge: "Smart home",
    image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=900&q=85",
    description:
      "A modern lighting option for practical home upgrades and flexible ambience.",
  },
  {
    id: 20,
    name: "Natural Hair Care Set",
    category: "Beauty",
    price: 1450,
    rating: 4.7,
    badge: "Care",
    image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=900&q=85",
    description:
      "A simple personal-care collection designed for a consistent hair-care routine.",
    featured: true,
  },
];

const categoryMeta = [
  ["☕", "Food & Drinks", "Fresh picks & local favorites"],
  ["⌂", "Home & Living", "Comfort & everyday spaces"],
  ["◈", "Electronics", "Useful tech & accessories"],
  ["◉", "Fashion", "Everyday style & essentials"],
  ["✦", "Beauty", "Personal care & wellness"],
  ["▦", "All", "Explore the full marketplace"],
];

// -----------------------------------------------------------------------------
// Application state
// -----------------------------------------------------------------------------

let cart = JSON.parse(localStorage.getItem("ethioCart") || "[]");
let favorites = JSON.parse(localStorage.getItem("ethioFavorites") || "[]");
let activeCategory = "All";
let sortMode = "featured";

// -----------------------------------------------------------------------------
// DOM references
// -----------------------------------------------------------------------------

const $ = (id) => document.getElementById(id);

const productGrid = $("productGrid");
const categoryGrid = $("categoryGrid");
const searchInput = $("searchInput");
const resultsLabel = $("resultsLabel");
const activeFilter = $("activeFilter");
const emptyState = $("emptyState");
const cartDrawer = $("cartDrawer");
const cartOverlay = $("cartOverlay");
const cartItems = $("cartItems");
const cartTotal = $("cartTotal");
const cartCount = $("cartCount");
const favoriteCount = $("favoriteCount");
const toast = $("toast");

// -----------------------------------------------------------------------------
// Storage and formatting helpers
// -----------------------------------------------------------------------------

function formatMoney(amount) {
  return `${amount.toLocaleString()} ETB`;
}

function saveState() {
  localStorage.setItem("ethioCart", JSON.stringify(cart));
  localStorage.setItem("ethioFavorites", JSON.stringify(favorites));
}

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("show");

  clearTimeout(showToast.timer);
  showToast.timer = setTimeout(() => {
    toast.classList.remove("show");
  }, 2200);
}

// -----------------------------------------------------------------------------
// Product filtering and sorting
// -----------------------------------------------------------------------------

function getFilteredProducts() {
  const query = searchInput.value.trim().toLowerCase();

  let filteredProducts = products.filter((product) => {
    const matchesCategory =
      activeCategory === "All" || product.category === activeCategory;

    const searchableText = [
      product.name,
      product.category,
      product.description,
      product.badge,
    ]
      .join(" ")
      .toLowerCase();

    return matchesCategory && (!query || searchableText.includes(query));
  });

  switch (sortMode) {
    case "price-low":
      filteredProducts.sort((a, b) => a.price - b.price);
      break;
    case "price-high":
      filteredProducts.sort((a, b) => b.price - a.price);
      break;
    case "rating":
      filteredProducts.sort((a, b) => b.rating - a.rating);
      break;
    case "name":
      filteredProducts.sort((a, b) => a.name.localeCompare(b.name));
      break;
    case "featured":
    default:
      filteredProducts.sort(
        (a, b) => Number(Boolean(b.featured)) - Number(Boolean(a.featured)),
      );
      break;
  }

  return filteredProducts;
}

// -----------------------------------------------------------------------------
// Category and product rendering
// -----------------------------------------------------------------------------

function renderCategories() {
  categoryGrid.innerHTML = categoryMeta
    .map(([icon, name, description]) => {
      const count =
        name === "All"
          ? products.length
          : products.filter((product) => product.category === name).length;

      return `
        <button
          class="category-card ${activeCategory === name ? "active" : ""}"
          data-category="${name}"
        >
          <div class="category-icon">${icon}</div>
          <strong>${name}</strong>
          <small>${description}</small>
          <b>${count} items</b>
        </button>
      `;
    })
    .join("");
}

function createProductCard(product) {
  const isFavorite = favorites.includes(product.id);

  return `
    <article class="product-card">
      <div class="product-image" data-product="${product.id}">
        <img
          src="${product.image}"
          alt="${product.name}"
          loading="lazy"
        >
        <span class="badge">${product.badge}</span>

        <button
          class="product-fav ${isFavorite ? "active" : ""}"
          data-fav="${product.id}"
          aria-label="Favorite ${product.name}"
        >
          ${isFavorite ? "♥" : "♡"}
        </button>
      </div>

      <div class="product-info">
        <span class="product-category">${product.category}</span>
        <h3>${product.name}</h3>
        <div class="rating">
          ★★★★★ <span>${product.rating}</span>
        </div>

        <div class="price-row">
          <span class="price">${formatMoney(product.price)}</span>
          <button
            class="add-btn"
            data-add="${product.id}"
            aria-label="Add ${product.name}"
          >
            +
          </button>
        </div>
      </div>
    </article>
  `;
}

function renderProducts() {
  const filteredProducts = getFilteredProducts();

  resultsLabel.textContent = `${filteredProducts.length} ${
    filteredProducts.length === 1 ? "product" : "products"
  } available`;

  activeFilter.textContent =
    activeCategory === "All" ? "All products" : activeCategory;

  $("filterCount").textContent = activeCategory === "All" ? "0" : "1";
  emptyState.classList.toggle("hidden", filteredProducts.length !== 0);

  productGrid.innerHTML = filteredProducts.map(createProductCard).join("");
  $("clearSearch").classList.toggle("show", Boolean(searchInput.value));
}

// -----------------------------------------------------------------------------
// Cart
// -----------------------------------------------------------------------------

function renderCart() {
  const itemCount = cart.reduce((total, item) => total + item.qty, 0);
  const total = cart.reduce((sum, item) => sum + item.qty * item.price, 0);

  cartCount.textContent = itemCount;
  favoriteCount.textContent = favorites.length;
  cartTotal.textContent = formatMoney(total);

  if (cart.length === 0) {
    cartItems.innerHTML = `
      <div class="empty-state">
        <div class="empty-icon">🛒</div>
        <h3>Your cart is empty</h3>
        <p>Add products from the marketplace to start building your order.</p>
      </div>
    `;
    return;
  }

  cartItems.innerHTML = cart
    .map(
      (item) => `
        <div class="cart-item">
          <img
            class="cart-item-img"
            src="${item.image}"
            alt="${item.name}"
          >

          <div>
            <h4>${item.name}</h4>
            <p>${formatMoney(item.price)}</p>

            <div class="qty">
              <button data-qty="-1" data-id="${item.id}">−</button>
              <span>${item.qty}</span>
              <button data-qty="1" data-id="${item.id}">+</button>
            </div>
          </div>

          <button class="remove" data-remove="${item.id}">
            Remove
          </button>
        </div>
      `,
    )
    .join("");
}

function addToCart(productId) {
  const product = products.find((item) => item.id === productId);

  if (!product) return;

  const existingItem = cart.find((item) => item.id === productId);

  if (existingItem) {
    existingItem.qty += 1;
  } else {
    cart.push({ ...product, qty: 1 });
  }

  saveState();
  renderCart();
  showToast(`${product.name} added to your cart`);
}

function updateCartQuantity(productId, change) {
  const item = cart.find((cartItem) => cartItem.id === productId);

  if (!item) return;

  item.qty += change;
  cart = cart.filter((cartItem) => cartItem.qty > 0);

  saveState();
  renderCart();
}

function removeFromCart(productId) {
  cart = cart.filter((item) => item.id !== productId);
  saveState();
  renderCart();
  showToast("Product removed from cart");
}

function openCart() {
  cartDrawer.classList.add("open");
  cartOverlay.classList.add("open");
  document.body.style.overflow = "hidden";
}

function closeCart() {
  cartDrawer.classList.remove("open");
  cartOverlay.classList.remove("open");
  document.body.style.overflow = "";
}

// -----------------------------------------------------------------------------
// Favorites
// -----------------------------------------------------------------------------

function toggleFavorite(productId) {
  if (favorites.includes(productId)) {
    favorites = favorites.filter((id) => id !== productId);
    showToast("Removed from your favorites");
  } else {
    favorites.push(productId);
    showToast("Added to your favorites");
  }

  saveState();
  renderProducts();
  renderCart();
}

function showFavorites() {
  const favoriteProducts = products.filter((product) =>
    favorites.includes(product.id),
  );

  if (favoriteProducts.length === 0) {
    showToast("Your favorites list is empty");
    return;
  }

  productGrid.innerHTML = favoriteProducts.map(createProductCard).join("");
  resultsLabel.textContent = `${favoriteProducts.length} favorite${
    favoriteProducts.length === 1 ? "" : "s"
  } saved`;
  activeFilter.textContent = "Favorites";

  $("products").scrollIntoView({ behavior: "smooth" });
}

// -----------------------------------------------------------------------------
// Product details modal
// -----------------------------------------------------------------------------

function openProduct(productId) {
  const product = products.find((item) => item.id === productId);

  if (!product) return;

  $("productModal").innerHTML = `
    <div class="modal-content">
      <img src="${product.image}" alt="${product.name}">

      <div class="modal-copy">
        <span class="product-category">${product.category}</span>
        <h2>${product.name}</h2>

        <div class="rating">
          ★★★★★ <span>${product.rating}</span>
        </div>

        <p>${product.description}</p>
        <div class="modal-price">${formatMoney(product.price)}</div>

        <button
          class="btn btn-primary full"
          data-modal-add="${product.id}"
        >
          Add to cart →
        </button>
      </div>
    </div>
  `;

  $("modalBackdrop").classList.remove("hidden");
  document.body.style.overflow = "hidden";
}

function closeModal() {
  $("modalBackdrop").classList.add("hidden");
  document.body.style.overflow = "";
}

// -----------------------------------------------------------------------------
// Shopping assistant
// -----------------------------------------------------------------------------

function getAssistantReply(message) {
  const query = message.toLowerCase();

  if (query.includes("coffee")) {
    return "Our Ethiopian Single-Origin Coffee is 450 ETB and is one of the marketplace's featured local picks. ☕";
  }

  if (query.includes("electronic")) {
    return "You can explore headphones, a Bluetooth speaker, a USB-C charger, a smart LED bulb and a study desk lamp in Electronics.";
  }

  if (query.includes("cheap") || query.includes("affordable")) {
    const affordableProducts = [...products]
      .sort((a, b) => a.price - b.price)
      .slice(0, 4);

    return `Some affordable options are ${affordableProducts
      .map((product) => `${product.name} (${formatMoney(product.price)})`)
      .join(", ")}.`;
  }

  if (query.includes("checkout")) {
    return "Add your products to the cart, review quantities, then continue to checkout. Payment and delivery APIs are planned for the backend stage.";
  }

  if (query.includes("beauty")) {
    return "Beauty currently includes skincare and hair-care essentials. Open the Beauty category to browse the collection.";
  }

  return "I can help you explore categories, compare product prices, or find affordable options. Try asking about coffee, electronics, beauty or checkout.";
}

function sendAssistantMessage(message) {
  const chatMessages = $("chatMessages");
  const reply = getAssistantReply(message);

  chatMessages.insertAdjacentHTML(
    "beforeend",
    `
      <div class="user-message">${message}</div>
      <div class="bot-message">${reply}</div>
    `,
  );

  chatMessages.scrollTop = chatMessages.scrollHeight;
}

// -----------------------------------------------------------------------------
// Navigation and category controls
// -----------------------------------------------------------------------------

function selectCategory(category) {
  activeCategory = category;
  renderCategories();
  renderProducts();
  $("products").scrollIntoView({ behavior: "smooth", block: "start" });
}

function resetFilters() {
  activeCategory = "All";
  sortMode = "featured";
  searchInput.value = "";
  $("sortSelect").value = "featured";

  renderCategories();
  renderProducts();
}

// -----------------------------------------------------------------------------
// Event listeners
// -----------------------------------------------------------------------------

document.addEventListener("click", (event) => {
  const categoryButton = event.target.closest("[data-category]");
  if (categoryButton) {
    selectCategory(categoryButton.dataset.category);
    return;
  }

  const categoryLink = event.target.closest("[data-category-link]");
  if (categoryLink) {
    selectCategory(categoryLink.dataset.categoryLink);
    return;
  }

  const addButton = event.target.closest("[data-add]");
  if (addButton) {
    addToCart(Number(addButton.dataset.add));
    return;
  }

  const favoriteButton = event.target.closest("[data-fav]");
  if (favoriteButton) {
    toggleFavorite(Number(favoriteButton.dataset.fav));
    return;
  }

  const productImage = event.target.closest("[data-product]");
  if (productImage && !event.target.closest("button")) {
    openProduct(Number(productImage.dataset.product));
    return;
  }

  const quantityButton = event.target.closest("[data-qty]");
  if (quantityButton) {
    updateCartQuantity(
      Number(quantityButton.dataset.id),
      Number(quantityButton.dataset.qty),
    );
    return;
  }

  const removeButton = event.target.closest("[data-remove]");
  if (removeButton) {
    removeFromCart(Number(removeButton.dataset.remove));
    return;
  }

  const modalAddButton = event.target.closest("[data-modal-add]");
  if (modalAddButton) {
    addToCart(Number(modalAddButton.dataset.modalAdd));
    closeModal();
    return;
  }

  const promptButton = event.target.closest("[data-prompt]");
  if (promptButton) {
    sendAssistantMessage(promptButton.dataset.prompt);
  }
});

searchInput.addEventListener("input", renderProducts);

$("clearSearch").addEventListener("click", () => {
  searchInput.value = "";
  renderProducts();
  searchInput.focus();
});

$("sortSelect").addEventListener("change", (event) => {
  sortMode = event.target.value;
  renderProducts();
});

$("viewAllCategories").addEventListener("click", () => {
  selectCategory("All");
});

$("resetFilters").addEventListener("click", resetFilters);

$("filterBtn").addEventListener("click", () => {
  $("categories").scrollIntoView({ behavior: "smooth" });
  showToast("Choose a category to filter the marketplace");
});

// Cart controls
$("cartBtn").addEventListener("click", openCart);
$("closeCart").addEventListener("click", closeCart);
cartOverlay.addEventListener("click", closeCart);

// Assistant controls
$("closeAssistant").addEventListener("click", () => {
  $("assistantPanel").classList.remove("open");
});

$("assistantBtn").addEventListener("click", () => {
  $("assistantPanel").classList.toggle("open");
});

// Mobile navigation
$("mobileMenuBtn").addEventListener("click", () => {
  $("mainNav").classList.toggle("open");
});

document.querySelectorAll("#mainNav a").forEach((link) => {
  link.addEventListener("click", () => {
    $("mainNav").classList.remove("open");
  });
});

// Theme
$("themeBtn").addEventListener("click", () => {
  const isDark = document.body.classList.toggle("dark");

  localStorage.setItem("ethioTheme", isDark ? "dark" : "light");
  $("themeBtn").textContent = isDark ? "☀" : "☾";
});

if (localStorage.getItem("ethioTheme") === "dark") {
  document.body.classList.add("dark");
  $("themeBtn").textContent = "☀";
}

// Modal
$("modalBackdrop").addEventListener("click", (event) => {
  if (event.target.id === "modalBackdrop") {
    closeModal();
  }
});

// Favorites
$("favoritesBtn").addEventListener("click", showFavorites);

// Checkout placeholder
$("checkoutBtn").addEventListener("click", () => {
  if (cart.length === 0) {
    showToast("Your cart is empty");
    return;
  }

  showToast("Checkout interface is ready for the backend and payment integration");
});

// Newsletter placeholder
$("newsletterForm").addEventListener("submit", (event) => {
  event.preventDefault();

  const email = $("newsletterEmail").value.trim();

  if (email) {
    showToast("Subscription captured — thank you");
    event.target.reset();
  }
});

// Assistant form
$("chatForm").addEventListener("submit", (event) => {
  event.preventDefault();

  const input = $("chatInput");
  const message = input.value.trim();

  if (!message) return;

  sendAssistantMessage(message);
  input.value = "";
});

// -----------------------------------------------------------------------------
// Scroll reveal animation
// -----------------------------------------------------------------------------

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  },
  { threshold: 0.1 },
);

document.querySelectorAll(".section-animate").forEach((section) => {
  observer.observe(section);
});

// -----------------------------------------------------------------------------
// Initial render
// -----------------------------------------------------------------------------

renderCategories();
renderProducts();
renderCart();
