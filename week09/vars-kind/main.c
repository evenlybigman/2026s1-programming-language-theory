#include <stdio.h>
#include <stdlib.h>

double a, b, c, d;

void func();

int main() {
	func();
}

void func() {
	int i;
	int* ip;

	a = 10.1;
	b = 10;
	ip = (int*)malloc(sizeof(int));
	*ip = 10;
}