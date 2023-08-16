# 원티드 프리온보딩 백엔드 인턴십 - 선발 과제
<br></br>
### 1. 과제 제출 필수 사항

- 지원자의 성명
    - 박세진
- 애플리케이션의 실행 방법 (엔드포인트 호출 방법 포함)
  
  ```
  nodemon app.ts
  ```
  
- 데이터베이스 테이블 구조
    - DataBase명: wanted_internship<br/>
    ![DB_테이블구조](https://github.com/cobaltcyan/wanted-pre-onboarding-backend/assets/113007798/b5e8aa4b-e541-45d7-a06b-13167ca2abfc)

- 구현한 API의 동작을 촬영한 데모 영상 링크
    - https://drive.google.com/drive/folders/1-bokMt81WxAnd1GGU4pOf_5u0Cfkw6Hk?usp=sharing
- 구현 방법 및 이유에 대한 간략한 설명
    - JavaScript(TypeScript)/Express 으로 하되, DB는 MySQL 8.0 을 이용하고, ORM은 prisma 으로 선택하였습니다.
    - TypeScript 의 정적 타입 체크와 강력한 타입 시스템을 이용하여 코드의 안정성을 향상시킬 수 있고, 유지보수를 용이하게 만들어 줄 수 있습니다. 또한 현업에서 TypeScript 를 기본으로 다룰 줄 알아야 경쟁력 있는 개발자가 될 수 있다고 알고 있어 이번 사전과제에서는 TypeScript 를 기반으로 기능 구현하였습니다.
    - Prisma는 TypeScript 및 JavaScript 개발을 위한 현대적인 ORM(Object-Relational Mapping) 라이브러리로, 데이터베이스와의 상호 작용을 더 간편하고 안전하게 만들어 줍니다. Prisma를 사용하면 SQL 쿼리를 직접 작성하지 않고도 타입 안전성과 간편한 데이터베이스 접근을 얻을 수 있습니다. Prisma의 코드 생성 기능을 통해 데이터베이스 스키마를 TypeScript 타입으로 자동 변환하므로, 타입 일치성을 유지하면서 데이터베이스 작업을 수행할 수 있습니다. 하여 직접 쿼리문을 사용할 수도 있지만, 현업에서도 간단한 쿼리 구문의 경우 ORM을 사용하는 것이 비용을 줄일 수 있다고 알고 있습니다.

- API 명세(request/response 포함)
    - swagger 문서 참조 : http://localhost:5000/api-docs/
- 과제 제출은 참가 신청 시 수행한 과제의 레포지토리 주소를 제출하면 됩니다.
    - 제출하였습니다.
<br></br>
### 2. API 요구 사항
**JavaScript(TypeScript)/Express 선택** <br />

- **과제 1. 사용자 회원가입 엔드포인트**
    - 이메일과 비밀번호로 회원가입할 수 있는 엔드포인트를 구현해 주세요.
    - 이메일과 비밀번호에 대한 유효성 검사를 구현해 주세요.
        - 이메일 조건: **@** 포함
        - 비밀번호 조건: 8자 이상
        - 비밀번호는 반드시 암호화하여 저장해 주세요.
        - 이메일과 비밀번호의 유효성 검사는 위의 조건만으로 진행해 주세요. 추가적인 유효성 검사 조건은 포함하지 마세요.
- **과제 2. 사용자 로그인 엔드포인트**
    - 사용자가 올바른 이메일과 비밀번호를 제공하면, 사용자 인증을 거친 후에 JWT(JSON Web Token)를 생성하여 사용자에게 반환하도록 해주세요.
    - 과제 1과 마찬가지로 회원가입 엔드포인트에 이메일과 비밀번호의 유효성 검사기능을 구현해주세요.
- **과제 3. 새로운 게시글을 생성하는 엔드포인트**
- **과제 4. 게시글 목록을 조회하는 엔드포인트**
    - 반드시 Pagination 기능을 구현해 주세요.
- **과제 5. 특정 게시글을 조회하는 엔드포인트**
    - 게시글의 ID를 받아 해당 게시글을 조회하는 엔드포인트를 구현해 주세요.
- **과제 6. 특정 게시글을 수정하는 엔드포인트**
    - 게시글의 ID와 수정 내용을 받아 해당 게시글을 수정하는 엔드포인트를 구현해 주세요.
    - 게시글을 수정할 수 있는 사용자는 게시글 작성자만이어야 합니다.
- **과제 7. 특정 게시글을 삭제하는 엔드포인트**
    - 게시글의 ID를 받아 해당 게시글을 삭제하는 엔드포인트를 구현해 주세요.
    - 게시글을 삭제할 수 있는 사용자는 게시글 작성자만이어야 합니다.
