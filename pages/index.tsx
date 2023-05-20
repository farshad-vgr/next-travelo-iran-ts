import Head from "next/head";
import dynamic from "next/dynamic";

// import { loadCities } from "./lib/load-cities";

const DynamicHomeMain = dynamic(() => import("../components").then((module) => module.HomeMain), {
	loading: () => <p>HomePage is Loading...</p>,
});

export default function Home() {
	return (
		<>
			<Head>
				<title>Home</title>
			</Head>

			<DynamicHomeMain textContent="This is home page and default page" />
		</>
	);
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
