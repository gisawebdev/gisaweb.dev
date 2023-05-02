import type { Site, SocialObjects } from './types';

export const SITE: Site = {
	website: 'http://gisaweb.dev/',
	author: 'Gilbert Acosta',
	desc: 'Blog de desarrollo web',
	title: 'GisaWebDev | Blog de desarrollo web',
	lightAndDarkMode: true,
	ogImage: '',
	postPerPage: 3,
};

export const SOCIALS: SocialObjects = [
	{
		name: 'Github',
		href: 'https://github.com/gisawebdev',
		linkTitle: ` ${SITE.title} en Github`,
		active: true,
	},
	{
		name: 'YouTube',
		href: 'https://www.youtube.com/@gisawebdev',
		linkTitle: `${SITE.title} en YouTube`,
		active: false,
	},
	{
		name: 'Instagram',
		href: 'https://www.instagram.com/gisawebdev/',
		linkTitle: `${SITE.title} en Instagram`,
		active: true,
	},
	{
		name: 'LinkedIn',
		href: 'https://www.linkedin.com/in/gisawebdev/',
		linkTitle: `${SITE.title} en LinkedIn`,
		active: true,
	},
	{
		name: 'Twitter',
		href: 'https://twitter.com/gisawebdev',
		linkTitle: `${SITE.title} en Twitter`,
		active: true,
	},
	{
		name: 'Twitch',
		href: 'https://www.twitch.tv/gisawebdev',
		linkTitle: `${SITE.title} en Twitch`,
		active: false,
	},

	{
		name: 'TikTok',
		href: 'https://www.tiktok.com/@gisawebdev',
		linkTitle: `${SITE.title} en TikTok`,
		active: false,
	},
	{
		name: 'Facebook',
		href: '',
		linkTitle: `${SITE.title} en Facebook`,
		active: false,
	},
];
