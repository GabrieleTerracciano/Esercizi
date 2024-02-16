const colonne = [
    { id: "primo", inizio: 1 },
    { id: "secondo", inizio: 11 },
    { id: "terzo", inizio: 21 },
    { id: "quarto", inizio: 31 },
    { id: "quinto", inizio: 41 },
    { id: "sesto", inizio: 51 },
    { id: "settimo", inizio: 61 },
    { id: "ottavo", inizio: 71 },
    { id: "nono", inizio: 81 }
];

colonne.forEach(element => popolaDiv(element.id, element.inizio));
function popolaDiv(idDiv, inizio,) {
    let numeri = inizio;

    for (let i = 1; i <= 10; i++) {
        let cella = document.createElement("td");
        cella.textContent = numeri;
        document.getElementById(idDiv).appendChild(cella);
        numeri++;
    }
}
document.getElementById("generaNumero").addEventListener("click", function () {
    const numeroCasuale = Math.floor(Math.random() * 90) + 1;
    document.getElementById("numeroGenerato").textContent = "Numero Estratto " + numeroCasuale;
});