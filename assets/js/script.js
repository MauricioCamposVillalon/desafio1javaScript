function ejerc2() {
    n1 = prompt("ingrese el primer numero el cual debe ser mayor a 0");
    n2 = prompt("ingrese el segundo numero diferente del primero y mayor a 0");


    n1 = parseInt(n1);
    n2 = parseInt(n2);

    suma =n1+n2;
    resta = n1-n2;
    multiplicacion = n1*n2;
    division = n1/n2;
    modulo = n1%n2;

    alert(`¡La suma es: ${suma}!`);
    alert(`¡La resta es: ${resta}!`);
    alert(`¡La multiplicacion es: ${multiplicacion}!`);
    alert(`¡La division es: ${division}!`);
    alert(`¡El resto  es: ${modulo}!`);

  }


  function ejerc3() {
    celcius = prompt("ingrese la temperatura en celcius");
    


    celcius = parseFloat(celcius);
    
    kelvin = celcius+273.15;
    faren = (((celcius*9)/5)+32);

    alert(`¡La temperatura en Grados kelvin es: ${kelvin} K !`);
    alert(`¡La temperatura en Grados Fahrenheit es: ${faren} °F !`);


  }