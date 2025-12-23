/*________________________________Rotsystmet______________________________*/


function checkAnswers() {
  let score = 0;

  const q1 = document.querySelector('input[name="q1"]:checked');
  const q2 = document.querySelector('input[name="q2"]:checked');

  if (q1 && q1.value === "Ytterhuden") score++;
  if (q2 && q2.value === "Katikula") score++;

  document.getElementById("result").textContent = `Du fikk ${score} / 2 riktige!`;
}

/*________________________________Slektstre______________________________*/

function Slektstre() {
  let score = 0;

  const q1 = document.querySelector('input[name="q1"]:checked');
  const q2 = document.querySelector('input[name="q2"]:checked');

  if (q1 && q1.value === "Nei") score++;
  if (q2 && q2.value === "Grantre") score++;

  document.getElementById("result").textContent = `Du fikk ${score} / 2 riktige!`;
}

/*_______________________________Livssyklus______________________________*/

function Livssyklus() {
  let score = 0;

  const q1 = document.querySelector('input[name="q1"]:checked');
  const q2 = document.querySelector('input[name="q2"]:checked');

  if (q1 && q1.value === "Frø") score++;
  if (q2 && q2.value === "Frø") score++;

  document.getElementById("result").textContent = `Du fikk ${score} / 2 riktige!`;
}

/*_____________________________Stengel______________________________*/

function Stengel() {
  let score = 0;

  const q1 = document.querySelector('input[name="q1"]:checked');
  const q2 = document.querySelector('input[name="q2"]:checked');

  if (q1 && q1.value === "Fungere som støtte og transport") score++;
  if (q2 && q2.value === "Transporere vann og næringsstoffer") score++;

  document.getElementById("result").textContent = `Du fikk ${score} / 2 riktige!`;
}
