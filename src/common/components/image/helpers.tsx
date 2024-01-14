import React from 'react';

import type { ImageSrcSetProps } from '../../types/images';
import { buildKey } from '../../utils/common';

const buildSourceAttrs = ({
  src,
  rule,
  media,
  type,
}: {
  src: string;
  rule: string;
  media: string;
  type: string;
}) => ({
  srcSet: `${src} ${rule || ''}`,
  ...(media
    ? {
        media,
      }
    : {}),
  ...(type
    ? {
        type,
      }
    : {}),
});

export function getImageSources(srcSet: ImageSrcSetProps[] = []): JSX.Element[] | undefined {
  return srcSet.map(({ src, media = '', rule = '', type = '' }, i) => {
    const sourceAttrs = buildSourceAttrs({
      src,
      media,
      rule,
      type,
    });

    return (
      <source
        {...sourceAttrs}
        key={buildKey(src, i)}
      />
    );
  });
}
