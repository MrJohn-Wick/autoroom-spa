import React, { SyntheticEvent, useCallback } from 'react';

import { noop } from '../../utils/common';

import { SVGIconStyled } from './SvgIconStyled';
import { SVG } from './svgInline';
import { TIconProps } from './types';

/**
 * SVG Component
 * @param type - Type of Icons from Folder 'Assets'; Default value: 'EmptySvg';
 * @param fill - Default value: 'none';
 * @param size - Default value = 'ICON_SIZE.s'; (import { ICON_SIZE } from '@yme/atoms/svg-icon')
 * @param className - BackPort option, for make styles with 'ClassName'; Default value: 'wrap-svg',
 * @param onClick - custom event
 * @param viewBox -
 * @param dataIconType - optional property;
 *
 * @returns JSX.Element
 */
export function SVGIcon(props: TIconProps): JSX.Element {
  const {
    type,
    fill = 'none',
    pathFill,
    rectFill,
    stroke,
    sizes,
    className = 'wrap-svg',
    onClick,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    viewBox, // TODO: Need adjust this property
    dataIconType,
    children,
    order,
    iconRotate,
    title,
    isHoverEffect,
    tabIndex,
    isActive,
    keyDownHandler = noop,
    ...rest
  } = props;

  // const { correctSize, correctSizes } = getCorrectSize(size as SizeType);

  // const svgSize = correctSizes ? undefined : correctSize;
  const svgKey = `${type}-${fill}-${dataIconType}`;

  const onClickHandler = useCallback(
    (e: SyntheticEvent): void => {
      onClick && onClick(e);
    },
    [onClick],
  );

  return (
    <SVGIconStyled
      sizes={sizes}
      onClick={onClickHandler}
      className={className}
      iconRotate={iconRotate}
      order={order}
      title={title}
      tabIndex={tabIndex}
      onKeyDown={keyDownHandler}
      pathFill={pathFill}
      rectFill={rectFill}
      stroke={stroke}
      role={onClick ? 'button' : undefined}
      isButton={Boolean(onClick)}
      isHoverEffect={isHoverEffect}
      isActive={isActive}
    >
      {type ? (
        <>
          <SVG
            key={svgKey}
            src={`${type}`}
            height={sizes.h}
            className="icon-svg"
            width={sizes.w}
            {...rest}
          />
          {children && <span>{children}</span>}
        </>
      ) : (
        <SVGIconStyled
          sizes={sizes}
        />
      )}
    </SVGIconStyled>
  );
}
