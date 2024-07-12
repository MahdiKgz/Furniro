
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
  return false;
};

const filterByDiscount = (array) => {
  const discountedProducts = array.filter((item) => item.discount.isAvailable);
  return discountedProducts;
};

const filterByNewest = (array) => {
  const newestProducts = array.filter((item) => !item.discount.isAvailable);
  return newestProducts;
};

const sumProducts = (products) => {
  // const itemsCounter = products.reduce((acc, cur) => {
  //   acc + cur.quantity;
  // }, 0);
  const itemsCounter = products.length
  const total = products.reduce((acc, cur) => acc + cur.price * cur.quantity , 0).toFixed(2);
  return {itemsCounter , total}
};


export {
  handleMobileMenu,
  validateEmail,
  paginateItems,
  filterByPrice,
  filterByDiscount,
  filterByNewest,
  sumProducts
};
