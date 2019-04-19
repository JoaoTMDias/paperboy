export interface IImageLazyProps {
	id?: string;
	className?: string;
	width?: string;
	height?: string;
	src: string;
	srcSet?: string;
	sizes?: string;
	alt: string;
	debounce?: number;
	placeholderColor?: string;
	animation?: 'fade' | 'zoom' | null;
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
