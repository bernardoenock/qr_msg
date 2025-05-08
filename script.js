const quotes = [
  "Não é porque as coisas são difíceis que não ousamos, é porque não ousamos que elas são difíceis. – Sêneca",
  "A maior glória em viver não está em nunca cair, mas em se levantar a cada queda. – Confúcio",
  "A jornada de mil milhas começa com um único passo. – Lao Tsé",
  "O sucesso é ir de fracasso em fracasso sem perder o entusiasmo. – Winston Churchill",
  "Age como se o princípio da tua ação devesse tornar-se lei universal. – Immanuel Kant",
  "Não espere por uma crise para descobrir o que é importante em sua vida. – Platão",
  "Se queres ser feliz amanhã, tenta hoje mesmo. – Liang Tzu",
  "A mente é tudo. Você se torna aquilo que você pensa. – Buda",
  "A vida é 10% o que acontece com você e 90% como você reage a isso. – Charles R. Swindoll",
  "A persistência é o caminho do êxito. – Charles Chaplin"
];

const subtitleElement = document.querySelector('.subtitle');

function showRandomQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  subtitleElement.textContent = quotes[randomIndex];
}

showRandomQuote();

setInterval(showRandomQuote, 11000);
