/* ESERCIZIO 1
 Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato.
*/


function area(l1, l2) {
    return ((l1 * l2));
}

console.log("L'area del rettangolo equivale a " + area(6, 4) + 'm 2');

/* ESERCIZIO 2
 Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma dei due parametri, ma se il valore dei due parametri è il medesimo deve invece tornare
 la loro somma moltiplicata per tre.
*/

function crazysum(numero1, numero2) {
    if (numero1 === numero2) {
        return (numero1 + numero2) * 3
    }
    else {
        return (numero1 + numero2)
    }
}
console.log(crazysum(30, 50));

/* ESERCIZIO 3
 Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un numero fornito come parametro e 19.
 Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora il numero fornito sia maggiore di 19.
*/

function crazyDiff(numero1) {
    let diffass = Math.abs(numero1 - 19)
    if (numero1 > 19) {
        diffass *= 3;
    }
    return diffass
}

console.log(crazyDiff(35));

/* ESERCIZIO 4
 Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro, e ritorna true se n è compreso tra 20 e 100 (incluso) oppure
 se n è uguale a 400.
*/

function boundary(nintero) {
    if (nintero >= 20 && nintero <= 100 || nintero === 400) {
        return true
    } else {
        return false
    }
}

console.log(boundary(40));

/* ESERCIZIO 5
 Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita, ma se la stringa fornita comincia già con "EPICODE" allora deve
 ritornare la stringa originale senza alterarla.
*/

function epify(stringa) {
    let stringa2 = "EPICODE E' TOSTA";
    if (stringa2.indexOf(stringa) === 0) {
        return stringa2
    }
    return stringa + stringa2;
}

console.log(epify("EPICODE"))

/* ESERCIZIO 6
 Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro. La funzione deve controllare che il parametro sia un multiplo
 di 3 o di 7. (Suggerimento: usa l'operatore modulo)
*/

function check3and7(numero) {
if ((numero % 3 === 0) || (numero % 7 === 0)) {
    return "E\' un multipro di 3 o 7"
}
return "Non e un multipro di 3 o 7"
}
console.log(check3and7(400))

/* ESERCIZIO 7
 Scrivi una funzione di nome "reverseString", il cui scopo è invertire una stringa fornita come parametro (es. "EPICODE" --> "EDOCIPE")
*/

function reverseString(stringa = "") {
return stringa.split("").reverse(). join("")
}

console.log(reverseString('EPICODE'))

/* ESERCIZIO 8
 Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata da diverse parole.
 La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 9
 Scrivi una funzione di nome "cutString", che riceve come parametro una stringa. La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere
 della stringa originale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 10
 Scrivi una funzione di nome "giveMeRandom", che accetta come parametro un numero n e ritorna un'array contenente n numeri casuali inclusi tra 0 e 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
