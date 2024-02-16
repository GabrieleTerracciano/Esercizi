// Generazione della griglia del calendario

// Oggi che giorno è?
const now = new Date();
const getMonth = now.getMonth();

// Adesso sappiamo in che mese siamo, dobbiamo stabilire questo mese quanti giorni ha; inoltre dobbiamo anche creare un array del mese, che conterrà tanti array quanti sono i giorni del mese. Il numero di giorni, quindi, genererà la griglia visiva e l'array

const appointments = [];

const monthNames = [
    'Gennaio',
    'Febbraio',
    'Marzo',
    'Aprile',
    'Maggio',
    'Giugno',
    'Luglio',
    'Agosto',
    'Settembre',
    'Ottobre',
    'Novembre',
    'Dicembre'
];

//Scriviamo il nome del mese nell'h1 dell'html

const printCurrentMonthInh1 = () => {
    const title = document.querySelector('h1');
    const currentMonth = monthNames[getMonth]; // Con il numero del mese presente nella variabile globale pesco nel mio array il mese corrispondente
    title.innerText = currentMonth;
}

printCurrentMonthInh1();

//Dobbiamo calcolare il numero dei giorni del mese trovato, per generare la griglia e l array
// Mi serve prendere il primo giorno del mese successivo al mese trovato e poi ottenere il giorno prima, che sara
//l ultimo giorno del mese in corso; il numero dell ultimo giorno del mese in corso corrispondera al numero di giorni totali

const dayInThisMonth = () => {
    const getYear = now.getFullYear();
    const lastDayInTheMonth = new Date(getYear, getMonth + 1, 0); //In questo momento ad esempio gli sto chiedendo lo 0 marzo del 2024, ovviamente il giorno 0 non esiste
    //ed essendo il numero prima di uno, corrisponde al giorno prima, cioe in questo caso il 29 febbraio 2024
    const numberOfTheDay = lastDayInTheMonth.getDate();
    return numberOfTheDay;
}
dayInThisMonth();

// Ho bisogno di eliminare la classe selected, se presente, altrimenti quando clicco su un giorno, il giorno precedente rimane selezionato
const unSelectAllDays = () => {
    const previousSelected = document.querySelector('.selected');
    if (previousSelected) {
        previousSelected.classList.remove('selected');
    }
}

const showAppointments = (indexOfTheDay) => {
    //Questa funzione deve popolare la lista degli impegni del giorno
    //Leggere gli appuntamenti nell array corrispondente
    const appointmentsForThisDay = appointments[indexOfTheDay];
    //Selezionare il contenitore lista
    const appointmentsList = document.querySelector('#appointments ul');
    //Cliccare gli appuntamenti del giorno e creare gli elementi della lista
    appointmentsList.innerHTML = '';
    appointmentsForThisDay.forEach((appointment) => {
        const newLi = document.createElement('li');
        newLi.innerText = appointment;
        appointmentsList.appendChild(newLi);
    });
    //A css il div degli impegni e display none, quindi adesso devo mostrarlo
    const appointmentsDiv = document.getElementById('appointments');
    appointmentsDiv.style.display = 'none';
}


//Funzione per gestire la sezione meetingday
const changeMeetingDaySection = (indexOfTheDay) => {
    const rightSpan = document.getElementById('newMeetingDay');
    rightSpan.classList.add('hasday');
    rightSpan.innerText = indexOfTheDay + 1;
}
//creazione griglia con tuttle le funzionalita
const createDays = (numberOfDays) => {
    const calendarDiv = document.getElementById('calendar');
    // Ciclando il numero di giorni creo e appendo i div corrispondenti al numero di giorni nel contenitore padre calendar
    for (let i = 0; i < numberOfDays; i++) {
        const dayCellDiv = document.createElement('div');
        dayCellDiv.classList.add('day');
        //Rendiamo il div del giorno cliccabile
        dayCellDiv.addEventListener('click', function () {
            unSelectAllDays();
            dayCellDiv.classList.add('selected');
            //Adesso deve comparire la sezione meetingday, con gli eventuali impegni del giorno
            changeMeetingDaySection(i);
            //Se nella giornata ci sono gia impegni, li devo mostrare
            if (appointments[i].length > 0) {
                showAppointments(i);
            } else {
                showAppointments(i);
                const appointmentsDiv = document.getElementById('appointments');
                appointmentsDiv.style.display = 'none';
            }
        });
        //Creo i div dei singoli giorni
        //scrivo il numero del giorno
        const cellValue = document.createElement('h3');
        cellValue.innerText = i + 1;
        dayCellDiv.appendChild(cellValue);
        //Appendo il div del signolo giorno al calendar
        calendarDiv.appendChild(dayCellDiv);
        //Popolo l array con l array corrispondente al singolo giorno
        appointments.push([]);
    }
    console.log(appointments);
}
createDays(dayInThisMonth());

const handleFormSubmit = (e) => {
    e.preventDefault();
    //Leggere il giorno selezionato
    const selectedDay = document.getElementById('newMeetingDay').innerText;
    //Leggere l ora selezionata
    const meetingTime = document.getElementById('newMeetingTime').value;
    //Leggere il testo dell impregno
    const meetingName = document.getElementById('newMeetingName').value;
    //in un unica stringa scrivo orario e testo dell impegno
    const meetingString = `${meetingTime} - ${meetingName}`;
    //scrivo la stringa nell array dentro appointments corrispondente al giorno
    const indiceGiorno = parseInt(selectedDay) - 1;
    appointments[indiceGiorno].push(meetingString);
    //Voglio indicare con un pallino i giorni nei quali ci sono impegni
    const dot = document.createElement('span');
    dot.classList.add('dot');
    //trovo la cella del giorno cliccato
    const selectedCell = document.querySelector('.selected');
    //Se il giorno ha gia il pallino, non lo devo aggiungere
    if (!selectedCell.querySelector('.dot')) {
        selectedCell.appendChild(dot);
    }
        // Mostra gli impegni del giorno aggiornati
        showAppointments(indiceGiorno);
    };

    //Avviamo il tutto creando un eventListener sul submit del form
    const meetingForm = document.querySelector('form');
    meetingForm.addEventListener('submit', handleFormSubmit);




