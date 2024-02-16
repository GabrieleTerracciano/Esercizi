/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

// JS Basics

/* ESERCIZIO A
  Crea una variabile chiamata "sum" e assegnaci il risultato della somma tra i valori 10 e 20.
*/

const sum = 10 + 20;
console.log(sum);

/* ESERCIZIO B
  Crea una variabile chiamata "random" e assegnaci un numero casuale tra 0 e 20 (deve essere generato dinamicamente a ogni esecuzione).
*/

const random = Math.floor(Math.random() * 21);
console.log(random);

/* ESERCIZIO C
  Crea una variabile chiamata "me" e assegnaci un oggetto contenente le seguenti proprietà: name = il tuo nome, surname = il tuo cognome, age = la tua età.
*/

const me = {
  name: "Gabriele",
  surname: "Terracciano",
  age: 27
};
console.log(me);

/* ESERCIZIO D
  Crea del codice per rimuovere programmaticamente la proprietà "age" dall'oggetto precedentemente creato.
*/

delete me.age;
console.log(me);

/* ESERCIZIO E
  Crea del codice per aggiungere programmaticamente all'oggetto precedentemente creato un array chiamato "skills", contenente i linguaggi di programmazione che conosci.
*/

me.skills = [];
me.skills.push("JavaScript");
console.log(me);

/* ESERCIZIO F
  Crea un pezzo di codice per aggiungere un nuovo elemento all'array "skills" contenuto nell'oggetto "me".
*/

me.skills.push("Angular");
console.log(me);

/* ESERCIZIO G
  Crea un pezzo di codice per rimuovere programmaticamente l'ultimo elemento dall'array "skills" contenuto nell'oggetto "me".
*/

me.skills.pop();
console.log(me);

// Funzioni

/* ESERCIZIO 1
  Crea una funzione chiamata "dice": deve generare un numero casuale tra 1 e 6.
*/

function dice() {
  const risultato = Math.floor(Math.random() * 6) + 1;
  return risultato;
}

const risultatodado = dice();

console.log(risultatodado);
document.getElementById('primo').innerHTML = `ESERCIZIO 1: ${risultatodado}`;

/* ESERCIZIO 2
  Crea una funzione chiamata "whoIsBigger" che riceve due numeri come parametri e ritorna il maggiore dei due.
*/

function whoIsBigger(numero1, numero2) {
  if (numero1 > numero2) {
    return numero1;
  } else {
    return numero2;
  }
}

risultatomaggiore = whoIsBigger(64, 235);

console.log(risultatomaggiore);
document.getElementById('secondo').innerHTML = `ESERCIZIO 2: ${risultatomaggiore}`;

/* ESERCIZIO 3
  Crea una funzione chiamata "splitMe" che riceve una stringa come parametro e ritorna un'array contenente ogni parola della stringa.

  Es.: splitMe("I love coding") => ritorna ["I", "Love", "Coding"]
*/

function splitMe(stringa) {
  return stringa.split(" ");
}

resultsplitme = splitMe("I hate broccoli");

console.log(resultsplitme);
document.getElementById('terzo').innerHTML = `ESERCIZIO 3: ${resultsplitme.join(', ')}`;

/* ESERCIZIO 4
  Crea una funzione chiamata "deleteOne" che riceve una stringa e un booleano come parametri.
  Se il valore booleano è true la funzione deve ritornare la stringa senza il primo carattere, altrimenti la deve ritornare senza l'ultimo.
*/

function deleteOne(inputString, deleteFirst) {
  if (deleteFirst) {
    return inputString.slice(1);
  } else {
    return inputString.slice(0, -1);
  }
};

const risultato1 = deleteOne("arazzo", true);
console.log(risultato1);

const risultato2 = deleteOne("arazzo", false);
console.log(risultato2);

document.getElementById('quarto').innerHTML = `ESERCIZIO 4:${risultato1}, ${risultato2}`;

/* ESERCIZIO 5
  Crea una funzione chiamata "onlyLetters" che riceve una stringa come parametro e la ritorna eliminando tutte le cifre numeriche.

  Es.: onlyLetters("I have 4 dogs") => ritorna "I have dogs"
*/

function onlyLetters(inputString) {
  let risultato3 = '';

  for (let i = 0; i < inputString.length; i++) {
    const char = inputString[i];
    if (isNaN(Number(char))) {
      risultato3 += char;
    }
  }

  return risultato3;
};

const risultato3 = onlyLetters("I love 4 chan");

console.log(risultato3);
document.getElementById('quinto').innerHTML = `ESERCIZIO 5: ${risultato3}`;

/* ESERCIZIO 6
  Crea una funzione chiamata "isThisAnEmail" che riceve una stringa come parametro e ritorna true se la stringa è un valido indirizzo email.
*/

function isEmailValid(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[a-zA-Z]{2,}$/;
  return emailRegex.test(email);
};

const emailToCheck = "gabriele.terracciano96@gmail.com";
if (isEmailValid(emailToCheck)) {
  console.log("L'indirizzo email è valido.");
} else {
  console.log("L'indirizzo email non è valido.");
};

function isEmailValid(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[a-zA-Z]{2,}$/;
  return emailRegex.test(email);
};

risultatoEmail = isEmailValid(emailToCheck);

document.getElementById('sesto').innerHTML = `ESERCIZIO 6: ${risultatoEmail}`;

/* ESERCIZIO 7
  Scrivi una funzione chiamata "whatDayIsIt" che ritorna il giorno della settimana corrente.
*/

function whatDayIsIt() {
  const daysOfWeek = ["Domenica", "Lunedì", "Martedì", "Mercoledì", "Giovedì", "Venerdì", "Sabato"];
  const today = new Date();
  const dayIndex = today.getUTCDay();
  return daysOfWeek[dayIndex];
}

currentDay = whatDayIsIt();

console.log(`${currentDay}`);
document.getElementById('settimo').innerHTML = `ESERCIZIO 7: ${currentDay}`;

/* ESERCIZIO 8
  Scrivi una funzione chiamata "rollTheDices" che riceve un numero come parametro.
  Deve invocare la precedente funzione dice() il numero di volte specificato nel parametro, e deve tornare un oggetto contenente una proprietà "sum":
  il suo valore deve rappresentare il totale di tutti i valori estratti con le invocazioni di dice().
  L'oggetto ritornato deve anche contenere una proprietà "values", contenente un array con tutti i valori estratti dalle invocazioni di dice().

  Example:
  rollTheDices(3) => ritorna {
      sum: 10
      values: [3, 3, 4]
  }
*/

function rollTheDices(numRolls) {
  const result = {
    sum: 0,
    values: []
  };

  for (let i = 0; i < numRolls; i++) {
    const rollResult = dice();
    result.sum += rollResult;
    result.values.push(rollResult);
  }

  return result;
}

rollResult = rollTheDices(3);

console.log(rollResult);
document.getElementById('ottavo').innerHTML = `ESERCIZIO 8: ${rollResult.sum}, [${rollResult.values.join(', ')}]`;

/* ESERCIZIO 9
  Scrivi una funzione chiamata "howManyDays" che riceve una data come parametro e ritorna il numero di giorni trascorsi da tale data.
*/

function howManyDays(datainizio) {
  const datacorrente = new Date();
  const daysDifference = Math.floor((datacorrente - datainizio) / (1000 * 60 * 60 * 24));
  return daysDifference;
}

 datainizio = new Date("1971-01-01");
 daysPassed = howManyDays(datainizio);

console.log(`${daysPassed}`);
document.getElementById('nono').innerHTML = `ESERCIZIO 9: ${daysPassed}`;

/* ESERCIZIO 10
  Scrivi una funzione chiamata "isTodayMyBirthday" che deve ritornare true se oggi è il tuo compleanno, falso negli altri casi.
*/

function isTodayMyBirthday() {
  const today = new Date();
  const birthday = new Date(today.getFullYear(), 7, 11);
  return today.getDate() === birthday.getDate() && today.getMonth() === birthday.getMonth();
}

isBirthday = isTodayMyBirthday();

if (isBirthday) {
  document.getElementById('decimo').innerHTML = "ESERCIZIO 10: Oggi è il tuo compleanno!";
} else {
  document.getElementById('decimo').innerHTML = "ESERCIZIO 10: Oggi non è il tuo compleanno.";
};

/* Questo array viene usato per gli esercizi. Non modificarlo. */

const movies = [
  {
    Title: 'The Lord of the Rings: The Fellowship of the Ring',
    Year: '2001',
    imdbID: 'tt0120737',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg',
  },

  {
    Title: 'The Lord of the Rings: The Return of the King',
    Year: '2003',
    imdbID: 'tt0167260',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
  },
  {
    Title: 'The Lord of the Rings: The Two Towers',
    Year: '2002',
    imdbID: 'tt0167261',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNGE5MzIyNTAtNWFlMC00NDA2LWJiMjItMjc4Yjg1OWM5NzhhXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
  },
  {
    Title: 'Lord of War',
    Year: '2005',
    imdbID: 'tt0399295',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTYzZWE3MDAtZjZkMi00MzhlLTlhZDUtNmI2Zjg3OWVlZWI0XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg',
  },
  {
    Title: 'Lords of Dogtown',
    Year: '2005',
    imdbID: 'tt0355702',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNDBhNGJlOTAtM2ExNi00NmEzLWFmZTQtYTZhYTRlNjJjODhmXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg',
  },
  {
    Title: 'The Lord of the Rings',
    Year: '1978',
    imdbID: 'tt0077869',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BOGMyNWJhZmYtNGQxYi00Y2ZjLWJmNjktNTgzZWJjOTg4YjM3L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg',
  },
  {
    Title: 'Lord of the Flies',
    Year: '1990',
    imdbID: 'tt0100054',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BOTI2NTQyODk0M15BMl5BanBnXkFtZTcwNTQ3NDk0NA@@._V1_SX300.jpg',
  },
  {
    Title: 'The Lords of Salem',
    Year: '2012',
    imdbID: 'tt1731697',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMjA2NTc5Njc4MV5BMl5BanBnXkFtZTcwNTYzMTcwOQ@@._V1_SX300.jpg',
  },
  {
    Title: 'Greystoke: The Legend of Tarzan, Lord of the Apes',
    Year: '1984',
    imdbID: 'tt0087365',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTM5MzcwOTg4MF5BMl5BanBnXkFtZTgwOTQwMzQxMDE@._V1_SX300.jpg',
  },
  {
    Title: 'Lord of the Flies',
    Year: '1963',
    imdbID: 'tt0057261',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BOGEwYTlhMTgtODBlNC00ZjgzLTk1ZmEtNmNkMTEwYTZiM2Y0XkEyXkFqcGdeQXVyMzU4Nzk4MDI@._V1_SX300.jpg',
  },
  {
    Title: 'The Avengers',
    Year: '2012',
    imdbID: 'tt0848228',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg',
  },
  {
    Title: 'Avengers: Infinity War',
    Year: '2018',
    imdbID: 'tt4154756',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg',
  },
  {
    Title: 'Avengers: Age of Ultron',
    Year: '2015',
    imdbID: 'tt2395427',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg',
  },
  {
    Title: 'Avengers: Endgame',
    Year: '2019',
    imdbID: 'tt4154796',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg',
  },
]


// Arrays & Oggetti

// NOTA: l'array "movies" usato in alcuni esercizi è definito alla fine di questo file

/* ESERCIZIO 11
  Scrivi una funzione chiamata "deleteProp" che riceve un oggetto e una stringa come parametri; deve ritornare l'oggetto fornito dopo aver eliminato
  in esso la proprietà chiamata come la stringa passata come secondo parametro.
*/

function deleteProp(oggetto, propToDelete) {
  if (oggetto.hasOwnProperty(propToDelete)) {
    delete oggetto[propToDelete];
  }
  return oggetto;
};

const movie = movies[0];
const propToDelete = 'Type';
const updatedMovie = deleteProp(movie, propToDelete);

console.log(updatedMovie);

/* ESERCIZIO 12
  Scrivi una funzione chiamata "newestMovie" che trova il film più recente nell'array "movies" fornito.
*/

function newestMovie(moviesArray) {
  return moviesArray.reduce((current, movie) => (current.Year > movie.Year ? current : movie));
};

const newest = newestMovie(movies);
console.log(newest);

if (newest) {
  document.getElementById('dodicesimo').innerHTML = `ESERCIZIO 12: ${newest.Title}`;
} else {
  document.getElementById('dodicesimo').innerHTML = "Nessun film trovato.";
}
/* ESERCIZIO 13
  Scrivi una funzione chiamata countMovies che ritorna il numero di film contenuti nell'array "movies" fornito.
*/

function countMovies(moviesArray) {
  return moviesArray.length;
};

const numberOfMovies = countMovies(movies);

console.log(numberOfMovies);
document.getElementById('tredicesimo').innerHTML = `ESERCIZIO 13: ${numberOfMovies}`;

/* ESERCIZIO 14
  Scrivi una funzione chiamata "onlyTheYears" che crea un array con solamente gli anni di uscita dei film contenuti nell'array "movies" fornito.
*/

function onlyTheYears(moviesArray) {
  return moviesArray.map(movie => movie.Year);
};

const yearsArray = onlyTheYears(movies);

console.log(yearsArray);
document.getElementById('quattordicesimo').innerHTML = `ESERCIZIO 14: ${JSON.stringify(yearsArray)}`;

/* ESERCIZIO 15
  Scrivi una funzione chiamata "onlyInLastMillennium" che ritorna solamente i film prodotto nel millennio scorso contenuti nell'array "movies" fornito.
*/

function onlyInLastMillennium(moviesArray) {
  const lastMillenniumStart = 1000;
  const thisMillenniumStart = 2000;

  return moviesArray.filter(movie => {
    const movieYear = parseInt(movie.Year, 10);
    return movieYear >= lastMillenniumStart && movieYear < thisMillenniumStart;
  });
};

const lastMillenniumMovies = onlyInLastMillennium(movies);

console.log(lastMillenniumMovies);


/* ESERCIZIO 16
  Scrivi una funzione chiamata "sumAllTheYears" che ritorna la somma di tutti gli anni in cui sono stati prodotti i film contenuti nell'array "movies" fornito.
*/

function sumAllTheYears(moviesArray) {
  if (!Array.isArray(moviesArray) || moviesArray.length === 0) {
    return 0;
  }

  const sumOfYears = moviesArray.reduce((total, movie) => total + parseInt(movie.Year), 0);
  return sumOfYears;
};

const totalYears = sumAllTheYears(movies);

console.log(`${totalYears}`);
document.getElementById('sedicesimo').innerHTML = `ESERCIZIO 16: ${totalYears}`;

/* ESERCIZIO 17
  Scrivi una funzione chiamata "searchByTitle" che riceve una stringa come parametro e ritorna i film nell'array "movies" fornito che la contengono nel titolo.
*/

function searchByTitle(searchString, moviesArray) {
  if (!searchString || !moviesArray || !Array.isArray(moviesArray)) {
    return [];
  }

  const searchTerm = searchString.toLowerCase();

  return moviesArray.filter(movie => {
    const movieTitle = movie.Title.toLowerCase();
    return movieTitle.includes(searchTerm);
  });
};

const searchResult = searchByTitle('ring', movies);
console.log(searchResult);

/* ESERCIZIO 18
  Scrivi una funzione chiamata "searchAndDivide" che riceve una stringa come parametro e ritorna un oggetto contenente due array: "match" e "unmatch".
  "match" deve includere tutti i film dell'array "movies" fornito che contengono la stringa fornita all'interno del proprio titolo, mentre "unmatch" deve includere tutti i rimanenti.
*/

function searchAndDivide(searchString, moviesArray) {
  if (!searchString || !moviesArray || !Array.isArray(moviesArray)) {
    return { match: [], unmatch: [] };
  }

  const searchTerm = searchString.toLowerCase();

  const match = moviesArray.filter(movie => {
    const movieTitle = movie.Title.toLowerCase();
    return movieTitle.includes(searchTerm);
  });

  const unmatch = moviesArray.filter(movie => !match.includes(movie));

  return { match, unmatch };
}

const searchResult1 = searchAndDivide('ring', movies);
console.log(searchResult1);

/* ESERCIZIO 19
  Scrivi una funzione chiamata "removeIndex" che riceve un numero come parametro e ritorna l'array "movies" fornito privo dell'elemento nella posizione ricevuta come parametro.
*/

function removeIndex(index) {
  if (index >= 0 && index < movies.length) {
    movies.splice(index, 1);
    return movies;
  } else {
    console.error("Index out of range");
    return null;
  }
};

const indexToRemove = 12;
const updatedMovies = removeIndex(indexToRemove);

if (updatedMovies !== null) {
  console.log("Movies after removal:", updatedMovies);
};

// DOM (nota: gli elementi che selezionerai non si trovano realmente nella pagina)

/* ESERCIZIO 20
  Scrivi una funzione per selezionare l'elemento dotato di id "container" all'interno della pagina.
*/


function selectContainer() {
  const containerElement = document.getElementById('container');
  return containerElement;
};

const container = selectContainer();
console.log(container);

const ventesimoElement = document.getElementById('ventesimo');
ventesimoElement.innerHTML = "ESERCIZIO 20: ";

/* ESERCIZIO 21
  Scrivi una funzione per selezionare ogni tag <td> all'interno della pagina.
*/

function tuttitd() {
  const tdElements = document.querySelectorAll('td');
  return tdElements;
}

const tuttecelle = tuttitd();

console.log(tuttecelle);

/* ESERCIZIO 22
  Scrivi una funzione che, tramite un ciclo, stampa in console il testo contenuto in ogni tag <td> all'interno della pagina.
*/

function stampaTestoTd() {
  const tdElements = document.querySelectorAll('td');
  tdElements.forEach((td) => {
    console.log(td.textContent);
  });
};


/* ESERCIZIO 23
  Scrivi una funzione per aggiungere un background di colore rosso a ogni link all'interno della pagina.
*/

function aggiungiBackgroundRossoAiLink() {
  const linkElements = document.querySelectorAll('a');
  linkElements.forEach((link) => {
    link.style.backgroundColor = 'red';
  });
};

/* ESERCIZIO 24
  Scrivi una funzione per aggiungere un nuovo elemento alla lista non ordinata con id "myList".
*/

function aggiungiElementoALista() {
  const myList = document.getElementById('myList');
  const nuovoElemento = document.createElement('li');
  nuovoElemento.textContent = 'Nuovo elemento';
  myList.appendChild(nuovoElemento);
};

/* ESERCIZIO 25
  Scrivi una funzione per svuotare la lista non ordinata con id "myList".
*/

function svuotaLista() {
  const myList = document.getElementById('myList');
  myList.innerHTML = '';
};

/* ESERCIZIO 26
  Scrivi una funzione per aggiungere ad ogni tag <tr> la classe CSS "test"
*/



// [EXTRA] JS Avanzato

/* ESERCIZIO 27
  Crea una funzione chiamata "halfTree" che riceve un numero come parametro e costruisce un mezzo albero di "*" (asterischi) dell'altezza fornita.

  Esempio:
  halfTree(3)

  *
  **
  ***

*/

/* ESERCIZIO 28
  Crea una funzione chiamata "tree" che riceve un numero come parametro e costruisce un albero di "*" (asterischi) dell'altezza fornita.

  Esempio:
  tree(3)

    *
   ***
  *****

*/

/* ESERCIZIO 29
  Crea una funzione chiamata "isItPrime" che riceve un numero come parametro e ritorna true se il numero fornito è un numero primo.
*/

function isItPrime(number) {
  if (number <= 1) {
    return false;
  }

  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) {
      return false;
    }
  }

  return true;
};

const testNumber = 227;
const result = isItPrime(testNumber);

console.log(`${testNumber} ${result}`);
document.getElementById('ventinovesimo').innerHTML = `ESERCIZIO 29: ${testNumber} ${result}`;

