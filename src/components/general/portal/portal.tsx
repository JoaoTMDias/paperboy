/*
 * This file is open-source. This means that it can be reproduced in whole
 * or in part, stored in a retrieval system transmitted in any form, or by
 * any means electronic with my prior permission as an author and owner
 * Please refer to the terms of the license agreement in the root of the project
 *
 * (c) 2020 joaodias.me, No Rights Reserved.
 */

// Libraries
import React, { useRef, PropsWithChildren } from "react";
import { useMount, useUnmount } from "react-use";
import ReactDOM from "react-dom";

/**
 * @description Portal description

 * @date  07/January/2019 at 11:37
 * @extends {React.FC}
 */
const Portal: React.FC<PropsWithChildren<{}>> = ({ children }) => {
	const { current: element } = useRef(document.createElement("div"));
	const { current: root } = useRef<HTMLElement | null>(document.getElementById("portal"));

	useMount(() => {
		root?.appendChild(element);
	});

	useUnmount(() => {
		if (element) {
			root?.removeChild(element);
		}
	});

	if (element) {
		return ReactDOM.createPortal(children, element);
	}

	return null;
};

export default Portal;
