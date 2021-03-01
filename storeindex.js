//! GENERAL FUNCTIONS

function createElement(elementType, className, title) {
  const element = document.createElement(elementType);
  element.className = className;
  if (title) {
    element.innerHTML = title;
  }

  return element;
}



function createImageElement({ src, alt }) {
  const element = document.createElement("image");
  element.src = src;
  element.alt = alt;
  return element;
}

//! CART PRICE AND SUM FUNCTION

function getPriceFromStorage(id) {
  const details = sessionStorage.getItem(id);
  const price = details.split(":")[1];
  let newPrice;
  if (price.includes(" €")) {
    newPrice = price.replace(" €", "");
  }
  return Number(newPrice);
}

function addToSum(id) {
  const price = getPriceFromStorage(id);
  if (!sessionStorage.getItem("sum")) {
    sessionStorage.setItem("sum", 0);
  }
  let previousPrice = sessionStorage.getItem("sum");
  if (!previousPrice || isNaN(previousPrice)) {
    previousPrice = 0;
  } else {
    previousPrice = Number(previousPrice);
  }
  const sum = previousPrice + price;
  sessionStorage.setItem("sum", sum);
}

// add to cart
function addToCart(id, title, price) {
  sessionStorage.setItem(id.toString(), title);
  sessionStorage.setItem(id.toString(), `${title}:${price}`);
}

//! remove from cart
function removeFromCart(id) {
  sessionStorage.removeItem(id);
}

function displayProductInCart(productId) {
  function getProductDetails(id) {
    const details = sessionStorage.getItem(id);
    const [title, price] = details.split(":");
    return /*Title:*/ `${title} , ${price} `;
  }

  const myCartProductList = document.querySelector("#myList");
  const newProduct = document.createElement("li");

  const titleElement = createElement(
    "span",
    "cart-listItem-title",
    getProductDetails(productId)
  );

  const button = createElement(
    "button",
    `deletebutton cart-btn-${productId}`,
    "delete"
  );
  button.addEventListener("click", () => {
    newProduct.parentNode.removeChild(newProduct);
  });

  newProduct.className = "cart-listItem";
  newProduct.append(titleElement);
  newProduct.append(button);

  myCartProductList.append(newProduct);
  const total = document.getElementById("total");
  total.innerHTML = sessionStorage.getItem("sum");
}
//?------------ CREATE BOOK PAGE -------------------------
window.addEventListener("load", () => {
  //! -----------------create books in page --------------------

  const books = [
    {
      id: 1,
      title: "Living the Good Life",
      description: "Lorem ipsum dolor sit",
      quote: '"Lorem ipsum dolor sit amet consectetur adipisicing elit."',
      price: "16 \u20ac",
    },
    {
      id: 2,
      image: "",
      title: "Her Final Words",
      description: "Lorem ipsum dolor sit",
      quote: '"Lorem ipsum dolor sit amet consectetur adipisicing elit."',
      price: "18 \u20ac",
    },
    {
      id: 3,
      image: "",
      title: "Delicious Book Design",
      description: "Lorem ipsum dolor sit",
      quote: '"Lorem ipsum dolor sit amet consectetur adipisicing elit."',
      price: "20 \u20ac",
    },
    {
      id: 4,
      image: "",
      title: "Evicted",
      description: "Lorem ipsum dolor sit",
      quote: '"Lorem ipsum dolor sit amet consectetur adipisicing elit."',
      price: "17 \u20ac",
    },
  ];

 

  const bookSection = document.querySelector(".books");

  // everything here is for every book in the book list

  books.forEach((book) => {
    //! create elements
    const titleElement = createElement("p", "title", book.title);
    const imageElement = createImageElement({
      src: `http://127.0.0.1:5500//images/images${book.id}.jpeg`,
      alt: `book${book.id}`,
    });

    const quoteElement = createElement("p", "quote", book.quote);
    const descriptionElement = createElement(
      "p",
      "description",
      book.description
    );
    const priceElement = createElement("p", "price", book.price);
    const bookElement = createElement("li", "card");

    // create button
    const button = createElement(
      "button",
      `buybutton ${book.title}`,
      "Buy this book"
    );

    // kathe fora pou pataw ena click sto button ektelounte siriaka oi parakatw entoles
    button.addEventListener("click", () => {
      // css related
      const overlayElement = document.querySelector("#overlay");

      // elegxos an uparxei i class tin vgazw alliws tin vazw
      if (overlayElement.classList.contains("hidden")) {
        overlayElement.classList.remove("hidden");
      }

      addToCart(book.id, book.title, book.price);
      addToSum(book.id);
      displayProductInCart(book.id);
    });

    // vazoume ta elements to ena katw apo to allo
    bookElement.append(titleElement);
    bookElement.append(imageElement);
    bookElement.append(quoteElement);
    bookElement.append(descriptionElement);
    bookElement.append(priceElement);
    bookElement.append(button);
    bookSection.append(bookElement);
  });
  



  const overlayCloseButton = document.querySelector(".closebtn");

  overlayCloseButton.addEventListener("click", () => {
    const overlayElement = document.querySelector("#overlay");

    // elegxos an uparxei i class tin vgazw alliws tin vazw
    if (!overlayElement.classList.contains("hidden")) {
      overlayElement.classList.add("hidden");
    }
  });
});

//!  ------------ mobile menu FUNCTION --------------------
function myFunction() {
  var x = document.getElementById("myLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}
