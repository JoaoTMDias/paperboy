/*
 * This file is open-source. This means that it can be reproduced in whole
 * or in part, stored in a retrieval system transmitted in any form, or by
 * any means electronic with my prior permission as an author and owner
 * Please refer to the terms of the license agreement in the root of the project
 *
 * (c) 2020 joaodias.me, No Rights Reserved.
 */

import React, { FunctionComponent, useState, useEffect, useCallback } from "react";
import { FeatureSupport } from "data/interfaces/general";
import AuditContext, { defaultAuditContext, IAuditContext } from "./context";

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
