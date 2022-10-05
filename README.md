# Readme

## 공유 내용

### linting 관련

#### prettier

    포매팅 규칙은 그냥 인터넷에서 아무거나 긁어왔습니다. ㅎ

#### stylelint

    stylelint는 커밋시에 순서를 자동으로 정렬하도록 해놨어요. 저도 처음 세팅해보는거라 룰이 어떤게 있고 뭘 맞춰야하는지 감이 잘 안잡히네용.
    이것도 그냥 인터넷에서 있으면 좋을 것 같은것을 아~~주 대~~~충 끍어왔습니다.

#### eslint

    rule은 최소한으로 적용해놨습니다.

    현재 적용된 플러그인은
        - 유~명한 airbnb rule
        - import 구문 정렬
        이 있고,
    세부적은 rule은 .eslintrc를 봐주세용

    처음부터 모두 적용하려면 조금 이야기할 것이 많아지므로 조금씩 추가하는 방향으로 가면 좋을 것 같습니당

#### commit

    git commit을 터미널에 치면
    1) staging된 파일들에 대한 linting(eslint) 진행. 및 prettier로 fix
    2) commitizen에 의해 commit 메시지 생성 cli 실행
    3) commitlint에 의해 commit msg 린팅

    순으로 진행이 됩니다.

    저도 완벽하게 알지는 못하지만 git-hook을 검색하셔서 관련 정보 보시면 될 것 같습니다. 설정 방법은 👇 참고에 달아놨습니다.

### import 관련

```javascript
import ExampleComponent from '@components/common/ExampleComponent';
```

임포트시 프로젝트 내부의 파일 `@`를 붙여서 절대경로로 가져와주세요.

`경로는 tsconfig.path.json에 설정되어 있습니다. 필요시 수정해주세요.`

---

#### 참고

[husky, lint-staged, commitizen, commitlint를 이용한 commit시 코드 린팅/커밋 메시지 통일](https://jamesandrewwright.com/articles/commitizen-eslint-prettier-husky/)

[fontawesome 사용법](https://www.daleseo.com/react-font-awesome/)
