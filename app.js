// Dummy product data
let products = [
    { id: 1, name: "Product 1", price: "$20", description: "Description for Product 1" },
    { id: 2, name: "Product 2", price: "$30", description: "Description for Product 2" },
    { id: 3, name: "Product 3", price: "$40", description: "Description for Product 3" },
];

// Function to render product cards
function renderProducts() {
    const productContainer = document.getElementById('product-container');
    productContainer.innerHTML = ''; // Clear existing products

    products.map(product => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';

        const productName = document.createElement('h3');
        productName.className = 'product-name';
        productName.textContent = product.name;

        const productPrice = document.createElement('p');
        productPrice.className = 'product-price';
        productPrice.textContent = product.price;

        const productDescription = document.createElement('p');
        productDescription.className = 'product-description';
        productDescription.textContent = product.description;

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.className = 'delete-button';
        deleteButton.onclick = () => {
            // Remove product from the array
            products = products.filter(p => p.id !== product.id);
            // Re-render the product list
            renderProducts();
        };

        productCard.appendChild(productName);
        productCard.appendChild(productPrice);
        productCard.appendChild(productDescription);
        productCard.appendChild(deleteButton);
        productContainer.appendChild(productCard);
    });
}

// Initial render
renderProducts();