import { Header, Footer } from "../index";

interface Props {
  children: JSX.Element | JSX.Element[];
}

export default function Layout({ children }: Props) {
	return (
		<>
			<Header />
			{children}
			<Footer />
		</>
	);
}
