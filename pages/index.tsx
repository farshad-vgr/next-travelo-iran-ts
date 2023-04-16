import Head from 'next/head';
import dynamic from "next/dynamic";

import { Layout } from "../components";

const DynamicHomeMain = dynamic(() => import("../components").then((module) => module.HomeMain), {
	loading: () => <p>Home is Loading...</p>,
});

export default function Home() {
  return (
		<>
			<Head>
				<title>Home</title>
			</Head>

			<Layout>
				<DynamicHomeMain textContent="This is home page and default page" />
			</Layout>
		</>
	);
}
