# Week 5
---
## Monday, December 20💻
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

Algoritmo exampleTimeConverter
	Imprimir ("Convertidor de Tiempo")
	Imprimir TC(100000)
FinAlgoritmo
```
---
# Compare distances
## Description
---
