const kilograms = document.querySelector('.kg');
const cards = document.querySelector('.card-pound');
const cards2 = document.querySelector('.card-ounces');
const cards3 = document.querySelector('.card-tonne');
const poundsResult = document.querySelector('.result-pound');
const ouncesResult = document.querySelector('.result-ounces');
const tonnesResult = document.querySelector('.result-tonne');
kilograms.addEventListener('input', (e) => {
    cards.style.opacity = '100';
    cards2.style.opacity = '100';
    cards3.style.opacity = '100';
    e.preventDefault();
    let valuepounds = kilograms.value * 2.205;
    let valueounces = kilograms.value * 35.274;
    let valuetonnes = kilograms.value * 0.001;
    poundsResult.textContent= valuepounds;
    ouncesResult.textContent = valueounces;
    tonnesResult.textContent = valuetonnes;
    if(kilograms.value.length < 1) {
        cards.style.opacity = '0';
        cards2.style.opacity = '0';
        cards3.style.opacity = '0';
    } 
});
const pounds = document.querySelector('.poundem');
const cards4 = document.querySelector('.card-kilogram');
const cards5 = document.querySelector('.card-ounces2');
const cards6 = document.querySelector('.card-tonne2');
const kilogramResult = document.querySelector('.result-kilogram');
const ounces2Result = document.querySelector('.result-ounces2');
const tonnes2Result = document.querySelector('.result-tonne2');
pounds.addEventListener('input', (e) => {
    cards4.style.opacity = '100';
    cards5.style.opacity = '100';
    cards6.style.opacity = '100';
    e.preventDefault();
    let valuekilogram = pounds.value / 2.205;
    let valueounces2 = pounds.value * 16;
    let valuetonnes2 = pounds.value / 2205;
    kilogramResult.textContent= valuekilogram;
    ounces2Result.textContent = valueounces2;
    tonnes2Result.textContent = valuetonnes2;
    if(pounds.value.length < 1) {
        cards4.style.opacity = '0';
        cards5.style.opacity = '0';
        cards6.style.opacity = '0';
    } 
});
