import { Col, Container, Row } from '@autrm/common/components/grid';
import { Image } from '@autrm/common/components/image';
import { useEffect, useState } from 'react';
import { ImageWrapperStyled, SectionStyled } from './styled';

export type InstaItem = {
  id: string;
  medialUrl: string;
};

export type InstaFeedProps = {
  items: InstaItem[];
};

export function InstaGrid({ items }: InstaFeedProps) {
  return (
    <SectionStyled>
      <Container>
        <Row>
          {items.map((item, key) => (
            <Col
              key={key}
              lg={2}
              md={4}
            >
              <ImageWrapperStyled>
                <Image src={item.medialUrl} />
              </ImageWrapperStyled>
            </Col>
          ))}
        </Row>
      </Container>
    </SectionStyled>
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
      for (let i = 0; i < json.length && i < 12; i++) {
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
