Algoritmo RetoNumerosParesImpares
    Definir numeros Como Entero
    Dimension numeros(10)
	
    Definir i, sumaPares, cantidadImpares Como Entero
    sumaPares <- 0
    cantidadImpares <- 0
	
    // Leer 10 números enteros positivos, cada uno menor o igual a 1000
    Para i <- 1 Hasta 10 Hacer
        Repetir
            Escribir "Ingrese el número ", i, " (entero positivo <= 1000):"
            Leer numeros(i)
			
            Si numeros(i) <= 0 O numeros(i) > 1000 Entonces
                Escribir "ERROR: Debe ingresar un número entero positivo menor o igual a 1000."
            FinSi
        Hasta Que numeros(i) > 0 Y numeros(i) <= 1000
    FinPara
	
    // Procesar el arreglo: calcular suma de pares y contar impares
    Para i <- 1 Hasta 10 Hacer
        Si numeros(i) MOD 2 = 0 Entonces
            sumaPares <- sumaPares + numeros(i)
        Sino
            cantidadImpares <- cantidadImpares + 1
        FinSi
    FinPara
	
    // Mostrar resultados
    Escribir "------------------------------------"
    Escribir "Suma total de números pares: ", sumaPares
    Escribir "Cantidad total de números impares: ", cantidadImpares
    Escribir "------------------------------------"	
FinAlgoritmo
