const productView = document.querySelector(".product-view");
const changeHtmlTitle = document.querySelector(".changeHtmlTitle");

const queryString = document.location.search;
const params = new URLSearchParams(queryString);

const id = params.get("id");

const url = "https://christerolsen.com/test/wp-json/wc/store/products/";
const apiURL = url + id;

async function fetchProduct() {
  try {
    const response = await fetch(apiURL);
    const details = await response.json();

    createHtml(details);
  } catch (error) {
    console.log(error);
  }
}

fetchProduct();

function createHtml(details) {
  changeHtmlTitle.innerHTML = `${details.name}`;

  productView.innerHTML = `
        <img src="${details.images[0].src}"/>
        <div class="product-details">
            <h1>${details.name}</h1>
            <p>${details.short_description}</p>
            <p>${details.description}</p>
            <p style="font-weight:bold;">
                        $${details.prices.price}
                    </p><a href="/pages/shoppingcart.html" class="view-button">Add to cart</a>

        </div`;
}
