const dataURL = 'https://striveschool-api.herokuapp.com/api/product/';
const API_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWVhZTAyZjJkN2IxMTAwMTkwZTZlM2MiLCJpYXQiOjE3MDk4OTU2NzgsImV4cCI6MTcxMTEwNTI3OH0.esGM-nl5acuXTEJ6kjOOe4uHSJMD_vx-Up5yLNQAiig';
const mioArrayVuoto = [];

window.addEventListener('load', function);

function init() {
}

const readData = async () => {
    try {
        const response = await fetch(dataURL, {
            headers: {
                'Authorization': API_KEY
            }
        });

        if (!response.ok) {
            throw new Error(`La risposta di rete non è andata bene: ${response.status}`);
        }

        const data = await response.json();
        mioArrayVuoto.push(...data);

        console.log(mioArrayVuoto);
    } catch (error) {
        console.error('Errore nel recupero dei dati:', error);
    }
}

readData();