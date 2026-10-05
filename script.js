const projecten = [
    {
        titel: "WPFW Portfolio",
        categorie: "Web",
        soort: "Individueel"
    },
    {
        titel: "Avond4daagse",
        categorie: "Groepsproject",
        soort: "Groepsproject"
    },
    {
        titel: "Campus Event Desk",
        categorie: "Database",
        soort: "Individueel"
    }
];

const projectenLijst = document.querySelector("#projecten");
const categorieSelectie = document.querySelector("#project-category");
const sorteerKnop = document.querySelector("#sorteer-az");
const individueleKnop = document.querySelector("#toon-individuele");
let huidigeCategorie = "Alles";
let alfabetischGesorteerd = false;
let alleenIndividueel = false;

function toonProjecten() {
    projectenLijst.textContent = "";

    const gefilterdeProjecten = huidigeCategorie === "Alles"
        ? projecten
        : projecten.filter(project => project.categorie === huidigeCategorie);

    const projectenVanSoort = alleenIndividueel
        ? gefilterdeProjecten.filter(project => project.soort === "Individueel")
        : gefilterdeProjecten;

    const zichtbareProjecten = alfabetischGesorteerd
        ? [...projectenVanSoort].sort((eersteProject, tweedeProject) =>
            eersteProject.titel.localeCompare(tweedeProject.titel)
        )
        : projectenVanSoort;

    zichtbareProjecten.forEach(project => {
        const article = document.createElement("article");
        const titel = document.createElement("h2");
        const categorieTekst = document.createElement("p");

        titel.textContent = project.titel;
        categorieTekst.textContent = project.categorie;
        categorieTekst.className = "project-category";

        article.append(titel, categorieTekst);
        projectenLijst.appendChild(article);
    });
}

categorieSelectie.addEventListener("change", () => {
    huidigeCategorie = categorieSelectie.value;
    alleenIndividueel = false;
    individueleKnop.textContent = "Toon individuele projecten";
    individueleKnop.setAttribute("aria-pressed", "false");
    toonProjecten();
});

sorteerKnop.addEventListener("click", () => {
    alfabetischGesorteerd = true;
    toonProjecten();
});

individueleKnop.addEventListener("click", () => {
    alleenIndividueel = !alleenIndividueel;
    huidigeCategorie = "Alles";
    categorieSelectie.value = "Alles";
    individueleKnop.textContent = alleenIndividueel
        ? "Toon alle projecten"
        : "Toon individuele projecten";
    individueleKnop.setAttribute("aria-pressed", String(alleenIndividueel));
    toonProjecten();
});

toonProjecten();
