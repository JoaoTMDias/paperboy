/*
 * This file is open-source. This means that it can be reproduced in whole
 * or in part, stored in a retrieval system transmitted in any form, or by
 * any means electronic with my prior permission as an author and owner
 * Please refer to the terms of the license agreement in the root of the project
 *
 * (c) 2020 joaodias.me, No Rights Reserved.
 */

import React from "react";
import AuditProvider from "./src/containers/audit/provider";
import PreferencesProvider from "./src/containers/preferences/provider";

export default ({ element }) => {
	return (
		<PreferencesProvider>
			<AuditProvider>{element}</AuditProvider>
		</PreferencesProvider>
	);
};
