# 5주차 1 day report



### 컴파일 - gcc

- gcc 설치
  - sudo  apt-get update
  - sudo apt-get install gcc
- 실행 파일 만들기
  - gcc hello.c -> a.out
  - 실행:- ./a.out
- 목적 파일 만들기
  - gcc -c hello.c -> hello.c
- 원하는 이름으로 실행 파일 만들기
  - gcc -o hello hello.c -> hello
  - ./hello
- 디버그 가능하고 원하는 이름으로 실행 파일 만들기
  -  gcc -g -o hello hello.c -> hello

### 디버깅 - gdb

- gdb hello
  - gcc -g -o hello helo.c
- 명령
  - run (r), list (l), break (b), clear, next (n), step (s), print (p), cont (c)

### 구성도구 - make

- 프로그램 파일들 간의 종속성 관리
- makefile 작성

---

### C File I/O

1. FILE *infile, *outfile;

   - file을 다루기 위해 file을 가리키는 포인터 필요

   - 입력 파일용 infile, 출력 파일용 outfile

2. infile = fopen("file_name", "r"); out file = fopen("file_name", "w");
   - 파일을 다루기 위해서는 사용하기 전에 open

3. r - fscanf(infile, "%d", &i); fscanf(infile, ""%lf", &d); fscanf(infile, "%s", string);

   - infile에서 값을 하나 읽어 val에 저장 (공백으로 구분)

   - int i; double d; char str[2];

4. w - fprintf(outfile, "val = %d\n",i);
   - outfile에 출력

5. fclose(infile); fclose(outfile)
   - file 닫기

