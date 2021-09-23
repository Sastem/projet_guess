let nbInput = document.getElementById("guess");
let btn = document.getElementById("submit")
let nombre = Math.round(Math.random() * 100);
let essai = 10;
let gagne = false;

btn.addEventListener("click", function () {
    let result = parseInt(nbInput.value);
    console.log(result);
    if (essai <= 0 || gagne) {
        gameOver();
    }
    if (!gagne && essai > 0) {
        essai--;
        evaluate(result, essai);
    } 
});
let evaluate = function (result, essai) {
    if (result > nombre) {
        document.querySelector(".js-manipulation").innerHTML +=
            "<p> Perdu :( valeur trop grande il vous reste " + essai + " tentative(s)</p>";
    } else if (result < nombre) {
        document.querySelector(".js-manipulation").innerHTML +=
            "<p> Perdu :( valeur trop petite il vous reste " + essai + " tentative(s)</p>";
    } else if (result == nombre) {
        document.querySelector(".js-manipulation").innerHTML +=
            "<p>Vous avez gagné en " + (10 - essai) + " tentative(s) (résultat: " + nombre + ")</p>";
        gagne = true;
    }
};

let gameOver = function () {
    if (gagne) {
        document.querySelector(".js-manipulation").innerHTML += "<p>Vous avez déjà trouvé la bonne réponse </p>";
    }
    else {
        document.querySelector(".js-manipulation").innerHTML +=
            "<p> Game Over ! Il ne vous reste plus de tentatives. La réponse est " + nombre + ".</p>";
    }
}