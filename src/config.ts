import type { Site, SocialObjects } from './types';

export const SITE: Site = {
	author: 'Gilbert Acosta',
	desc: 'Blog de desarrollo web.',
	lightAndDarkMode: true,
	ogImage: 'astropaper-og.jpg',
	postPerPage: 3,
	title: 'GisaWebDev',
	website: 'https://gisaweb.dev/',
};

export const LOGO_IMAGE = {
	enable: false,
	svg: true,
	width: 216,
	height: 46,
};

export const SOCIALS: SocialObjects = [
	{
		name: 'Github',
		href: 'https://github.com/gisawebdev',
		linkTitle: ` ${SITE.title} en Github`,
		active: true,
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
		name: 'Mail',
		href: 'mailto:gisawebdev@gmail.com',
		linkTitle: `Mandame un correo a ${SITE.title}@gmail.com`,
		active: false,
	},
	{
		name: 'Twitter',
		href: 'https://twitter.com/gisawebdev',
		linkTitle: `${SITE.title} en Twitter`,
		active: false,
	},
	{
		name: 'Twitch',
		href: 'https://www.twitch.tv/gisawebdev',
		linkTitle: `${SITE.title} en Twitch`,
		active: false,
	},
	{
		name: 'YouTube',
		href: 'https://www.youtube.com/@gisawebdev',
		linkTitle: `${SITE.title} en YouTube`,
		active: false,
	},
	{
		name: 'TikTok',
		href: 'https://www.tiktok.com/@gisawebdev',
		linkTitle: `${SITE.title} en TikTok`,
		active: false,
	},
	{
		name: 'CodePen',
		href: 'https://bongo.cat/',
		linkTitle: `${SITE.title} en CodePen`,
		active: false,
	},
	{
		name: 'Discord',
		href: 'https://bongo.cat/',
		linkTitle: `${SITE.title} en Discord`,
		active: false,
	},
];
