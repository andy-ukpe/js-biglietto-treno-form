// elementi form
var generateButton = document.getElementById('Generate');
var nullButton = document.getElementById('annulla');
var formName = document.getElementById('form-Name');

// elementi Biglietto
var biglName = document.getElementById('bigl-Name');

// evento quando si clicca su genera
generateButton.addEventListener('click',
  function(){
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
  }
);
