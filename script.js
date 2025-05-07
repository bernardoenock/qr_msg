const quotes = [
  "A vida não examinada não vale a pena ser vivida. – Sócrates",
  "Penso, logo existo. – René Descartes",
  "Quem pensa grandes pensamentos, comete grandes erros. – Martin Heidegger",
  "A felicidade não é um ideal da razão, mas da imaginação. – Immanuel Kant",
  "O homem está condenado a ser livre. – Jean-Paul Sartre",
  "Conhecer a si mesmo é o começo de toda sabedoria. – Aristóteles",
  "Nenhum homem entra no mesmo rio duas vezes. – Heráclito",
  "Liberdade é o poder que temos sobre nós mesmos. – Voltaire",
  "Você pode descobrir mais sobre uma pessoa em uma hora de jogo do que em um ano de conversa. – Platão",
  "A vida só pode ser compreendida olhando-se para trás, mas deve ser vivida olhando-se para frente. – Søren Kierkegaard"
];

const subtitleElement = document.querySelector('.subtitle');

function showRandomQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  subtitleElement.textContent = quotes[randomIndex];
}

showRandomQuote();

setInterval(showRandomQuote, 30000);
