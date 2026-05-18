#include <stdio.h>

int big = 48;
void add(int a, int b);

int main() {
	int i = 2;

	add(i, big);
	printf("i = %d : big = %d\n", i, big);

	return 0;
}