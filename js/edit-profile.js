/*=========================== Active Tab Links  ======================*/
const navlinks = document.querySelectorAll(".edit-tabs .nav-link");

const removeActiveClass = () => {
  navlinks.forEach((item) => {
    item.classList.remove("active");
  });
};

navlinks.forEach((item) => {
  item.addEventListener("click", () => {
    removeActiveClass();
    item.classList.add("active");
  });
});

const optionMenu = document.querySelector(".select-menu"),
  selectBtn = document.querySelector(".select-btn"),
  options = document.querySelectorAll(".option"),
  sBtn_text = document.querySelector(".sBtn-text");

const menus = document.querySelectorAll(".select-btn");

menus.forEach((select) => {
  select.addEventListener(
    "click",
    function (e) {
      e.target.parentNode.classList.toggle("active-select");
    },
    true
  );
});

options.forEach((option) => {
  option.addEventListener("click", function (e) {
    let selectedOption = e.target.innerText;
    document.querySelector(".active-select .sBtn-text").innerText =
      selectedOption;
    document.querySelector(".active-select .sBtn-text").dataset.value =
      selectedOption;

    option.parentNode.parentNode.classList.remove("active-select");
  });
});

/*=========================== UPLOAD PROFILE IMAGE  ======================*/
const fileInput = document.querySelector(".upload-input");
const imgsPreview = document.querySelector(".imgs-preview");
if (fileInput) {
  fileInput.addEventListener("change", function () {
    document.querySelector(".about-img").src = URL.createObjectURL(
      fileInput.files[0]
    );
  });
}
