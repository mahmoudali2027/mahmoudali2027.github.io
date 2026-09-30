const projecten = [
    {
        titel: "WPFW Portfolio",
        categorie: "Web"
    },
    {
        titel: "Avond4daagse",
        categorie: "Groepsproject"
    },
    {
        titel: "Campus Event Desk",
        categorie: "Database"
    }
];

const projectenLijst = document.querySelector("#projecten");
const categorieSelectie = document.querySelector("#project-category");
const sorteerKnop = document.querySelector("#sorteer-az");
let huidigeCategorie = "Alles";
let alfabetischGesorteerd = false;

function toonProjecten() {
    projectenLijst.textContent = "";

    const gefilterdeProjecten = huidigeCategorie === "Alles"
        ? projecten
        : projecten.filter(project => project.categorie === huidigeCategorie);

    const zichtbareProjecten = alfabetischGesorteerd
        ? [...gefilterdeProjecten].sort((eersteProject, tweedeProject) =>
            eersteProject.titel.localeCompare(tweedeProject.titel)
        )
        : gefilterdeProjecten;

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
    toonProjecten();
});

sorteerKnop.addEventListener("click", () => {
    alfabetischGesorteerd = true;
    toonProjecten();
});

toonProjecten();
