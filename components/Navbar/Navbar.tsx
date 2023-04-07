import Link from "next/link";

export default function Navbar() {
	return (
		<>
			<nav>
				<ul id="menu" className="flex gap-24 text-xl">
					<li className="hover:text-blue-400 hover:underline">
						<Link href="/">Home</Link>
					</li>
					<li className="hover:text-blue-400 hover:underline">
						<Link href="/locations">Locations</Link>
					</li>
					<li className="hover:text-blue-400 hover:underline">
						<Link href="/about">About</Link>
					</li>
					<li className="hover:text-blue-400 hover:underline">
						<Link href="/contact">Contact</Link>
					</li>
				</ul>
			</nav>
		</>
	);
}
