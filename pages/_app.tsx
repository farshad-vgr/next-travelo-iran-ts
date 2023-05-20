import type { AppProps } from "next/app";
import Head from "next/head";
import Script from "next/script";
import { Roboto } from "next/font/google";
import { Layout } from "../components";

import "@/styles/globals.css";

const roboto = Roboto({
	weight: "400",
	subsets: [],
});

export default function App({ Component, pageProps }: AppProps) {
	return (
		<>
			<Head>
				<meta name="description" content="Generated by create next app" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<Layout>
				<main className={roboto.className}>
					<Component {...pageProps} />
				</main>
			</Layout>

			{/* This script plays Lottie animations */}
			<Script src="https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js"></Script>
		</>
	);
}
