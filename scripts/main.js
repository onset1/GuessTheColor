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
        element.style.display = "block";
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



