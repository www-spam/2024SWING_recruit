const faqTitle = document.querySelectorAll(".toggleTitle");

faqTitle.forEach((title) => {
  title.addEventListener("click", () => {
    if (title.classList.contains("active")) {
      title.classList.remove("active");
      title.nextElementSibling.classList.remove("active");
      console.log("remove active");
    } else {
      title.classList.add("active");
      title.nextElementSibling.classList.add("active");
      console.log("add active");
    }
  });
});
