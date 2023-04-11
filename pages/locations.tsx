import Head from "next/head";

import { LocationsMain, Layout } from "../components";

export default function Locations() {
	return (
		<>
			<Head>
				<title>Locations</title>
			</Head>

			<Layout>
				<LocationsMain textContent="this is the Locations page" />
			</Layout>
		</>
	);
}
