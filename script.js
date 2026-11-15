console.log(prisPåBok);
{
const bokTitel = "Fourth Wing";
let antalILager = 10;
var prisPåBok = 239;
console.log(prisPåBok);
console.log(antalILager);
console.log(bokTitel);
}
console.log(prisPåBok);
//console.log(antalILager);
//console.log(bokTitel);

/*  Reflektion uppgift 2
1. Jag använde var för prisPåBok och eftersom var inte begränsas av måsvingarna 
i ett vanligt block kunde jag använda variabeln även efter blocket. 
För antalILager använde jag let och för bokTitel använde jag const. 
Både let och const är begränsade till blocket där jag skapade variablerna,
så de två kunde jag därför bara använda inuti blocket. 

2. När jag skrev ut prisPåBok före blocket fick jag undefined. Det
beror på att JavaScript skapar variabeln i förväg när jag använder var.
När min första console.log körs finns variabeln alltså redan, men den får värdet
239 först några rader senare när jag sätter priset inuti blocket. 

Inuti blocket: Här hade jag gett alla tre variablerna sina värden innan jag skrev ut dem. 
Då fick jag 239 för prisPåBok, 10 för antalILager och Fourth Wing för bokTitel.
Efter blocket: När jag skrev ut prisPåBok igen fick jag fortfarande 239. Men när jag
testade antalILager och bokTitel fick jag ReferenceError i båda fallen eftersom 
de variablerna bara gick att använda inuti blocket.  */

const add = (num1, num2) => { 
    console.log(num1 == 0);
    console.log(num2 === '0');
    console.log(num2 === 0);
    console.log(num1 == NaN);

    console.log(num1 ? "truthy" : "falsy");

    const saknarVärde = num1 == null || num2 == null;

    if (!saknarVärde && Number.isFinite(num1) && Number.isFinite (num2)) { 
        return num1 + num2;
    }
};

/* Reflektion uppgift 3
1. Om jag hade använt let istället så hade add(2, 3) fortfarande gett 5
eftersom funktionen gör samma uträkning. Skillnaden är att jag med let 
hade kunnat ge variabeln add ett nytt värde senare. 

2. Om jag hade använt en funktionsdeklaration istället så hade jag
skrivit samma funktion så här:
function add(num1, num2) {
    return num1 + num2;
}
    
3. Att en funktion returnerar något betyder att den skickar tillbaka 
ett värde till den plats i koden där jag anropade den. När jag skrev 
add(2, 3) räknade funktionen ut summan och returnerade 5. Det var 
därför jag såg 5 i konsolen. 
*/

/* Reflektion uppgift 4
1. En ternary operator väljer mellan två värden beroende på ett villkor. 
I min kod använder jag den för att välja om "truthy" eller "falsy"
ska skrivas ut. Med if-satsen bestämmer jag om koden som räknar ut summan
ska köras. 

2. Med två likhetstecken (==) kan JavaScript omvandla värdena till
samma datatyp när de jämförs. Därför blir "0" == 0 sant. Med tre 
likhetstecken (===) måste även datatypen stämma så "0" === 0 blir 
falskt eftersom "0" är text och 0 är ett tal. 

3. Jag använde num1 == null || num2 == null för att kontrollera om 
något av värdena saknas. Med == null fångar jag både null och undefined. I if-satsen
skrev jag !saknarVärde eftersom jag bara vill räkna ut summan när värdena finns och är tal. 
*/

const num1 = 0;
let arg1;
let sum = false;

console.log("Test 1:", add(sum, 1));
console.log("Test 2:", add("0", 3));
console.log("Test 3:", add(3, "num1"));
console.log("Test 4:", add(-5, num1));
console.log("Test 5:", add(arg1, 7));
console.log("Test 6:", add());

console.log("num1:", num1);
console.log("sum:", sum);

/* Reflektion uppgift 5
1. En variabel har ett namn som jag kan använda för att komma åt ett värde 
på flera ställen i koden. När jag skriver let sum = false; skapar jag 
en variabel som heter sum och ger den värdet false. 
En parameter är en variabel som tar emot ett värde när jag anropar en
funktion. När jag skapar funktionen add skriver jag parametrarna num1 
och num2 inom parentes. Inuti funktionen kan jag sedan använda dem 
för att göra jämförelser och räkna ut summan.
Argumenten är det jag skickar in när jag anropar funktionen. När jag 
skriver add(sum, 1) använder jag variabeln sum som första argument 
och talet 1 som andra argument. Ordningen avgör vilken parameter som får 
vilket värde. Eftersom sum har värdet false får num1 värdet false 
och num2 får värdet 1. 

2. Jag får 0 eftersom jag gav variabeln num1 värdet 0 utanför funktionen. 
Inuti add finns en parameter som också heter num1. Den får sitt värde
från det första argumentet varje gång jag anropar funktionen. Det är
alltså två olika variabler som råkar ha samma namn. När jag skriver ut num1 
efter testerna läser jag den yttre variabeln som fortfarande är 0.

3. I test 4 skrev jag add(-5, num1). Som första argument använde jag 
talet -5 och som andra argument använde jag variabeln num1. 
Eftersom num1 hade värdet 0 utanför funktionen blev anropet
samma sak som add(-5, 0). Inuti funktionen fick den första parametern 
(num1) därför värdet -5 och den andra (num2) värdet 0. 

Sedan gjordes de fyra jämförelserna i den här ordningen:

num1 == 0 gav false eftersom -5 och 0 är olika tal.
num2 === '0' gav false eftersom num2 var talet 0 och '0' är en sträng. 
num2 === 0 gav true eftersom båda värdena var talet 0.
num1 == NaN gav false eftersom en jämförelse med == NaN alltid ger false.

Efter jämförelserna använde jag villkorsoperatorn för att avgöra om "truthy"
eller "falsy" skulle skrivas ut. Eftersom -5 räknas som sant i ett villkor,
skrevs "truthy" ut. 

I test 4 hade båda parametrarna ett värde, så saknarVärde blev false 
och !saknarVärde blev true. Number.isFinite gav också true för både -5 och 0.
Därför blev hela if-villkoret sant och funktionen returnerade summan -5 + 0. 
Det var alltså därför jag fick -5 i konsolen.

I de andra testerna blev if-villkoret falskt av olika anledningar:

Test 1: sum hade värdet false, som är ett booleskt värde. 
Test 2: "0" var en sträng eftersom jag hade skrivit nollan inom citattecken.
Test 3: "num1" var också en sträng eftersom jag hade skrivit 
variabelns namn inom citattecken.
Test 5: arg1 var undefined eftersom jag aldrig gav variabeln ett värde. 
Test 6: Båda parametrarna blev undefined när jag anropade add utan argument. 

I de fem testerna nådde funktionen slutet utan att köra raden 
som returnerar summan. Därför fick jag undefined i alla fem fallen. 
*/