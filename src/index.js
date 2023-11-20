let searchCityElement = document.querySelector("#search-form");

function useSearchSubmit(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#seach-form-input");
  let cityElement = document.querySelector("#city");
  cityElement.innerHTML = searchInput.value;
}

searchCityElement.addEventListener("submit", useSearchSubmit);
