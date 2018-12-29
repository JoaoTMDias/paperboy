// Libraries
import * as React from "react";
import { LazyImage } from "react-lazy-images";

// Assets
import placeholder from "./placeholder.svg";

// Component Props
interface ILazyLoadingImageProps {
  theme?: any;
  width: string;
  height: string;
  cover: string;
  alt: string;
}

/**
 * @description Lazy Loading Image Component
 * @author  João Dias
 * @date  29/December/2018 at 01:17
 * @extends {React.SFC}
 */
const LazyLoadingImage: React.FunctionComponent<ILazyLoadingImageProps> = (props) => {
  const {
    width, height, cover, alt,
  } = props;

  return (
    <LazyImage
      src={cover}
      alt={alt}
      debounceDurationMs={250}
      placeholder={({ imageProps, ref }) => (
        <img ref={ref} src={placeholder} width={width} height={height} alt={imageProps.alt} />
      )}
      actual={({ imageProps }) => <img {...imageProps} width={width} height={height} />}
    />
  );
};

LazyLoadingImage.defaultProps = {
  width: "105",
  height: "105",
};

export default LazyLoadingImage;
