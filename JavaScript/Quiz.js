/*_______________________________Ultimate Quiz______________________________*/


function Ultimate() {
  let score = 0;

  const q1 = document.querySelector('input[name="q1"]:checked');
  const q2 = document.querySelector('input[name="q2"]:checked');
  const q3 = document.querySelector('input[name="q3"]:checked');
  const q4 = document.querySelector('input[name="q4"]:checked');

  if (q1 && q1.value === "Ytterhuden") score++;
  if (q2 && q2.value === "Katikula") score++;
  if (q3 && q3.value === "Bladene") score++;
  if (q4 && q4.value === "Vann og mineraler") score++;

  document.getElementById("result").textContent = `Du fikk ${score} / 4 riktige!`;

  const spørsmål = 4
  let desimaltall = score / spørsmål
  prosent = desimaltall*100

  document.getElementById("tekst2").textContent = `${prosent} %`;
}


/*_______________________________Blomster Quiz______________________________*/

function Blomster() {
  let score = 0;

  const q1 = document.querySelector('input[name="q1"]:checked');
  const q2 = document.querySelector('input[name="q2"]:checked');
  const q3 = document.querySelector('input[name="q3"]:checked');
  const q4 = document.querySelector('input[name="q4"]:checked');

  if (q1 && q1.value === "Georgine") score++;
  if (q2 && q2.value === "Kornblom") score++;
  if (q3 && q3.value === "Lavendel") score++;
  if (q4 && q4.value === "Vil-løk") score++;

  document.getElementById("result").textContent = `Du fikk ${score} / 4 riktige!`;

  const spørsmål = 4
  let desimaltall = score / spørsmål
  prosent = desimaltall*100

  document.getElementById("tekst2").textContent = `${prosent} %`;

}