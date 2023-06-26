import { redirect } from '@sveltejs/kit';
import { destinationPages } from '@/data';

export function load() {
	if (destinationPages[0]) {
		throw redirect(301, '/destination/' + destinationPages[0].slug);
	}
}
