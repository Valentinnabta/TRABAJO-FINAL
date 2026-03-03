document.addEventListener("DOMContentLoaded", function () {

    let flor = document.getElementById("flor4");
    let musica = document.getElementById("musica");

    flor.addEventListener("click", function () {

        if (musica.paused) {
            musica.play();
        } else {
            musica.pause();
        }

    });

});