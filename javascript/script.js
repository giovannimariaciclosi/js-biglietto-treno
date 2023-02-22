/*
Consegna:

Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.
L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo)
*/

/*
- Chiedo il numero di km all'utente
- Chiedo l'età all'utente
- Calcolo il prezzo del biglietto senza sconti, km * 0.21€

? SE l'utente è minorenne (<18) 
  ° applico uno sconto del 20%
:? ALTRIMENTI SE l'utente è over 65 (>65)
  ° applico uno sconto del 40%
:  ALTRIMENTI 
  ° applico il prezzo intero

- Stampo il prezzo finale con massimo due decimali
*/

let userTripKm = parseInt(prompt("Inserisci il numero di chilometri che vuoi percorrere"));
  console.log(userTripKm);

let userAge = parseInt(prompt("Inserisci la tua età"));
  console.log(userAge);

let ticketPrice = userTripKm * 0.21 + "€";
  console.log(ticketPrice);

