const sitater = [
    "“ Hver blomst er et lite mirakel i hverdagen ”",
    "“ Blomster gjør verden mykere, en farge av gangen ”",
    "“ Blomster gjør hagen vakrere – og dagen lysere! ”",
    "“ Se en blomst i dag – og finn ro i øyeblikket ”",
    "“ En hage med blomster er en hage med glede ”"
];

const tilfeldigSitatIndex = Math.floor(Math.random() * sitater.length);
const tilfeldigSitat = sitater[tilfeldigSitatIndex];

document.getElementById("Sitatboks").textContent = tilfeldigSitat;



const fakta = [
  "Roser finnes i over 100 arter og 30 000 hybrider.",
  "Blomster bruker farger for å tiltrekke seg bier og pollinatorer.",
  "Løvetannblomsten er spiselig og rik på vitamin C.",
  "Noen orkideer kan leve opptil 100 år i naturen.",
];

const tilfeldigFaktaIndex = Math.floor(Math.random() * fakta.length);
const tilfeldigFakta = fakta[tilfeldigFaktaIndex];

document.getElementById("Faktaboks").textContent = tilfeldigFakta;