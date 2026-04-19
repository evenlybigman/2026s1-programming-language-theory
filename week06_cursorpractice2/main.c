#include <stdio.h>

#define MAX_STUDENTS 100

typedef struct {
    char name[50];
    int age;
    char grade; // 'A' ~ 'F'
} Student;

// 숫자(90~100: A, 80~89: B, ...), 또는 문자(A~F/a~f)를 받아 등급으로 변환
char get_grade() {
    char input[20];
    int num;
    char grade_char;
    printf("성적 등급 또는 점수를 입력하세요 (A~F 혹은 0~100): ");

    // 반복하여 잘못된 입력이면 계속 입력받게 함
    while (1) {
        if (scanf("%s", input) != 1)
            continue;

        // 숫자로 해석 가능한지 확인
        if (sscanf(input, "%d", &num) == 1) {
            if (num >= 0 && num <= 100) {
                if (num >= 90)
                    return 'A';
                else if (num >= 80)
                    return 'B';
                else if (num >= 70)
                    return 'C';
                else if (num >= 60)
                    return 'D';
                else if (num >= 50)
                    return 'E';
                else
                    return 'F';
            } else {
                printf("0~100 사이의 점수 또는 A~F 등급을 입력하세요: ");
                continue;
            }
        }
        // 문자인 경우
        grade_char = input[0];
        // 소문자면 대문자로
        if (grade_char >= 'a' && grade_char <= 'f')
            grade_char = grade_char - 'a' + 'A';
        // 정확히 A~F만 허용
        if (grade_char >= 'A' && grade_char <= 'F' && input[1] == '\0') {
            return grade_char;
        } else {
            printf("0~100 사이의 점수 또는 A~F 등급을 입력하세요: ");
            continue;
        }
    }
}

int main(void) {
    int n;
    Student students[MAX_STUDENTS];

    printf("학생 수를 입력하세요: ");
    if (scanf("%d", &n) != 1 || n <= 0 || n > MAX_STUDENTS) {
        printf("유효한 학생 수를 입력하세요 (1 ~ %d).\n", MAX_STUDENTS);
        return 1;
    }

    for (int i = 0; i < n; i++) {
        printf("\n%d번째 학생의 이름을 입력하세요: ", i + 1);
        scanf("%s", students[i].name);

        printf("%d번째 학생의 나이를 입력하세요: ", i + 1);
        scanf("%d", &students[i].age);

        students[i].grade = get_grade();
    }

    printf("\n입력한 학생 정보:\n");
    for (int i = 0; i < n; i++) {
        printf("이름: %s, 나이: %d, 성적 등급: %c\n", students[i].name, students[i].age, students[i].grade);
    }

    return 0;
}