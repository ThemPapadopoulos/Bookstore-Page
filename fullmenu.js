function addCartListener(button) {
  button.addEventListener("click", () => {
    const overlayElement = document.querySelector("#overlay");

    // check if contains the classlist hidden
    if (overlayElement.classList.contains("hidden")) {
      overlayElement.classList.remove("hidden");
    } else {
      overlayElement.classList.add("hidden");
    }
  });
}

window.addEventListener("load", () => {
  //! -----------------create menu in page --------------------

  const menuElements = [
    {
      title: "HOME",
      className: "home",
    },
    {
      title: "ABOUT",
      className: "about",
    },
    {
      title: "SHOP",
      className: "shop",
    },
    {
      title: "CONTACT",
      className: "contact",
    },
    {
      title: "CART",
      className: "cart",
    },
  ];

  const menuSection = document.querySelector(".menu");

  // everything here is for every item in the menu list

  menuElements.forEach((element) => {
    //! create elements

    const menuElement = createElement("li", "menuitem");
    //const linkElement = createElement( 'a', 'menulink');
    // create button
    const button = createElement("button", element.className, element.title);

    // kathe fora pou pataw ena click sto button ektelounte siriaka oi parakatw entoles

    if (element.title === "CART") {
      addCartListener(button);
    }

    //!
    //!     universal click events!
    //!

    //! SOS ADD CLICK EVENT ON CLASS

    $(".cart").on("click", function () {
      if (overlayElement.classList.contains("hidden")) {
        overlayElement.classList.remove("hidden");
      } else {
        overlayElement.classList.add("hidden");
      }
    });
    //! ADD CLICK EVENT to other CLASSES

    $(".about").click(function () {
      window.location.href = "about.html";
    });

    $(".home").click(function () {
      window.location.href = "index.html";
    });

    $(".shop").click(function () {
      window.location.href = "shop.html";
    });

    $(".contact").click(function () {
      window.location.href = "contact.html";
    });

    // append the elements
    menuSection.append(menuElement);
    menuElement.append(button);
  });
  const overlayElement = document.querySelector("#overlay");
  // overlayElemen

  const overlayCloseButton = document.querySelector(".closebtn");

  overlayCloseButton.addEventListener("click", () => {
    const overlayElement = document.querySelector("#overlay");

    // check if contains the classlist hidden
    if (!overlayElement.classList.contains("hidden")) {
      overlayElement.classList.add("hidden");
    }
  });
});

function show(shown, hidden) {
  document.getElementById(shown).style.display = "block";
  document.getElementById(hidden).style.display = "none";
  return false;
}
