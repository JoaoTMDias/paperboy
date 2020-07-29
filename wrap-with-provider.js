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
