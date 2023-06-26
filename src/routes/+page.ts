import { homePage } from '@/data';
import type { PageLoad } from './$types';

// Define the load function
export const load: PageLoad = () => {
	// Return the home page data as props
	return {
		homePage
	};
};
