// Dichiaro e Inizializzo le variabii
// Variabili Input
const userName = document.getElementById('userName');
const kmRange = document.getElementById('kmRange');
const userAge = document.getElementById('userAge');
const submitButton = document.getElementById('submit-button');
const resetButton = document.getElementById('reset-button');
const kmPrice = 0.21;
const minorsDiscount = 0.2;
const elderyDiscount = 0.4;

// Variabili Output
const userTicketPrice = document.getElementById('userTicketPrice');
let ticketPrice;
const passengerName = document.getElementById('passengerName');

// Funzione che all'evento 'click' calcola il prezzo del biglietto in base all'eta'
submitButton.addEventListener('click', 
    function() {
        // Prezzo minori 18
        if (userAge.value == "meno18") {

            ticketPrice = ((kmPrice * kmRange.value) - (kmPrice * kmRange.value) * minorsDiscount);

        }

        // Prezzo maggiori 65
        else if (userAge.value == "piu65") {

            ticketPrice = ((kmPrice * kmRange.value) - (kmPrice * kmRange.value) * elderyDiscount);
        }    

        // Prezzo >= 18 <= 65
        else if (userAge.value == "18-65") {

            ticketPrice = kmPrice * kmRange.value;
        }
        
        else { //if (userAge.value == "scegli")
            alert("inserisci prima una fascia di eta'");
        }

        // Stampo in HTML il risultato
        ticketPrice = ticketPrice.toFixed(2); //arrotondo a 2 cifre decimali
        userTicketPrice.innerHTML = `€${ticketPrice}`;

        passengerName.innerHTML = `${userName.value}`; //stampo in HTML il nome del passegero
    }
)    

// Button per resettare gli input
resetButton.addEventListener('click',
        function() {

            userName.value = "";
            kmRange.value = "";
            userAge.value = "scegli";
        }
)




        



