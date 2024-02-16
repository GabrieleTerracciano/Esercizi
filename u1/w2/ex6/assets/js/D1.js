/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output, lancia il file HTML a cui è collegato e apri la console dagli strumenti di sviluppo del browser. 
- Utilizza dei console.log() per testare le tue variabili e/o i risultati delle espressioni che stai creando.
*/

/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
*/


// String è un parola chiave che su JavaScript serve per inserire del testo e va inserito tra 'apici' singoli o "apici" doppi.
// Number è una parola chiave che su Javascript serve per inserire dei numeri e non servono apici.
// Bolean è una parola chiave che su Javascript serve per verificare se una data funzione è vera o falsa, e puo generare solo due risultati, true o false.
/* Null è una parola chiave che su Javascript definisce l'assenza intenzionale di un oggetto, 
ad esempio se io compilo un form con i miei dati non compilando un campo obbligatorio non ti farà proseguire. Il risultato sarà null
/*
/* In JavaScript, undefined è un valore che rappresenta l'assenza di un valore o il fatto che una variabile non è stata inizializzata.
 Se una variabile è dichiarata ma non è stata assegnato alcun valore, il risultato sarà undefined.
/*

/* ESERCIZIO 2
 Crea una variable chiamata "myName" e assegna ad essa il tuo nome, sotto forma di stringa.
*/

let myname = 'Gabriele';
console.log('Il mio nome è', myname);

/* ESERCIZIO 3
 Scrivi il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/

let numero1 = 12;
let numero2 = 20;
let risultato = numero1 + numero2;

console.log('la somma è', risultato);

/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/

let x = 12;

/* ESERCIZIO 5
  Riassegna un nuovo valore alla variabile "myName" già esistente: il tuo cognome.
  Dimostra l'impossibilità di riassegnare un valore ad una variabile dichiarata con il costrutto const.
*/

myname = 'Terracciano';
console.log('il mio cognome è', myname)

// Cosi darebbere errore perche il costrutto const non puo essere riassegnato

// const myname = 'cognomex';
// myname = 'cognomey';
// console.log('il mio cognome e', myname) //


/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/

let sottrazione = 4 - x;
console.log(sottrazione);

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 EXTRA: verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
*/

let name1 = 'john'
let name2 = 'John'
if (name1 === name2) {
  console.log('i nomi sono uguali')
} else {
  console.log('i nomi sono diversi')
}

