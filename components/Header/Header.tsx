import { useEffect, useState } from "react";
import Image from "next/image";

import { Container, Navbar, SearchButton, MenuButton } from "../index";
import LogoImage from "../../public/assets/images/logo.png";

export default function Header() {
	const [isDesktop, setIsDesktop] = useState(true);

	useEffect(() => {
		window.innerWidth < 640 ? setIsDesktop(false) : setIsDesktop(true);

		window.addEventListener("resize", () => {
			window.innerWidth < 640 ? setIsDesktop(false) : setIsDesktop(true);
		});

		return () => {
			window.removeEventListener("resize", () => {
				window.innerWidth < 640 ? setIsDesktop(false) : setIsDesktop(true);
			});
		}
	}, []);

	return (
		<>
			<header className={`w-full h-[15vh] sm:h-[20vh] bg-headerBackground bg-cover bg-[center_right_35%] bg-no-repeat bg-opacity-20`}>
				<Container>
					<div className="absolute top-3 left-5">
						<Image src={LogoImage} alt="Logo" />
					</div>

					<div className="mt-14">{isDesktop && <Navbar direction="flex-row" textColor="text-black" />}</div>

					<div>{isDesktop ? <SearchButton /> : <MenuButton />}</div>
				</Container>
			</header>
		</>
	);
}
