# WPFW Portfolio - Opdracht 2

Persoonlijke, interactieve portfoliosite voor WPFW Opdracht 2.

- Website: <https://mahmoudali2027.github.io/>
- Repository: <https://github.com/mahmoudali2027/mahmoudali2027.github.io>

## JavaScript-bestanden

| Bestand | Functie |
| --- | --- |
| `script.js` | Toont projecten uit een array, filtert op categorie en sorteert van A-Z. |
| `contact.js` | Valideert naam, e-mail en bericht in het contactformulier. |
| `quote.js` | Haalt een willekeurig citaat op via de DummyJSON Quotes API. |

## Belangrijke JavaScript-methoden

| Methode of eigenschap | Korte uitleg |
| --- | --- |
| `document.querySelector()` | Zoekt een HTML-element met een CSS-selector, bijvoorbeeld `#projecten`. |
| `filter()` | Maakt een nieuwe lijst met alleen projecten uit de gekozen categorie. |
| `sort()` | Zet de zichtbare projecten in alfabetische volgorde. |
| `localeCompare()` | Vergelijkt twee projecttitels voor de A-Z-sortering. |
| `forEach()` | Herhaalt code voor ieder zichtbaar project. |
| `document.createElement()` | Maakt nieuwe HTML-elementen, zoals `article`, `h2` en `p`. |
| `textContent` | Leest of verandert de tekst in een HTML-element. |
| `className` | Geeft een nieuw gemaakt element een CSS-class. |
| `append()` | Plaatst een of meer elementen in een ander element. |
| `appendChild()` | Plaatst een element als kind in de projectenlijst. |
| `addEventListener()` | Reageert op een gebruikersactie, zoals `change`, `click` of `submit`. |
| `preventDefault()` | Voorkomt dat het formulier de pagina direct vernieuwt. |
| `checkValidity()` | Controleert HTML-regels zoals `required`, `minlength` en `type=\"email\"`. |
| `setAttribute()` | Verandert een attribuut, bijvoorbeeld `aria-invalid`. |
| `map()` | Controleert alle formuliervelden en maakt een lijst met `true` of `false`. |
| `every()` | Controleert of alle formuliervelden geldig zijn. |
| `reset()` | Maakt de formuliervelden leeg na een geldige invoer. |
| `fetch()` | Stuurt een verzoek naar de publieke API. |
| `response.ok` | Controleert of de API een goede reactie heeft gegeven. |
| `response.json()` | Zet de ontvangen JSON-data om naar JavaScript-gegevens. |
| `async` en `await` | Wachten op de reactie van de API zonder de pagina te blokkeren. |
| `try`, `catch` en `throw` | Vangen fouten op wanneer de API niet reageert. |

## CSS-classes

| Class | Korte uitleg |
| --- | --- |
| `.about-content` | Zet de foto en de introductietekst naast elkaar op grote schermen. |
| `.daily-quote` | Vormgeving van het onderdeel `Citaat van de dag`. |
| `.quote-author` | Vormgeving van de naam van de auteur bij een citaat. |
| `.project-control` | Vormgeving van de filter- en sorteerbediening. |
| `.project-grid` | Plaatst de projectkaarten in een responsive grid. |
| `.project-category` | Vormgeving van de categorietekst op een projectkaart. |
| `.contact-form` | Vormgeving van het volledige contactformulier. |
| `.form-field` | Groepeert een label, invoerveld en foutmelding. |
| `.form-error` | Vormgeving van de foutmelding onder een formulierveld. |
| `.form-status` | Vormgeving van de algemene fout- of succesmelding. |
| `.blog-overview` | Specifieke vormgeving voor de overzichtspagina van de blog. |
| `.reading-time` | Vormgeving van de leestijd bij een blogbericht. |

## API

De website gebruikt de publieke DummyJSON Quotes API:

<https://dummyjson.com/quotes/random>
