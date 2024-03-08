const nomeSalvato = localStorage.getItem('nome');

if (nomeSalvato) {
  document.getElementById('nome-salvato').textContent = `Nome salvato: ${nomeSalvato}`;
}

document.getElementById('salva-nome').addEventListener('click', () => {
  const nome = document.getElementById('nome').value;
  localStorage.setItem('nome', nome);
  document.getElementById('nome-salvato').textContent = `Nome salvato: ${nome}`;
});

document.getElementById('rimuovi-nome').addEventListener('click', () => {
  localStorage.removeItem('nome');
  document.getElementById('nome-salvato').textContent = '';
});

let tempoTrascorso = 0;

if (sessionStorage.getItem('tempoTrascorso')) {
  tempoTrascorso = parseInt(sessionStorage.getItem('tempoTrascorso'));
}

const aggiornaContatore = () => {
  tempoTrascorso++;
  document.getElementById('tempo-trascorso').textContent = `Tempo trascorso: ${tempoTrascorso} secondi`;
  sessionStorage.setItem('tempoTrascorso', tempoTrascorso);
};

setInterval(aggiornaContatore, 1000);

// Aggiorna il contatore al caricamento della pagina
aggiornaContatore();