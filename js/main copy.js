let first = [];

// fill the array with x2 same value, in the same array.
for (let i = 1; i <= 26; i++) {
  first.push(i);
  first.push(i);
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

for (let i = 0; i < firstDeck.length; i++) {
  firstDeck[i].textContent = p[i];
  firstDeck[i].addEventListener('click', function () {
    let fooV = showCard(i);
    play.push(fooV);
    // console.log(play);
    // firstDeck[i].removeEventListener('click');
    if (play.length == 2) {
      // check if same
      if (play[0] == play[1]) {
        // console.log(true);
        match();
        reset_step();
      } else {
        // console.log(false);
        reset_step();
      }
    }

  });
}

// posso anche mettere i valori dentro un array momentaneo e comparare i [0] e [1];
function showCard(i) {
  firstDeck[i].classList.add('selected');
  return firstDeck[i].innerText;
}
function reset_step() {
  document.getElementsByClassName('selected')[1].classList.remove('selected');
  document.getElementsByClassName('selected')[0].classList.remove('selected');
  play = [];
}

// talk with the folks on discord for the nodelist stuff 
function test() {
  let pippo = [0, 4];
  if (pippo[0] == pippo[1]) {
    return console.log(true);
  } else {
    return console.log(false);
  }
}
// test();
let toWin = 0;
let points = document.getElementById('points');
function match() {
  document.getElementsByClassName('selected')[1].classList.add('match');
  document.getElementsByClassName('selected')[0].classList.add('match');
  // toWin++;
  points.innerText = ++toWin;
}