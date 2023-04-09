import Image from "next/image";

import { Container, Navbar, SearchButton, MenuButton } from "../index";

import LogoImage from "../../public/assets/images/logo.png";
import { useEffect, useState } from "react";

export default function Header() {
	const [isDesktop, setIsDesktop] = useState(true);
	const [headerHeight, setHeaderHeight] = useState(10);

	useEffect(() => {
		window.innerWidth < 600 ? setIsDesktop(false) : setIsDesktop(true);
		window.innerWidth < 600 ? setHeaderHeight(10) : setHeaderHeight(15);

		window.addEventListener("resize", () => {
			window.innerWidth < 600 ? setIsDesktop(false) : setIsDesktop(true);
			window.innerWidth < 600 ? setHeaderHeight(10) : setHeaderHeight(15);
		});

		return () => {
			window.removeEventListener("resize", () => {
				window.innerWidth < 600 ? setIsDesktop(false) : setIsDesktop(true);
				window.innerWidth < 600 ? setHeaderHeight(10) : setHeaderHeight(15);
			});
		}
	}, []);

	return (
		<>
			<header className={`w-full h-[${headerHeight}vh] bg-slate-200`}>
				<Container>
					<div className="absolute top-3 left-5">
						<Image src={LogoImage} alt="Logo" />
					</div>

					<div className="mt-14">{isDesktop && <Navbar />}</div>

					<div>
						{isDesktop ? (
							<SearchButton />
						) : (
							<MenuButton />
						)}
					</div>
				</Container>
			</header>
		</>
	);
}
