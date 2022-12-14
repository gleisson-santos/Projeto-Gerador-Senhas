// Seleção de Elementos
const generatePasswordButton = document.querySelector('#generate-password');
const generatePasswordElement = document.querySelector('#generated-password');

//Funções

// Letras, Números e Símbolos
const getLetterLowerCase = () => {
  //gerar numeros referenciais a tabela com numeros inteiros arredondados com o floor - Letras maiusculas
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
};

const getLetterUpperCase = () => {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65); //- Letras maiusculas
};

const getNumber = () => {
  return Math.floor(Math.random() * 10).toString(); //Numeros aleatorios em string
};

const getSymbol = () => {
  const symbols = '(){}[]=/,.!&@#$%*-+';
  return symbols[Math.floor(Math.random() * symbols.length)];
};

console.log(getSymbol());
//Eventos - os clics
generatePasswordButton.addEventListener('click', () => {
  console.log('teste');
});
