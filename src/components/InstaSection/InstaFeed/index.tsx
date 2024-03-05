import { useEffect, useState } from 'react';

import { Image } from '@autrm/common/components/image';

import { GridStyled, GridWrapperStyled, ImageWrapperStyled } from './styled';
import type { InstaFeedProps, InstaItem } from './types';

function InstaGrid({ items }: InstaFeedProps) {
  const images = items.map((item, key) => (
    <ImageWrapperStyled key={key}>
      <Image src={item.medialUrl} />
    </ImageWrapperStyled>
  ));

  return (
    <GridWrapperStyled>
      <GridStyled>{images.length ? images : 'No images'}</GridStyled>
    </GridWrapperStyled>
  );
}

export function InstaFeed() {
  const [instaItems, setInstaItems] = useState<InstaItem[]>([]);

  const instaUserId = process.env.REACT_APP_INSTA_USER_ID;
  const instaToken = process.env.REACT_APP_INSTA_ACCESS_TOKEN;
  const instaUrl = `https://graph.instagram.com/me/media?fields=id,caption&access_token=${instaToken}`;

  useEffect(() => {
    const fetchMedia = async (id: string) => {
      const mediaUrl = `https://graph.instagram.com/${id}?fields=id,media_type,media_url&access_token=${instaToken}`;

      const res = await fetch(mediaUrl);
      const json = await res.json();

      const instaItem: InstaItem = {
        id: json.id,
        mediaType: json.media_type,
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
      if (res.status !== 200) return;
      const json = (await res.json()).data;
      if (!json) return;

      const fetchedItems: InstaItem[] = [];
      let i = 0;
      let pos = 0;
      while (i < json.length && pos < 6) {
        const item = json[i];
        const itemId = item.id;

        const instaItem = await fetchMedia(itemId);
        if (instaItem.mediaType !== 'VIDEO') {
          fetchedItems.push(instaItem);
          pos++;
        }
        i++;
      }

      setInstaItems(fetchedItems);
    };

    fetchItems();
  }, [instaUserId, instaToken, instaUrl]);

  return <InstaGrid items={instaItems} />;
}
