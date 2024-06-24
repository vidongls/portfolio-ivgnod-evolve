import { matchPath } from "react-router";

import { useLocation } from "react-router-dom";

export function useMatchedRoute() {
	const { pathname } = useLocation();
	for (const route of []) {
		if (matchPath({ path: route.path }, pathname)) {
			return route;
		}
	}
}
