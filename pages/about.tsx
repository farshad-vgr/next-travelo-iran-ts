import Head from "next/head";

import { AboutMain, Layout } from "../components";

export default function About() {
	return (
		<>
			<Head>
				<title>About</title>
			</Head>

			<Layout>
				<AboutMain textContent="The About page is here!" />
			</Layout>
		</>
	);
}
