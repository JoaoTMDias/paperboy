// Libraries
import * as React from "react";
import { LazyImage } from "react-lazy-images";
import styled, { keyframes, css } from "styled-components";

// Component Prop

import {
	IImageLazyProps,
	EImageType,
	IImageSourceString,
	IPictureSources,
} from "../../../data/interfaces/index.interface";

const DEFAULT_BASELINE_VALUE = 16;

/**
 * @description Lazy Loading Image Component
 * @author  João Dias
 * @date  29/December/2018 at 01:17
 * @extends {React.FunctionComponent}
 */
class LazyLoadingImage extends React.PureComponent<IImageLazyProps> {
	static defaultProps = {
		type: EImageType.IMAGE,
		useNativeLazyLoading: false,
		source: null,
		width: "200",
		height: "200",
		loading: "lazy",
		placeholderColor: "transparent",
		animation: "fade",
		debounce: 200,
	};

	/**
	 * @description Renders the Sources Elements
	 * @author João Dias
	 * @date 2019-06-03
	 * @param {IPictureSources[]} sources
	 * @returns
	 * @memberof LazyLoadingImage
	 */
	renderPictureSources(sources: IPictureSources[]) {
		const pictureSources = sources.map(({ srcSet, media }, index: number) => {
			const mediaValue = `(${media.type}: ${media.breakpoint * DEFAULT_BASELINE_VALUE}rem)`;
			const arrayOfSrcSet: string[] = [];

			srcSet.map((set: IImageSourceString) => {
				arrayOfSrcSet.push(`${set.url} ${set.density}x`);
			});

			return <source key={`source-${index}-key`} srcSet={arrayOfSrcSet.join()} media={mediaValue} />;
		});

		return pictureSources;
	}

	/**
	 * render
	 */
	render() {
		const {
			id,
			useNativeLazyLoading,
			className,
			width,
			height,
			type,
			sources,
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

		if (useNativeLazyLoading) {
			return (
				<Image
					id={id}
					className={className}
					src={src}
					srcSet={srcSet}
					sizes={sizes}
					width={width}
					height={height}
					loading="lazy"
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
		}

		return (
			<LazyImage
				src={src}
				srcSet={srcSet}
				sizes={sizes}
				alt={alt}
				debounceDurationMs={debounce}
				placeholder={({ imageProps, ref }) => {
					return (
						<Placeholder
							id={id}
							className={`${className} LazyImage-Placeholder`}
							ref={ref}
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 24 24"
							preserveAspectRatio="xMaxYMax slice"
							role="img"
							width={width}
							height={height}
						>
							<title id="placeholder-title">{imageProps.alt}</title>
							<path className="placeholder__background" fill={placeholderColor} d="M0 0h24v24H0z" />
						</Placeholder>
					);
				}}
				loading={() => {
					return (
						<Placeholder
							id={id}
							className={`${className} LazyImage-Placeholder`}
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 24 24"
							preserveAspectRatio="xMaxYMax slice"
							role="img"
							width={width}
							height={height}
						>
							<path className="placeholder__background" fill={placeholderColor} d="M0 0h24v24H0z" />
						</Placeholder>
					);
				}}
				actual={() => {
					if (type === EImageType.PICTURE && sources) {
						const pictureSources = this.renderPictureSources(sources);

						return (
							<Picture
								style={{
									width,
									height,
								}}
							>
								{pictureSources}
								<Image
									id={id}
									className={className}
									src={src}
									srcSet={srcSet}
									sizes={sizes}
									width={width}
									height={height}
									loading="lazy"
									alt={alt}
									placeholderColor={placeholderColor}
									animation={animation}
									fit={fit}
									positionTop={positionTop}
									positionLeft={positionLeft}
									onLoad={onLoad}
								/>
							</Picture>
						);
					}

					return (
						<Image
							id={id}
							className={className}
							src={src}
							srcSet={srcSet}
							sizes={sizes}
							width={width}
							height={height}
							loading="lazy"
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
		opacity: 0.1;
	}

	to {
		opacity: 1;
	}
`;

const ZoomImage = keyframes`
	0% {
		opacity: 0;
		transform: scale(1);
	}

	6.6% {
		opacity: 1;

	}

	100% {
		opacity: 1;
		transform: scale(1.1);
	}
`;

const Image = styled.img`
	background-color: ${(props: IImageLazyProps) =>
		props.placeholderColor ? `${props.placeholderColor}` : "transparent"};

	${(props: IImageLazyProps) => {
		const { animation, speed } = props;

		if (animation) {
			const duration = speed ? `${speed}ms` : "128ms";
			switch (animation) {
				case "zoom":
					return css`
						opacity: 0;
						transform: scale(1);

						animation-fill-mode: forwards;
						animation-name: ${ZoomImage};
						animation-duration: 15000ms;
					`;

				default:
				case "fade":
					return css`
						opacity: 0;
						animation-fill-mode: forwards;
						animation-name: ${FadeInImage};
						animation-duration: ${`${duration}`};
					`;
			}
		}

		return null;
	}};

	object-fit: ${(props: IImageLazyProps) => {
		if (props.fit) {
			return `${props.fit}`;
		}

		return "cover";
	}};

	object-position: ${(props: IImageLazyProps) => `${props.positionTop} ${props.positionLeft}`};
`;

const Picture = styled.picture`
	width: 100%;
	height: auto;
	position: relative;
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
`;

const Placeholder = styled.svg`
	width: 100%;
	height: 100%;
	display: flex;
	overflow: hidden;
`;

export default LazyLoadingImage;
