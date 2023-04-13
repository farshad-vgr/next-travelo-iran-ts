import Head from 'next/head';

import { HomeMain, Layout } from "../components";

export default function Home() {
  return (
		<>
			<Head>
				<title>Home</title>
			</Head>

			<Layout>
				<HomeMain textContent="This is home page and default page" />
			</Layout>
		</>
	);
}
