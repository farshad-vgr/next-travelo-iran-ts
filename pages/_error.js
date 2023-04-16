function Error({ statusCode }) {
	return (
		<>
			<section className="flex flex-col justify-center items-center w-[100vw] h-[100vh] text-2xl tracking-widest uppercase">
				{statusCode === 404 ? (
					<lottie-player
						src="https://assets5.lottiefiles.com/packages/lf20_suhe7qtm.json"
						style={{ width: "20rem", height: "20rem" }}
						background="transparent"
						speed="2"
						loop
						autoplay></lottie-player>
				) : (
					<lottie-player
						src="https://assets5.lottiefiles.com/packages/lf20_pNx6yH.json"
						style={{ width: "20rem", height: "20rem" }}
						background="transparent"
						speed="2"
						loop
						autoplay></lottie-player>
				)}
				{statusCode ? (
					<h2>
						An <span className="text-red-500 font-bold">Error</span> occurred on server, Try again!
					</h2>
				) : (
					<h2>
						An <span className="text-red-500 font-bold">Error</span> occurred on your browser, Try again!
					</h2>
				)}
			</section>
		</>
	);
}

Error.getInitialProps = ({ res, err }) => {
	const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
	return { statusCode };
};

export default Error;
