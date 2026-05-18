#include <stdio.h>

int big = 48;
int big2 = 48;

void add(int a, int b);
void padd(int* a, int* b);

int main() {
	int i = 2;
	int j = 2;

	add(i, big);
	padd(&j, &big2);
	printf("i = %d : big = %d\n", i, big);
	printf("i = %d : big = %d\n", j, big2);
	return 0;
}