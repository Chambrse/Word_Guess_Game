function hangman() {

    /* Choose the first word */
    var wordlist = ["arryn", "baratheon", "greyjoy", "lannister", "martell", "mormont", "stark", "targaryen", "tully", "tyrell"];
    newWord = wordlist[Math.floor(Math.random() * wordlist.length)];
    console.log(newWord);

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
        letters.push(event.key);
        console.log(letters);
        var index = 0;
        index = newWord.indexOf(event.key, index);

        while (index != -1) {
            console.log('index1', index);
            dashString = dashString.substr(0, index) + newWord[index] + dashString.substr(index + 1);
            console.log(dashString);
            index = newWord.indexOf(event.key, index + 1);
            console.log('index2', index);
        }

        if (dashString.includes("_")) {
        }

        document.getElementById("word").innerHTML = dashString;
        document.getElementById("letters").innerHTML = "Letters guessed: " + letters;
    }
};