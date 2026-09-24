let hemmeligKode = "";

for (let i = 0; i < 4; i++) {
    hemmeligKode += Math.floor(Math.random() * 10);
}

let knap = document.getElementById("knap");
let resultat = document.getElementById("resultat");

knap.addEventListener("click", function() {
    let gaet = document.getElementById("gaet").value;

    if (gaet.length !== 4) {
        resultat.textContent = "Du skal indtaste præcis 4 cifre.";
        return;
    }

    let rigtigPlads = 0;
    let forkertPlads = 0;

    for (let i = 0; i < 4; i++) {
        if (gaet[i] === hemmeligKode[i]) {
            rigtigPlads++;
        } else {
            for (let j = 0; j < 4; j++) {
                if (gaet[i] === hemmeligKode[j]) {
                    forkertPlads++;
                    break;
                }
            }
        }
    }

    if (rigtigPlads === 4) {
        resultat.textContent = "Tillykke! Du har gættet den hemmelige kode!";
    } else if (rigtigPlads === 0 && forkertPlads === 0) {
        resultat.textContent = "Ingen cifre er korrekte.";
    } else {
        resultat.textContent =
            rigtigPlads + " cifre er korrekte og står det rigtige sted, og " +
            forkertPlads + " cifre er korrekte, men står ikke det rigtige sted.";
    }
});