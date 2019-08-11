let first = [];

// fill the array with x2 same value, in the same array.
for (let i = 1; i <= 26; i++) {
// for (let i = 1; i <= 5; i++) {
  first.push(i,i);
  // console.log(first); 
}

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
for(let i = 0; i < firstDeck.length; i++){
  firstDeck[i].textContent = p[i];
  firstDeck[i].addEventListener('click', flip);
}

function flip(){
  // log too see if works 
  // console.log(true); 
  if (play.length != '2'){
    play.push(this.textContent);
    // console.log(play); 

    // ! maybe i can remove this IF

    // if (this.classList.contains('flip')) {
    //   this.classList.remove("flip");
    // } else {
      // this.style.zIndex = '220';
      this.classList.add("flip");
      this.removeEventListener('click', flip);
    // }
    // ! check this one ()
    if ((play.length == '2') && (play[0] == play[1])){
      console.log('match');
      setTimeout(() => {
        document.getElementsByClassName('flip')[1].style.opacity = '0';
        document.getElementsByClassName('flip')[0].style.opacity = '0';
        clearNewMove();
      }, (1000));
    } else if ((play.length == '2') && (play[0] != play[1])){
      console.log('not match');
      setTimeout(()=>{
        document.getElementsByClassName('flip')[1].addEventListener('click', flip);
        document.getElementsByClassName('flip')[0].addEventListener('click', flip);
        // this.addEventListener('click', flip);
        clearNewMove();
      }, 1000); 
    }
  }
};

var clearNewMove= ()=>{
  document.getElementsByClassName('flip')[1].classList.remove('flip');
  document.getElementsByClassName('flip')[0].classList.remove('flip');
  play = []; 
};
// function disable(){
//   this.removeEventListener('click', flip);
// }