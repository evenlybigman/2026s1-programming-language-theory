#include <stdio.h>
double calcTriangleArea(int width,int height); //삼각형 계산 함수 선언
double calcRectangleArea(int width,int height); //사각형 계산 함수 선언

int main(){
        //변수 선언
        int a, b; // 사용자의 입력을 저장할 a,b 선언
        double triArea, recArea; // 각각의 넓이 값을 저장할 double 변수 선언

        //2개의 정수를 입력받음
        printf("a와 b의 길이 입력: ");
        scanf("%d%d",&a, &b); // a와 b의 값을 입력 받음

        //넓이 계산 후 출력
        triArea = calcTriangleArea(a,b); // 삼각형의 넓이 계산
        recArea = calcRectangleArea(a,b); // 사각형의 넓이 계산
        printf("삼각형 면적 = %.1lf\n",triArea); //삼각형 면적 출력
        printf("사각형 면적 = %.1lf\n",recArea); //사각형 면적 출력

        return 0;
}
