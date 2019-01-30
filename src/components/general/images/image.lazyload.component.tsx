// Libraries
import * as React from 'react';
import { LazyImage } from 'react-lazy-images';
import styled, { css, keyframes } from 'styled-components';

// Component Props
interface ILazyLoadingImageProps {
  theme?: any;
  width?: string;
  height?: string;
  src: string;
  alt: string;
  placeholderColor?: string;
  animated?: boolean;
}

/**
 * @description Lazy Loading Image Component
 * @author  João Dias
 * @date  29/December/2018 at 01:17
 * @extends {React.FunctionComponent}
 */
class LazyLoadingImage extends React.Component<ILazyLoadingImageProps> {
  static defaultProps = {
    width: '105',
    height: '105',
    placeholderColor: '#d2d2d4',
    animated: false,
  };

  /**
   * @description The component only re-renders if the width, height, cover or alt are changed
   * Otherwise, it remains the same.
   * @date 2019-01-17
   * @param {ILazyLoadingImageProps} nextProps
   * @param {*} nextState
   * @returns
   * @memberof LazyLoadingImage
   */
  shoudComponentUpdate(nextProps: ILazyLoadingImageProps, nextState: any) {
    const { width, height, src, alt } = this.props;
    if (
      nextProps.width !== width ||
      nextProps.height !== height ||
      nextProps.src !== src ||
      nextProps.alt !== alt
    ) {
      return true;
    } else {
      return false;
    }
  }

  /**
   * render
   */
  public render() {
    const { width, height, src, alt, placeholderColor, animated } = this.props;

    return (
      <LazyImage
        src={src}
        alt={alt}
        debounceDurationMs={250}
        placeholder={({ imageProps, ref }) => (
          <Placeholder
            ref={ref}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            className="image__placeholder"
            preserveAspectRatio="xMaxYMax slice"
            role="image"
            width={width}
            height={height}
          >
            <title id="placeholder-title">{imageProps.alt}</title>
            <path fill="#e0e0e1" d="M0 0h24v24H0z" />
            <path
              fill="#d2d2d4"
              fillRule="evenodd"
              d="M7.38 6.94a1.32 1.32 0 0 0-1 .4 1.35 1.35 0 0 0-.41 1v2.76a1.34 1.34 0 0 0 .41 1 1.32 1.32 0 0 0 1 .4H9a.68.68 0 0 1 .69.69v.23a1.84 1.84 0 0 1-1.84 1.85h-.47a.45.45 0 0 0-.33.14.44.44 0 0 0-.13.32v.93a.44.44 0 0 0 .13.32.45.45 0 0 0 .33.14h.46a3.64 3.64 0 0 0 1.42-.29 3.76 3.76 0 0 0 1.18-.83 4 4 0 0 0 .79-1.18 3.74 3.74 0 0 0 .29-1.44V8.32a1.38 1.38 0 0 0-.4-1 1.34 1.34 0 0 0-1-.4zM13.84 6.9a1.4 1.4 0 0 0-1.4 1.39v2.78a1.38 1.38 0 0 0 1.4 1.39h1.62a.67.67 0 0 1 .49.21.68.68 0 0 1 .2.49v.23a1.84 1.84 0 0 1-1.85 1.85h-.46a.48.48 0 0 0-.47.47v.92a.48.48 0 0 0 .47.47h.46a3.57 3.57 0 0 0 1.44-.3 3.66 3.66 0 0 0 2-2 3.57 3.57 0 0 0 .3-1.44V8.29a1.4 1.4 0 0 0-1.42-1.39z"
            />
          </Placeholder>
        )}
        actual={() => {
          return (
            <Image
              className="image"
              src={src}
              width={width}
              height={height}
              alt={alt}
              placeholderColor={placeholderColor}
              animated={animated}
              cover={src}
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

const Image = styled.img`
  background-color: ${(props: ILazyLoadingImageProps) =>
    props.placeholderColor ? `${props.placeholderColor}` : `transparent`};

  ${(props: ILazyLoadingImageProps) =>
    props.animated &&
    css`
      opacity: 0;
      animation-fill-mode: forwards;
      animation-name: ${FadeInImage};
      animation-duration: 500ms;
    `};
`;

const Placeholder = styled.svg`
  width: 100%;
  height: 100%;
  display: flex;
  overflow: hidden;
`;

export default LazyLoadingImage;
