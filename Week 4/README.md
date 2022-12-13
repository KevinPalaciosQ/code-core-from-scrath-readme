# Week 3
---
## Monday, December 13💻
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
