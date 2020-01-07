export interface IAuditProps {
	isOnline: boolean;
	isStandalone: boolean;
	hasAudited: boolean;
	platform: string;
	dispatch: any;
}

export interface IAuditState {
	isOnline: boolean | null;
	isStandalone: boolean;
}
