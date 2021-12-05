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

getCityList();

function getWeather () {
    
}


function createElem (elem, styleClass, cityName, dataValue) {
    let elemCreated = document.createElement(elem);
    if (styleClass) elemCreated.className = styleClass;
    if (dataValue) elemCreated.value = dataValue;
    if (cityName) elemCreated.textContent = cityName;
    return elemCreated;
}

document.querySelector('#city').addEventListener('click', activateCityList);

function getCityList () {

    for (let key in param.cities) {
        let citySelect = document.querySelector('.city-select__custom-select');
        let cityOption = citySelect.appendChild(createElem('div', 'city-option', param.cities[key], key));
        cityOption.classList.add('disabled');
    }
}

function styleClassToggle (elem, styleClass) {
    elem.classList.toggle(styleClass);
}

function activateCityList () {
    const cityOption = document.querySelectorAll('.city-option');   
    console.log(cityOption);
    cityOption.forEach(elem => {
        styleClassToggle(elem, 'disabled');
    });

}

