# GEMINI CLI 활용

## 코드 요청

### c언어를 이용해서 week07폴더를 만들고 버블 정렬 함수를 만들어줘.

``` c
#include <stdio.h>

void bubbleSort(int arr[], int n) {
    int i, j, temp;
    for (i = 0; i < n - 1; i++) {
        for (j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                // Swap arr[j] and arr[j+1]
                temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
}

void printArray(int arr[], int size) {
    int i;
    for (i = 0; i < size; i++)
        printf("%d ", arr[i]);
    printf("\n");
}

int main() {
    int arr[] = {64, 34, 25, 12, 22, 11, 90};
    int n = sizeof(arr) / sizeof(arr[0]);
    printf("원본 배열: ");
    printArray(arr, n);

    bubbleSort(arr, n);

    printf("정렬 배열: ");
    printArray(arr, n);
    return 0;
}

```

### sort_function.c에 대해서 설명해줘

`week07/sort_function.c` 코드는 **버블 정렬(Bubble Sort)** 알고리즘을 사용하여 배열을 오름차순으로 정렬하는 예제입니다.

### 주요 구성 요소 설명

1.  **`bubbleSort(int arr[], int n)` 함수**:
    *   **핵심 로직**: 인접한 두 원소를 비교하여 왼쪽 원소가 더 크면 서로 자리를 바꿉니다.
    *   **중첩 루프**:
        *   바깥쪽 루프(`i`): 정렬이 완료될 때마다 가장 큰 값이 맨 뒤로 이동하므로, 비교 범위를 하나씩 줄여나갑니다.
        *   안쪽 루프(`j`): 인접한 원소들을 일일이 비교합니다.
    *   **Swap (교환)**: `temp` 변수를 활용해 두 값의 위치를 바꿉니다.

2.  **`printArray(int arr[], int size)` 함수**:
    *   배열의 모든 원소를 순회하며 화면에 출력하는 보조 함수입니다.

3.  **`main()` 함수**:
    *   `int arr[] = {64, 34, ...}`: 정렬할 초기 배열을 선언합니다.
    *   `int n = sizeof(arr) / sizeof(arr[0])`: 배열의 전체 크기를 자료형 크기로 나누어 **배열 원소의 개수**를 계산하는 흔한 C 언어 기법입니다.
    *   함수 호출을 통해 정렬 전과 후의 결과를 출력합니다.

### 실행 흐름
이 코드를 실행하면 큰 숫자가 마치 거품(Bubble)이 올라오듯 배열의 뒤쪽으로 차례대로 밀려나며, 최종적으로 `{11, 12, 22, 25, 34, 64, 90}` 순서로 정렬된 결과를 보여줍니다.



## 자료 검색

### C언어 문자열에 대해서 설명해줘.

C 언어에서 **문자열(String)**은 별도의 전용 데이터 타입이 아니라, **`char`형 배열**의 형태로 취급됩니다. 가장 중요한 특징은 문자열의 끝을 알리는 **널 문자(`\0`)**가 반드시 포함되어야 한다는 점입니다.

### 1. 기본 개념
*   **널 문자 (`\0`)**: 문자열의 끝을 표시하는 특수 문자입니다. 이 문자가 있어야 `printf`나 `strlen` 같은 함수가 "아, 여기서 문자열이 끝나는구나"라고 판단합니다.
*   **배열 크기**: "Hello"라는 5글자 문자열을 저장하려면, 널 문자를 포함해 최소 **6바이트**의 공간이 필요합니다.

### 2. 선언과 초기화
두 가지 방식이 주로 사용됩니다.

```c
char str1[] = "Hello";        // 배열 방식: 내용을 수정할 수 있음
char *str2 = "Hello";         // 포인터 방식: 문자열 리터럴을 가리킴 (수정 시 에러 발생 가능)
```

### 3. 주요 특징
*   **인덱스 접근**: `str1[0]`은 'H', `str1[1]`은 'e'와 같이 배열처럼 각 문자에 접근할 수 있습니다.
*   **수정 가능성**: `str1[0] = 'M';`을 수행하면 "Mello"가 되지만, 포인터로 선언한 `str2`는 읽기 전용 영역을 가리키는 경우가 많아 수정 시 주의해야 합니다.

### 4. 자주 쓰는 문자열 함수 (`<string.h>` 필요)
C 언어는 문자열을 직접 비교(`==`)하거나 대입(`=`)할 수 없으므로 표준 함수를 사용해야 합니다.

*   **`strlen(str)`**: 문자열의 길이를 반환 (널 문자 제외).
*   **`strcpy(dest, src)`**: 문자열 복사. (`dest = src`와 같은 대입이 불가능하기 때문)
*   **`strcmp(s1, s2)`**: 두 문자열 비교 (같으면 0 반환).
*   **`strcat(dest, src)`**: 문자열 뒤에 다른 문자열을 이어 붙임.

### 5. 간단한 예시
```c
#include <stdio.h>
#include <string.h>

int main() {
    char greeting[20] = "Hello";
    
    strcat(greeting, " World!"); // "Hello World!" 생성
    
    printf("내용: %s\n", greeting);
    printf("길이: %zu\n", strlen(greeting)); // 12 출력
    
    return 0;
}
```

**요약하자면:** C 언어의 문자열은 **'널 문자로 끝나는 문자의 배열'**이며, 이를 다루기 위해서는 직접 배열을 조작하거나 `string.h`의 함수들을 활용해야 합니다.