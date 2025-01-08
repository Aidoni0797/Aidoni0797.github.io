package main

import (
	"fmt"
)

func main() {
	// Ввод количества элементов массива
	var N int
	fmt.Scan(&N)

	// Ввод элементов массива
	arr := make([]int, N)
	for i := 0; i < N; i++ {
		fmt.Scan(&arr[i])
	}

	// Нахождение минимального элемента массива
	minValue := arr[0]
	for i := 1; i < N; i++ {
		if arr[i] < minValue {
			minValue = arr[i]
		}
	}

	// Уменьшаем все элементы на минимальный
	for i := 0; i < N; i++ {
		arr[i] -= minValue
	}

	// Вывод измененного массива
	for i := 0; i < N; i++ {
		fmt.Print(arr[i], " ")
	}
}
