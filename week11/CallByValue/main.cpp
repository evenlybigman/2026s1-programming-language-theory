#include <stdio.h>

int big = 48;
int big2 = 48;
int big3 = 48;

void add(int a, int b);
void add2(int* a, int* b);
void add3(int& a, int& b);

int main() {
	int i = 2;
	int i2 = 2;
	int i3 = 2;

	add(i, big);
	add2(&i2, &big2);
	add3(i3, big3);
	printf("i = %d : big = %d\n", i, big);
	printf("i2 = %d : big2 = %d\n", i2, big2);
	printf("i3 = %d : big3 = %d\n", i3, big3);

	return 0;
}