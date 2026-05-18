#include <stdio.h>

extern int big;
extern int big2;

void add(int a, int b) {
	big += 10;
	a += 2;
	b += 4;
}

void padd(int* a, int* b) {
	big2 += 10;
	*a += 2;
	*b += 4;
}