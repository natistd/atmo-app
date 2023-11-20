function useSearchSubmit(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#seach-form-input");
  let cityElement = document.querySelector("#city");
  cityElement.innerHTML = searchInput.value;
}

let searchElement = document.querySelector("#search-form");
searchElement.addEventListener("submit", useSearchSubmit);
