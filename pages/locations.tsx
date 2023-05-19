import Head from "next/head";
import dynamic from "next/dynamic";

import { Layout } from "../components";

const DynamicLocationsMain = dynamic(() => import("../components").then((module) => module.LocationsMain), {
	loading: () => <p>Locations are Loading...</p>,
});

export default function Locations() {
	return (
		<>
			<Head>
				<title>Locations</title>
			</Head>

			<DynamicLocationsMain textContent="this is the Locations page" />
		</>
	);
}
