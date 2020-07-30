export interface IModalProps {
	isOpen?: boolean;
	backgroundOpacity?: number;
	align?: "top" | "middle" | "bottom";
	delay?: number | null;
	close?(): void;
}
