let first = [];
var addPoint = 0;
document.querySelector('.score').innerHTML = `SCORE: ${addPoint}`;
var addMoves = 0;
document.querySelector('.moves').innerHTML = ` ${addMoves} :MOVES`;

// fill the array with x2 same value, in the same array.
function populateArray(myArray){
  for (let i = 1; i <= 26; i++) {
    first.push(i,i);
    // console.log(first); 
    }
}
populateArray(first);
// accedi random ad una posizione, copia il valore in un altro array e 


// randomize the array
function shuffle(first) {
  var m = first.length, t, i;

  while (m) {
    i = Math.floor(Math.random() * m--);
    t = first[m];
    first[m] = first[i];
    first[i] = t;
  }
  return first;
}
let p = shuffle(first);


let firstDeck = document.querySelectorAll('.card');
let play = []; // array momentaneo per confronto carte

// populate the cards with the number and add the event for flip the card
function giveEvent(){
  for(let i = 0; i < p.length; i++){
    firstDeck[i].style.opacity = '1';
    firstDeck[i].textContent = p[i];
    firstDeck[i].addEventListener('click', flip);
  }
}

giveEvent();

function flip(){
  // log too see if works 
  // console.log(true); 
  if (play.length != '2'){
    play.push(this.textContent);
    // console.log(play); 
    // addMoves++;
    this.classList.add("flip");
    this.removeEventListener('click', flip);
    if ((play.length == '2') && (play[0] == play[1])){
      console.log('match');

      addPoint++; 
      document.querySelector('.score').innerHTML = `SCORE: ${addPoint}`;
      // console.log(addPoint);
      
      setTimeout(() => {
        document.getElementsByClassName('flip')[1].style.opacity = '0';
        document.getElementsByClassName('flip')[0].style.opacity = '0';
        clearNewMove();
      }, (1000));
      addMoves++;

    } else if ((play.length == '2') && (play[0] != play[1])){
      console.log('not match');
      setTimeout(()=>{
        document.getElementsByClassName('flip')[1].addEventListener('click', flip);
        document.getElementsByClassName('flip')[0].addEventListener('click', flip);
        clearNewMove();
      }, 1000); 
      addMoves++;
    }
    document.querySelector('.moves').innerHTML = `${addMoves} :MOVES`;
  }
    if( addPoint == (first.length / 2)){
    document.querySelector('.congrat').style.display = 'flex';
    document.querySelector('.final').textContent = `You finish the game in ${addMoves} moves`
  }
};

var clearNewMove= ()=>{
  document.getElementsByClassName('flip')[1].classList.remove('flip');
  document.getElementsByClassName('flip')[0].classList.remove('flip');
  play = []; 
};

// document.querySelector('.reset').addEventListener('click', () => {
//   p = shuffle(first);
//   giveEvent();
//   document.querySelector('.congrat').style.display = '';

// });

// force portrait

// document.addEventListener("orientationchange", function (event) {
//   switch (window.orientation) {
//     case -90: case 90:
//       /* Device is in landscape mode */
//       break;
//     default:
//     /* Device is in portrait mode */
//   }
// });