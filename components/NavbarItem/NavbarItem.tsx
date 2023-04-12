import Link from "next/link";

interface Props {
	textColorHover: string;
	href: string;
	svgPathD1: string;
	svgPathD2: string;
	textContent: string;
}

export default function NavbarItem({ textColorHover, href, svgPathD1, svgPathD2, textContent }: Props) {
	return (
		<>
			<li className={`hover:${textColorHover} hover:underline`}>
				<Link href={href}>
					<span className="flex gap-1">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							strokeWidth={2}
							stroke="currentColor"
							className="w-5 h-5 self-center mb-1">
							<path strokeLinecap="round" strokeLinejoin="round" d={svgPathD1} />
							<path strokeLinecap="round" strokeLinejoin="round" d={svgPathD2} />
						</svg>
						{textContent}
					</span>
				</Link>
			</li>
		</>
	);
}
