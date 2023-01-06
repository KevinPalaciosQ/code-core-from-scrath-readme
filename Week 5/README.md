# Week 5
---
## Monday, December 19💻
---
# Time Converter
## Description
---
Create a function called timeConverter that receives a positive number of seconds and returns a string based on the number. "Days: 1, Hours: 5, Minutes: 40 and seconds: 5"

4000 --> "days: 0, hours: 1, minutes: 6, and seconds: 4"

40000 --> "days: 0, hours: 11, minutes: 6, and seconds: 4"

150000 --> "days: 1, hours: 17, minutes: 40, and seconds: 0"
```
Funcion Re  <- TC(num)
	Definir result Como Caracter;
	Definir d, h, m, s Como Entero;
	s = num % 60;
	m = Trunc(num/60) % 60;
	h = Trunc(num/3600) % 24;
	d= Trunc(num/86400);
	Re  = Concatenar("days: ", ConvertirATexto(d));
	Re  = Concatenar(Re, ", hours: ");
	Re  = Concatenar(Re, ConvertirATexto(h));
	Re  = Concatenar(Re, ", minutes: ");
	Re  = Concatenar(Re, ConvertirATexto(m));
	Re  = Concatenar(Re, ", and seconds: ");
	Re  = Concatenar(Re, ConvertirATexto(s));
Fin Funcion

Algoritmo MyTimeConverter
	Imprimir ("Convertidor de Tiempo")
	Imprimir TC(100000)
FinAlgoritmo
```
---
# Compare distances
## Description
Create a function called compareDistances that asks for 5 numbers, these can be positive or negative, add the positives with positives and negatives with negatives, the function should return true if there is more distance to 0 with positives or false if the distance is greater with negatives .

4, 12 , 100, 8, -60 --> true

40, 120 , 10, -80, -91 --> false


---
# Solution
```
Funcion Re  <- Compare()
	Definir Re Como Logico;
	Definir Nnegativo, Npositivo Como Real;
	Nnegativo=0;
	Npositivo=0;
	Para Conteo=1 con Paso 1 Hasta 5 Hacer
		Escribir "Please write a Number";
		Leer number;
		Si number>0 Entonces
			Npositivo=Npositivo+number;
		SiNo
			Nnegativo=Nnegativo+number;
		FinSi
	FinPara
	Re=Npositivo>Abs(Nnegativo);
Fin Funcion

Algoritmo DistanceCompair
	Imprimir ("Distance Compair")
	Imprimir  Compare()
FinAlgoritmo
```
---
## Tuesday, December 20💻
---
# Sum of pairs
## Description
---
write a function called sumOfPairs that asks for a number from 1 to 100 indefinitely, if a negative number or greater than 100 is entered, it stops asking for more numbers and returns the sum of all the even numbers entered.

4, 12 , 100, 11, -60 --> 116

40, 121 --> 40
# Solution
```
Funcion Resultado <- Operation()
	Definir Resultado Como Real;
	Definir suma Como Real;
	Plus = 0;
	Repetir
		Escribir "write a number between 1 and 100"
		leer n
		SI  n < 1  | n > 100 Entonces
			Imprimir "Invalid Number"
		SiNo
			SI n % 2 = 0
				Plus = Plus + n;
			FinSi
		FinSi
	Mientras Que n>= 1  & n  <= 100
	Resultado = Plus;
Fin Funcion

Algoritmo PlusPairs
	Imprimir Operation()
FinAlgoritmo
```
# Mid point
## Description
---
write a function called midpoint that given 2 values (can be negative) does not return the value of the midpoint between them

-50,50 --> 0

40, 80 --> 60
```
Funcion Resultado <- MyMidPoint (number1,number2)
	Si number1 > 0 Entonces
		Si number2 > 0 Entonces
			SI number1 > number2 Entonces
				Resultado = number2 + ((number1 - number2) / 2); 
			SiNo
				Resultado = number1 + ((number2- number1) / 2);
			FinSi
		SiNo
			Resultado = number1 - ( (number1 + Abs(number2))/2);
		FinSi
	SiNo
		SI number2 > 0 Entonces
			Resultado = number1 + ( (number2 + Abs(number1))/2)	;
		SiNo
			SI Abs(num1) > Abs(number2) Entonces
				Resultado = number1 + ((Abs(number1) - Abs(number2)) / 2); 
			SiNo
				Resultado = number2 + ((Abs(number2) - Abs(number1)) / 2); 
			FinSi
		FinSi
	FinSi
Fin Funcion
Algoritmo MP
	Imprimir MyMidPoint(-50,50)
FinAlgoritmo
---
## Wednesday, December 21💻
---
# Cashier
## Description
---
create a function called "cashier" that pretends to be a panel of a bank should display the text: "select an option: a. to deposit. b. withdraw. c. go out." and have a value called balance that will return when finished and will print it on the screen, its initial value will be 1000. You must repeat the menu until you select the option 'c'

if we select 'a' it invokes another function called 'deposit' that will display a text on the screen that will say 'how much do you want to deposit:' it will add that value to the balance and end the function.

if we select 'b' it invokes another function called 'withdraw' that will display a text on the screen that will say 'how much do you want to withdraw:' it will subtract that value from the balance and end the function.

"select an option: a. to deposit. b. withdraw. c. go out."

a -->

"how much do you want to deposit:"

500 -->

"select an option: a. to deposit. b. withdraw. c. go out."

b -->

"how much do you want to withdraw:"

1400 -->

"select an option: a. to deposit. b. withdraw. c. go out."

c -->

100

```
Funcion balance <- c ()
	Definir balance Como Real;
	balance = 1000;
	Repetir
		Imprimir "select an option:";
		Imprimir "a. to deposit.";
		Imprimir "b. withdraw.";
		Imprimir "c. go out.";
		leer option
		Si option = 'a' Entonces
			balance = balance + deposit()
		FinSi
		Si option = 'b' Entonces
			balance = balance - w()
		FinSi
	Mientras Que option = "a" | option = "b"
Fin Funcion

Funcion v <- deposit()
	Imprimir "how much do you want to deposit:";
	leer value
FinFuncion

Funcion v <- w()
	Imprimir "how much do you want to withdraw:";
	leer v
FinFuncion

Algoritmo _Cashier
	Imprimir c()
FinAlgoritmo
```
---
# Weather average
## Description

write an algorithm that loops indefinitely until 'x' is entered which will calculate an average of the weather, note that for each value entered it should ask if it is fahrenheit or celsius, then ask for the value. add everything up and divide by the number of values entered. The result must be returned in celsius, have a function that, in case fahrenheit is entered, transforms it to celsius in order to add them.

```
Funcion celsius <- fTC (fahrenheit)
	Definir celsius Como Real;
	celsius = (fahrenheit - 32 ) / 1.8
Fin Funcion

Algoritmo WeatherAverage
	count = 0;
	total = 0;
	Repetir
		Imprimir "Select an option:";
		Imprimir "a. Enter degrees celsius.";
		Imprimir "b. Enter degrees fahrenheit.";
		Imprimir "x. Go out.";
		leer option
		Si option = "a" | option = "b" Entonces
			leer degree
			count = count + 1;
		FinSi
		Si option = 'a' Entonces
			total = total + degree;
		FinSi
		Si option = 'b' Entonces
			total = total + fTC(degree);
		FinSi
	Mientras Que option = "a" | option = "b"
	Imprimir total / count;
FinAlgoritmo
```
---
## Thursday, December 22💻
---
# 'IF' statement in JavaScript
## Description
---
Create an if statement with the JavaScript syntax
## Solution
```
var i=18;
if (i>=18){
    document.write("Usted es Mayor de Edad");
}else{
    document.write("Usted es Menor de Edad");
}
```
# 'WHILE' loop in JavaScript
## Description
---
Create a while loop statement with the JavaScript syntax
## Solution
```
while (i < 3) { //shows 0, then 1, then 2
    alert( i );
    i++;
}
```
# 'FOR' loop in JavaScript
## Description
---
Create a for loop with the JavaScript syntax
## Solution
```
for (let i = 0; i < 3; i++) { //shows 0, then 1, then 2
    alert(i);
}
```
