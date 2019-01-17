



var srctxt;
var words;

function preload() {
    srctxt = loadStrings('rainbow.txt');

}
function setup() {
    noCanvas();
    srctxt = join(srctxt, " ");
    words = splitTokens(srctxt, " ,.?!")

var seed = select("#seed");
var submit = select("#submit");
submit.mousePressed(function(){
    // createP(seed.value());
    // createP(srctxt);
    var phrase = diastic(seed.value(), words);
    createP(phrase);
;})

}
//-----------things to add, random return when user presses submit, error checking.
function diastic(seed, words) {

    var phrase = "";
    var currentWord = 0;

    for (var i = 0; i < seed.length; i++) {
        var c = seed.charAt(i);
    
        for (var j = 0; j < words.length; j++) {
            if (words[j].charAt(i) == c) {
                phrase += words[j];
                phrase += " "
                currentWord = j + 1;
                break;                             
            }
        }
        
    }
    
    return phrase;   
    }

