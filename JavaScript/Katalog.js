/*________________________________Søkefelt______________________________*/

const søkefelt = document.getElementById("søkefelt");
const container = document.querySelector(".Gridboks");
const knapper = Array.from(container.getElementsByClassName("Knapp"));

søkefelt.addEventListener("input", () => {
    const query = søkefelt.value.toLowerCase();

    knapper.forEach(knapp => {
        const tekstEl = knapp.querySelector(".Tekst");

        if (!tekstEl) {
            // Skjul A/B/C-bokstav-knapper når man søker
            knapp.style.display = query ? "none" : "";
            return;
        }

        const navn = tekstEl.innerText.toLowerCase();

        knapp.style.display = navn.includes(query) ? "" : "none";
    });
});



/*________________________________Overlay______________________________*/
const data = {
    Amaryllis: {
        Overskrift:"Amaryllis",
        Latinsk: "Hippeastrum",
        Frøtype: "Dekkfrøet/Enfrøet",
        Opprinnelse: "Sør- og Mellom-Amerika",

        Lys: "Lyst, men ikke direkte sterk sol",
        Temperatur: "18-22 °C (Tåler ikke frost)",
        Vanning: "Moderat - jorden holdes fuktig",
        Plassering: "Inneplante / Ute om sommeren. Kan trives i Norge",

        Blomstring: "Vanligvis vinter og tidlig vår (November-mars)",
        Tidtilblomstring: "Ca. 6-10 uker",

        Giftig: "Ja",
        Type: "Prydplante/løk",
        Farger: "Rød, Hvit, Rosa, Oransje, Lilla",
        Utbredelse: "Tropisk i sør Amerika",
        Fakta: "Større løk = større/flere blomster",
        Bilde: "../Bilder/Amaryllis.webp"

    },
    Banksia: {
        Overskrift:"Banksia",
        Latinsk: "Banksia",
        Frøtype: "Dekkfrøet/Enfrøet",
        Opprinnelse: "Australia",

        Lys: "Full sol til delvis skygge",
        Temperatur: "18–25 °C (Tåler ikke frost)",
        Vanning: "Moderat - Tørketolerant",
        Plassering: "Ute i hagen, solrikt sted. Kan dyrkes i potter.",
    
        Blomstring: "Varierer med art, ofte vinter og vår",
        Tidtilblomstring: "Fra frø: 3–5 år, fra stikling: 1–3 år",

        Giftig: "Nei",
        Type: "Prydplante/Busk",
        Farger: "Gul, oransje, rød, brun",
        Utbredelse: "Opprinnelig i Australia, finnes også i hager verden over",
        Fakta: ".",
        Bilde: "../Bilder/Banksia.webp"
    },

    Tacca: {
        Overskrift: "Tacca",
        Latinsk: "Tacca chantrieri",
        Frøtype: "Dekkfrøet/Enfrøet",
        Opprinnelse: "Sørøst-Asia",

        Lys: "Lyst, indirekte sol",
        Temperatur: "20–28 °C (Tåler ikke frost)",
        Vanning: "Moderate - jevnt fuktig jord",
        Plassering: "Inneplante, fuktig sted. Kan dyrkes i potter.",

        Blomstring: "Vår og sommer",
        Tidtilblomstring: "Ca. 6–8 uker fra blomsterstilk",

        Giftig: "Nei",
        Type: "Prydplante/Knoll",
        Farger: "Svart, lilla, hvit",
        Utbredelse: "Sørøst-Asia",
        Fakta: "Kjent som flaggermusblomst pga. form på blomstene.",
        Bilde: "../Bilder/Tacca.webp"
}}

const overlay = document.querySelector(".Overlay");
const lukkBtn = document.getElementById("Lukk");
const buttons = document.querySelectorAll(".Knapp");
const navbar = document.querySelector(".Navbar");

const Overskrift = document.getElementById("KortOverskrift");
const Latinsk = document.getElementById("Latinsk");
const Frøtype = document.getElementById("Frøtype");
const Opprinnelse = document.getElementById("Opprinnelse");
const Lys = document.getElementById("Lys");
const Temperatur = document.getElementById("Temperatur");
const Vanning = document.getElementById("Vanning");
const Plassering = document.getElementById("Plassering");
const Blomstring = document.getElementById("Blomstring");
const Tidtilblomstring = document.getElementById("Tidtilblomstring");
const Giftig = document.getElementById("Giftig");
const Type = document.getElementById("Type");
const Farger = document.getElementById("Farger");
const Utbredelse = document.getElementById("Utbredelse");
const Fakta = document.getElementById("Fakta");
const Bilde = document.querySelector('.KortBilde');

buttons.forEach(button => {
    button.addEventListener("click", () => {
        const type = button.dataset.blomst;

        Overskrift.textContent = data[type].Overskrift;
        Latinsk.textContent = data[type].Latinsk;
        Frøtype.textContent = data[type].Frøtype;
        Opprinnelse.textContent = data[type].Opprinnelse;
        Lys.textContent = data[type].Lys;
        Temperatur.textContent = data[type].Temperatur;
        Vanning.textContent = data[type].Vanning;
        Plassering.textContent = data[type].Plassering;
        Blomstring.textContent = data[type].Blomstring;
        Tidtilblomstring.textContent = data[type].Tidtilblomstring;
        Giftig.textContent = data[type].Giftig;
        Type.textContent = data[type].Type;
        Farger.textContent = data[type].Farger;
        Utbredelse.textContent = data[type].Utbredelse;
        Fakta.textContent = data[type].Fakta;

        Bilde.src = data[type].Bilde;

        overlay.classList.add("open");
        navbar.classList.add("remove");
});
});

lukkBtn.addEventListener("click", () => {
    overlay.classList.remove("open");
    navbar.classList.remove("remove");
});
