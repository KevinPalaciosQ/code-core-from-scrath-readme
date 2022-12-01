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
