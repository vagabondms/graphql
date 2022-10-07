import type { Media } from './resource';
import type { User } from './user';

/**
 * 기본적으로 모든 filed를 선언을 해놓고
 * Omit<Post, 'id','likeCount'>
 * Pick<Post, 'isUpdated','medias'>
 * 같은 식으로 사용하는게 편할 것 같습니당
 */

type Post = {
  author: User;
  commentCount: number;
  comments: Comment[];
  description: string;
  id: string;
  isLike: boolean;
  isMine: boolean;
  isUpdated: boolean;
  lastModifiedAt: string;
  likeCount: number;
  likeMembers: User[];
  medias: Media[];
};

type ItemType = 'Post' | 'Comment';

type Comment = {
  author: User;
  createdAt: string;
  description: string;
  id: string;
  isLike: boolean;
  isMine: boolean;
  likeCount: number;
  likeMembers: User[];
  subCommentCount: number;
};

export type { Post, Comment, ItemType };
