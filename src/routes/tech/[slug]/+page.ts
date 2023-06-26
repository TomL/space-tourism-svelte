import { techPages } from '@/data';
import type { PageLoad } from './$types';
import { error } from '@sveltejs/kit';

export const load: PageLoad = ({ params }) => {
	const tech = techPages.find((t) => t.slug === params.slug);
	if (!tech) {
		throw error(404, {
			message: 'Destination Not found'
		});
	}
	return { tech, techPages };
};
