공통 컴포넌트와 그 외의 컴포넌트들을 정의하면 될 것 같습니다.

공통 컴포넌트는 feed/, user/ 등에서 사용하는 컴포넌트구요.

#### feed/, user/라고 하는 분류는 graphql schema에 따르면 될 것 같습니다. (확실하진 않습니다.)

조금 부연 설명을 드리자면,

```graphql
type User {
 id: ID! /* unique Id*/
 email: String!
 isMe: Boolean!
 name: String! /* 이름 */
 nickname: String! /*닉네임*/
 profileImage: String /* 프로필 사진 */
 quotes: String /* 자기소개 문구 */
 postCount: Int
 posts(lastId: ID, size: Int): [Post] /* 작성한 글 목록 */
}

/* 게시물 정보 */
type Post {
 id: ID!
 author: User!
 isMine: Boolean!
 isUpdated : Boolean!
 medias: [Media]!
 description: String
 isLike : Boolean!
 likeCount : Int
 likeMembers(lastId: ID, size: Int): [User]
 commentCount: Int
 comments(lastId: ID, size: Int): [Comment]
 lastModifiedAt: Date
}

/* 댓글 정보 */
type Comment {
 id: ID!
 author: User!
 isMine: Boolean!
 description: String!
 isLike : Boolean!
 likeCount : Int
 likeMembers(lastId: ID, size: Int): [User]
 subCommentCount: Int
 createdAt: Date!
}
```

우리는 위와 같은 type들이 정의되어 있죠 해당 타입에 대응하는 컴포넌트를 만드는거에요.

예를 들어 User Component를 만드는겁니다.

유저에게 보여지는 부분이 Profile과 Email, PostCount라면 다음과 같은 컴포넌트가 작성되겠죠.

```jsx
<User props={user}>
  <User.Profile />
  <User.Email />
  <User.PostCount />
</User>
```

만약 Profile 이미지가 사각인 것과 원형인 것이 따로 나눠져있다면?

```jsx
<User props={user}>
  <User.RoundProfile /> // <User.SquareProfile /> <- User의 하위 컴포넌트에 두 각 Profile에 대응하는 두가지 컴포넌트가 생성되었습니다.
  <User.Email />
  <User.PostCount />
</User>
```
