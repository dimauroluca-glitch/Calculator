const schermo = document.getElementById('numero');
function aggiungiAggiungi(valore) {
    schermo.value += valore;
}
function cancella() {
    schermo.value = '';
}
function calcola() {
    try {
        if (schermo.value !== '') {
            schermo.value = eval(schermo.value);
        }
    } catch (error) {
        schermo.value = 'Errore';
    }
}