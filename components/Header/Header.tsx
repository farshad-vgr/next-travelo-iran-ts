import Image from "next/image";

import { Container, Navbar } from "../index";

import LogoImage from "../../public/assets/images/logo.png";
import { useEffect, useState } from "react";

export default function Header() {
	const [isDesktop, setIsDesktop] = useState(true);

	useEffect(() => {
		window.innerWidth < 600 ? setIsDesktop(false) : setIsDesktop(true);

		window.addEventListener("resize", () => {
			window.innerWidth < 600 ? setIsDesktop(false) : setIsDesktop(true);
		});

		return () => {
			window.removeEventListener("resize", () => {
				window.innerWidth < 600 ? setIsDesktop(false) : setIsDesktop(true);
			});
		}
	}, []);

	return (
		<>
			<header className="w-full h-[15vh] bg-slate-200">
				<Container>
					<div className="absolute top-3 left-3">
						<Image src={LogoImage} alt="Logo" />
					</div>

					<div className="mt-14">
						{isDesktop && <Navbar />}
					</div>

					<div>
						{isDesktop ? (
							<div className="flex justify-center items-center absolute top-3 right-3 w-10 h-10 mt-1 rounded-full text-base bg-red-500 text-white">
								<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-6 h-6">
									<path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
								</svg>
							</div>
						) : (
							<div className="flex justify-center items-center absolute top-3 right-3 w-10 h-10 mt-1 rounded-full text-base bg-red-500 text-white">
								<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-6 h-6">
									<path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
								</svg>
							</div>
						)}
					</div>
				</Container>
			</header>
		</>
	);
}
