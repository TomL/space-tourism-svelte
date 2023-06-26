import { crewPages } from '@/data';
import type { PageLoad } from './$types';
import { error } from '@sveltejs/kit';

export const load: PageLoad = ({ params }) => {
	const crew = crewPages.find((c) => c.slug === params.slug);
	if (!crew) {
		throw error(404, {
			message: 'Destination Not found'
		});
	}
	return { crew, crewPages };
};
