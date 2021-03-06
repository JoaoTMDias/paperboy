/*
 * This file is open-source. This means that it can be reproduced in whole
 * or in part, stored in a retrieval system transmitted in any form, or by
 * any means electronic with my prior permission as an author and owner
 * Please refer to the terms of the license agreement in the root of the project
 *
 * (c) 2020 joaodias.me, No Rights Reserved.
 */

// Libraries
import React, { memo } from "react";
import { LazyImage } from "react-lazy-images";
import { IImageLazyProps, EImageType, IImageSourceString } from "data/interfaces/index";
import NewsSourcePlaceholder from "src/assets/images/sources/news-source-placeholder.svg";
import { Image, Placeholder, Picture } from "./styles";
import placeholderImage from "./placeholder.svg";

const DEFAULT_BASELINE_VALUE = 16;

/**
 * @description Lazy Loading Image Component

 * @date  29/December/2018 at 01:17
 * @extends {React.FunctionComponent}
 */
const LazyLoadingImage: React.FunctionComponent<IImageLazyProps> = ({
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
}) => {
	/**
	 * @description Renders the Sources Elements
	 * @author João Dias
	 * @date 2019-06-03
	 * @returns
	 * @memberof LazyLoadingImage
	 */
	function renderPictureSources() {
		const pictureSources = sources?.map(({ srcSet, media }, index: number) => {
			const mediaValue = `(${media.type}: ${media.breakpoint * DEFAULT_BASELINE_VALUE}rem)`;
			const arrayOfSrcSet: string[] = [];

			srcSet.map((set: IImageSourceString) => {
				arrayOfSrcSet.push(`${set.url} ${set.density}x`);
			});

			return <source key={`source-${index}-key`} srcSet={arrayOfSrcSet.join()} media={mediaValue} />;
		});

		return pictureSources;
	}

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
						width={width}
						height={height}
					>
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
						width={width}
						height={height}
					>
						<path className="placeholder__background" fill={placeholderColor} d="M0 0h24v24H0z" />
					</Placeholder>
				);
			}}
			actual={() => {
				if (type === EImageType.PICTURE && sources) {
					const pictureSources = renderPictureSources();

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
								onError={onError}
							/>
						</Picture>
					);
				}

				const srcUrl = src || placeholderImage;

				return (
					<Image
						id={id}
						className={className}
						src={srcUrl}
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
			error={() => {
				return (
					<Image
						id={id}
						className={className}
						src={NewsSourcePlaceholder}
						width={width}
						height={height}
						loading="lazy"
						alt={alt}
						placeholderColor={placeholderColor}
						animation={animation}
						fit={fit}
						positionTop={positionTop}
						positionLeft={positionLeft}
					/>
				);
			}}
		/>
	);
};

LazyLoadingImage.defaultProps = {
	type: EImageType.IMAGE,
	useNativeLazyLoading: false,
	sources: null,
	width: "200",
	height: "200",
	loading: "lazy",
	placeholderColor: "transparent",
	animation: "fade",
	debounce: 200,
};

export default memo(LazyLoadingImage);
