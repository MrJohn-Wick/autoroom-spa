import { ImageStyled, ImageStyledWrapper } from './styled';
import type { ImageAtomComponentProps } from './types';

/**
 * @param src - string
 * @param fallbackSrc - string; alternative source of src image
 * @param alt - string | optional prop
 * @param caption - string | title text
 * @param width - number | optional prop
 * @param height - number | optional prop
 * @param maxHeight - number | optional prop
 * @param decorative - boolean | optional prop | default - false
 * @param draggable - boolean | optional prop | default - false
 * @param onError - function | work when image didn't load. Error case is result return default image.
 * @param displayPopupTitle - boolean | When checked, the caption won't be
 * displayed below the image, but as a pop-up displayed by some browsers when hovering over the image.
 * @returns JSX.Element | null
 */
export function Image(props: ImageAtomComponentProps): JSX.Element | null {
  const {
    src = '',
    alt = '',
    caption = '',
    width = '100%',
    height = 'auto',
    maxHeight = 'none',
    isFullHeight = true,
    decorative = false,
    draggable = false,
    role,
    displayPopupTitle = false,
    aspectRatio,
    objectFit,
    onError,
    placeholderComponent,
    ...rest
  } = props;

  const titleRole = displayPopupTitle &&
    caption && {
      title: caption,
    };

  return (
    <ImageStyledWrapper
      isFullHeight={isFullHeight}
      {...rest}
    >
      <ImageStyled
        {...titleRole}
        {...(role && {
          role,
        })}
        src={src}
        alt={(!decorative && alt) || ''}
        width={width}
        height={height}
        maxHeight={maxHeight}
        draggable={draggable}
        aspectRatio={aspectRatio}
        objectFit={objectFit}
      />
      {!displayPopupTitle && caption && <p>{caption}</p>}
    </ImageStyledWrapper>
  );
}

Image.displayName = 'Image';
