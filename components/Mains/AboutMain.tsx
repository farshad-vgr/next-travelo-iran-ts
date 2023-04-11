import { Container } from "../index";

interface Props {
	textContent: string;
}

export default function AboutMain({ textContent }: Props) {
	return (
		<>
			<main className="w-full min-h-[60vh] bg-green-400">
				<Container>
					<h2 className="text-2xl">{textContent}</h2>
				</Container>
			</main>
		</>
	);
}
