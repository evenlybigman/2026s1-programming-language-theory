#include <stdio.h>

int A(int x) {
	printf("x = %d\n", x);
 	x = 20;
	return x;
}

void B(int x[]) {
	printf("x[0] = %d : x[1] = %d : x[2] = %d\n", x[0], x[1]);
	x[0] = 100;
	x[1] = 200;
}