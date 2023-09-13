const url =
  "https://christerolsen.com/test/wp-json/wc/store/products?featured=true";
const productContainer = document.querySelector(".featured");

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
    productContainer.innerHTML += `<div class="featured-prod">
      <div><h3>${product.name}</h3><img src="${product.images[0].src}"/>${product.description}</div>
    </div>`;
  });
}
