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
