// get elements
const heading = document.getElementById("heading");
const search = document.getElementById("search");
const display = document.getElementById("display");
const footer = document.getElementById("footer");

class Card {
    constructor(code, description) {
        this.code = code;
        this.description = description;
    }

    render() {
        const cardTitle = document.createElement("div");
        cardTitle.style.fontWeight = "100";

        const cardInfoSection = document.createElement("div");

        const card = document.createElement("div");
        card.className = "elementCard";
    }
}
// create symbol card


for (let i = 0; i <= 20; i++) {
    //display.append(card.cloneNode(true));
}

