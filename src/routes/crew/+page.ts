import { redirect } from '@sveltejs/kit';
import { crewPages } from '@/data';

export function load() {
	if (crewPages[0]) {
		throw redirect(301, '/crew/' + crewPages[0].slug);
	}
}
