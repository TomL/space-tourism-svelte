// since there's no dynamic data here, we can prerender
// it so that it gets served as a static asset in production
export const prerender = true;

export interface Url {
	pathname: string;
	query?: Record<string, string>;
	params?: Record<string, string>;
}

export function load({ url }: { url: Url }) {
	return {
		url
	};
}
