import Head from "next/head";

import { ContactMain, Layout } from "../components";

export default function Contact() {
	return (
		<>
			<Head>
				<title>Contact</title>
			</Head>

			<Layout>
				<ContactMain textContent="this is the Contact page" />
			</Layout>
		</>
	);
}
