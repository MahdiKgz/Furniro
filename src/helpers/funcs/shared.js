const toggleActiveLinks = () => {
  const headerLinks = document.querySelectorAll(".header_link");
  if (headerLinks.length) {
    headerLinks.forEach((headerLink) => {
      headerLink.addEventListener("click", () => {
        headerLinks.forEach((otherLinks) => {
          otherLinks.classList.remove("active");
        });
        headerLink.classList.add("active");
        document.title = `فرنیرو | ${headerLink.title}`;
      });
    });
  }
};

const handleMobileMenu = () => {
  const menuTogglerButton = document.querySelector(".mobile-menu__toggler");
  const mobileMenuWrapper = document.querySelector("#mobileMenu");
  const overlay = document.querySelector(".overlay");
  const closeButton = document.querySelector(".close-btn")

  menuTogglerButton.addEventListener("click", () => {
    mobileMenuWrapper.style.display = "block"
    overlay.classList.replace("hidden", "block");
  });

  overlay.addEventListener("click", (event) => {
    event.target.classList.replace("block", "hidden");
    mobileMenuWrapper.style.display = "none"
  });

  closeButton.addEventListener("click", () => {
    overlay.classList.replace("block", "hidden");
    mobileMenuWrapper.style.display = "none"
  });
};

const validateEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email)
}

export { toggleActiveLinks, handleMobileMenu , validateEmail };
