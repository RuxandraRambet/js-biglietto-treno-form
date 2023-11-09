'use strict';

const elementUser = document.getElementById('user');
const elementKm = document.getElementById('km');
const elementAge = document.getElementById('age');
const elementSubmitButton = document.getElementById('submit-button');
const elementResetButton = document.getElementById('reset-button');

// Virtual Ticket
const elementVirtualTicket = document.getElementById('virtual-ticket');
const elementPassengerName = document.getElementById('passenger-name');
const elementTicketOffer = document.getElementById('ticket-offer');
const elementTicketCoach = document.getElementById('ticket-coach');
const elementTicketCpCode = document.getElementById('ticket-cpcode');
const elementTicketPrice = document.getElementById('ticket-price');

// Calcolo biglietto
const kmPrice = 0.21;
const discountUnder18 = 20;
const discountOver65 = 40;
const defaultAge = 'minor';

elementSubmitButton.addEventListener('click', function(){
    let ticketPrice = kmPrice * Number(elementKm.value);
    let offer = 'Biglietto Standard';

    if (elementAge.value === 'minor') {
        ticketPrice -= (ticketPrice * discountUnder18) / 100;
        offer = 'Biglietto scontato del 20%'
    }else if (elementAge.value === 'senior') {
        ticketPrice -= (ticketPrice * discountOver65) / 100;
        offer = 'Biglietto scontato del 40%'
    }

    elementPassengerName.innerHTML = elementUser.value;
    elementTicketOffer.innerHTML = offer;
    elementTicketPrice.innerHTML = `${ticketPrice.toFixed(2)} €`;

    // Mostro Virtual Ticket
    elementVirtualTicket.classList.remove('hidden');
});

elementResetButton.addEventListener('click', function(){
    elementUser.value = '';
    elementKm.value = '';
    elementAge.value = defaultAge;
    elementVirtualTicket.classList.add('hidden');
});