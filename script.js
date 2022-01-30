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
const knocked = document.getElementById("knocked");
let knockedBool = false

submit();

function submit() {
    if (!isNaN(myForm.velNum.value) && !isNaN(myForm.AC.value) && !isNaN(myForm.RO.value) && myForm.velNum.value > 0 && myForm.AC.value > 0) {
        knockedBool = false;
	span.innerHTML = numWolf();
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


function wolf1() {
    let k20 = rand(1, 20);
    let RO = rand(1, 20) + parseInt(myForm.RO.value);
    let dmg = 0;
    knocked.innerHTML = "Nie";

    if (k20 == 20) {
        dmg += rand(1, 4) + rand(1, 4) + rand(1, 4) + rand(1, 4) + 2;
	if (RO >= 11) {
	    knocked.innerHTML = "Tak";
	}
    } else if (k20 + 4 >= myForm.RO.value) {
        dmg += rand(1, 4) + rand(1, 4) + 2;
	if (RO >= 11) {
	    knocked.innerHTML = "Tak";
	}
    }
    return dmg;
}

function wolf2() {
    let k20_1 = rand(1, 20);
    let k20_2 = rand(1, 20);
    let RO = rand(1, 20) + parseInt(myForm.RO.value);
    let dmg = 0;
    if (knockedBool === false) {
	knocked.innerHTML = "Nie";
    }

    if ((k20_1 === 20) || (k20_2 === 20)) {
        dmg += rand(1, 4) + rand(1, 4) + rand(1, 4) + rand(1, 4) + 2;
	if (RO >= 11 && knockedBool === false) {
	    knocked.innerHTML = "Tak";
	    knockedBool = true;
	}
    } else if ((k20_1 + 4 >= myForm.AC.value) || (k20_2 + 4 >= myForm.AC.value)) {
        dmg += rand(1, 4) + rand(1, 4) + 2;
	if (RO >= 11 && knockedBool === false) {
	    knocked.innerHTML = "Tak";
	    knockedBool = true;
	}
    }
    return dmg;
}

function numWolf() {
    let dmgAll = 0;

    if (myForm.velNum.value > 1) {
        for (let i = 0; i < myForm.velNum.value; i++) {
            dmgAll += wolf2();
        }
    } else {
        dmgAll = wolf1();
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

var rangeRO = document.querySelector('.inputRangeRO');
var fieldRO = document.getElementById('RO');

rangeRO.addEventListener('input', function (e) {
    fieldRO.value = e.target.value;
});
fieldRO.addEventListener('input', function (e) {
    rangeRO.value = e.target.value;
});
