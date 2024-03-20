const chiama = document.getElementById("chiama") as HTMLElement;
const ricarica = document.getElementById("ricarica") as HTMLElement;

interface telefono {
  credito: number;
  numeroChiamate: number;
}

class User implements telefono {
  nome: string;
  cognome: string;
  credito: number;
  numeroChiamate: number;
  constructor(_nome: string, _cognome: string) {
    this.nome = _nome;
    this.cognome = _cognome;
    this.credito = 0;
    this.numeroChiamate = 0;
  }

  ricarica(ammontare: number): number {
    return ammontare += this.credito;
  }
}

const user = new User("Aldo", "Baglio");
console.log(user.ricarica(50));
