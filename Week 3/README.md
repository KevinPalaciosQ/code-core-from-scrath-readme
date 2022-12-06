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
