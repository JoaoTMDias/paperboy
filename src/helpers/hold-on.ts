/*
 * This file is open-source. This means that it can be reproduced in whole
 * or in part, stored in a retrieval system transmitted in any form, or by
 * any means electronic with my prior permission as an author and owner
 * Please refer to the terms of the license agreement in the root of the project
 *
 * (c) 2020 joaodias.me, No Rights Reserved.
 */

/**
 * Returns a promise that resolves after how many milliseconds you pass it.
 *
 * @author João Dias
 * @param {number} [amount=0]
 * @returns
 */
export function holdOn(amount = 0): Promise<NodeJS.Timeout> {
	return new Promise((resolve) => setTimeout(resolve, amount));
}

export default holdOn;
