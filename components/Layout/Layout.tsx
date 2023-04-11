import { Header, Footer } from "../index";

interface Props {
  children: JSX.Element | JSX.Element[];
}

export default function Layout({ children }: Props) {
	return (
		<section className="relative">
			<Header />
			{children}
			<Footer />
		</section>
	);
}
