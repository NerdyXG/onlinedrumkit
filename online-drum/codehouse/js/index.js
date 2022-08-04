/*






*/
//mouse click
for (i = 0; i < document.querySelectorAll(".drum").length; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function() {
        var clickedDrum = this.innerHTML;
        drumSound(clickedDrum);
        buttonAnimation(clickedDrum);

    });
}

//keyboard press
document.querySelector(".drum").addEventListener("keypress", function(event) {
    var keyboardPressedDrum = event.key;
    drumSound(keyboardPressedDrum);
    buttonAnimation(keyboardPressedDrum);
});

function drumSound(key) {
    switch (key) {
        case "w":
            var tom1 = new Audio("../../audio/tom-1.mp3");
            tom1.play();
            break;
        case "a":
            var tom2 = new Audio("../../audio/tom-2.mp3");
            tom2.play();
            break;
        case "s":
            var tom3 = new Audio("../../audio/tom-3.mp3");
            tom3.play();
            break;
        case "d":
            var tom4 = new Audio("../../audio/tom-4.mp3");
            tom4.play();
            break;
        case "j":
            var snare = new Audio("../../audio/snare.mp3");
            snare.play();
            break;
        case "k":
            var crash = new Audio("../../audio/crash.mp3");
            crash.play();
            break;
        case "l":
            var kickbass = new Audio("../../audio/kick-bass.mp3");
            kickbass.play();
            break;
        default:
            break;
    }
}

function buttonAnimation(currentKey) {
    document.querySelector("." + currentKey).classList.add("pressed");
    setTimeout(function() {
        document.querySelector("." + currentKey).classList.remove("pressed");
    }, 100)
}