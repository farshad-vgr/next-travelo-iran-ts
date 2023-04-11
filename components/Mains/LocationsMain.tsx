import { Container } from "../index";

interface Props {
	textContent: string;
}

export default function LocationsMain({ textContent }: Props) {
	return (
		<>
			<main className="w-full min-h-[60vh] bg-orange-400">
				<Container>
					<h2 className="text-2xl">{textContent}</h2>
				</Container>
			</main>
		</>
	);
}
