const countryList = [
    "Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Anguilla",
    "Antarctica", "Antigua-and-Barbuda", "Argentina", "Armenia", "Aruba",
    "Australia", "Autria", "Azerbaïjan"
];

function showSuggestions() {
    const input = document.getElementById("country");
    const suggestionsDiv = document.getElementById("suggestions");
    const query = input.value.toLowerCase();

    suggestionsDiv.innerHTML = "";

    if (query.length === 0) return;

    const filteredCountries = countryList.filter(country => country.toLowerCase().startsWith(query));

    if (filteredCountries.length > 0) {
        filteredCountries.forEach(country => {
            const div = document.createElement("div");
            div.classList.add("suggestion");
            div.textContent = country;
            div.addEventListener("click", () => {
                input.value = country;
                suggestionsDiv.innerHTML = "";
            });
            suggestionsDiv.appendChild(div);
        });
    } else {
        suggestionsDiv.innerHTML = "<div class='no-result'>No matches found</div>";
    }
}

document.getElementById("country").addEventListener("input", showSuggestions);
