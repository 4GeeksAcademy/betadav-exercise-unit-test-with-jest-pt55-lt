// Importar la función sum del archivo app.js

const { sum } = require('./app.js');

// Comienza tu primera prueba

test('adds 14 + 9 to equal 23', () => {

    // Dentro de la prueba llamamos a nuestra función sum con 2 números
    let total = sum(14, 9);

    // Esperamos que la suma de esos 2 números sea 23
    expect(total).toBe(23);
});

test("One euro should be 1.07 dollars", function() {
    // Importo la funcion desde app.js
    const { fromEuroToDollar } = require('./app.js');

    // Uso la función como debe ser usada
    const dollars = fromEuroToDollar(3.5);

    // Si 1 euro son 1.07 dólares, entonces 3.5 euros debe ser (3.5 * 1.07)
    const expected = 3.5 * 1.07;

    // Hago mi comparación (la prueba)
    expect(fromEuroToDollar(3.5)).toBe(3.745); // 1 euro son 1.07 dólares, entonces 3.5 euros deberían ser = (3.5 * 1.07)
});

test("One dollar should be 146.26 Yenes aprox", function() {

    const { fromDollarToYen } = require('./app.js');

    const yenes = fromDollarToYen(3);

    const expected = 146.26168224299064 * 3;

    expect(fromDollarToYen(3)).toBe(438.7850467289719);
});

test("One yen should be 0.00555 Pound aprox", function() {

    const { fromYenToPound } = require('./app.js');

    const pound = fromYenToPound(80);

    const expected = 80 * 0.0055591054313099;

    expect(fromYenToPound(80)).toBe(0.4447284345047924);
});