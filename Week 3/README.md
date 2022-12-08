# Week 3
---
## Monday, December 5💻
---
# Simple Calculator
## For this challenge you will be performing a simple calculator, this calculator can perform the following operations:
1. Sum (+)
2. Subtract (-)
3. Multiplication (*)
4. Division (/)


The calculator must ask the user for two numbers, after asking for the two numbers, you must ask for the operation to be performed, keep in mind that you must show the user the options available (+, -, *, /). The first thing that must be done is to validate that the operation that the user entered is valid, if it is not a valid option, the user must be shown an error message, for example: ⚠️ La operación no es valida and terminate the program. If the operation is valid, show the message: Procesando: <OPERACIÓN A REALIZAR> For, example: if the user has entered the numbers 10 and 15 as well as the operation *, the message should read: Procesando: 10 * 15. After this message the result of the operation must be displayed, following the previous example, the result of operating 10 * 15 is 150, so the program should return: Resultado: 150. Remember to use conditionals to identify which operations you should execute.
## Solution:
The pseudocode of the algorithm:
```
Algoritmo SimpleCalculator
	Escribir  "***********CALCULADORA*******SIMPLE***********"
	Escribir "Por favor ingrese el primer número:"
	Leer Numero1
	Escribir "Por favor ingrese el segundo número:"
	Leer Numero2
	Imprimir "Operaciones Permitidas:"
	Imprimir "Suma = +"
	Imprimir "Resta = -"
	Imprimir "Multiplicación = *"
	Imprimir "División = /"
	Escribir "Por elija un signo para realizar una operación (+,-,*,/)"
	Leer Operador
	Si Operador =="+"| Operador == "-"| Operador =="*" | Operador =="/" Entonces
		Si Operador =="+" Entonces
			Operacion = Numero1+ Numero2
			Escribir "Procesando operación, SUMA: ", Numero1, "+", Numero2
			Escribir "El Resultado es: ",Operacion
		FinSi
		Si Operador =="-" Entonces
			Operacion = Numero1- Numero2
			Escribir "Procesando operación, RESTA: ", Numero1, "-", Numero2
			Escribir "El Resultado es: ",Operacion
		FinSi
		Si Operador =="*" Entonces
			Operacion = Numero1* Numero2
			Escribir "Procesando operación, MULTIPLICACION: ", Numero1, "*", Numero2
			Escribir "El Resultado es: ",Operacion
		FinSi
		Si Operador =="/" Entonces
			Operacion = Numero1/ Numero2
			Escribir "Procesando operación, DIVISION: ", Numero1, "/", Numero2
			Escribir "El Resultado es: ",Operacion
		FinSi
	FinSi
FinAlgoritmo
```
### How it works
![Example](https://user-images.githubusercontent.com/95326781/205773963-717f518f-21fc-4d55-adb2-7cdead665d66.jpg)
### Operations that the program allows
![Operations](https://user-images.githubusercontent.com/95326781/205774020-b78acb1a-a01f-40c0-9845-51829bbebcf7.jpg)
### Sum
![suma](https://user-images.githubusercontent.com/95326781/205774187-7a8ef890-2c74-48a8-a996-0537c99bca96.jpg)
### Subtract
![resta](https://user-images.githubusercontent.com/95326781/205774246-00e62270-f9b7-4c33-bcb7-bb9c7769d793.jpg)
### Multiplication
![multiplicacion](https://user-images.githubusercontent.com/95326781/205774262-73d0a46d-a27f-4ea4-b643-4d257057382a.jpg)
### Division
![Division](https://user-images.githubusercontent.com/95326781/205774307-1b2fec16-d960-4a83-b9a3-1901ca2d0740.jpg)
## Special number
Description

You must create the code that follows the following logic, if the given number is 100, take this number as special and show the following message: "This is a special number!", but if the number is less than 1000, multiple of 10 and different from 100, you must show the following message: "This number is almost special". if none of the given conditions are met show the following message: "Just a regular number". Another developer was trying to program the logic, but apparently couldn't, you need to fix the code to work properly

This was the code from the developer
```
Algoritmo specialNumber
	Leer n
	Si n == 100 Entonces
		Imprimir 'This is a special number'
	FinSi
	Si n < 1000 Entonces
		Imprimir ''
	SiNo
		Imprimir 'Just a regular number'
	FinSi
	Si n % 10 == 0 Entonces
		Imprimir 'This number is multiple of 10'
	FinSi
FinAlgoritmo
```
## Solution
the correct pseudocode for the previous problem
```
Algoritmo SpecialNumber
	Leer n
	Si n == 100 Entonces
		Imprimir 'This is a special number'
	SiNo
		Si (n <1000) & (n%10==0) & (n<> 1000) Entonces
			Imprimir 'This number is almost special'
		SiNo
			Imprimir 'Just a regular number'
		FinSi
	FinSi
FinAlgoritmo
```
The result of the algorithm is the following:
### Especial Number
![especialn](https://user-images.githubusercontent.com/95326781/205775316-dfabe087-65a1-43b3-b1ca-e5c40fc6088d.jpg)
### Almost Especial Number
![almost](https://user-images.githubusercontent.com/95326781/205775070-21b771b5-9806-4213-96b8-0ed41c8207a6.jpg)
### Regular Number
![RegularN](https://user-images.githubusercontent.com/95326781/205775105-bd526013-00ad-4aa7-bce1-1a10506c7e01.jpg)
---
## Tuesday, December 6💻
---
# Simple calculator with Switch
## Description
For this challenge you will be performing a simple calculator using Switch (Segun), this calculator can perform the following operations:
1. Sum (+)
2. Subtract (-)
3. Multiplication (*)
4. Division (/)

The calculator must ask the user for two numbers, after asking for the two numbers, you must ask for the operation to be performed,
keep in mind that you must show the user the options available (+, -, *, /). The first thing that must be done is to validate that 
the operation that the user entered is valid, if it is not a valid option, the user must be shown an error message, for example:
⚠️ La operación no es valida and terminate the program. If the operation is valid, show the message: Procesando: <OPERACIÓN A REALIZAR> 
For, example: if the user has entered the numbers 10 and 15 as well as the operation *, the message should read: Procesando: 10 * 15. 
After this message the result of the operation must be displayed, following the previous example, the result of operating 10 * 15 is 150,
so the program should return: Resultado: 150. Remember to use Switch (Segun) to identify which operations you should execute.
#Solution Algorithm
```
Algoritmo SimpleCalculatorWithSwitch
	Escribir  "********CALCULADORA**SIMPLE**CON**SWITCH********"
	Escribir "Por favor ingrese el primer número:"
	Leer Numero1
	Escribir "Por favor ingrese el segundo número:"
	Leer Numero2
	Imprimir "Operaciones Permitidas:"
	Imprimir "Suma = +"
	Imprimir "Resta = -"
	Imprimir "Multiplicación = *"
	Imprimir "División = /"
	Escribir "Por elija un signo para realizar una operación (+,-,*,/)"
	Leer Operador
	Si Operador =="+"| Operador == "-"| Operador =="*" | Operador =="/" Entonces
		Imprimir  "La operación a Realizar será",Operador
		Segun Operador Hacer
			"+":
				Operacion = Numero1+ Numero2
				Imprimir "El resultado de la Suma es : ", Operacion
			"-":
				Operacion = Numero1- Numero2
				Imprimir "El resultado de la Resta es : ", Operacion
			"*":
				Operacion = Numero1*Numero2
				Imprimir "El resultado de la Multiplicación es : ", Operacion
			"/":
				Operacion = Numero1/Numero2
				Imprimir "El resultado de la División es : ", Operacion
		FinSegun
	SiNo
		Imprimir "Por favor elija una opción valida"
	FinSi
FinAlgoritmo
```
## How the Calculator Works
![Switch Calculator](https://user-images.githubusercontent.com/95326781/206046770-a4e9f466-a22a-42f5-82d4-5bf5ba8367a6.jpg)
## Operations
### Sum
![Sum](https://user-images.githubusercontent.com/95326781/206047106-68f89aa2-eadb-41ab-b516-edb1441050d0.jpg)
### Subtract
![Restaa](https://user-images.githubusercontent.com/95326781/206047192-ddf187e6-2ae1-4e2f-94a7-659083fa65d4.jpg)
### Multiplication
![Multi](https://user-images.githubusercontent.com/95326781/206047369-c20fb987-e410-4aae-a344-e653481466e6.jpg)
### Division
![Div](https://user-images.githubusercontent.com/95326781/206047420-7cbc3b01-6970-46b9-b3ce-4af3c284e933.jpg)
# Multi Option Program
## Description
For this challenge you will create a program with multiple options using Switch (Segun), the options available are the following:

1. Sum two numbers
2. Print the day of the week given the day number
3. Print the length of a given text

This program must have a start menu where the user must select one of the previously described options. When the user 
selects each of the options, the program will perform the following:

1. Sum. The user enters two numbers and the result of the sum of both is printed
2. Print day of the week. The user enters a day of the week using numbers and the name of the day must be printed. For example, if the number 1 is entered, the program prints the text Lunes.
 3. Calculate text length. The user enters a text and the length of the text should be printed. I was able to use the Pseint Longitud function to get the length.

When the user enters an incorrect option, a message should be printed saying that the option is not available.
#Solution Algorithm
```
Algoritmo SimpleCalculatorWithSwitch
	Escribir  "********Programa MultiOpcion********"
	Imprimir "Opciones Disponibles:"
	Imprimir "1. Sumar dos números"
	Imprimir "2. Imprimir días de la semana"
	Imprimir "3. Calcular longitud del texto"
	Escribir "Elija una opción :"
	Leer Opcionn
	Si Opcionn =="1"| Opcionn == "2"|Opcionn =="3" Entonces
		Si Opcionn =="1" Entonces
			Imprimir "1. Sumar dos números"
			Imprimir "Por favor ingrese el primer número"
			Leer Numero1
			Imprimir "Por favor ingrese el segundo número"
			Leer Numero2
			Operacion = Numero1+ Numero2
			Escribir "Procesando operación, SUMA: ", Numero1, "+", Numero2
			Escribir "El Resultado es: ",Operacion
		FinSi
		Si Opcionn =="2" Entonces
			Imprimir "2. Imprimir días de la semana"
			Imprimir "Ingrese el dia de la semana en números (1-7)"
			Leer dia
			Si dia =="1"| dia == "2"| dia =="3"| dia =="4"| dia =="5" | dia =="6"| dia =="7" Entonces
				Si dia =="1" Entonces
					Imprimir "Hoy es Lunes"
				FinSi
				Si dia =="2" Entonces
					Imprimir "Hoy es Martes"
				FinSi
				Si dia =="3" Entonces
					Imprimir "Hoy es Miercoles"
				FinSi
				Si dia =="4" Entonces
					Imprimir "Hoy es Jueves"
				FinSi
				Si dia =="5" Entonces
					Imprimir "Hoy es Viernes"
				FinSi
				Si dia =="6" Entonces
					Imprimir "Hoy es Sabado"
				FinSi
				Si dia =="7" Entonces
					Imprimir "Hoy es Domingo"
				FinSi
			SiNo
				Imprimir "Ese día de la semana no existe"
			FinSi
		FinSi
	SiNo
		Imprimir "Por favor elija una opción valida"
	FinSi
	Si Opcionn =="3" Entonces
		Imprimir "3. Calcular longitud del texto"
		Imprimir "Por favor ingrese texto"
		Leer Texto
		Imprimir "La Longitud del texto es de: ",ConvertirATexto(Longitud(Texto))
	FinSi
FinAlgoritmo
```
## Graphic Solution
1. Option 1

![Op1](https://user-images.githubusercontent.com/95326781/206054915-a921a558-17a7-4106-8ae3-6d704e519684.jpg)

2. Option 2

![op2](https://user-images.githubusercontent.com/95326781/206055419-c5f0f12a-2f2b-4919-8721-70cba69e01c1.jpg)

3. Option 3

![op3](https://user-images.githubusercontent.com/95326781/206055520-2ceaa0cd-e50e-4087-9e8a-72f6af72e071.jpg)

---
## Wednesday, December 7💻
---
# Multiplication Tables
## Description
For this challenge you will create a program to calculate the multiplication tables for a given number using While (Mientras). The user must enter a number and then the multiplication table for the number must be printed.
### Solution
```
Algoritmo Multiplication_Tables
	Definir numero Como Entero
	Escribir "Ingresa el número para generar tu tabla de multiplicar"
	leer numero
	Imprimir "Tabla de multiplicar del número: ",numero
	para tabla = 1 Hasta 12 Con Paso 1 Hacer
		Escribir numero," x ",tabla," = ",numero*tabla
	FinPara
FinAlgoritmo
```
### Input a number into the program
![Input](https://user-images.githubusercontent.com/95326781/206041665-97291ac0-c6a1-4a60-ad36-644dbe15d763.jpg)
### Expected Output
![Output](https://user-images.githubusercontent.com/95326781/206041707-bac48898-b1c4-4009-b852-496cdb4e1aaf.jpg)
---
# Simple calculator Do While
## Description
For this challenge we are going to use the simple calculator that we made in the challenge 02 but now adding the functionality to perform a calculation again without finishing the program. The program should ask us if we want to use another operation and if the user answers yes then we can perform a new operation. To solve this challenge remember to use Do while (Repetir Hasta Que).
### Solution
```
Algoritmo CalculadoraSimpleConDoWhile
	Repetir
		Escribir "Por favor ingrese el primer número:"
		Leer Numero1
		Escribir "Por favor ingrese el segundo número:"
		Leer Numero2
		Imprimir "Operaciones Permitidas:"
		Imprimir "Suma = +"
		Imprimir "Resta = -"
		Imprimir "Multiplicación = *"
		Imprimir "División = /"
		Escribir "Por elija un signo para realizar una operación (+,-,*,/)"
		Leer Operador
		Si Operador =="+"| Operador == "-"| Operador =="*" | Operador =="/" Entonces
			Imprimir  "La operación a Realizar será",Operador
			Segun Operador Hacer
				"+":
					Operacion = Numero1+ Numero2
					Imprimir "El resultado de la Suma es : ", Operacion
				"-":
					Operacion = Numero1- Numero2
					Imprimir "El resultado de la Resta es : ", Operacion
				"*":
					Operacion = Numero1*Numero2
					Imprimir "El resultado de la Multiplicación es : ", Operacion
				"/":
					Operacion = Numero1/Numero2
					Imprimir "El resultado de la División es : ", Operacion
			FinSegun
		SiNo
			Imprimir "Por favor elija una opción valida"
		FinSi	
		Imprimir "Desea continuar con otra operación? Escriba si/no"
		Leer continuar
	Hasta Que continuar =="no" | continuar =="No"| continuar =="NO"
FinAlgoritmo

```
### Graphic Solution
![Ejemplo](https://user-images.githubusercontent.com/95326781/206325402-e797e39e-ea2a-473a-b454-604b1d12c43a.jpg)
