import Head from "next/head";

import { Header, Main, Footer } from "../components";

export default function About() {
	return (
		<>
			<Head>
				<title>About Page</title>
			</Head>

			<Header />

			<Main textContent="About page is here!" />

			<Footer />
		</>
	);
}
