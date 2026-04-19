#include <stdio.h>

#define MAX_NUMS 1000

// 정수 배열�을 구하는 함수
double average(int arr[], int size) {
    if (size == 0) return 0.0; // 크기가 0일 때는 0.0 반환
    int sum = 0;
    for (int i = 0; i < size; i++) {
        sum += arr[i];
    }
    return (double)sum / size;
}

int main(void) {
    int list[MAX_NUMS];
    int size = 0;
    int value;

    printf("정수를 입력하세요 (입력 종료: Windows에서는 Ctrl+Z 후 Enter):\n");
    while (size < MAX_NUMS && scanf("%d", &value) == 1) {
        list[size++] = value;
    }

    if (size == 0) {
        printf("입력된 값이 없습니다. 평균을 계산할 수 없습니다.\n");
        return 0;
    }

    printf("평균은 %.2f입니다\n", average(list, size));
    return 0;
}