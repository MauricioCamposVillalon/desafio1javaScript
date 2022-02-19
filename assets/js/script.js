function ejerc2() { /* Ejercicio de operaciones matematicas */
    n1 = prompt("ingrese el primer numero el cual debe ser mayor a 0");
    n2 = prompt("ingrese el segundo numero diferente del primero y mayor a 0");
    n1 = parseInt(n1);
    n2 = parseInt(n2);

    suma = n1 + n2;
    resta = n1 - n2;
    multiplicacion = n1 * n2;
    division = n1 / n2;
    modulo = n1 % n2;

    alert(`¡La suma es: ${suma}!`);
    alert(`¡La resta es: ${resta}!`);
    alert(`¡La multiplicacion es: ${multiplicacion}!`);
    alert(`¡La division es: ${division}!`);
    alert(`¡El resto  es: ${modulo}!`);

}


function ejerc3() { /* Ejercicio de cambio a grados Kelvin y Fahrenheit */
    celcius = prompt("ingrese la temperatura en celcius");
    celcius = parseFloat(celcius);

    kelvin = celcius + 273.15;
    faren = (((celcius * 9) / 5) + 32);

    alert(`¡La temperatura en Grados kelvin es: ${kelvin} K° !`);
    alert(`¡La temperatura en Grados Fahrenheit es: ${faren} °F !`);
}

function ejerc4() { /* Ejercicio de años semans y dias */
    dias = prompt("ingrese la cantidad de dias");
    dias = parseInt(dias)

    ano = Math.floor(dias / 365);
    dias = dias % 365;
    seman = Math.floor(dias / 7);
    dias = dias % 7;

    alert(`Los dias ingresados equivales a ${ano} años, con ${seman} semanas y ${dias} dias.`);

}

function ejerc5() { /* Ejercio de suma y promedio */
    num1 = prompt("ingrese el primer numero");
    num2 = prompt("ingrese el segundo numero");
    num3 = prompt("ingrese el tercer numero");
    num4 = prompt("ingrese el cuarto numero");
    num5 = prompt("ingrese el quinto numero");

    num1 = parseFloat(num1);
    num2 = parseFloat(num2);
    num3 = parseFloat(num3);
    num4 = parseFloat(num4);
    num5 = parseFloat(num5);


    sumnum = num1+num2+num3+num4+num5;
    promedio = sumnum/5;

    alert(`La suma de los numeros ingresados es: ${sumnum} y el promedio es :${promedio} `);
 

}