#include <stdio.h>

int A;

void sub() {
	static int j = 1;
	int k = 1;
	printf("j = %d k = %d\n", j, k);
	j++; k++;
}

int main() {
	int a;

	sub();
	sub();
	sub();
}