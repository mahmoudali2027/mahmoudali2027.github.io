const quoteUrl = "https://dummyjson.com/quotes/random";
const quoteStatus = document.querySelector("#quote-status");
const quoteResult = document.querySelector("#quote-result");

async function haalCitaatOp() {
    quoteStatus.textContent = "Laden...";
    quoteResult.textContent = "";

    try {
        const response = await fetch(quoteUrl);

        if (!response.ok) {
            throw new Error("De API reageert niet goed.");
        }

        const data = await response.json();
        const citaat = document.createElement("blockquote");
        const auteur = document.createElement("p");

        citaat.textContent = `“${data.quote}”`;
        auteur.textContent = `— ${data.author}`;
        auteur.className = "quote-author";

        quoteResult.append(citaat, auteur);
        quoteStatus.textContent = "";
    } catch (error) {
        quoteStatus.textContent = "Het citaat kon niet worden geladen.";
    }
}

haalCitaatOp();
