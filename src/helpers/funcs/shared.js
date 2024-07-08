const toggleActiveLinks = () => {
  const headerLinks = document.querySelectorAll(".header_link");
  if (headerLinks.length) {
    headerLinks.forEach((headerLink) => {
      headerLink.addEventListener("click", () => {
        headerLinks.forEach((otherLinks) => {
          otherLinks.classList.remove("active");
        });
        headerLink.classList.add("active");
      });
    });
  }
};

const handleMobileMenu = () => {
  const menuTogglerButton = document.querySelector(".mobile-menu__toggler");
  const mobileMenuWrapper = document.querySelector("#mobileMenu");
  const overlay = document.querySelector(".overlay");
  const closeButton = document.querySelector(".close-btn");

  menuTogglerButton.addEventListener("click", () => {
    mobileMenuWrapper.style.display = "block";
    overlay.classList.replace("hidden", "block");
  });

  overlay.addEventListener("click", (event) => {
    event.target.classList.replace("block", "hidden");
    mobileMenuWrapper.style.display = "none";
  });

  closeButton.addEventListener("click", () => {
    overlay.classList.replace("block", "hidden");
    mobileMenuWrapper.style.display = "none";
  });
};

const validateEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

const paginateItems = async (array, itemsPerPage = 8, currentPage = 1) => {
  const endIndex = itemsPerPage * currentPage;
  const startIndex = endIndex - itemsPerPage;
  const paginateArray = await array.slice(startIndex, endIndex);

  return paginateArray;
};

const filterByPrice = (array) => {
    return false
}

const filterByDiscount = (array) => {
  const discountedProducts = array.filter(item => item.discount.isAvailable)
  return discountedProducts
}

const filterByNewest = (array) => {
  const newestProducts = array.filter(item => !item.discount.isAvailable)
  return newestProducts
}


export { toggleActiveLinks, handleMobileMenu, validateEmail, paginateItems , filterByPrice , filterByDiscount , filterByNewest };
