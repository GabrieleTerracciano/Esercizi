var chiama = document.getElementById("chiama");
var ricarica = document.getElementById("ricarica");
var User = /** @class */ (function () {
    function User(_nome, _cognome) {
        this.nome = _nome;
        this.cognome = _cognome;
        this.credito = 0;
        this.numeroChiamate = 0;
    }
    User.prototype.ricarica = function (ammontare) {
        return ammontare += this.credito;
    };
    return User;
}());
var user = new User("Aldo", "Baglio");
user.ricarica(50);
