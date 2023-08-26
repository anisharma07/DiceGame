var random = Math.floor(6 * Math.random()) + 1;
document.querySelector(".img1").setAttribute("src", "dice" + random + ".png");

var random2 = Math.floor(6 * Math.random()) + 1;
document.querySelector(".img2").setAttribute("src", "dice" + random2 + ".png");

if (random > random2) {
  document.querySelector("h1").innerHTML = "Player1 Wins!";
} else if (random < random2) {
  document.querySelector("h1").innerHTML = "Player2 Wins!";
} else {
  document.querySelector("h1").innerHTML = "Draw!";
}

document.querySelector(".btn").addEventListener("click", function () {
  location.reload();
});
