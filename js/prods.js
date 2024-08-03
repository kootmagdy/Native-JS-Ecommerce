const productsData = [
    {
      imgSrc: "/asset/1.jpg",
      title: "laptop1",
      rating: 4,
      reviews: 360,
      price: "$500",
    },
    {
        imgSrc: "/asset/2.jpg",
        title: "laptop2",
        rating: 4,
        reviews: 500,
        price: "$620",
      },
      {
        imgSrc: "/asset/3.jpg",
        title: "Lenovo Legion Pro 5 Laptop",
        rating: 4,
        reviews: 500,
        price: "$1500",
      },
      {
        imgSrc: "/asset/4.jpg",
        title: "laptop2",
        rating: 4,
        reviews: 500,
        price: "$950",
      },{
        imgSrc: "/asset/3.jpg",
        title: "laptop5",
        rating: 4,
        reviews: 500,
        price: "$900",
      },
    // Add more products as needed
  ];
  
  const container = document.querySelector(".container");

function createProductCard(product) {
    const card = document.createElement("div");
    card.className = "card border-0 rounded-0 shadow col-md-3 mb-3"; // Set width and margins based on Bootstrap grid system
  
    const img = document.createElement("img");
    img.src = product.imgSrc;
    img.className = "card-img-top rounded-0";
    img.alt = "...";
  
    const cardBody = document.createElement("div");
    cardBody.className = "card-body mt-3 mb-3";
  
    const row = document.createElement("div");
    row.className = "row";
  
    const col10 = document.createElement("div");
    col10.className = "col-10";
  
    const title = document.createElement("h4");
    title.className = "card-title";
    title.textContent = product.title;
  
    const rating = document.createElement("p");
    rating.className = "card-text";
    for (let i = 0; i < product.rating; i++) {
      const star = document.createElement("i");
      star.className = "bi bi-star-fill text-warning";
      rating.appendChild(star);
    }
    rating.textContent += ` (${product.reviews})`;
  
    const col2 = document.createElement("div");
    col2.className = "col-2";
  
    const bookmark = document.createElement("i");
    bookmark.className = "bi bi-bookmark-plus fs-2";
  
    const row2 = document.createElement("div");
    row2.className = "row align-items-center text-center g-0";
  
    const col4 = document.createElement("div");
    col4.className = "col-4";
  
    const price = document.createElement("h5");
    price.textContent = product.price;
  
    const col8 = document.createElement("div");
    col8.className = "col-8";
  
    const addToCart = document.createElement("a");
    addToCart.className = "btn btn-dark w-100 p-3 rounded-0 text-warning";
    addToCart.textContent = "ADD TO CART";
  
    addToCart.addEventListener("click", function() {
        addToCartClicked(product);
      });

    col10.appendChild(title);
    col10.appendChild(rating);
    col2.appendChild(bookmark);
    row.appendChild(col10);
    row.appendChild(col2);
    cardBody.appendChild(row);
    card.appendChild(img);
    card.appendChild(cardBody);
    col4.appendChild(price);
    col8.appendChild(addToCart);
    row2.appendChild(col4);
    row2.appendChild(col8);
    card.appendChild(row2);
  
    return card;
  }
  
  // Assuming 'containerId' is the unique ID of the container you want to select
const containerId = "prods";
const containerProds = document.getElementById(containerId);

function renderProducts() {
  productsData.forEach((product) => {
    const productCard = createProductCard(product);
    containerProds.appendChild(productCard);
  });
}

// Render products
renderProducts();

// // // /// /// /// // / / // / // / //// / / / // / // // cart
function addToCartClicked(product) {
    console.log(`Product added to cart: ${product.title} ${product.price}`);
  }