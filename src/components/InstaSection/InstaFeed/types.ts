export type InstaItem = {
  id: string;
  mediaType: string;
  medialUrl: string;
};

export type InstaFeedProps = {
  items: InstaItem[];
};
