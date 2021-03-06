/*
let  pantalla = document.getElementById("pantalla");
let borrar = document.getElementById("ce");
let igual = document.getElementById("igual");

const mostarNum = (numero) => {
 return pantalla.value += numero;
}

borrar.addEventListener('click', () => pantalla.value = "");
igual.addEventListener('click', () => total());

const total = () => {
    const texto = pantalla.value;
    if(texto.includes('+'))
    {
        const items = texto.split('+');
        pantalla.value = parseInt(items[0]) + parseInt(items[1]);
        return false;
    } else if(texto.includes('-')) {
        const items = texto.split('-');
        pantalla.value = parseInt(items[0]) - parseInt(items[1]);
        return false;
    } else if(texto.includes('*')) {
        const items = texto.split('*');
        pantalla.value = parseInt(items[0]) * parseInt(items[1]);
        return false;
    } else if(texto.includes('/')) {
        const items = texto.split('/');
        pantalla.value = parseInt(items[0]) / parseInt(items[1]);
    }
}
*/

let bBorrar = document.getElementById('borrar');
let bIgual = document.getElementById('igual');
let led = document.getElementById('led');
const setLed = (numero) => led.value += numero;


bBorrar.addEventListener('click', () => led.value = '');
bIgual.addEventListener('click', () => total());

const validate = () => 
{
    let texto = led.value;
    if(texto.length > 0)
    {
       if(texto[0] == '*' || texto[0] == '/' || texto[0] == '+')
       {
         alert('accion no permitida');
         return false; 
       }
       return true;
    }
    else{
        console.log('false');
        alert('ingresa un numero');
        return false;
    }
}

const sum = (a, b) => parseInt(a) + parseInt(b);
const res = (a, b) => {
    if(a.length == 0)
    {
        return identifica(b);
    }
    return parseInt(a) - parseInt(b)
};
const mul = (a, b) => parseInt(a) * parseInt(b);
const div = (a, b) => parseInt(a) / parseInt(b); 

const identifica = (texto) => {
    console.log('identifica', texto);
    if(texto.includes('+'))
    {
        const items = texto.split('+');
        return sum(items[0], items[1]) * -1;
    } else if(texto.includes('-')) {
        const items = texto.split('-');
        return res(items[0], items[1])  * -1;
    } else if(texto.includes('*')) {
        const items = texto.split('*');
        return mul(items[0], items[1]) * -1;
        return false;
    } else if(texto.includes('/')) {
        const items = texto.split('/');
        return div(items[0], items[1]) * -1;
    }
}



const total = () => {
    if(validate())
    {
        const texto = led.value;
        if(texto.includes('+'))
        {
            const items = texto.split('+');
            led.value = sum(items[0], items[1]);
            return false;
        } else if(texto.includes('-')) {
            const items = texto.split('-');
            if(items.length == 3)
            {
                led.value = sum(items[1], items[2]) * -1;
                return false;
            }
            led.value = res(items[0], items[1]);
            return false;
        } else if(texto.includes('*')) {
            const items = texto.split('*');
            console.log('items', items);
            led.value = parseInt(items[0]) * parseInt(items[1]);
            return false;
        } else if(texto.includes('/')) {
            const items = texto.split('/');
            led.value = parseInt(items[0]) / parseInt(items[1]);
        }
    }
}

