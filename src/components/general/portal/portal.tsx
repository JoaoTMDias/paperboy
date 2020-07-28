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
