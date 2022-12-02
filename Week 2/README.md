# Week 2
---
## Monday, November 28 💻
---
# Logic problem
```
Logic problem
Description

The teacher asks his 5 students if they studied mathematics yesterday.

Alice: "Nobody studied math yesterday".
Bob: "1 person studied math yesterday".
Charlie: "2 people studied math yesterday".
Dan: "3 people studied mathematics yesterday".
Eva: "4 people studied mathematics yesterday".

The teacher knows that only those who studied would be telling the truth and those who didn't would be lying. Who is telling the truth?
Expected output

Identify which student is telling the truth
```
# Solution: 
```
Only those who studied would be telling the truth and those who did not would be lying. 
1. In the first case, if Alice is lying, what the professor says would be a lie.
2. Bob says that at least someone studied
3. If Charlie says that 2 study the previous preposition would be a lie.
Bob is telling the Truth
```
# Which comes first, cereal or milk?
```
Create an algorithm to prepare a bowl of cereal with milk. Represent the result in pseudocode and in a flowchart.
```
# Algoritm: 
```
1. Get a bowl 
2. Put the cereal
3. If you want to add fruits or something else:
  a. Ask for fruit
  b. Put the fruit
  c. Add Suggar or granola
 4. Pour the milk into the bowl
 5. Enjoy
```
# Pseudocode: 
```
If Bowl equals void then:
  add cereal
  add milk in the bowl
 Else
  get bowl, cereal and milk
  put cereal in the bowl and milk, and add some fruit
End
```
# Flow Diagram:
![Cereall](https://user-images.githubusercontent.com/95326781/204409065-4c3bb78a-8dfa-4209-8ade-76681a3fb382.jpg)
---
## Tuesday, 29 💻
---
## Print my name
---
```
Algoritmo MyName
	Imprimir "Hola mi nombre es: Kevin Palacios"
FinAlgoritmo
```
---
## Print my name & age
---
```
Algoritmo MyNameAndMyAge
	Imprimir "Hola mi nombre es: Kevin Palacios"
	Imprimir "Hola mi edad es: 27 años"
FinAlgoritmo

```
## Wednesday, 30 💻
---
# Algorithm game
## Description
```
This will be a fun challenge, you will be playing a game base on simple commands, and the idea is for you to help the squirrel to take the pine cone. For this challenge try to pass the first 15 levels. We wish you all the luck and happy gaming.
P.S. If you like, you can try to do all 27 levels, but following level 15 we will need more programming concepts, maybe you can go back to this challenge later 😉
```
## Solution
```
Level 1
```
![1](https://user-images.githubusercontent.com/95326781/204929777-d9e50fc1-da5a-408e-b352-8bd56ae55455.jpg)
```
Level 2
```
![2](https://user-images.githubusercontent.com/95326781/204930020-82dc0fe4-d828-4ddc-9511-b07c58f6ca2e.jpg)
```
Level 3
```
![3](https://user-images.githubusercontent.com/95326781/204930122-54c85c4b-d370-4762-9eda-d15e2faf0930.jpg)
```
Level 4
```
![4](https://user-images.githubusercontent.com/95326781/204930284-04036404-43ac-4cb4-9126-5d08e800d8b2.jpg)
```
Level 5
```
![5](https://user-images.githubusercontent.com/95326781/204930566-164a6c70-6a5c-4924-b407-b64de6b1215e.jpg)
```
Level 6
```
![6](https://user-images.githubusercontent.com/95326781/204930858-6c08ed22-8e24-4cd0-9437-3b32107d92e8.jpg)
```
Level 7
```
![7](https://user-images.githubusercontent.com/95326781/204931095-2083f9fa-102b-4fd1-aff3-975911a5b936.jpg)
```
Level 8
```
![8](https://user-images.githubusercontent.com/95326781/204931229-766e9735-9a45-46f5-9f24-93fa8baa2629.jpg)
```
Level 9
```
![9](https://user-images.githubusercontent.com/95326781/204931502-f5bcfdf6-f48c-4aa2-a5bb-6b511a7615c7.jpg)
```
Level 10
```
![10](https://user-images.githubusercontent.com/95326781/204931618-49b4ddfd-d723-44a7-837c-ca764845aecf.jpg)
```
Level 11
```
![11](https://user-images.githubusercontent.com/95326781/204931723-eb777ac3-118e-426d-bc6f-97c369d41e41.jpg)
```
Level 12
```
![12](https://user-images.githubusercontent.com/95326781/204931818-716d4c73-ffb0-4d32-a105-d7df2867feff.jpg)
```
Level 13
```
![13](https://user-images.githubusercontent.com/95326781/204932421-619c1841-cd4d-4fab-b633-92293c44e51a.jpg)
```
Level 14
```
![14](https://user-images.githubusercontent.com/95326781/204932762-9631eb84-988e-4df5-9418-47af4be05b33.jpg)
```
Level 15
```
![15](https://user-images.githubusercontent.com/95326781/204932943-ba6ce57b-bc64-4432-be8f-b79a9b76463a.jpg)
# Mod
## Description
```
The following description is taken from this source, feel free to read it, this is just a sub-set of the whole post

In computing, the modulo operation returns the remainder or signed remainder of a division, after one number is divided by another (called the modulus of the operation). In this challenge, you are going to learn and practice this arithmetic operator
```
## Solution
```
Algoritmo Mod
	Imprimir "Por favor ingrese un número"
	Leer Variable
	Imprimir Variable % 2
FinAlgoritmo
```
---
```
Odd
```
![impar](https://user-images.githubusercontent.com/95326781/204935321-2ba89840-a475-45ee-bdc1-5e747dd211a5.jpg)
```
Even
```
![Even](https://user-images.githubusercontent.com/95326781/204935404-e4a1ce80-5198-4ab7-afe1-02c59e288cb7.jpg)
---
# Register form
## Description
```
You are given the task to create a registration form for new users, this form should ask the user for the following information:

    First name
    Last name
    Age
    Email
    Address

At the end of the program, you should print all the information added from the user in a friendly way
```
## Solution
```
Algoritmo RegisterForm
	Imprimir "*Register Form*"
	Imprimir  "Please enter your Name"
	Leer Fn
	Imprimir  "Please enter your Last Name"
	Leer Lastname
	Imprimir "Please enter your Age"
	Leer Age
	Imprimir "Please enter your Email"
	Leer Email
	Imprimir "Please enter your Adress"
	Leer Adress
	Imprimir "*User Data*"
	Imprimir  "Hello! "+Fn 
	Imprimir "First Name: "+ Fn
	Imprimir "Last Name: "+ Lastname
	Imprimir "Age: "+ Age
	Imprimir "Email" +Email
	Imprimir "Adress"+Adress
FinAlgoritmo

```
```
Input
```
![Input](https://user-images.githubusercontent.com/95326781/204934905-62333fe0-23fd-4ebc-bdde-c6d6afe53046.jpg)
```
Output
```
![Out](https://user-images.githubusercontent.com/95326781/204935023-13702587-def4-48e4-acf3-669ef40b0c67.jpg)
---
## Thursday, 1💻
---
# Truth tables
## Description
```
You are going to learn about three main logical operations used in programming, these operations are called AND, OR, and NOT.
Each of the operations uses booleans as operands, and when applying the operations a result is generated, which is also a boolean,
this is easier to check using the Truth Tables for each of the operations, now your task is for you to learn, 
and add the Truth Tables for each of the operations add them to your README and check if the following operations are correct
by answering ✅ or ❌ at the end of each operation.
```
---
## Operations:
```
    Remember that AND can be represented by &

    Remember that OR can be represented by |

    Remember that NOT can be represented by ~
```
1. T & T = T
2. T & F = F
3. F & T = T
4. F & F = F
5. T | T = T
6. T | F = F
7. F | T = T
8. F | F = F
9. ~T = T
10. ~F = T
11. (T & F) | (~F) = T
12. (T | F ) & (F | F) = T
13. ~((T | F ) & (F | F)) & F = T
14. ~((T | F ) & (F | F)) & T = F
---
## Solution
1. T & T = T ✅
2. T & F = F ✅
3. F & T = T ❌
4. F & F = F ✅
5. T | T = T ✅
6. T | F = F ❌
7. F | T = T ✅
8. F | F = F ✅
9. ~T = T ❌
10. ~F = T ✅
11. (T & F) | (~F) = T ✅
12. (T | F ) & (F | F) = T ❌
13. ~((T | F ) & (F | F)) & F = F ✅
14. ~((T | F ) & (F | F)) & T = T ✅
---
# Boolean results
## Description
```
You have been assigned to verify and explain a code created by one of your colleagues,
the idea is that you can describe the value that each variable has within the code as well as what was done for each line.
What is expected of you is that you add comments below each line showing the value that the variable would have and a short 
explanation of how that value is reached.
```
## Explain this code:
```
Algoritmo boolean
	a <- 5 == 3
	b <- 4 <> 3
	c <- 7 > 7
	d <- 4 < 4
	e <- 100 <= 90
	f <- 40 >= 40
FinAlgoritmo
```
## Explaining the Code
```
Algoritmo boolean
	a <- 5 == 3
	//a = FALSE
	//Description: se compara que 5 es igual a 3 y esto es Falso
	b <- 4 <> 3
	//b = TRUE
	//Description: se compara que 4 es diferente a 3 y esto es Verdadero
	c <- 7 > 7
	//c = FALSE
	//Description: se compara que 7 es mayor a 7 y esto es Falso
	d <- 4 < 4
	//d = FALSE
	//Description: se compara que 4 es menor a 4 y esto es Falso
	e <- 100 <= 90
	//e = FALSE
	//Description: se compara que 100 es menor o igual a 100 y esto es Falso
	f <- 40 >= 40
	//F = TRUE
	//Description: se compara que 40 es mayor o igual a 40 y esto es Verdadero
FinAlgoritmo
```
# Identify odd and even numbers
## Description
```
Remember the last challenge about the Mod operator? well, today your task will be to create a program that will be able to detect based on the user input if the number is odd or even. The process should be the following:

    The user enters a number
    Your algorithm detects if the number is odd or even (remember to use conditional statements Si...Entonces)
    Print ‘Número: x es par’ if the number is even (x is the number the user enters)
    Print ‘Número: x es impar’ if the number is odd (x is the number the user enters)
```
## Solution:
```
Algoritmo OddOrEvenIdentificator
	Imprimir "Por favor ingrese el número a válidar"
	Leer Numero
	Si ((Numero %2)==0)
		Imprimir "El número: ", Numero," es Par"
	SiNo
		Imprimir "El número: ", Numero," es Impar"
	FinSi
FinAlgoritmo
```
---
## Graphic Solution:
---
![Graphic](https://user-images.githubusercontent.com/95326781/205195864-33770b11-9e0c-4d8b-9ab8-69f4ca8e9b48.jpg)
---
```
Par
```
![Par_](https://user-images.githubusercontent.com/95326781/205195676-d55a3867-34f2-4f97-8ec9-bfc37a8b7053.jpg)
```
Impar
```
![Impar_](https://user-images.githubusercontent.com/95326781/205195704-06d4df6d-754f-4a8c-829b-29a0d843ec14.jpg)
## ```python
Identify odd and even numbers...
```
