type Media = {
  type: MediaType;
  src: string;
  width: number;
  height: number;
};

type MediaType = 'Image' | 'Video';

export type { Media };
