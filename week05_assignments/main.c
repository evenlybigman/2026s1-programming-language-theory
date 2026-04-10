#include <stdio.h>
double calcTriangleArea(int base,int height);
double calcRectangleArea(int width,int height);

int main(){
	//변수 선언
	int a, b;
	double triArea,recArea;
	//2개의 정수를 입력받음
	printf("input width: ");
	scanf("%d",&a);
	printf("input height: ");
	scanf("%d",&b);
	//넓이 계산 후 출력
	triArea = calcTriangleArea(a,b);
	recArea = calcRectangleArea(a,b);
	printf("삼각형 면적 = %.1lf\n",triArea);
	printf("사각형 면적 = %.1lf\n",recArea);
}
