// get elements
const heading = document.getElementById("heading");
const search = document.getElementById("search");
const display = document.getElementById("display");
const footer = document.getElementById("footer");

class Card {
    constructor(json, container) {
        this.json = json;
        this.container = container;

        const symbolSection = document.createElement("div");
        symbolSection.classList.add("symbolSection");
        let char_code = this.json["number"];
        char_code = char_code.replace("U+", "");
        symbolSection.textContent = String.fromCodePoint(`0x${char_code}`);

        const infoSection = document.createElement("div");
        infoSection.classList.add("infoSection");

        const title = document.createElement("h4");
        title.textContent = json["title"];

        const code = document.createElement("p");
        code.textContent = json["number"];

        const card = document.createElement("div");
        card.classList.add("card");

        infoSection.append(title, code);
        card.append(symbolSection, infoSection);

        this.container.append(card);
    }
}

for (const section in char_data) {
    const sectionContainer = document.createElement("div");
    const sectionContent = document.createElement("div");
    const sectionTitle = document.createElement("h3");

    sectionContainer.classList.add("section-container");
    sectionContent.classList.add("section-content");
    sectionTitle.classList.add("section-title")
    
    sectionTitle.textContent = section;
    sectionContainer.append(sectionTitle);
    sectionContainer.append(sectionContent);

    display.append(sectionContainer);

    for (const set in char_data[section]) {
        const card = new Card(char_data[section][set], sectionContent);
    }
}
