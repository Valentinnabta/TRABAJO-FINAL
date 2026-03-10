document.addEventListener("DOMContentLoaded", function () {

    const flor = document.getElementById("flor4");
    const musica = document.getElementById("musica");

    flor.addEventListener("click", function () {

        if (musica.paused) {
            musica.play()
                .then(() => {
                    console.log("Música reproduciéndose");
                })
                .catch(error => {
                    console.error("Error al reproducir:", error);
                });
        } else {
            musica.pause();
            console.log("Música pausada");
        }

    });

});

//document.addEventListener("DOMContentLoaded", function () {

    let flor3 = document.getElementById("flor3");
    let mariposa = document.getElementById("mariposa2");

    

    flor3.addEventListener("click", function () {
console.log('flor3');
    mariposa.classList.add("mariposa2-volar");

});

//});

const flor2 = document.getElementById("flor2");

flor2.addEventListener("click", function() {
  document.body.classList.toggle("dark");
});

document.addEventListener("DOMContentLoaded", function () {

    const flor = document.getElementById("flor2");
    const musica = document.getElementById("musica2");

    flor.addEventListener("click", function () {

        if (musica.paused) {
            musica.play()
                .then(() => {
                    console.log("Música reproduciéndose");
                })
                .catch(error => {
                    console.error("Error al reproducir:", error);
                });
        } else {
            musica.pause();
            console.log("Música pausada");
        }

    });

});