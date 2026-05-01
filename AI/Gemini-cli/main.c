#include <stdio.h>
#include <string.h>

#define N 100
#define PI 3.14
#define C 'K'
#define STR "HANSUNG"

int main() {
    int i;
    double d;
    char c;
    char str[256];

    // 기존 코드에서 정의되지 않았던 A와 D를 N과 PI로 대체하거나 새로 정의합니다.
    // 여기서는 N과 PI를 사용하는 것으로 수정합니다.
    i = N;
    d = PI;
    c = C;
    
    strcpy(str, STR);

    printf("i = %d\n", i);
    printf("d = %lf\n", d);
    printf("c = %c\n", c);
    printf("c = %d\n", c);
    printf("str = %s\n", str);
    printf("김주혁\n");

    return 0;
}
