function hangman() {

    /* Choose the first word */
    var wordlist = ["arryn", "baratheon", "greyjoy", "lannister", "martell", "mormont", "stark", "targaryen", "tully", "tyrell"];
    
    wordnumber = Math.floor(Math.random() * wordlist.length);
    newWord = wordlist[wordnumber];

    /* Get the banner */
    var pathlist = ["assets/images/Arryn_Sigil.jpg", "assets/images/Baratheon_Sigil.jpg", "assets/images/Greyjoy_Sigil.jpg", "assets/images/Lannister_Sigil.jpg", "assets/images/Martell_Sigil.jpg", "assets/images/Mormont_Sigil.jpg", "assets/images/Stark_Sigil.jpg", "assets/images/Targaryen_Sigil.jpg", "assets/images/Tully_Sigil.jpg", "assets/images/Tyrell_Sigil.jpg",]
    var path = pathlist[wordnumber];

    /* Clues! */
    var cluelist = ["AS HIGH AS HONOUR", "OURS IS THE FURY", "WE DO NOT SOW", "HEAR ME ROAR", "UNBOWED. UNBENT. UNBROKEN.", "HERE WE STAND", "WINTER IS COMING", "FIRE AND BLOOD", "FAMILY. DUTY. HONOUR", "GROWING STRONG"];
    var clue = cluelist[wordnumber];
    document.getElementById("clue").innerHTML = "Clue: " + clue;



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

    var winSound = new Audio("assets/sounds/165491__chripei__victory-cry-reverb-2.wav");
    


    document.onkeyup = function (event) {

        /* If it hasn't already been guessed, and it isn't in the word, dock a guess. */
        if (newWord.includes(event.key) == false && letters.includes(event.key) == false) {
            guesses--;
        }

        /* If it hasn't been guessed, add it to the list of guessed words. */
        if (letters.includes(event.key) == false) {
            letters.push(event.key);
        }

/*         console.log(letters.includes(event.key));
 */

        /* get index of first occurence of the input in the word. */
        var index = 0;
        index = newWord.indexOf(event.key, index);

        /* if you find another occurence, replace that dash with its corresponding letter. Then, look for another occurence. Until there are no more occurences. */
        while (index != -1) {
            dashString = dashString.substr(0, index) + newWord[index] + dashString.substr(index + 1);
            index = newWord.indexOf(event.key, index + 1);
        }

        /* If the word is correctly guessed and you haven't run out of guesses, you win!
            Add a win, reset the game, change the banner */
        if (dashString.includes("_") == false && guesses > 0) {

            wins++;
            guesses = 10;
            letters = [];

            winSound.play();
            document.getElementById("houseBanner").setAttribute("src", path);

            wordnumber2 = Math.floor(Math.random() * wordlist.length);
            newWord = wordlist[wordnumber2];
            console.log(newWord);
            path = pathlist[wordnumber2];

            dashString = "";
            for (var i = 0; i < newWord.length; i++) {
                dashString = dashString + "_";
            }

            /*  if you run out of guesses, you lose. reset*/
        } else if (guesses == 0) {
            wins = 0;
            guesses = 10;
            letters = [];

            wordnumber = Math.floor(Math.random() * wordlist.length);
            newWord = wordlist[wordnumber];
            path = pathlist[wordnumber];

            dashString = "";
            for (var i = 0; i < newWord.length; i++) {
                dashString = dashString + "_";
            }
        }

        /* Update game board. */
        document.getElementById("clue").innerHTML = "Clue: " + clue;
        document.getElementById("wins").innerHTML = "Wins: " + wins;
        document.getElementById("guesses").innerHTML = "Guesses Remaining: " + guesses;
        document.getElementById("word").innerHTML = dashString;
        document.getElementById("letters").innerHTML = "Letters guessed: " + letters;
    }
};