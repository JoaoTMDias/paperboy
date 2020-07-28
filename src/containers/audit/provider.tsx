import React, { FunctionComponent, useState, useEffect, useCallback } from "react";
import AuditContext, { defaultAuditContext, IAuditContext } from "./context";
import { FeatureSupport } from "data/interfaces/general";

const AuditProvider: FunctionComponent = ({ children }) => {
	const [hasAudited, setHasAudited] = useState(defaultAuditContext.hasAudited);
	const [isOnline, setIsOnline] = useState(defaultAuditContext.isOnline);
	const [supports, setSupports] = useState(defaultAuditContext.supports);
	const [platform, setPlatform] = useState(defaultAuditContext.platform);
	const [isStandalone, setIsStandalone] = useState(defaultAuditContext.isStandalone);

	useEffect(() => {
		setHasAudited(true);
	}, []);

	const setOnlineStatus = useCallback(
		(status: boolean) => {
			setIsOnline(status);
		},
		[setIsOnline],
	);

	const setStandaloneStatus = useCallback(
		(status: boolean) => {
			setIsStandalone(status);
		},
		[setIsStandalone],
	);

	const setFeatureSupport = useCallback(
		(features: FeatureSupport) => {
			setSupports(features);
		},
		[setSupports],
	);

	const setUserPlatform = useCallback(
		(platform: string) => {
			setPlatform(platform);
		},
		[setPlatform],
	);

	const value: IAuditContext = {
		platform,
		hasAudited,
		isOnline,
		isStandalone,
		supports,
		setOnlineStatus,
		setStandaloneStatus,
		setFeatureSupport,
		setPlatform: setUserPlatform,
	};

	return <AuditContext.Provider value={value}>{children}</AuditContext.Provider>;
};

export default AuditProvider;
