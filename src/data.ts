import type { CrewPage, DestinationPage, HomePage, TechPage } from '@/types';

export const homePage: HomePage = {
	title: 'Space',
	subTitle: 'So, you want to travel to',
	content:
		'Let’s face it; if you want to go to space, you might as well genuinely go to outer space and \
			not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly \
			out of this world experience!'
};

export const destinationPages: DestinationPage[] = [
	{
		title: 'Moon',
		slug: 'moon',
		description:
			'See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.',
		distance: '384,400 km',
		travelTime: '3 days',
		image: '/assets/destination/image-moon.png'
	},
	{
		title: 'Mars',
		slug: 'mars',
		description:
			'Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!',
		distance: '225 mil. km',
		travelTime: '9 months',
		image: '/assets/destination/image-mars.png'
	},
	{
		title: 'Europa',
		slug: 'europa',
		description:
			'The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.',
		distance: '628 mil. km',
		travelTime: '3 years',
		image: '/assets/destination/image-europa.png'
	},
	{
		title: 'Titan',
		slug: 'titan',
		description:
			'The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.',
		distance: '1.6 bil. km',
		travelTime: '7 years',
		image: '/assets/destination/image-titan.png'
	}
];

export const crewPages: CrewPage[] = [
	{
		title: 'Commander',
		slug: 'commander',
		name: 'Douglas Hurley',
		description:
			'Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.',
		image: '/assets/crew/image-douglas-hurley.png'
	},
	{
		title: 'Mission Specialist',
		slug: 'specialist',
		name: 'Mark Shuttleworth',
		description:
			'Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.',
		image: '/assets/crew/image-mark-shuttleworth.png'
	},
	{
		title: 'Pilot',
		slug: 'pilot',
		name: 'Victor Glover',
		description:
			'Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer. ',
		image: '/assets/crew/image-victor-glover.png'
	},
	{
		title: 'Flight Engineer',
		slug: 'engineer',
		name: 'Anousheh Ansari',
		description:
			'Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space.',
		image: '/assets/crew/image-anousheh-ansari.png'
	}
];

export const techPages: TechPage[] = [
	{
		title: 'Launch vehicle',
		slug: 'vehicle',
		description:
			"A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!",
		image: '/assets/technology/image-launch-vehicle-portrait.jpg',
		imageLandscape: '/assets/technology/image-launch-vehicle-landscape.jpg'
	},
	{
		title: 'Spaceport',
		slug: 'spaceport',
		description:
			'A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.',
		image: '/assets/technology/image-spaceport-portrait.jpg',
		imageLandscape: '/assets/technology/image-spaceport-landscape.jpg'
	},
	{
		title: 'Space capsule',
		slug: 'capsule',
		description:
			"A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.",
		image: '/assets/technology/image-space-capsule-portrait.jpg',
		imageLandscape: '/assets/technology/image-space-capsule-landscape.jpg'
	}
];

export const pageOrderList = ['/'].concat(
	destinationPages.map(({ slug }) => '/destination/' + slug),
	crewPages.map(({ slug }) => '/crew/' + slug),
	techPages.map(({ slug }) => '/tech/' + slug)
);
