export interface Page {
	title: string;
	slug: string;
	description: string;
	image: string;
}

export interface HomePage {
	title: string;
	subTitle: string;
	content: string;
}

export interface HomePageData {
	homePage: HomePage;
}

export interface DestinationPage extends Page {
	distance: string;
	travelTime: string;
}

export interface CrewPage extends Page {
	name: string;
}

export interface TechPage extends Page {
	imageLandscape: string;
}
