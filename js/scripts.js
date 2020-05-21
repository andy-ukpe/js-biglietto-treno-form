// elementi form
var generateButton = document.getElementById('Generate');
var nullButton = document.getElementById('annulla');
var formName = document.getElementById('form-Name');
var formKm = document.getElementById('form-Km');
var etaViaggiatore = document.getElementById('fasciaEta');


// elementi Biglietto
var biglName = document.getElementById('bigl-Name');
var biglCosto = document.getElementById('bigl-Cost');

// altro
var formKmValue;
var costoValue

// evento quando si clicca su genera
generateButton.addEventListener('click',
  function(){

    // prezzo unitario
    formKmValue = formKm.value;
    etaViaggiatore = etaViaggiatore.value;
    var prezzoUnitario = formKmValue * 0.21;

    if( etaViaggiatore == 'Minorenne' ) {

      // prezzo junior
      var prezzoJunior = prezzoUnitario - (  prezzoUnitario * 20 / 100 );
      console.log(prezzoJunior);
      biglCosto.innerHTML = prezzoJunior.toFixed(2) + '€';


   } else if( etaViaggiatore == 'Over 65' ) {

      //prezzo major
      var prezzoMajor = prezzoUnitario - ( ( prezzoUnitario * 40) / 100 );

      biglCosto.innerHTML = prezzoMajor.toFixed(2) + '€';

   } else {

      //Costo
      costoValue = prezzoUnitario.toFixed(2);
      biglCosto.innerHTML = prezzoUnitario + '€';

   }

    // nome sul Biglietto
    biglName.innerHTML = formName.value;

    }
);

// evento quando si clicca ANNULLA
nullButton.addEventListener('click',
  function(){
    // annulla nome
    formName.value = '';
    biglName.innerHTML = '';
    // annulla km
    formKm.value = '';
    // fasciaEta
    fasciaEta.value = 'Maggiorenne';
    // prezzo
    biglCosto.innerHTML = '';
  }
);
