import { redirect } from '@sveltejs/kit';
import { techPages } from '@/data';

export function load() {
	if (techPages[0]) {
		throw redirect(301, '/tech/' + techPages[0].slug);
	}
}
