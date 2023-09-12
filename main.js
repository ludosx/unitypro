var areas = {
    '15': 'area01',
    '16': 'area01',
    '45': 'area02',
    '70': 'area03',
}

let areaId = "";

function navigateTo(area) {
    areaId = area;
    console.log(area);
    if (areaId in areas) {
        console.log(areas[areaId]);
        document.getElementById('output').innerText = `${areas[areaId]}`;
    }
}