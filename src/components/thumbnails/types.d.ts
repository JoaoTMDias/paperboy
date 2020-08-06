/*
 * This file is open-source. This means that it can be reproduced in whole
 * or in part, stored in a retrieval system transmitted in any form, or by
 * any means electronic with my prior permission as an author and owner
 * Please refer to the terms of the license agreement in the root of the project
 *
 * (c) 2020 joaodias.me, No Rights Reserved.
 */

import { INewsArticleItem, IBasePageProps } from "data/interfaces/index";

export enum EThumbnailType {
	LARGE = "LARGE",
	SAVED = "SAVED",
	SMALL = "SMALL",
}

export interface IArticleThumbnailProps extends IBasePageProps {
	id: string;
	options: INewsArticleItem;
	type?: EThumbnailType;
}
