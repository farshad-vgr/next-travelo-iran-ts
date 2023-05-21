import Head from "next/head";

import { loadCities } from "./lib/load-cities";

interface Props {
	cities: {
		id: number;
		name: string;
		province: string;
	}[];
}

export default function Home({ cities }: Props) {
	// console.table(cities);

	return (
		<>
			<Head>
				<title>Home</title>
			</Head>

			<div style={{ minHeight: "500px" }}>This is for test HOME page</div>
		</>
	);
}

export async function getStaticProps() {
	// Fetching data from internal API route
	const cities = await loadCities("iran");

	return {
		props: {
			cities,
		},
	};
}

// export async function getStaticProps() {
// 	// Fetching data from external API
// 	try {
// 		var users = await (await fetch("https://jsonplaceholder.typicode.com/users")).json();
// 	} catch (error) {
// 		console.log("Failed to load users: ", error);
// 	}

// 	// Fetching data from external API
// 	try {
// 		var comments = await (await fetch("https://jsonplaceholder.typicode.com/comments")).json();
// 	} catch (error) {
// 		console.log("Failed to load comments: ", error);
// 	}

// 	// Fetching data from internal API route
// 	const cities = await loadCities();

// 	return {
// 		props: {
// 			users,
// 			comments,
// 			cities,
// 		},
// 	};
// }
