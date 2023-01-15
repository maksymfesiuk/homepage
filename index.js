const scrollTopButton = document.getElementById("scroll-top");

function showScrollTopButton(scrollTopButton) {
  window.addEventListener("scroll", () => {
    if (window.scrollY >= 200) {
      scrollTopButton.classList.add("show-scroll");
    } else {
      scrollTopButton.classList.remove("show-scroll");
    }
  });
}

showScrollTopButton(scrollTopButton);
