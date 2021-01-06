// variabili dom hide
var giorno = document.getElementById('giorno');
var mese = document.getElementById('mese');
var anno = document.getElementById('anno');
var btn = document.getElementById('btn');
var mex = document.getElementById('mex');
var hide = document.getElementById('hide');
var checkElements = document.getElementsByClassName('check-elements');

// variabili dom hide1
var mex2 = document.getElementById('mex2');
var dadi = document.getElementById('dadi');
var hide1 = document.getElementById('hide1');
var btn1 = document.getElementById('btn1');
var computerNumber = Math.floor(Math.random() * 6) +1;
var userNumber = Math.floor(Math.random() * 6) +1;

// variabili
var date = new Date();
var arr = [];
var control;
var controlMonth;
var controlYear;
var controlCheck;

// inizio evento gioco dadi
dadi.addEventListener('click', function(){

  // definizione variabili al click
  control = false;
  computerNumber = Math.floor(Math.random() * 6) +1;
  userNumber = Math.floor(Math.random() * 6) +1;
  btn1.style = 'display: none';

  // condizioni di gioco
  if(computerNumber > userNumber){
    mex2.innerHTML = 'Il tuo numero è: ' + userNumber + ', quello del computer: ' + computerNumber + ', mi spiace....ritenta e sarai più fortunato!'
  }else if(computerNumber === userNumber){
    mex2.innerHTML = 'Il tuo numero è: ' + userNumber + ', quello del computer: ' + computerNumber + ' ...un pareggio non basta!'
  }else{
    control = true;
  }

  // vittoria!!!
  if(control === true){
    mex2.innerHTML = 'Il tuo numero è: ' + userNumber + ', quello del computer: ' + computerNumber + ', bravo...hai vinto!Clicca sul bottone per accedere al generatore!'
    btn1.style = 'display: block';
  }

});

// inizio evento di accesso
btn1.addEventListener('click', function(){

  hide1.style = 'display: none';
  hide.style = 'display: flex';

});

// inizio evento generatore passwd
btn.addEventListener('click', function(){

  // ridefinizione variabili al click
  mex.innerHTML = '';
  arr = [];
  control = false;
  controlCheck = 0;
  controlMonth = 0;
  controlYear = 0;

  // push array
  arr.push(Number(giorno.value));
  arr.push(Number(mese.value));
  arr.push(Number(anno.value));

  // definizione chek radio
  if(checkElements[0].checked){
    controlCheck = 1;
  }else if(checkElements[1].checked){
    controlCheck = 2;
  }else if(checkElements[2].checked){
    controlCheck = 3;
  }else{
    controlCheck = 0;
  }

  // definizione anno bisesto
  if(arr[2] % 4 === 0){
    controlYear = 1;
  }else{
    controlYear = 2;
  }

  // definizione mesi
  if(arr[1] === 1 || arr[1] === 3 || arr[1] === 5 || arr[1] === 7 || arr[1] === 8 || arr[1] === 10 || arr[1] === 12){
    controlMonth = 1;
  }else if(arr[1] === 2){
    controlMonth = 2;
  }else{
    controlMonth = 3;
  }

  // controllo dati
  if(controlCheck === 0){
    mex.innerHTML = 'Devi scegliere un metodo.';
  }else if(isNaN(arr[0]) || isNaN(arr[1]) || isNaN(arr[2])){
      mex.innerHTML = 'Inserisci solo numeri.';
  }else if(controlYear === 1 && controlMonth === 2 && arr[0] > 29){
    mex.innerHTML = 'Ehi, inserisci un numero valido';
  }else if(controlYear === 2 && controlMonth === 2 && arr[0] > 28){
    mex.innerHTML = arr[2] + ' non è un anno bisesto.Febbraio non può avere più di 28 giorni!';
  }else if((controlYear === 1 || controlYear === 2) && controlMonth === 1 && arr[0] > 31){
    mex.innerHTML = 'Ehi, inserisci un numero valido.';
  }else if((controlYear === 1 || controlYear === 2) && controlMonth === 3 && arr[0] > 30){
    mex.innerHTML = 'Ehi, inserisci un numero valido.';
  }else if(arr[0] < 1 || arr[1] < 1 || arr[1] > 12 || arr[2] < 1920 || arr[2] > date.getFullYear()){
    mex.innerHTML = 'Ehi, inserisci un numero valido.';
  }else{
    control = true;
  }

  // operazioni e output
  if(control === true && controlCheck === 3){
    for(var i = 0; i < arr.length; i++){
        arr[i] = arr[i].toString(32);
      }
    mex.innerHTML = 'La tua password è: ' + arr[0] + arr[1] + arr[2];
  }
  if(control === true && controlCheck === 2){
    for(var i = 0; i < arr.length; i++){
        arr[i] = arr[i].toString(16);
      }
    mex.innerHTML = 'La tua password è: ' + arr[0] + arr[1] + arr[2];
  }
  if(control === true && controlCheck === 1){
    for(var i = 0; i < arr.length; i++){
        arr[i] = arr[i].toString(8);
      }
    mex.innerHTML = 'La tua password è: ' + arr[0] + arr[1] + arr[2];
  }

});
