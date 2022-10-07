import type { Post } from './post';

type User = {
  email: string;
  id: string /* unique Id */;
  isMe: Boolean;
  name: string /* 이름 */;
  nickname: string /* 닉네임 */;
  postCount: number;
  posts: Post[];
  profileImage: string /* 프로필 사진 */;
  quotes: string /* 자기소개 문구 */;
};

export type { User };
