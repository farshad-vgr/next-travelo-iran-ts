import Head from "next/head";

// import loadCities from "./lib/load-cities";

// interface Props {
// 	cities: {
// 		id: number;
// 		name: string;
// 		province: string;
// 	}[];
// }

export default function Home() {
	// console.log(cities);

	return (
		<>
			<Head>
				<title>Home</title>
			</Head>

			<div style={{ minHeight: "500px" }}>This is for test HOME page(changed content)</div>
		</>
	);
}

// export async function getStaticProps() {
// 	// Fetching data from internal API route
// 	const cities = await loadCities("iran");

// 	return {
// 		props: {
// 			cities,
// 		},
// 	};
// }
