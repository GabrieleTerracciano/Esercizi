const readData = async () => {
    fetch('https://striveschool-api.herokuapp.com/books')
        .then((response) => {
            if (!response.ok) {
                throw new Error(`Errore di rete: ${response.status}`);
            }
            return response.json();
        })
        .then((data) => {
            displayBooks(data);
        })
        .catch((error) => {
            console.error("Errore durante il recupero dei dati:", error);
        });
};


const displayBooks = (books) => {
    const container = document.getElementById('books-container');
    books.forEach((book) => {
        const card = createBookCard(book);
        container.appendChild(card);
    });
};

const createBookCard = (book) => {
    const card = document.createElement('div');
    card.classList.add('col');
    card.innerHTML = `
      <div class="card mb-3">
        <img src="${book.img}" class="card-img-top" alt="${book.title}">
        <div class="card-body">
          <h5 class="card-title">${book.title}</h5>
          <p class="card-text">€${book.price}</p>
          <button type="button" class="btn btn-danger remove-book">Scarta</button>
        </div>
      </div>
    `;

    card.querySelector('.remove-book').addEventListener('click', () => {
        card.remove();
    });
    return card;
};

readData();
