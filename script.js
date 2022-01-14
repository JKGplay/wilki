let theme = document.getElementsByTagName('link')[0];

if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
    theme.setAttribute('href', 'style.css');
    console.log("android");
} else {
    theme.setAttribute('href', 'stylePC.css');
    console.log("PC");
}

const myForm = document.getElementById("form");
const btn = document.getElementById("btn");
const span = document.getElementById("result");

submit();

function submit() {
    if (!isNaN(myForm.velNum.value) && !isNaN(myForm.AC.value) && myForm.velNum.value > 0 && myForm.AC.value > 0) {
        span.innerHTML = numRaptor();
    } else {
        span.innerHTML = "Błąd";
    }
}

btn.addEventListener("click", submit);

function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


function raptor1() {
    let k20_1 = rand(1, 20);
    let k20_2 = rand(1, 20);
    let dmg1 = 0;
    let dmg2 = 0;
    let dmg3 = 0;

    if (k20_1 == 20) {
        dmg2 += rand(1, 6) + rand(1, 6) + 2;
    } else if (k20_1 + 4 >= myForm.AC.value) {
        dmg2 += rand(1, 6) + 2;
    }

    if (k20_2 == 20) {
        dmg3 += rand(1, 4) + rand(1, 4) + 2;
    } else if (k20_2 + 4 >= myForm.AC.value) {
        dmg3 += rand(1, 4) + 2;
    }

    dmg1 = dmg2 + dmg3;
    return dmg1;
}

function raptor2() {
    let k20_1 = rand(1, 20);
    let k20_2 = rand(1, 20);
    let k20_3 = rand(1, 20);
    let k20_4 = rand(1, 20);
    let dmg1 = 0;
    let dmg2 = 0;
    let dmg3 = 0;

    if ((k20_1 === 20) || (k20_2 === 20)) {
        dmg2 += rand(1, 6) + rand(1, 6) + 2;
    } else if ((k20_1 + 4 >= myForm.AC.value) || (k20_2 + 4 >= myForm.AC.value)) {
        dmg2 += rand(1, 6) + 2;
    }

    if ((k20_3 === 20) || (k20_4 === 20)) {
        dmg3 += rand(1, 4) + rand(1, 4) + 2;
    } else if ((k20_3 + 4 >= myForm.AC.value) || (k20_4 + 4 >= myForm.AC.value)) {
        dmg3 += rand(1, 4) + 2;
    }

    dmg1 = dmg2 + dmg3;
    return dmg1;
}

function numRaptor() {
    let dmgAll = 0;

    if (myForm.velNum.value > 1) {
        for (let i = 0; i < myForm.velNum.value; i++) {
            dmgAll += raptor2();
        }
    } else {
        dmgAll = raptor1();
    }

    return dmgAll;
}

/////////////////////////////////////////////////////////////////
var rangeVelo = document.querySelector('.inputRangeVelo');
var fieldVelo = document.getElementById('velNum');

rangeVelo.addEventListener('input', function (e) {
    fieldVelo.value = e.target.value;
});
fieldVelo.addEventListener('input', function (e) {
    rangeVelo.value = e.target.value;
});

var rangeAC = document.querySelector('.inputRangeAC');
var fieldAC = document.getElementById('AC');

rangeAC.addEventListener('input', function (e) {
    fieldAC.value = e.target.value;
});
fieldAC.addEventListener('input', function (e) {
    rangeAC.value = e.target.value;
});
