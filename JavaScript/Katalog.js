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
