const knapper = document.querySelectorAll(".Spørsmål");

knapper.forEach(knapp => {
    knapp.addEventListener("click", () => {
        const svar = knapp.nextElementSibling;

        svar.classList.toggle("open");
        knapp.classList.toggle("aktiv");
    });
});
