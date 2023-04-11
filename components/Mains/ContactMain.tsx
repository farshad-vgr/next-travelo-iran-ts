import { Container } from "../index";

interface Props {
	textContent: string;
}

export default function ContactMain({ textContent }: Props) {
	return (
		<>
			<main className="w-full min-h-[60vh] bg-red-400">
				<Container>
					<h2 className="text-2xl">{textContent}</h2>
				</Container>
			</main>
		</>
	);
}
