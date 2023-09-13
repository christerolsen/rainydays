const url = "https://christerolsen.com/test/wp-json/wc/store/products";
const productContainer = document.querySelector(".products");

async function getProducts() {
  try {
    const response = await fetch(url);
    const getResults = await response.json();
    createHTML(getResults);

    console.log(getResults);
  } catch (error) {
    console.log(error);
  }
}

getProducts();

function createHTML(products) {
  products.forEach(function (product) {
    productContainer.innerHTML += `<div class="product">
            <h2>${product.name}</h2>
            <div class="product-detail">
                <img class="product-img" src="${product.images[0].src}"/>
                <div class="product-description">
                    ${product.short_description}
                    <p style="font-weight:bold;">
                        $${product.prices.price}
                    </p>
                    <a href="/pages/jacket.html?id=${product.id}" class="view-button">View/Buy</a>
                </div>
            </div>
        </div>`;
  });
}
