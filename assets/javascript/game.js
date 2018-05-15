function hangman() {

    /* Choose the first word */
    var wordlist = ["Arryn", "Baratheon", "Greyjoy", "Lannister", "Martell", "Mormont", "Stark", "Targaryen", "Tully", "Tyrell"];
    newWord = wordlist[Math.floor(Math.random() * wordlist.length)];

    /* initialize the game board with the appropriate length */
    var dashString = [];
    for (var i = 0; i < newWord.length; i++) {
        dashString = dashString + " _";
        console.log(dashString);
    }
    
    document.getElementById("word").innerHTML = dashString;
    document.onkeyup = function(event) {
        console.log("test");
    }
};