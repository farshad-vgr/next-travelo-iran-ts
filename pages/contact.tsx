import Head from "next/head";

import { ContactMain } from "../components";

export default function Contact() {
	return (
		<>
			<Head>
				<title>Contact</title>
			</Head>

			<ContactMain textContent="this is the Contact page" />
		</>
	);
}
