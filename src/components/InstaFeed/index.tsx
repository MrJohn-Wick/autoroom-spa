import InstaIcon from '@autrm/assets/icons/instagram.svg';
import { Button } from '@autrm/common/components/button';
import { Col, Container, Row } from '@autrm/common/components/grid';
import { Image } from '@autrm/common/components/image';
import { SVGIcon } from '@autrm/common/components/svg-icon';
import { HeadingLevel2 } from '@autrm/common/tokens/typography';
import { useEffect, useState } from 'react';
import { FollowStyled, ImageWrapperStyled, SectionStyled, TitleStyled } from './styled';

export type InstaItem = {
  id: string;
  mediaType: string;
  medialUrl: string;
};

export type InstaFeedProps = {
  items: InstaItem[];
};

export function InstaGrid({ items }: InstaFeedProps) {
  const images = items.map((item, key) => (
    <Col
      key={key}
      lg={2}
      md={4}
    >
      <ImageWrapperStyled>
        <Image src={item.medialUrl} />
      </ImageWrapperStyled>
    </Col>
  ));

  return (
    <SectionStyled>
      <Container>
        <Row>
          <Col>
            <TitleStyled>
              <HeadingLevel2>Наш Instagram</HeadingLevel2>
              <p>
                Следите за нашим Instagram, чтобы узнать о последних поступлениях автомобилей из США
                и специальных предложениях!
              </p>
            </TitleStyled>
          </Col>
        </Row>
        <Row>{images.length ? images : 'No images'}</Row>
        <Row>
          <Col>
            <FollowStyled>
              <a href="https://instagram.com">
                <Button>
                  <SVGIcon
                    type={InstaIcon}
                    sizes={{
                      w: '15px',
                      h: '15px',
                    }}
                  />
                  <span>Подписывайся</span>
                </Button>
              </a>
            </FollowStyled>
          </Col>
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
      const json = (await res.json()).data;
      if (!json) return;

      const fetchedItems: InstaItem[] = [];
      let i = 0;
      while (i < json.length && i < 12) {
        const item = json[i];
        const itemId = item.id;

        const instaItem = await fetchMedia(itemId);
        if (instaItem.mediaType !== 'VIDEO') {
          fetchedItems.push(instaItem);
        }
        i++;
      }

      setInstaItems(fetchedItems);
    };

    fetchItems();
  }, [instaUserId, instaToken, instaUrl]);

  return <InstaGrid items={instaItems} />;
}
