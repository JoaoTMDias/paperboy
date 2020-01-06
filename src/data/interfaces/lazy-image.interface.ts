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
