import Image from "next/image";

import { Container, Navbar, SearchButton, MenuButton } from "../index";
import LogoImage from "../../public/assets/images/logo.png";

export default function Header() {
	return (
		<>
			<header className={`w-full h-[15vh] sm:h-[20vh] bg-headerBackground bg-cover bg-[center_right_35%] bg-no-repeat bg-opacity-20`}>
				<div className="w-full h-[15vh] sm:h-[20vh] bg-black bg-opacity-30">
					<Container>
						<div className="absolute top-3 left-5">
							<Image src={LogoImage} alt="Logo" />
						</div>

						<div className="mt-14 hidden sm:block">
							<Navbar direction="flex-row" />
						</div>

						<div className="hidden sm:block">
							<SearchButton />
						</div>

						<div className="block sm:hidden">
							<MenuButton />
						</div>
					</Container>
				</div>
			</header>
		</>
	);
}
