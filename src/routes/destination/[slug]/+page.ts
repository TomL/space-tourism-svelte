import { destinationPages } from '@/data';
import type { PageLoad } from './$types';
import { error } from '@sveltejs/kit';

export const load: PageLoad = ({ params }) => {
	const destination = destinationPages.find((d) => d.slug === params.slug);
	if (!destination) {
		throw error(404, {
			message: 'Destination Not found'
		});
	}
	return { destination, destinationPages };
};
