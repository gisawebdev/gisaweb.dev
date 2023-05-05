import React from 'react';
import Datetime from './Datetime';
import type { BlogFrontmatter } from '@content/_schemas';

export interface Props {
	href?: string;
	frontmatter: BlogFrontmatter;
	secHeading?: boolean;
}

export default function Card({ href, frontmatter, secHeading = true }: Props) {
	const { title, pubDatetime, description } = frontmatter;
	return (
		// <li className="my-6">
		//   <a
		//     href={href}
		//     className="inline-block text-lg font-medium text-skin-accent decoration-dashed underline-offset-4 focus-visible:no-underline focus-visible:underline-offset-0"
		//   >
		//     {secHeading ? (
		//       <h2 className="text-lg font-medium decoration-dashed hover:underline">
		//         {title}
		//       </h2>
		//     ) : (
		//       <h3 className="text-lg font-medium decoration-dashed hover:underline">
		//         {title}
		//       </h3>
		//     )}
		//   </a>
		//   <Datetime datetime={pubDatetime} />
		//   <p>{description}</p>
		// </li>

		<li className="border-gray-100 bg-white max-w-[240px] overflow-hidden rounded-lg border shadow-sm">
			<img
				alt="Office"
				src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
				className="h-56 w-full object-cover"
			/>

			<div className="p-4 sm:p-6">
				<a href={href}>
					<h3 className="text-gray-900 text-lg font-medium">{title}</h3>
				</a>

				<p className="text-gray-500 mt-2 line-clamp-3 text-sm/relaxed">
					{description}
				</p>

				<Datetime datetime={pubDatetime} />
				<a
					href={href}
					className="text-blue-600 group mt-4 inline-flex items-center gap-1 text-sm font-medium"
				>
					Find out more
					<span
						aria-hidden="true"
						className="block transition-all group-hover:ms-0.5 rtl:rotate-180"
					>
						&rarr;
					</span>
				</a>
			</div>
		</li>
	);
}
