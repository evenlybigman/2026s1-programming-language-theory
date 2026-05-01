# 과제 3: 김주혁



---



## Claude Code 결과



1. 코드의 문제점

```script
 1. main 함수가 없음 — 코드가 함수 밖에 작성돼 있어 컴파일 불가
 2. 헤더 파일 누락 — printf, strcpy 사용을 위해 #include <stdio.h>, #include <string.h> 필요
 3. A, D 미정의 — i = A와 d = D에서 A, D가 #define되지 않음 (아마 N, PI를 쓰려고 했던 것 같음)
```



2. 수정 코드

```c
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
```



3. 실행 결과

![image-20260502003620666](C:\Users\evenl\AppData\Roaming\Typora\typora-user-images\image-20260502003620666.png)



---



## Gemini CLI 결과





1. 코드의 문제점

```script
1. 함수 누락: C 언어에서 실행 코드는 반드시 main 함수와 같은 함수 내부에 위치해야 합니다. 현재는 선언과 실행 코드가 모두 전역 범위에 있습니다.
2. 헤더 누락: printf와 strcpy를 사용하려면 각각 #include <stdio.h>와 #include <string.h>가 필요합니다.
3. 정의되지 않은 식별자: i = A;와 d = D;에서 A와 D가 정의되어 있지 않습니다. (아마도 상단에 #define A 100과 같은 정의가 필요해 보입니다.)
4. 문법 오류: C 언어에서는 전역 범위에서 변수에 값을 할당(i = A; 등)하거나 함수(strcpy, printf)를 호출할 수 없습니다.
```



2. 수정 코드

```c
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
```





3. 실행 결과

![image-20260502003948553](C:\Users\evenl\AppData\Roaming\Typora\typora-user-images\image-20260502003948553.png)

