const houses = [
    { code: "ST", name: "Stark" },
    { code: "LA", name: "Lannister" },
    { code: "BA", name: "Baratheon" },
    { code: "TA", name: "Targaryen" }
];

const getCharacters = houseCode => {
    switch (houseCode) {
        case "ST":
            return ["Eddard", "Catelyn", "Robb", "Sansa", "Arya", "Jon Snow"];
        case "LA":
            return ["Tywin", "Cersei", "Jaime", "Tyrion"];
        case "BA":
            return ["Robert", "Stannis", "Renly"];
        case "TA":
            return ["Aerys", "Daenerys", "Viserys"];
        default:
            return [];
    }
};

function populateHouses() {
    const houseSelect = document.getElementById("house");
    houses.forEach(house => {
        const option = document.createElement("option");
        option.value = house.code;
        option.textContent = house.name;
        houseSelect.appendChild(option);
    });
}

function displayCharacters() {
    const selectedHouse = document.getElementById("house").value;
    const characterList = document.getElementById("characters");
    characterList.innerHTML = ""; // Clear previous list

    const characters = getCharacters(selectedHouse);
    if (characters.length === 0) {
        characterList.innerHTML = "<li>No characters found.</li>";
    } else {
        characters.forEach(character => {
            const li = document.createElement("li");
            li.textContent = character;
            characterList.appendChild(li);
        });
    }
}

document.addEventListener("DOMContentLoaded", () => {
    populateHouses();
    document.getElementById("house").addEventListener("change", displayCharacters);
});
