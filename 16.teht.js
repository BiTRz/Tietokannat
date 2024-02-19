const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

// Tehtävä a
readline.question('Anna ensimmäinen luku: ', luku1 => {
    readline.question('Anna toinen luku: ', luku2 => {
        if (luku1 > luku2) {
            console.log("Suurempi luku on " + luku1);
        } else if (luku2 > luku1) {
            console.log("Suurempi luku on " + luku2);
        } else {
            console.log("Luvut ovat yhtä suuret.");
        }

        // Tehtävä b
        readline.question('Anna sana: ', sana => {
            let kaannettySana = sana.split('').reverse().join('');

            if (sana === kaannettySana) {
                console.log(sana + " on palindromi.");
            } else {
                console.log(sana + " ei ole palindromi.");
            }
            readline.close();
        });
    });
});