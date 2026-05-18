#include <stdio.h>

int A(int x);
void B(int x[]);

int main() {
	int a = 10;
	int b = 10;
	
	b = A(a);
	printf("a = %d : b = %d\n", a, b);


	int c[3];

	c[0] = 10;
	c[1] = 20;

	B(c);
	printf("c[0] = %d : c[1] = %d : c[2] = %d", c[0], c[1], c[2]);
	
	return 0;
}