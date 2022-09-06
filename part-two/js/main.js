let csvField = document.getElementById('csv-field');
let textField = document.getElementById('text-field');
let btnParse = document.getElementById('btn-parse');
let resultField = document.getElementById('result-field');

function parseCSV(textCsv) {
    if (sessionStorage.getItem("cityRating") == undefined) {
        let cityRating = {};
        textCsv.split('\n')
            .filter(part => part.match(/^[\d]+(?:\.\d{1,2})?,[\d]+(?:\.\d{1,2})?,[?!,.А-Яа-яёЁЇїІіЄєҐґЁ0-9\s]+,[\d]+[,]{0,}?$/))
            .map(str => {
                let arr = str.split(',')
                return ({ x: arr[0], y: arr[1], name: arr[2], population: arr[3], })
            })
            .sort((a, b) => (b.population - a.population))
            .slice(0, 10)
            .reduce(((prev, el, index) => {
                cityRating[el.name] = { population: el.population, rating: index + 1, }
            }), {});
        sessionStorage.setItem("cityRating", JSON.stringify(cityRating));
        return replaceCity(textField.value, cityRating);
    } 
    return replaceCity(textField.value, JSON.parse(sessionStorage.getItem("cityRating")));
}

let replaceCity = (text, cityRating) => {
    Object.keys(cityRating)
        .forEach(city => {
            text = text.replaceAll(city, `${city} (${cityRating[city].rating} место в ТОП-10 самых крупных городов Украины,
                 население ${cityRating[city].population} человек)`)
        });
    resultField.textContent = text;
}

btnParse.addEventListener('click', () => {
    parseCSV(csvField.value);
})
