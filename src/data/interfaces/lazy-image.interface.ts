/*
 * This file is open-source. This means that it can be reproduced in whole
 * or in part, stored in a retrieval system transmitted in any form, or by
 * any means electronic with my prior permission as an author and owner
 * Please refer to the terms of the license agreement in the root of the project
 *
 * (c) 2020 joaodias.me, No Rights Reserved.
 */

export enum EImageType {
	IMAGE = "IMAGE",
	PICTURE = "PICTURE",
}

export interface IImageSourceString {
	url: string;
	density: number;
}

export interface ISourceMedia {
	type: string;
	breakpoint: number;
}

export interface IPictureSources {
	srcSet: IImageSourceString[];
	media: ISourceMedia;
}

export interface IImageLazyProps {
	id?: string;
	useNativeLazyLoading?: boolean;
	type?: EImageType;
	sources?: IPictureSources[] | null;
	className?: string;
	width?: string;
	height?: string;
	src: string;
	srcSet?: string;
	sizes?: string;
	alt: string;
	debounce?: number;
	placeholderColor?: string;
	loading?: "lazy" | "eager" | "auto";
	animation?: "fade" | "zoom" | null;
	speed?: number;
	style?: React.CSSProperties;
	fit?: string;
	positionTop?: string;
	positionLeft?: string;
	onLoad?: () => void;
	onError?: () => void;
}

export interface IBackgroundImageProps extends IImageLazyProps {
	fit?: string;
	positionTop?: string;
	positionLeft?: string;
	fixed?: boolean;
}
