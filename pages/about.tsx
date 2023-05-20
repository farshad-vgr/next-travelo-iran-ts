import Head from "next/head";

import { AboutMain } from "../components";

export default function About() {
	return (
		<>
			<Head>
				<title>About</title>
			</Head>

			<AboutMain textContent="The About page is here!" />
		</>
	);
}
