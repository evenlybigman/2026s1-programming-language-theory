#include <stdio.h>
#include <stdlib.h>

int main() {
	int* a = (int*)malloc(sizeof(int));
	int* b = (int*)malloc(sizeof(int));

	*a = 1;
	*b = 2;
	printf("*a = %d : *b = %d\n", *a, *b);

	a = b;
	printf("*a = %d : *b = %d\n", *a, *b);
}