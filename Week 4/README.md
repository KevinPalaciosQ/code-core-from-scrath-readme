# Week 3
---
## Monday, December 12💻
---
# Average sales and commission
## Description
---

Make a program that asks how many sales the seller had, Once the number of sales is entered, ask for the value of each sale until all are entered, then return as a result the average value of sales, and the commission that the seller will take, If the seller had more than 5 sales, his commission will be 15% of the total value of the sales, if he sold 5 or less, his commission will be only 10%.

---
## Solution
```
Algoritmo AverageComission
	Escribir "Write the total number of sales to enter:"
	leer totaldeventas
	ingresostotales = 0
	
	Para venta = 1 Hasta totaldeventas Con Paso 1 Hacer
		Escribir "Write the value of the sale number: ",venta
		leer cantidad
		ingresostotales = ingresostotales + cantidad
	FinPara
	
	promedio = ingresostotales / totaldeventas 
	Imprimir "The average sales is: ", promedio
	
	SI totaldeventas < 5 Entonces
		Imprimir "The commission received by the seller is: ", ingresostotales * 0.10
	SiNo
		Imprimir "The commission received by the seller is: ", ingresostotales * 0.15
	FinSi
	
FinAlgoritmo
```

The result of the program is as follows:

![out](https://user-images.githubusercontent.com/95326781/207465435-da659b9e-0f42-42c4-bb7b-d08647ba4427.jpg)
---
# Even or odd
---
## Description

Request a number from 1 to 50, if the number is not between those values, report the error and request it again until you get a valid number, then it shows on the screen all the numbers from 1 to that number, if the number is even it only shows the even numbers, if it is odd it only shows the odd ones.
## Solution
```
Algoritmo Evenodd
	num = 0
	Repetir
		Escribir "Write a number between 1 and 50"
		Leer num
		Si num>0 & num <= 50 Entonces
			Si num%2 == 0 Entonces
				Para n<-2 Hasta num Con Paso 2 Hacer
					Escribir n
				Fin Para
			SiNo
				Para n<-1 Hasta num Con Paso 2 Hacer
					Escribir n
				Fin Para
			FinSi
		SiNo
			Escribir "invalid number"
		FinSi
	Mientras Que num <=0 | num>50
FinAlgoritmo
```
The result of the program is as follows:

![o](https://user-images.githubusercontent.com/95326781/207468772-11c9e1d1-3302-4bda-ab94-1867c68cd141.jpg)
---
## Tuesday, December 13💻
---
# Predefined functions
---
## Description
```
- Predefined functions
    - Maths
        - abs
        - trunc
        - redon
        - azar
    - Chain
        - longitud
        - mayusculas
        - minusculas
        - subcadena
```
- Maths

abs

![abs](https://user-images.githubusercontent.com/95326781/208342672-a95c66a7-498a-4622-8e4a-3083d1b56462.jpg)
---
trunc

![trunc](https://user-images.githubusercontent.com/95326781/208342966-b94283a9-bae8-4c7f-8929-ef491bd25754.jpg)
---
redon

![redon](https://user-images.githubusercontent.com/95326781/208343053-82e51fad-13fc-4b75-90c6-317043fbbc8f.jpg)
---
azar

![azar](https://user-images.githubusercontent.com/95326781/208343223-6711514b-5072-477b-90ad-3d4a2103e553.jpg)
---
- Chain
---
Longitud

![longitud](https://user-images.githubusercontent.com/95326781/208343517-7e34a313-43bf-4c9e-b90e-9716eb73aae6.jpg)
---
Mayusculas

![mayusculas](https://user-images.githubusercontent.com/95326781/208343619-18be353d-f0e1-4f6c-8baa-08b3a15ac1d8.jpg)
---
minusculas

![minusculas](https://user-images.githubusercontent.com/95326781/208343977-5e6f81cf-4b67-401b-ad94-68cc617daad7.jpg)
---
subcadena

![sub](https://user-images.githubusercontent.com/95326781/208344252-4c7ac440-92e6-4c6a-8932-88c5d19c8885.jpg)
---
# Full name
---
## Description
Make a program that takes a first name and a last name, then returns a string with both values with the first letter uppercase and the rest lowercase.
```
Algoritmo Full_name
	Escribir "Write Name"
	Leer name
	Escribir "Write First Name"
	Leer firstname
	namecorrect = Mayusculas(Subcadena(name,0,1))+ Minusculas(Subcadena(name,2,Longitud(name)-0))
	firstname = Mayusculas(Subcadena(firstname,0,1))+ Minusculas(Subcadena(firstname,2,Longitud(firstname)-0))
	Imprimir namecorrect,firstname
FinAlgoritmo

```
![full](https://user-images.githubusercontent.com/95326781/208345391-7c811094-6e03-4e77-be67-83223fc56e9e.jpg)
# Throw dice
---
## Description
Make a program that takes a first name and a last name, then returns a string with both values with the first letter uppercase and the rest lowercase.
## Solucion
```
Algoritmo Throw_dice
	Definir dado1,dado2 Como Entero
	Para conteo = 1 Hasta  10 Con Paso 1 Hacer
		dado1=azar(10)
		dado2=azar(10)
		SI dado1=dado2 Entonces
			Imprimir dado1, " ", dado2, "Son iguales x)"
		SiNo
			Imprimir dado1, " ", dado2
		FinSi
	FinPara
FinAlgoritmo
```
## Output
![dice](https://user-images.githubusercontent.com/95326781/208346440-0e71f219-0547-42e2-98ec-458ba0098e8a.jpg)
---
## Wednesday, December 14💻
---
## Distance to zero
### Description
Make a program that asks for 5 values and also allows us to know which one is furthest from zero, once obtained it returns that number (the numbers can be negative), showing only the integer part of the number.
## Solucion
```
Algoritmo Distance_to_zero
	Escribir  "Please Write a Number"
	leer distance
	Para count=1 Hasta 4 Con Paso 1 Hacer
		Escribir "Please write a Number"
		Leer  number
		SI Abs(number) > Abs(distance) Entonces
			distance = number
		FinSi
	FinPara
	Imprimir Trunc(distance)
FinAlgoritmo
```
## Output 
![Solution](https://user-images.githubusercontent.com/95326781/208349029-c6b440da-572a-4fdc-b322-2ea8c81ab609.jpg)
---
# Toss coin
---
## Description
From the data we receive first a name and a value, then another name and another value, using the built-in function aleatorio() we simulate the flip of a coin, We must return the name of the winner in capital letters and the value I win, to avoid cheating, if a player puts a value of zero or negative, the opponent automatically wins, in case both cheat, "game canceled" is returned.
## Solucion
```
Algoritmo Toss_coin
	Escribir "Enter the name of the first player"
	Leer  p1
	Escribir "enter the amount to play"
	leer amt1
	Escribir "Enter the name of the first player"
	Leer  p2
	Escribir "enter the amount to play"
	leer amt2
	SI amt1<=0 | amt2 <=0 Entonces
		SI amt1<=0 & amt2 <=0 Entonces
			Imprimir "game canceled"
		SiNo
			SI amt1<=0 Entonces
				Imprimir "player wins: ", Mayusculas(p2), " amount won: 0"
			SiNo
				Imprimir "player wins: ", Mayusculas(p1), " amount won: 0"
			FinSi
		FinSi
	SiNo
		SI Aleatorio(1,2) = 1 Entonces
			Imprimir "player wins: ", Mayusculas(p1), " amount won: ", amt2
		SiNo
			Imprimir "player wins: ", Mayusculas(p2), " amount won: ", amt1
		FinSi
	FinSi
FinAlgoritmo
```
![Toss_coin](https://user-images.githubusercontent.com/95326781/208349719-44415b20-6a27-49ec-b370-f05846e5bd41.jpg)
---
## Thursday, December 15💻
---
# Structure of a function
## Description
The predefined functions of pseint, are codes already integrated in the program to be used when the user requires it, normally they are mathematical functions or functions for text strings.
```
  - Structure of a function
    - Signature of a function
    - Name
    - Arguments, Parameters
    - Return Values
    - Function call
```
Example code
```
Algoritmo dias_semana
Escribir "Ingrese los dias a mostrar"
Leer d
Dimension dias[d]
semana(dias,d)
FinAlgoritmo

Algoritmo Telefono
Escribir "Ingrese su numero de telefono movil"
Leer tel
Si tel < 9999999 Entonces
Escribir "No es un telefono movil"
Escribir "Tienen que ser 9 digitos"
FinSi
FinSubAlgoritmo
```
---
# Total price
---
## Description

Create a function called TotalPrice that takes 2 parameters, price and VAT, and returns the price including VAT. if the price exceeds 3000 a 10 percent discount is made on the total price.
```
	Funcion val <- TP (precio, iva)
		Definir val Como Real;
		SI precio > 3000 Entonces
			val = ( precio + (precio/100*iva) ) / 100*90
		SiNo
			val = ( precio + (precio/100*iva) )
		FinSi
	Fin Funcion
	Algoritmo example_TotalPrice
		Imprimir TP(5000,21)
FinAlgoritmo
```
![54545](https://user-images.githubusercontent.com/95326781/208351846-49ccfd7f-a486-4aa3-bfb9-2056734db569.jpg)
---
# Reverse direction and size
## Description
Create a function called ReverseDirectionAndSize that takes some text as a parameter and reverses it, eg: "Hello" -> "olleH" and also reverses the letters if they are uppercase to lowercase and if they are lowercase to uppercase, it should do something. like this:
"HelLO" --> "olLEh"

"Leonardo" --> "ODRANOEl"

"Text" --> "TXEt"
```
Expected output
Algoritmo example_ReverseDirectionAndSize
	Imprimir ReverseDirectionAndSize("Hello")
FinAlgoritmo
```
# Solution
```
Algoritmo Reverse_direction_and_size
	Imprimir Rs("Leonardo")
FinAlgoritmo
Funcion reverse <-  Rs(texto)
	Definir reverse Como Caracter
	reverse = ""
	Para i = Longitud(texto) Hasta 0 Con Paso -1 Hacer
		leter = Subcadena(texto,i,i)
		Si leter == Mayusculas(leter) Entonces
			leter = Minusculas(leter)
		SiNo 
			leter = Mayusculas(leter)
		FinSi
		reverse= Concatenar(reverse, leter)
	FinPara
FinFuncion
```
![ou](https://user-images.githubusercontent.com/95326781/208354421-4c817231-bef1-4f2f-a158-4d88542fed9c.jpg)

