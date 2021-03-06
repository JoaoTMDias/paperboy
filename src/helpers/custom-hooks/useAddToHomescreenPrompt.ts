/*
 * This file is open-source. This means that it can be reproduced in whole
 * or in part, stored in a retrieval system transmitted in any form, or by
 * any means electronic with my prior permission as an author and owner
 * Please refer to the terms of the license agreement in the root of the project
 *
 * (c) 2020 joaodias.me, No Rights Reserved.
 */

import React, { useState, useEffect } from "react";

interface IBeforeInstallPromptEvent extends Event {
	readonly platforms: string[];
	readonly userChoice: Promise<{
		outcome: "accepted" | "dismissed";
		platform: string;
	}>;
	prompt(): Promise<void>;
}

type AddToHomescreenPromptReturn = [boolean, () => void];

export function useAddToHomescreenPrompt(): AddToHomescreenPromptReturn {
	const [isReadyToInstall, setIsReadyToInstall] = useState(false);
	const [prompt, setPrompt] = useState<IBeforeInstallPromptEvent | null>(null);

	/**
	 * Promps to install the app as a standalone web app
	 *
	 * @returns {Promise<void>}
	 */
	function promptToInstall() {
		try {
			if (prompt) {
				return prompt.prompt();
			}

			return Promise.reject(new Error('Tried installing before browser sent "beforeinstallprompt" event'));
		} catch (error) {
			return Promise.reject(new Error('Tried installing before browser sent "beforeinstallprompt" event'));
		}
	}

	useEffect(() => {
		const ready = (event: IBeforeInstallPromptEvent) => {
			// Prevent the mini-infobar from appearing on mobile
			event.preventDefault();
			setPrompt(event);
			setIsReadyToInstall(true);
		};

		window.addEventListener("beforeinstallprompt", ready as any);

		return () => {
			window.removeEventListener("beforeinstallprompt", ready as any);
		};
	}, []);

	return [isReadyToInstall, promptToInstall];
}
