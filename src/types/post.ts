import type { Media } from './resource';
import type { User } from './user';

/**
 * 기본적으로 모든 filed를 선언을 해놓고
 * Omit<Post, 'id','likeCount'>
 * Pick<Post, 'isUpdated','medias'>
 * 같은 식으로 사용하는게 편할 것 같습니당
 */

type Post = {
  id: string;
  author: User;
  isMine: boolean;
  isUpdated: boolean;
  medias: Media[];
  description: string;
  isLike: boolean;
  likeCount: number;
  likeMembers: User[];
  commentCount: number;
  comments: Comment[];
  lastModifiedAt: string;
};

type ItemType = 'Post' | 'Comment';

type Comment = {
  id: string;
  author: User;
  isMine: boolean;
  description: string;
  isLike: boolean;
  likeCount: number;
  likeMembers: User[];
  subCommentCount: number;
  createdAt: string;
};

export type { Post, Comment, ItemType };
