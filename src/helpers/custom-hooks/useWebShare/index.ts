/*
 * This file is open-source. This means that it can be reproduced in whole
 * or in part, stored in a retrieval system transmitted in any form, or by
 * any means electronic with my prior permission as an author and owner
 * Please refer to the terms of the license agreement in the root of the project
 *
 * (c) 2020 joaodias.me, No Rights Reserved.
 */

import { useState, useEffect } from "react";

import shareContent from "./share-content";

/**
 * Use native web share dialog when available
 * @param onSuccess function called on successfully sharing content
 * @param onError callback function called on error sharing content
 * @example
 * const { isSupported, isLoading, share } = useWebShare(successFn, errorFn);
 */
function useWebShare(onSuccess = () => {}, onError = () => {}) {
	const [loading, setLoading] = useState(true);
	const [isSupported, setSupport] = useState(false);

	useEffect(() => {
		if (navigator.share) {
			setSupport(true);
		} else {
			setSupport(false);
		}
		setLoading(false);
	}, [onSuccess, onError]);

	return {
		loading,
		isSupported,
		share: shareContent(onSuccess, onError),
	};
}

export default useWebShare;
