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
  const symbols = '(){}[]=/,.!&@#$%*-+'; //gerar caracteres aleatorios
  return symbols[Math.floor(Math.random() * symbols.length)];
};

const generatePassword = (
  getLetterLowerCase,
  getLetterUpperCase,
  getNumber,
  getSymbol,
) => {
  let password = '';

  const passwordLength = 10;

  const generators = [
    getLetterLowerCase,
    getLetterUpperCase,
    getNumber,
    getSymbol,
  ];

  for (i = 0; i < passwordLength; i = i + 4) {
    generators.forEach(() => {
      const randomValue =
        generators[Math.floor(Math.random() * generators.length)]();

      password += randomValue;
    });
  }

  password = password.slice(0, passwordLength);

  generatePasswordElement.style.display = 'block';
  generatePasswordElement.querySelector('h4').innerText = password;
};

//Eventos - os clics
generatePasswordButton.addEventListener('click', () => {
  generatePassword(
    getLetterLowerCase,
    getLetterUpperCase,
    getNumber,
    getSymbol,
  );
});
