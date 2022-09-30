import type { Post } from './post';

type User = {
  id: string /* unique Id */;
  email: string;
  isMe: Boolean;
  name: string /* 이름 */;
  nickname: string /* 닉네임 */;
  profileImage: string /* 프로필 사진 */;
  quotes: string /* 자기소개 문구 */;
  postCount: number;
  posts: Post[];
};

export type { User };
