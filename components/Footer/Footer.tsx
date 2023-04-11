import { Container } from "../index";

export default function Footer() {
	return (
		<>
			<footer className="w-full h-[40rem] bg-footerBackground bg-cover bg-[center_left_35%] bg-no-repeat">
				<div className="w-full h-[40rem] text-white bg-black bg-opacity-30">
					<Container>
						<h1 className="text-2xl">This is my Footer section</h1>
					</Container>
				</div>
			</footer>
		</>
	);
}
