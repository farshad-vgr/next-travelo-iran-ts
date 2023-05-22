import Head from "next/head";
import { useRouter } from "next/router";

// interface Props {
// 	cities: {
// 		id: number;
// 		name: string;
// 		province: string;
// 	}[];
// }

let basePath: string;

export default function Home() {
	// console.log(cities);
	const router = useRouter();
	basePath = router.basePath;
	console.log(router.basePath, basePath);

	return (
		<>
			<Head>
				<title>Home</title>
			</Head>

			<div style={{ minHeight: "500px" }}>This is for test HOME page</div>
		</>
	);
}

// export async function getStaticProps() {
// 	// Fetching data from internal "API route"
// 	const response =
// 		basePath === "https://fv-travelo-iran.vercel.app/"
// 			? await fetch(`https://fv-travelo-iran.vercel.app/api/cities?country=iran`)
// 			: await fetch(`http://localhost:3000/api/cities?country=iran`);
// 	// const response = await fetch(`http://localhost:3000/api/cities?country=iran`);
// 	const cities = await response.json();

// 	return {
// 		props: {
// 			cities,
// 		},
// 	};
// }
