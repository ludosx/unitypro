var areasPiso1 = {
    '55': 'Gimnasio',
    '56': 'Gimnasio',
    '75': 'Gimnasio',
    '76': 'Gimnasio',
    '95': 'Gimnasio',
    '96': 'Gimnasio',
    '115': 'Gimnasio',
    '116': 'Gimnasio',
    '135': 'Gimnasio',
    '136': 'Gimnasio',
    '155': 'Gimnasio',
    '156': 'Gimnasio',
    '175': 'Gimnasio',
    '176': 'Gimnasio',
}

var areasPiso2 = {

}

var areasPiso3 = {

}

var areasPiso4 = {

}

var areasPiso5 = {

}

var areasPiso6 = {

}



let areaId = "";

let pisoId = "";

function identifyLevel(piso) {
    pisoId = piso;
}

function navigateTo(area) {
    areaId = area;
    console.log(pisoId);
    console.log(area);
    if (pisoId == '1' && areaId in areasPiso1) {
        console.log(areasPiso1[areaId]);
        document.getElementById('output').innerText = `${areasPiso1[areaId]}`;
    }
    if (pisoId == '2' && areaId in areasPiso2) {
        console.log(areasPiso2[areaId]);
        document.getElementById('output').innerText = `${areasPiso2[areaId]}`;
    }
    if (pisoId == '3' && areaId in areasPiso3) {
        console.log(areasPiso3[areaId]);
        document.getElementById('output').innerText = `${areasPiso3[areaId]}`;
    }
    if (pisoId == '4' && areaId in areasPiso4) {
        console.log(areasPiso4[areaId]);
        document.getElementById('output').innerText = `${areasPiso4[areaId]}`;
    }
    if (pisoId == '5' && areaId in areasPiso5) {
        console.log(areasPiso5[areaId]);
        document.getElementById('output').innerText = `${areasPiso5[areaId]}`;
    }
    if (pisoId == '6' && areaId in areasPiso6) {
        console.log(areasPiso6[areaId]);
        document.getElementById('output').innerText = `${areasPiso6[areaId]}`;
    }
}