const param = {
	'url' : 'api.openweathermap.org/data/2.5/forecast',
	'appId' : '6bc3980afdf8ce4cc51849c306ecaa8b',
    'cities': {
        703448 : 'Kyiv',
        2643743 :'London',
        3128760 : 'Barcelona',
        2950159 : 'Berlin',
        3173435 : 'Milan',
        1850147 : 'Tokio',
        5128581 : 'New York',
    }
};
function getWeather () {
    
}

function createElem (elem, styleClass, cityName, valueRes) {
    let elemCreated = document.createElement(elem);
    if (styleClass) elemCreated.className = styleClass;
    if (valueRes) elemCreated.value = valueRes;
    if (cityName) elemCreated.textContent = cityName;
    return elemCreated;
}

document.querySelector('.city-select').onclick = getCityList;

function getCityList () {
    if (document.querySelectorAll('.city-option').length > 0 ) {
        let cityOption = document.querySelectorAll('.city-option');
        let cityOptionArr = [...cityOption];
        cityOptionArr.forEach(elem => elem.remove());
    }    for (let key in param.cities) {
        this.appendChild(createElem('option', 'city-option', param.cities[key], key));
    }
}