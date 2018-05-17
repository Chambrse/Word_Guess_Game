function hangman() {

    /* Choose the first word */
    var wordlist = ["arryn", "baratheon", "greyjoy", "lannister", "martell", "mormont", "stark", "targaryen", "tully", "tyrell"];
    
    wordnumber = Math.floor(Math.random() * wordlist.length);
    newWord = wordlist[wordnumber];
    console.log(newWord);

    /* Get the banner */
    var pathlist = ["assets/images/Arryn_Sigil.jpg", "assets/images/Baratheon_Sigil.jpg", "assets/images/Greyjoy_Sigil.jpg", "assets/images/Lannister_Sigil.jpg", "assets/images/Martell_Sigil.jpg", "assets/images/Mormont_Sigil.jpg", "assets/images/Stark_Sigil.jpg", "assets/images/Targaryen_Sigil.jpg", "assets/images/Tully_Sigil.jpg", "assets/images/Tyrell_Sigil.jpg",]
    path = pathlist[wordnumber];

    document.getElementById("houseBanner").src = path;


    /* other variables */
    var wins = 0;
    var guesses = 10;
    var letters = [];

    /* initialize the game board with the appropriate length */
    var dashString = "";
    for (var i = 0; i < newWord.length; i++) {
        dashString = dashString + "_";
    }
    document.getElementById("word").innerHTML = dashString;



    document.onkeyup = function (event) {
        if (newWord.includes(event.key) == false && letters.includes(event.key) == false) {
            guesses--;
        }

        if (letters.includes(event.key) == false) {
            letters.push(event.key);
        }
        console.log(letters.includes(event.key));

        var index = 0;
        index = newWord.indexOf(event.key, index);

        while (index != -1) {
            console.log('index1', index);
            dashString = dashString.substr(0, index) + newWord[index] + dashString.substr(index + 1);
            console.log(dashString);
            index = newWord.indexOf(event.key, index + 1);
            console.log('index2', index);
        }

        if (dashString.includes("_") == false && guesses > 0) {

            wins++;
            guesses = 10;
            letters = [];

            newWord = wordlist[Math.floor(Math.random() * wordlist.length)];

            dashString = "";
            for (var i = 0; i < newWord.length; i++) {
                dashString = dashString + "_";
            }

/*             document.getElementById("housebanner").setAttribute("src", path);
 */
        } else if (guesses == 0) {
            wins = 0;
            guesses = 10;
            letters = [];

            newWord = wordlist[Math.floor(Math.random() * wordlist.length)];

            dashString = "";
            for (var i = 0; i < newWord.length; i++) {
                dashString = dashString + "_";
            }
        }

        document.getElementById("wins").innerHTML = "Wins: " + wins;
        document.getElementById("guesses").innerHTML = "Guesses Remaining: " + guesses;
        document.getElementById("word").innerHTML = dashString;
        document.getElementById("letters").innerHTML = "Letters guessed: " + letters;
    }
};