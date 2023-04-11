import type { Site, SocialObjects } from './types';

export const SITE: Site = {
	website: 'http://gisaweb.dev/',
	author: 'Gilbert Acosta',
	desc: 'Blog de desarrollo web',
	title: 'GisaWebDev | Blog de desarrollo web',
	lightAndDarkMode: true,
	ogImage: '',
	postPerPage: 0,
};

export const SOCIALS: SocialObjects = [
	{
		name: 'Github',
		href: 'https://github.com/satnaing/astro-paper',
		linkTitle: ` ${SITE.title} on Github`,
		active: true,
	},
	{
		name: 'Facebook',
		href: 'https://github.com/satnaing/astro-paper',
		linkTitle: `${SITE.title} on Facebook`,
		active: true,
	},
	{
		name: 'Instagram',
		href: 'https://github.com/satnaing/astro-paper',
		linkTitle: `${SITE.title} on Instagram`,
		active: true,
	},
	{
		name: 'LinkedIn',
		href: 'https://github.com/satnaing/astro-paper',
		linkTitle: `${SITE.title} on LinkedIn`,
		active: true,
	},
	{
		name: 'Twitter',
		href: 'https://github.com/satnaing/astro-paper',
		linkTitle: `${SITE.title} on Twitter`,
		active: false,
	},
	{
		name: 'Twitch',
		href: 'https://github.com/satnaing/astro-paper',
		linkTitle: `${SITE.title} on Twitch`,
		active: false,
	},
	{
		name: 'YouTube',
		href: 'https://github.com/satnaing/astro-paper',
		linkTitle: `${SITE.title} on YouTube`,
		active: false,
	},

	{
		name: 'TikTok',
		href: 'https://github.com/satnaing/astro-paper',
		linkTitle: `${SITE.title} on TikTok`,
		active: false,
	},
];
