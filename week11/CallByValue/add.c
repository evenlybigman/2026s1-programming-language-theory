#include <stdio.h>

extern int big;

void add(int a, int b) {
	big += 10;
	a += 2;
	b += 4;
}