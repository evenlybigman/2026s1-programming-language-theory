#include <stdio.h>

extern int big;
extern int big2;
extern int big3;

void add(int a, int b) {
	big += 10;
	a += 2;
	b += 4;
}

void add2(int* a, int* b) {
	big2 += 10;
	*a += 2;
	*b += 4;
}

void add3(int& a, int& b) {
	big3 += 10;
	a += 2;
	b += 4;
}