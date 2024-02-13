import { useEffect, useState } from 'react';

export type InstaItem = {
  permalink: string;
  medialUrl: string;
};

export type InstaFeedProps = {
  items: InstaItem[];
};

export function InstaGrid({ items }: InstaFeedProps) {
  return (
    <div>
      {items.map((item) => (
        <img src={item.medialUrl} />
      ))}
    </div>
  );
}

export function InstaFeed() {
  const [instaItems, setInstaItems] = useState<InstaItem[]>([]);

  const instaUserId = '';
  const instaToken = '';
  const instaUrl = `https://graph.instagram.com/${instaUserId}/media?access_token=${instaItems}`;

  useEffect(() => {
    const fetchMedia = async (id: string) => {
      const mediaUrl = `https://graph.instagam.com/${id}?access_token=${instaToken}&fields=media_url,permalink`;

      const res = await fetch(mediaUrl);
      const json = await res.json();

      const instaItem: InstaItem = {
        permalink: json.permalink,
        medialUrl: json.media_url,
      };

      return instaItem;
    };

    const fetchItems = async () => {
      if (!instaUserId || !instaToken) {
        console.log('userId or accessToken is undefined');

        return;
      }

      const res = await fetch(instaUrl);
      const json = (await res.json()).data;

      const fetchedItems: InstaItem[] = [];
      for (let i = 0; i < json.length && i < 9; i++) {
        const item = json[i];
        const itemId = item.id;
        const instaItem = await fetchMedia(itemId);
        fetchedItems.push(instaItem);
      }

      setInstaItems(fetchedItems);
    };

    fetchItems();
  }, [instaUserId, instaToken, instaUrl]);

  return <InstaGrid items={instaItems} />;
}
