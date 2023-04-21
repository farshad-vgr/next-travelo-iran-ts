export default function Custom404() {
	return (
		<>
			<section className="flex flex-col justify-center items-center w-[100vw] h-[100vh] text-2xl tracking-widest uppercase">
				<lottie-player
					src="https://assets5.lottiefiles.com/packages/lf20_suhe7qtm.json"
					style={{ width: "20rem", height: "20rem" }}
					background="transparent"
					speed="2"
					loop
					autoplay></lottie-player>

				<h2>
					An <span className="text-red-500 font-bold">Error</span> occurred, Try again!
				</h2>
			</section>
		</>
	);
}