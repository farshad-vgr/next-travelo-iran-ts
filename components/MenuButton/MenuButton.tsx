export default function MenuButton() {
	return (
		<>
			<div className="flex justify-center items-center absolute top-3 right-3 w-10 h-10 mt-1 rounded-full text-base bg-red-500 text-white">
				<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-6 h-6">
					<path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
				</svg>
			</div>
		</>
	);
}
