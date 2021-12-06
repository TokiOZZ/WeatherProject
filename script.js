const param = {
	'url' : 'https://api.openweathermap.org/data/2.5/forecast',
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
    const cityId = document.querySelector('.city-select__custom-select').getAttribute('value');
    fetch(`${param.url}?id=${cityId}&appid=${param.appId}`)
    .then(weather => weather.json())
    .then(data => showWeather(data));
}

function showWeather (data) {
    console.log(data);
}


function createElem (elem, styleClass, cityName, dataValue) {
    let elemCreated = document.createElement(elem);
    elemCreated.className = styleClass;
    elemCreated.setAttribute('value', dataValue);
    elemCreated.textContent = cityName;
    return elemCreated;
}

document.querySelector('#city').addEventListener('click', activateCityList);

function getCityList () {

// Create inside 'custom select'

    // for (let key in param.cities) {
    //     let citySelect = document.querySelector('.city-select__custom-select');
    //     let cityOption = citySelect.appendChild(createElem('div', 'city-option', param.cities[key], key));
    //     cityOption.classList.add('disabled');
    // }

// Create after 'custom select'
    let cityOptionWrap = document.createElement('div');
    cityOptionWrap.classList.add('city-option-wrap');
    document.querySelector('.city-select').appendChild(cityOptionWrap);
    
        for (let key in param.cities) {
        let cityOption = cityOptionWrap.appendChild(createElem('div', 'city-option', param.cities[key], key));
        cityOption.classList.add('disabled');
    }

}

document.querySelector('.city-option-wrap').addEventListener('click', (event) => {
    const cityCheckedName = event.target.textContent;
    document.querySelector('.city-select__custom-select').textContent = cityCheckedName;
    const cityCheckedId = event.target.getAttribute('value');
    document.querySelector('.city-select__custom-select').setAttribute('value', cityCheckedId);
    document.querySelector('.city-option-wrap').classList.toggle('disabled');

    getWeather();   
});

function styleClassToggle (elem, styleClass) {
    elem.classList.toggle(styleClass);
}

function activateCityList () {
    let cityOption = document.querySelectorAll('.city-option');   
    if (document.querySelector('.city-option-wrap').classList.contains('disabled')) {
        document.querySelector('.city-option-wrap').classList.remove('disabled');
        cityOption.forEach(elem => {
            styleClassToggle(elem, 'disabled');
        });
    }
    cityOption.forEach(elem => {
        styleClassToggle(elem, 'disabled');
    });

}

