import Head from "next/head";

import { Header, Main, Footer } from "../components";

export default function Products() {
	return (
		<>
			<Head>
				<title>Products Page</title>
			</Head>

			<Header />

			<Main textContent="this is products page" />

			<Footer />
		</>
	);
}
