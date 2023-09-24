const pcInput = document.querySelector('#pc');
const usbInput = document.querySelector('#usb');
const c2Input = document.querySelector('#c2');
const c5Input = document.querySelector('#c5');

let demand;
let pcOutlets;
let c2;
let c5;

let giorgi = 10

price = 0;

function calculate() {
    demand = parseInt(usbInput.value);
    pcOutlets = parseInt(pcInput.value);
    c2 = parseInt(c2Input.value);
    c5 = parseInt(c5Input.value);

    correlationPrice = c5 / c2;


    if (demand <= pcOutlets) {
        showResults();
        return;
    }

    rest = demand - pcOutlets;

    if (correlationPrice <= 1) {
        let a = rest % 4
        price = c5 * ((rest - a + 4) / 4);
    } else if (correlationPrice >= 4) {
        price = c2 * rest;
    } else {
        if (rest > correlationPrice) {
            let a = rest % 4
            if (rest - a == 0) {
                price = c5 * ((rest - a + 4) / 4);
                showResults();
                return;
            } else {
                price = c5 * ((rest - a) / 4);
            }
            let newRest = rest - 4 * (price / c5);

            price += c2 * newRest;
        } else {
            price = c2 * rest;
        }
    }
    
    showResults();

    console.log(correlationPrice)
}

function showResults() {
    document.querySelector('#r').innerHTML = `PRICE: ${price} $$$`;
}