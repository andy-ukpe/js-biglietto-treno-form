// elementi form
  // buttons
var generateButton = document.getElementById('Generate');
var nullButton = document.getElementById('annulla');
  //form
var formName = document.getElementById('form-Name');
var formKm = document.getElementById('form-Km');
var etaViaggiatore = document.getElementById('fasciaEta');

// variabile display
var display = document.getElementById('stampa-biglietto');

// elementi Biglietto
var biglName = document.getElementById('bigl-Name');
biglName.trim;
var biglCosto = document.getElementById('bigl-Cost');
var biglOfferta = document.getElementById('bigl-off');
var biglCarrozza = document.getElementById('bigl-car');
var biglCodice = document.getElementById('bigl-Code');

// altro
var formKmValue;
var costoValue;
var costo;

// evento quando si clicca su genera
generateButton.addEventListener('click',
  function(){

      display.style.display="block";

      // prezzo unitario
      formKmValue = parseInt(formKm.value);
      formEtaValue = etaViaggiatore.value;
      var prezzoUnitario = formKmValue * 0.21;

      if( formEtaValue == 'Minorenne' ) {

        // prezzo junior
        costo = prezzoUnitario - (  prezzoUnitario * 20 / 100 );
        // offerta
        offerta = 'offerta Junior';

     } else if( formEtaValue == 'Over 65' ) {

        //prezzo major
        costo = prezzoUnitario - ( ( prezzoUnitario * 40) / 100 );
        // offerta
        offerta = 'offerta Silver';
     } else {

        //Costo
        costo = prezzoUnitario;
        // offerta
        offerta = '/';
     }

     // STAMPA BIGLIETTO
     // nome sul Biglietto
     biglName.innerHTML = formName.value;
     // offerta
     biglOfferta.innerHTML = offerta ;
     // Carrozza
     biglCarrozza.innerHTML = Math.floor(Math.random() * 20 ) + 1 ;
     // Codice
     biglCodice.innerHTML = Math.floor(Math.random() * 100000 ) + 1 ;
     // costo
     biglCosto.innerHTML = costo.toFixed(2) + '€';

     // display-block
     display.className = display.classList + " display-block";

    }

);

// evento quando si clicca ANNULLA
nullButton.addEventListener('click',
  function(){
    // RESET BIGLIETTO
    // annulla nome
    display.style.display="none";
    formName.value = '';
    biglName.innerHTML = '';
    // annulla km
    formKm.value = '';
    // fasciaEta
    fasciaEta.value = 'Maggiorenne';
    // Offerta
    offerta.innerHTML = '';
    // Carrozza
    biglCarrozza.innerHTML = '' ;
    // Codice
    biglCodice.innerHTML = '' ;
    // prezzo
    biglCosto.innerHTML = '';
    // display
    display.className = display.classList + " display-none";
  }
);
