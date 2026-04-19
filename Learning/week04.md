# Week4 1day report



## Editor

- 언어 감지 편집기
  - Visual Studio editer
  - Visual Studio Code
  - vi, vim, ...
- vi, vim
  - 2개의 모드 : 명령 모드, 편집 모드
  - 시작할 때 -> 명령 모드
  - 'esc' key: 편집 모드 -> 명령 모드
- vi 명령어들: 명령 모드에서만 동작
  - a  붙이기, 커서 다음 위치부터 입력
  - i  삽입, 커서 위치부터 입력
  - :w 파일 저장
  - :q vi editor 종료
  - cw 단어 변경
  - dw 단어 삭제



## Translator

- 컴파일러 (고급언어 -> 기계어)
- 전처리기
  - 컴파일 하기 전에 소스 코드를 변환
  - 매크로 치환
- Interpreter
  - 문장 하나씩 번역 -> 실행
  - 컴파일 방식 언어보다 실행 속도가 느림
  - 효율적 기억장소 관리가 어려움
  - 융통성 있는 프로그래밍



## Linker

- 목적 프로그램들을 연결
  - 표준 라이브러리 함수를 위한 코드
  - OS가 제공하는 리소스
- 분리된 모듈을 통합
  - 외부 함수
  - 외부 변수
- 실행 가능한 코드 생성
- 모듈러 프로그래밍 지원

## Loader

- 모든 기본 주소에 상대적인 재배치 가능한 주소를 결정
- 적재 과정
  - behind the scenes (by OS)



## Debugger

- 프로그램에 있는 논리적 에러를 찾음
- 기능
  - 추적
  - 중단점
  - 조사식
- Visual studio's debugger
  - F9: 중단점 설정/해제
  - F5: 디버깅 시작
  - F10: step over
  - F11: step into
  - shift + F5: 디버깅 중지
  - Watch: 변수 값을 보여줌
  - Call stack: 함수의 호출 순서를 보여줌
- GDB
  - UNIX 시스템에서의 debugger
  - -g 옵션을 적용하여 컴파일

## Configuration Tool

- 모듈의 생성 변화를 추적
- 실행 파일의 생성을 관리
- 예: Visual Studio의 project
- UNIX 시스템에서의 구성 도구: make
- 프로그램 파일들 간의 종속성 관리

## Visual Studio

- Microsoft사가 개발한 통합 개발 환경(IDE)
- 특징
  - 문법을 알려주고 자동 완성 기능을 제공하는 편집기
  - 디버거
  - 컴파일러
  - 프로젝트 관리
  - 코드 생성 마법사
  - 기타 다른 도구들

## .NET Framework

- What
  - 여러 프로그래밍 언어 개발 호나경
  - Microsoft Windows 운영체제의 일부
- 기능
  - 라이브러리 제공: 공통의 프로그램 문제에 대한 코딩된 해결 방법을 포함
  - .NET framework를 위해 작성된 프로그램의 실행 관리
- 구성 요소
  - Base Class Library
  - 공용 언어 런타임
  - New programming Language
  - 공용 언어 명세

## Eclipse

- What
  - Java 언어를 이용한 소프트 웨어 개발 환경
  - Java development environment(JDE) + plug-in
- Open source

## UNIX 환경에서의 프로그램 개발

- 소스 프로그램 작성
- 컴파일
  - options: -c, -o, -g
- 실행
- 디버깅