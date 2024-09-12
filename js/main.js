const accountType = localStorage.getItem("account-type");
const accountTypeEl = document.querySelector(".js-account-type");
if (accountType == "seeker-roommate") {
  accountTypeEl.innerHTML = "Seeker of roommate";
} else if (accountType == "seeker-roommate") {
  accountTypeEl.innerHTML = "Seeker of room";
} else if (accountType == "list-place") {
  accountTypeEl.innerHTML = "list place only";
}
