// Coming up with a random rgb to code to guess

var rgb_value_raw = document.getElementById("rgb-value");

var rgb_value = `rgb(${Math.floor(Math.random()*256)}, ${Math.floor(Math.random()*256)}, ${Math.floor(Math.random()*256)})`;

rgb_value_raw.innerHTML = rgb_value;


// Setting random colors for the six squares

var colors = document.getElementsByClassName("color-option");
var colors_length = colors.length;

for (var i = 0; i < colors.length; i++) {
    var color_n = `rgb(${Math.floor(Math.random()*256)}, ${Math.floor(Math.random()*256)}, ${Math.floor(Math.random()*256)})`;
    var color_name = "color-" + `${i+1}`; // +1 because it starts at 0
    document.getElementById(color_name).style.backgroundColor = color_n;
};

// Replacing one of the random colors for our original rgb value that we've come up with

var replaced_random = Math.floor(Math.random()*6) + 1;
document.getElementById("color-" + `${replaced_random}`).style.backgroundColor = rgb_value;

// Event listener for the squares

document.getElementById("color-1").addEventListener("click", square_click_1);
document.getElementById("color-2").addEventListener("click", square_click_2);
document.getElementById("color-3").addEventListener("click", square_click_3);
document.getElementById("color-4").addEventListener("click", square_click_4);
document.getElementById("color-5").addEventListener("click", square_click_5);
document.getElementById("color-6").addEventListener("click", square_click_6);

// Comparing the rgb value of the chosen color against the correct answer

function square_click_1() {
    var my_decision_value = document.getElementById("color-1").style.backgroundColor;
    if (my_decision_value == rgb_value) {
        document.getElementById("result").innerHTML = "you win";
    } else {
        document.getElementById("result").innerHTML = "you lose";
    };
};

function square_click_2() {
    var my_decision_value = document.getElementById("color-2").style.backgroundColor;
    if (my_decision_value == rgb_value) {
        document.getElementById("result").innerHTML = "you win";
    } else {
        document.getElementById("result").innerHTML = "you lose";
    };
};

function square_click_3() {
    var my_decision_value = document.getElementById("color-3").style.backgroundColor;
    if (my_decision_value == rgb_value) {
        document.getElementById("result").innerHTML = "you win";
    } else {
        document.getElementById("result").innerHTML = "you lose";
    };
};

function square_click_4() {
    var my_decision_value = document.getElementById("color-4").style.backgroundColor;
    if (my_decision_value == rgb_value) {
        document.getElementById("result").innerHTML = "you win";
    } else {
        document.getElementById("result").innerHTML = "you lose";
    };
};

function square_click_5() {
    var my_decision_value = document.getElementById("color-5").style.backgroundColor;
    if (my_decision_value == rgb_value) {
        document.getElementById("result").innerHTML = "you win";
    } else {
        document.getElementById("result").innerHTML = "you lose";
    };
};

function square_click_6() {
    var my_decision_value = document.getElementById("color-6").style.backgroundColor;
    if (my_decision_value == rgb_value) {
        document.getElementById("result").innerHTML = "you win";
    } else {
        document.getElementById("result").innerHTML = "you lose";
    };
};
    






