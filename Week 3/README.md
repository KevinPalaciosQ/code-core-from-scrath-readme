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
