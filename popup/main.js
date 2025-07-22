const products = [];

// Add 20 dummy products
for (let i = 1; i <= 20; i++) {
    products.push({
        name: `Product ${i}`,
        image: `https://via.placeholder.com/200x150?text=Product+${i}`,
        price: `Rs. ${1000 + i * 100}`,
        description: `This is product number ${i}. It's high-quality and affordable.`
    });
}

const grid = document.getElementById("productGrid");

// Render products
products.forEach((product) => {
    const div = document.createElement("div");
    div.className = "product";
    div.innerHTML = `
        <img src="${product.image}" alt="${product.name}" />
        <h3>${product.name}</h3>
        <p>${product.price}</p>
        <button onclick="openModal('${product.name}', '${product.image}', '${product.price}', '${product.description}')">
          Add to Cart
        </button>
      `;
    grid.appendChild(div);
});

// Open modal with product details
function openModal(name, image, price, desc) {
    document.getElementById('modal-img').src = image;
    document.getElementById('modal-name').textContent = name;
    document.getElementById('modal-price').textContent = price;
    document.getElementById('modal-desc').textContent = desc;
    document.getElementById('modal-overlay').style.display = 'flex';
}

// Close modal
function closeModal() {
    document.getElementById('modal-overlay').style.display = 'none';
}
