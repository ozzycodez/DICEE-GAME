var randomNumber1 = Math.random();
randomNumber1 = randomNumber1*6;
randomNumber1 = Math.floor(randomNumber1);
randomNumber1 = randomNumber1+1;
value1 = randomNumber1;
randomNumber1 = randomNumber1.toString();


var img1Link = "images/dice"+randomNumber1+".png";

document.querySelector("img.img1").setAttribute("src",img1Link);

var randomNumber2 = Math.random();
randomNumber2 = randomNumber2*6;
randomNumber2 = Math.floor(randomNumber2);
randomNumber2 = randomNumber2+1;
value2 = randomNumber2;
randomNumber2 = randomNumber2.toString();


var img1Link = "images/dice"+randomNumber2+".png";

document.querySelector("img.img2").setAttribute("src",img1Link);


document.querySelector("h1").innerHTML = "Hello";


if (value1 > value2) {
  document.querySelector("h1").innerHTML = "Player 1 wins";
}

else if (value1 < value2) {
  document.querySelector("h1").innerHTML = "Player 2 wins";
}

else {
  document.querySelector("h1").innerHTML = "Draw!";
}
