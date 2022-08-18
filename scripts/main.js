document.getElementById("play-text").addEventListener("click", game);

function game() {
    document.getElementById("body").style.display = "block";
    document.getElementById("body").style.overflowY = "visible";
    document.getElementById("play").style.display = "none";
    document.getElementById("header").style.display = "block";
    document.getElementById("section").style.display = "inline";
    document.getElementById("aside").style.display = "inline";
    document.getElementById("footer").style.display = "block";
}

// // Initial animation

// var num = 0;
// var id = setInterval(animation_1, 300);

// function animation_1() {
//     if (num==0) {
//         num++
//     } else if (num==1) {
//         document.getElementById("dot-text").style.display = "block";
//         document.getElementById("dot-text-2").style.display = "block";
//         num++
//     } else if (num==2) {
//         document.getElementById("dot-text").style.display = "none";
//         document.getElementById("dot-text-2").style.display = "none";
//         num++
//     } else if (num==3) {
//         document.getElementById("dot-text").style.display = "block";
//         document.getElementById("dot-text-2").style.display = "block";
//         num++
//     } else if (num==4) {
//         document.getElementById("dot-text").style.display = "none";
//         document.getElementById("dot-text-2").style.display = "none";
//         num++
//     } else if (num==5) {
//         document.getElementById("dot-text").style.display = "block";
//         document.getElementById("dot-text-2").style.display = "block";
//         num++
//     } else if (num==6) {
//         document.getElementById("dot-text").style.borderRadius = "0%";
//         document.getElementById("dot-text-2").style.borderRadius = "0%";
//         clearInterval(id);
//     }
// }

// // Animations will be performed one after the other, without using function callbacks (for now), so they
// // will be constructed using some time delay.

// var num_2 = 0;
// var id_2 = setInterval(animation_2, 40);

// function animation_2() {
//     if (num_2==70) {
//         clearInterval(id_2);
//     } else if (num_2>60) { // 60 is the time delay, so that animation_1 finishes without any problem
//         num_2++;
//         document.getElementById("dot-text").style.height = num_2 + "px";
//         document.getElementById("dot-text-2").style.height = num_2 + "px";
//     } else {
//         num_2++;
//     }
// }

// var num_3 = 0;
// var id_3 = setInterval(animation_3, 10);

// function animation_3() {
//     if (num_3==400) {
//         clearInterval(id_3);
//     } else if (num_3>30) {
//         num_3++;
//         document.getElementById("dot-text").style.left = num_3 + "px";
//         document.getElementById("dot-text-2").style.right = num_3 + "px";
//     } else {
//         num_3++;
//     }
// }



// function animation_2() {
//     id_2 = setInterval



// Coming up with a random rgb to code to guess

var rgb_value_raw = document.getElementById("rgb-value");
var rgb_value_r = Math.floor(Math.random()*256);
var rgb_value_g = Math.floor(Math.random()*256);
var rgb_value_b = Math.floor(Math.random()*256);
var rgb_value = `rgb(${rgb_value_r}, ${rgb_value_g}, ${rgb_value_b})`;

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
        document.getElementById("score-wins").innerHTML++;
    } else {
        document.getElementById("result").innerHTML = "you lose";
    };
};

function square_click_2() {
    var my_decision_value = document.getElementById("color-2").style.backgroundColor;
    if (my_decision_value == rgb_value) {
        document.getElementById("result").innerHTML = "you win";
        document.getElementById("score-wins").innerHTML++;
    } else {
        document.getElementById("result").innerHTML = "you lose";
    };
};

function square_click_3() {
    var my_decision_value = document.getElementById("color-3").style.backgroundColor;
    if (my_decision_value == rgb_value) {
        document.getElementById("result").innerHTML = "you win";
        document.getElementById("score-wins").innerHTML++;
    } else {
        document.getElementById("result").innerHTML = "you lose";
    };
};

function square_click_4() {
    var my_decision_value = document.getElementById("color-4").style.backgroundColor;
    if (my_decision_value == rgb_value) {
        document.getElementById("result").innerHTML = "you win";
        document.getElementById("score-wins").innerHTML++;
    } else {
        document.getElementById("result").innerHTML = "you lose";
    };
};

function square_click_5() {
    var my_decision_value = document.getElementById("color-5").style.backgroundColor;
    if (my_decision_value == rgb_value) {
        document.getElementById("result").innerHTML = "you win";
        document.getElementById("score-wins").innerHTML++;
    } else {
        document.getElementById("result").innerHTML = "you lose";
    };
};

function square_click_6() {
    var my_decision_value = document.getElementById("color-6").style.backgroundColor;
    if (my_decision_value == rgb_value) {
        document.getElementById("result").innerHTML = "you win";
        document.getElementById("score-wins").innerHTML++;
    } else {
        document.getElementById("result").innerHTML = "you lose";
    };
};
    
// Next button: new game

document.getElementById("next-button").addEventListener("click", newgame);

function newgame() {
    document.getElementById("score-total").innerHTML++;
    document.getElementById("result").innerHTML = ""; // Resetting value

    // Coming up with a random rgb to code to guess
    var rgb_value_raw = document.getElementById("rgb-value");
    var rgb_value_r = Math.floor(Math.random()*256);
    var rgb_value_g = Math.floor(Math.random()*256);
    var rgb_value_b = Math.floor(Math.random()*256);
    var rgb_value = `rgb(${rgb_value_r}, ${rgb_value_g}, ${rgb_value_b})`;
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
            document.getElementById("score-wins").innerHTML++;
        } else {
            document.getElementById("result").innerHTML = "you lose";
        };
    };

    function square_click_2() {
        var my_decision_value = document.getElementById("color-2").style.backgroundColor;
        if (my_decision_value == rgb_value) {
            document.getElementById("result").innerHTML = "you win";
            document.getElementById("score-wins").innerHTML++;
        } else {
            document.getElementById("result").innerHTML = "you lose";
        };
    };

    function square_click_3() {
        var my_decision_value = document.getElementById("color-3").style.backgroundColor;
        if (my_decision_value == rgb_value) {
            document.getElementById("result").innerHTML = "you win";
            document.getElementById("score-wins").innerHTML++;
        } else {
            document.getElementById("result").innerHTML = "you lose";
        };
    };

    function square_click_4() {
        var my_decision_value = document.getElementById("color-4").style.backgroundColor;
        if (my_decision_value == rgb_value) {
            document.getElementById("result").innerHTML = "you win";
            document.getElementById("score-wins").innerHTML++;
        } else {
            document.getElementById("result").innerHTML = "you lose";
        };
    };

    function square_click_5() {
        var my_decision_value = document.getElementById("color-5").style.backgroundColor;
        if (my_decision_value == rgb_value) {
            document.getElementById("result").innerHTML = "you win";
            document.getElementById("score-wins").innerHTML++;
        } else {
            document.getElementById("result").innerHTML = "you lose";
        };
    };

    function square_click_6() {
        var my_decision_value = document.getElementById("color-6").style.backgroundColor;
        if (my_decision_value == rgb_value) {
            document.getElementById("result").innerHTML = "you win";
            document.getElementById("score-wins").innerHTML++;
        } else {
            document.getElementById("result").innerHTML = "you lose";
        };
    };
}

// Options: adding event listeners

document.getElementById("language").addEventListener("click", language_click);

function language_click() {
    document.getElementById("language").style.display = "none";
    document.getElementById("difficulty").style.display = "none";
    document.getElementById("visuals").style.display = "none";
    document.getElementById("sounds").style.display = "none";
    document.getElementById("color-system").style.display = "none";
    var my_setting_language = document.getElementsByClassName("setting-language");
    for (var i = 0; i<my_setting_language.length; i++) {
        var element = my_setting_language.item(i);
        element.style.display = "grid";
        element.style.gridTemplateColumns = "80% 1fr";
    }
    document.getElementById("aside-chart-bottom").style.display = "flex";
}

document.getElementById("difficulty").addEventListener("click", difficulty_click);

function difficulty_click() {
    document.getElementById("language").style.display = "none";
    document.getElementById("difficulty").style.display = "none";
    document.getElementById("visuals").style.display = "none";
    document.getElementById("sounds").style.display = "none";
    document.getElementById("color-system").style.display = "none";
    var my_setting_difficulty = document.getElementsByClassName("setting-difficulty");
    for (var i = 0; i<my_setting_difficulty.length; i++) {
        var element = my_setting_difficulty.item(i);
        element.style.display = "block";
    }
    document.getElementById("aside-chart-bottom").style.display = "flex";
}

document.getElementById("visuals").addEventListener("click", visuals_click);

function visuals_click() {
    document.getElementById("language").style.display = "none";
    document.getElementById("difficulty").style.display = "none";
    document.getElementById("visuals").style.display = "none";
    document.getElementById("sounds").style.display = "none";
    document.getElementById("color-system").style.display = "none";
    var my_setting_visuals = document.getElementsByClassName("setting-visuals");
    for (var i = 0; i<my_setting_visuals.length; i++) {
        var element = my_setting_visuals.item(i);
        element.style.display = "block";
    }
    document.getElementById("aside-chart-bottom").style.display = "flex";
}

document.getElementById("sounds").addEventListener("click", sounds_click);

function sounds_click() {
    document.getElementById("language").style.display = "none";
    document.getElementById("difficulty").style.display = "none";
    document.getElementById("visuals").style.display = "none";
    document.getElementById("sounds").style.display = "none";
    document.getElementById("color-system").style.display = "none";
    var my_setting_sounds = document.getElementsByClassName("setting-sounds");
    for (var i = 0; i<my_setting_sounds.length; i++) {
        var element = my_setting_sounds.item(i);
        element.style.display = "block";
    }
    document.getElementById("aside-chart-bottom").style.display = "flex";
}

document.getElementById("color-system").addEventListener("click", colors_click);

function colors_click() {
    document.getElementById("language").style.display = "none";
    document.getElementById("difficulty").style.display = "none";
    document.getElementById("visuals").style.display = "none";
    document.getElementById("sounds").style.display = "none";
    document.getElementById("color-system").style.display = "none";
    var my_setting_color = document.getElementsByClassName("setting-color");
    for (var i = 0; i<my_setting_color.length; i++) {
        var element = my_setting_color.item(i);
        element.style.display = "block";
    }
    document.getElementById("aside-chart-bottom").style.display = "flex";
}

document.getElementById("button-back").addEventListener("click", back_click);

function back_click() {
    document.getElementById("language").style.display = "block";
    document.getElementById("difficulty").style.display = "block";
    document.getElementById("visuals").style.display = "block";
    document.getElementById("sounds").style.display = "block";
    document.getElementById("color-system").style.display = "block";
    // Instead of writing 5 different functions...
    var my_setting_language = document.getElementsByClassName("setting-language");
    for (var i = 0; i<my_setting_language.length; i++) {
        var element = my_setting_language.item(i);
        element.style.display = "none";
    }
    var my_setting_difficulty = document.getElementsByClassName("setting-difficulty");
    for (var i = 0; i<my_setting_difficulty.length; i++) {
        var element = my_setting_difficulty.item(i);
        element.style.display = "none";
    }
    var my_setting_visuals = document.getElementsByClassName("setting-visuals");
    for (var i = 0; i<my_setting_visuals.length; i++) {
        var element = my_setting_visuals.item(i);
        element.style.display = "none";
    }
    var my_setting_sounds = document.getElementsByClassName("setting-sounds");
    for (var i = 0; i<my_setting_sounds.length; i++) {
        var element = my_setting_sounds.item(i);
        element.style.display = "none";
    }
    var my_setting_color = document.getElementsByClassName("setting-color");
    for (var i = 0; i<my_setting_color.length; i++) {
        var element = my_setting_color.item(i);
        element.style.display = "none";
    }

    document.getElementById("aside-chart-bottom").style.display = "none";
}

// Color conversion

document.getElementById("setting-color-hex").addEventListener("click", conversion_hex());

function conversion_hex() {
    var hex_value_1_1 = Math.floor(rgb_value_r/16)
    var hex_value_1_2 = (rgb_value_r % 16) * 16
    if (hex_value_1_1 == 10) {
        hex_value_1_1 = "A";
    } else if (hex_value_1_1 == 11) {
        hex_value_1_1 = "B";
    } else if (hex_value_1_1 == 12) {
        hex_value_1_1 = "C";
    } else if (hex_value_1_1 == 13) {
        hex_value_1_1 = "D";
    } else if (hex_value_1_1 == 14) {
        hex_value_1_1 = "E";
    } else if (hex_value_1_1 == 15) {
        hex_value_1_1 = "F";
    }
    var hex_value = hex_value_1_1 + hex_value_1_2;
}

