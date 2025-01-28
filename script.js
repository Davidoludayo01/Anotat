// Sample product data
const products = [
  { id: 1, name: "T-Shirt", price: 20, image: "images/tshirt.jpg" },
  { id: 2, name: "Smartphone", price: 500, image: "images/phone.jpg" },
  { id: 3, name: "Laptop", price: 1000, image: "images/laptop.jpg" },
];

let cartCount = 0;

// Render products
const productGrid = document.querySelector('.product-grid');
products.forEach(product => {
  const productCard = document.createElement('div');
  productCard.classList.add('product-card');
  productCard.innerHTML = `
    <img src="${product.image}" alt="${product.name}">
    <h3>${product.name}</h3>
    <p>$${product.price}</p>
    <button onclick="addToCart(${product.id})">Add to Cart</button>
  `;
  productGrid.appendChild(productCard);
});

// Add to cart function
function addToCart(productId) {
  cartCount++;
  document.getElementById('cart-count').textContent = cartCount;
  alert('Product added to cart!');
}
