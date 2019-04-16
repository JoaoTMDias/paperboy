// Libraries
import * as React from 'react';
import { LazyImage } from 'react-lazy-images';
import styled, { keyframes, css } from 'styled-components';

// Component Prop

import { IImageLazyProps } from '../../../data/interfaces/index.interface';

/**
 * @description Lazy Loading Image Component
 * @author  João Dias
 * @date  29/December/2018 at 01:17
 * @extends {React.FunctionComponent}
 */
class LazyLoadingImage extends React.Component<IImageLazyProps> {
  static defaultProps = {
    width: `100`,
    height: `100`,
    placeholderColor: `transparent`,
    animation: `fade`,
    debounce: 250,
  };

  /**
   * @description The component only re-renders if the width, height, cover or alt are changed
   * Otherwise, it remains the same.
   * @date 2019-01-17
   * @param {IImageLazyProps} nextProps
   * @param {*} nextState
   * @returns
   * @memberof LazyLoadingImage
   */
  shoudComponentUpdate(nextProps: IImageLazyProps, nextState: any) {
    const { width, height, src, alt } = this.props;
    if (
      nextProps.width !== width ||
      nextProps.height !== height ||
      nextProps.src !== src ||
      nextProps.alt !== alt
    ) {
      return true;
    }
    return false;
  }

  /**
   * render
   */
  render() {
    const {
      id,
      className,
      width,
      height,
      src,
      srcSet,
      sizes,
      alt,
      debounce,
      placeholderColor,
      animation,
      fit,
      positionLeft,
      positionTop,
      onLoad,
      onError,
    } = this.props;

    return (
      <LazyImage
        src={src}
        srcSet={srcSet}
        sizes={sizes}
        alt={alt}
        debounceDurationMs={debounce}
        placeholder={({ imageProps, ref }) => (
          <Placeholder
            id={id}
            className={className}
            ref={ref}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            preserveAspectRatio="xMaxYMax slice"
            role="img"
            width={width}
            height={height}
          >
            <title id="placeholder-title">{imageProps.alt}</title>
            <path
              className="placeholder__background"
              fill={placeholderColor}
              d="M0 0h24v24H0z"
            />
          </Placeholder>
        )}
        actual={() => {
          return (
            <Image
              id={id}
              className={className}
              src={src}
              srcSet={srcSet}
              sizes={sizes}
              width={width}
              height={height}
              alt={alt}
              placeholderColor={placeholderColor}
              animation={animation}
              fit={fit}
              positionTop={positionTop}
              positionLeft={positionLeft}
              onLoad={onLoad}
              onError={onError}
            />
          );
        }}
      />
    );
  }
}

// Styling
const FadeInImage = keyframes`
	from {
		opacity: 0;
		filter: grayscale(100%);
	}

	to {
		opacity: 1;
		filter: grayscale(0%);
	}
`;

const ZoomImage = keyframes`
	0% {
		opacity: 0;
		transform: scale(1);
		filter: grayscale(100%);
	}

	6.6% {
		opacity: 1;
		filter: grayscale(0%);

	}

	100% {
		opacity: 1;
		transform: scale(1.1);
		filter: grayscale(0%);
	}
`;

const Image = styled.img`
  background-color: ${(props: IImageLazyProps) =>
    props.placeholderColor ? `${props.placeholderColor}` : `transparent`};
  transform: scale(1);

  ${(props: IImageLazyProps) => {
    const { animation } = props;

    if (animation) {
      switch (animation) {
        case `fade`:
          return css`
            opacity: 0;
            animation-fill-mode: forwards;
            animation-name: ${FadeInImage};
            animation-duration: 500ms;
          `;

        case `zoom`:
          return css`
            opacity: 0;
            animation-fill-mode: forwards;
            animation-name: ${ZoomImage};
            animation-duration: 15000ms;
          `;
      }
    }
  }};

  object-fit: ${(props: IImageLazyProps) => {
    if (props.fit) {
      return `${props.fit}`;
    }

    return `cover`;
  }};

  object-position: ${(props: IImageLazyProps) =>
    `${props.positionTop} ${props.positionLeft}`};
`;

const Placeholder = styled.svg`
  width: 100%;
  height: 100%;
  display: flex;
  overflow: hidden;
`;

export default LazyLoadingImage;