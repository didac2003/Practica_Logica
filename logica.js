//Ex1
/*
var num = 21
if (( num % 3 ) == 0){
    console.log(num + ' es multiple de 3')
}else if ((num % 7) == 0){
    console.log(num + ' es multiple de 7')
}
else{
    console.log('El numero no es multiple de 3 ni de 7');
}
/*

//Ex2
/*
var x = 30
var y = 25

x=(x>=10 && x<=50) ? console.log("El número " + x + " está en el rang")
                   : console.log("El número " + x + " no está en el rang")

y=(y>=10 && y<=50) ? console.log("El número " + y + " está en el rang")
                   : console.log("El número " + y + " no está en el rang")
*/

//Ex3
/*
var a = 9

switch ((a<5) ? 0 : (a>=5 && a<6) ? 1 : (a>=6 && a<7) ? 2 : (a>=7 && a<9) ? 3 : 4){
    case 0:
        console.log("Molt bé senyor, has suspès")
    break

    case 1:
        console.log("Molt bé senyor, un suficient")
    break

    case 2:
        console.log("Molt bé senyor, un bé")
        break

    case 3:
        console.log("Molt bé senyor, un notable")
    break

    case 4:
        console.log("Molt bé senyor, un excel·lent")
    break
}
*/

//Ex4
/*
var num = prompt("Introdueix un número")
sumador1 = 1
sumador2 = 2
contador = 0
acumulador = 0
total = 0

while (acumulador<=num){
    total++
    contador= sumador1 + sumador2
    sumador1=0
    sumador2++
    acumulador+=contador
}

console.log("Són " +  total + " números")
*/

//Ex5
/*
var b = /(\d+)/g;
var a=prompt("Introdueix la frase")
var n=0

for (var i = 0; i < a.match(b).length; i++){
    n+=Number(a.match(b)[i])
}
console.log(n);
*/

//Ex6
/*
var a = parseInt(prompt("Introdueix un número"))
var b = parseInt(prompt("Introdueix un número"))
var c = parseInt(prompt("Introdueix un número"))

if(a >= b && a >= c){
    if(b > c)
        console.log(a,b,c)
    else
        console.log(a,c,b);
}

if(b >= a && b >= c){
    if(a > c)
        console.log(b,a,c)
    else
        console.log(b,c,a);
}
    
if(c >= b && c >= a){
    if(b > a)
        console.log(c,b,a)
    else
        console.log(c,a,b);
}
*/

//Ex7
/*
var num = prompt('Introdueix número')
var cont = 0

while (cont<num){
    cont++
    console.log(cont);
        if(cont % 2 == 0)
            console.log("El número és parell");
        else
            console.log("El número és senar");
}
*/

//Ex8
/*
var files=5

    for(var i = 0; i < files; i++){
        let files = ''
        for (var j = 0; j < i + 1 ; j++){
            files=files + '* '   
        }   
    console.log(files);
    }
*/

//Ex9
/*
var contador1 = 0;
var resultat3 = 0;
var resultat5 = 0;

do {
    if (contador1 % 3 == 0 && contador1 % 5 == 0){
        resultat3+= contador1;
        resultat5+= contador1;
        }
    else if (contador1 % 3 == 0) {
        resultat3+= contador1;
    }
    else if (contador1 % 5 == 0) {
        resultat5+= contador1;
    }
    contador1++;
    
} while (contador1 <= 1000);

console.log("La suma dels multiples de 3 és \n" + resultat3);
console.log("La suma dels multiples de 5 és \n" + resultat5);
console.log("La suma total és \n" + (resultat5 + resultat3));
*/

//Ex10
/*
var files=5
var cont = 0

bucle:
for(var i = 0; i < files; i++){
    let files = ''
    for (var j = 0; j < i + 1 ; j++){
        files=files + '* ' 
    }   
    cont++
    if (cont % 2 != 0)
    console.log(files)
    continue bucle
}
*/

